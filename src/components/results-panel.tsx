'use client'; import { Card } from '@/components/ui/card'; import { Badge } from '@/components/ui/badge'; import { Button } from '@/components/ui/button'; import { FileDown, CheckCircle2, AlertTriangle } from 'lucide-react';
export default function ResultsPanel({data}:{data:any}){
  const download=(content:string,name:string)=>{const blob=new Blob([content],{type:'text/plain'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=name; a.click(); URL.revokeObjectURL(url);}
  return (<div className="space-y-6">
    <Card className="p-6"><div className="flex items-center justify-between gap-3">
      <div><h2 className="text-xl font-semibold">{data.file_name}</h2><p className="text-ink-700">Service date: {data.service_date} · Total: €{data.total_eur.toFixed(2)}</p></div>
      <Button onClick={()=>download(data.appeal.body,'claim_draft.txt')}><FileDown className="mr-2 h-4 w-4"/> Download claim draft</Button>
    </div></Card>
    <Card className="p-6"><h3 className="text-lg font-semibold mb-4">Line items (GOÄ)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {data.line_items.map((it:any,i:number)=>(<div key={i} className="rounded-xl border border-ink-200 p-4 bg-white"><div className="flex items-center justify-between"><div className="font-medium">{it.desc}</div><div className="font-semibold">€{it.total.toFixed(2)}</div></div><div className="text-sm text-ink-700 mt-1">Ziffer {it.code} · Einfachsatz €{it.base.toFixed(2)} · Faktor {it.factor} · Betrag €{(it.base*it.factor).toFixed(2)}</div></div>))}
      </div>
    </Card>
    <Card className="p-6"><h3 className="text-lg font-semibold mb-3">Flags</h3>
      <div className="space-y-2">{data.flags.map((f:any,i:number)=>(<div key={i} className="flex items-center gap-2">{f.severity==='warn'?<AlertTriangle className="h-4 w-4 text-warn"/>:<CheckCircle2 className="h-4 w-4 text-success"/>}<Badge className="capitalize">{f.severity}</Badge><span className="text-ink-800">{f.message}</span></div>))}</div>
      <p className="text-xs text-ink-700 mt-4">Based on §12 GOÄ fields & common factor rules. Demo only.</p>
    </Card>
  </div>);
}
