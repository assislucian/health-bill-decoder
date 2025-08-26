export type LineItem = { code:string; desc:string; base:number; factor:number; total:number };
export type Flag = { severity:'info'|'warn'|'error'; message:string; estimate_eur?:number };

export const GOAE_BASE: Record<string, number> = { '1':4.66,'3':10.72,'5':4.66,'330':26.80 };

// Allowed factor ranges (illustrative; tighten with real table later)
const FACTOR_MAX: Record<string, number> = { '1':3.5, '3':3.5, '5':3.5, '330':3.5 };

export function validateGoae(items: LineItem[], opts?: { hasReceiptForOutlays?: boolean }): Flag[] {
  const flags: Flag[] = [];
  // §12 required fields check (mocked based on items)
  if(!items.length) flags.push({ severity:'error', message:'No line items found (invoice must include positions with GOÄ number).' });

  // factor range check
  for(const it of items){
    const max = FACTOR_MAX[it.code] ?? 3.5;
    if(it.factor > max){
      const over = it.factor - max;
      const estimate = over * it.base; // naive estimate of overcharge difference per Einfachsatz step
      flags.push({ severity:'warn', message:`Faktor ${it.factor.toFixed(2)} für Ziffer ${it.code} scheint über üblichen Grenzen (${max}×).`, estimate_eur: Math.round(estimate*100)/100 });
    }
    if(!GOAE_BASE[it.code] && it.code !== 'M999'){
      flags.push({ severity:'info', message:`Unbekannte Ziffer ${it.code}.` });
    }
  }

  // §10 outlays > 25,56 € need receipt
  const outlay = items.find(i => i.code === 'M999');
  if(outlay && outlay.total > 25.56 && !opts?.hasReceiptForOutlays){
    flags.push({ severity:'warn', message:'Auslage über 25,56 € ohne Beleg angegeben (§10/§12 GOÄ).', estimate_eur:  outlay.total });
  }

  // duplicate detection
  const seen = new Set<string>();
  for(const it of items){
    const key = `${it.code}-${it.total.toFixed(2)}`;
    if(seen.has(key)){
      flags.push({ severity:'warn', message:`Mögliche doppelte Position: Ziffer ${it.code} mit gleichem Betrag.` , estimate_eur: it.total });
    } else {
      seen.add(key);
    }
  }

  return flags;
}

export function estimateSavings(flags: Flag[]): number {
  return flags.reduce((s,f)=>s + (f.estimate_eur || 0), 0);
}
