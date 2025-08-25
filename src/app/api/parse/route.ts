import { NextRequest, NextResponse } from "next/server";
const GOAE_BASE: Record<string, number> = { "1": 4.66, "3": 10.72, "5": 4.66, "330": 26.80 };
function calc(code:string, factor:number){ const base=GOAE_BASE[code] ?? 10.00; const total=base*factor; return { base, factor, total }; }
export async function POST(req: NextRequest){
  const form = await req.formData();
  const file = form.get("file") as File | null;
  const name = file?.name || "arztrechnung.pdf";
  const items = [
    { code:"1",  desc:"Ärztliche Beratung, auch telefonisch", ...calc("1", 2.3) },
    { code:"3",  desc:"Eingehende Beratung (≥10 Min)", ...calc("3", 2.3) },
    { code:"330",desc:"Beispielhafte technische Leistung", ...calc("330", 2.3) },
    { code:"M999",desc:"Auslage nach §10 GOÄ (Beleg beifügen, wenn > 25,56 €)", base: 28.50, factor: 1.0, total: 28.50 }
  ];
  const flags = [
    { severity: "info", message: "Standardfaktor 2,3 angewendet (durchschnittlicher Aufwand)." },
    { severity: "warn", message: "Auslage M999 > 25,56 € — Beleg/Nachweis sollte beigefügt sein (§12 Abs.2 GOÄ)." }
  ];
  const payload = {
    file_name: name, service_date: new Date().toISOString().slice(0,10),
    total_eur: items.reduce((s,i)=>s+i.total,0), line_items: items, flags,
    appeal: { title:"Entwurf Reklamations-/Kostenerstattungs-Schreiben", body:`Sehr geehrte Damen und Herren,\n\nich beantrage die Erstattung der beigefügten Arztrechnung. Bitte prüfen Sie insbesondere die Position M999 (Auslagenbeleg). Für Ziffer 3 wurde der Faktor 2,3 angesetzt.\n\nMit freundlichen Grüßen\n—` }
  };
  return NextResponse.json(payload);
}
