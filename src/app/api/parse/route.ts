import { NextRequest, NextResponse } from "next/server";
const GOAE_BASE: Record<string, number> = { "1": 4.66, "3": 10.72, "5": 4.66, "330": 26.80 };
function calc(code:string, factor:number){ const base=GOAE_BASE[code] ?? 10.00; const total=base*factor; return { base, factor, total }; }
export async function POST(req: NextRequest){
  const form = await req.formData();
  const file = form.get("file") as File | null;
  const name = file?.name || "arztrechnung.pdf";
  const items = [
    { code:"1",  desc:"Ärztliche Beratung, auch telefonisch", ...calc("1", 2.3) },
    { code:"3",  desc:"Eingehende Beratung (≥10 Min)", ...calc("3", 3.8) }, // intentionally high factor to show warning
    { code:"330",desc:"Beispielhafte technische Leistung", ...calc("330", 2.3) },
    { code:"M999",desc:"Auslage nach §10 GOÄ (Beleg beifügen, wenn > 25,56 €)", base: 48.90, factor: 1.0, total: 48.90 } // trigger receipt warning
  ];
  const payload = {
    file_name: name, service_date: new Date().toISOString().slice(0,10),
    total_eur: items.reduce((s,i)=>s+i.total,0), line_items: items
  };
  return NextResponse.json(payload);
}
