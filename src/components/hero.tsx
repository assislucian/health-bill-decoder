import { Button } from "@/components/ui/button"; import Link from "next/link";
export default function Hero(){
  return (<section className="container py-16">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold">Understand & Claim Your Private Medical Reimbursements</h1>
        <p className="mt-4 text-ink-700">Upload a bill. We explain GOÄ line‑items, flag issues, and draft a claim in minutes.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/upload"><Button>Try the demo</Button></Link>
          <Link href="/dashboard"><Button variant="outline">View my uploads</Button></Link>
        </div>
      </div>
      <div className="card h-[320px] flex items-center justify-center">Live preview of a parsed bill</div>
    </div></section>);
}
