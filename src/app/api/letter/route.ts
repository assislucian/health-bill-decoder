import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest){
  const data = await req.json();
  const txt = `To: ${data.insurer || 'Insurer'}\nPolicy: ${data.policy || '-'}\nFrom: ${data.name || '-'}\n\nSubject: Reimbursement request for ${data.file}\n\nDear Sir/Madam,\nI request reimbursement for the attached invoice (service date: ${data.date}).\nNotes:\n- ${(data.highlights||[]).join('\n- ')}\n\nTotal: €${(data.total||0).toFixed(2)}\n\nRegards,`;
  return new NextResponse(txt, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
