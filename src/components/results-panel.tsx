'use client';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDown, CheckCircle2, AlertTriangle } from "lucide-react";
import { validateGoae, estimateSavings } from "@/lib/goae";
import { buildClaimLetter } from "@/lib/templater";

function getSettings(){
  if(typeof window === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem('hbd_settings')||'{}'); } catch { return {}; }
}

export default function ResultsPanel({ data }: { data:any }) {
  const flags = validateGoae(data.line_items, { hasReceiptForOutlays: false });
  const savings = estimateSavings(flags);
  const highlights = flags.map(f=>f.message);

  const letter = buildClaimLetter({
    settings: getSettings(),
    fileName: data.file_name,
    serviceDate: data.service_date,
    total: data.total_eur,
    highlights
  });

  const download = (content:string, name:string) => {
    const blob = new Blob([content], {type:"text/plain"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = name; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-ink-900">{data.file_name}</h2>
            <p className="text-ink-700">Service date: {data.service_date} · Total: €{data.total_eur.toFixed(2)}</p>
            {savings > 0 && <p className="text-success font-medium mt-2">Estimated recoverable amount: €{savings.toFixed(2)}</p>}
          </div>
          <div className="flex gap-2">
            <Button onClick={()=>download(letter, "claim_letter.txt")}>
              <FileDown className="mr-2 h-4 w-4"/> Download claim letter
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-ink-900 mb-4">Line items (GOÄ)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.line_items.map((it:any, i:number)=>(
            <div key={i} className="rounded-xl border border-ink-200 p-4 bg-white">
              <div className="flex items-center justify-between">
                <div className="font-medium text-ink-900">{it.desc}</div>
                <div className="text-ink-900 font-semibold">€{it.total.toFixed(2)}</div>
              </div>
              <div className="text-sm text-ink-700 mt-1">
                Ziffer {it.code} · Einfachsatz €{it.base.toFixed(2)} · Faktor {it.factor} · Betrag €{(it.base*it.factor).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-ink-900 mb-3">Validation & Flags</h3>
        <div className="space-y-2">
          {flags.map((f:any, i:number)=>(
            <div key={i} className="flex items-center gap-2">
              {f.severity === "warn" ? <AlertTriangle className="h-4 w-4 text-warn"/> : <CheckCircle2 className="h-4 w-4 text-success"/>}
              <Badge className="capitalize">{f.severity}</Badge>
              <span className="text-ink-800">{f.message}{f.estimate_eur ? ` (est. €${f.estimate_eur.toFixed(2)})` : ''}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-ink-700 mt-4">
          Demo validator. Confirm with insurer/doctor; not legal advice.
        </p>
      </Card>
    </div>
  )
}
