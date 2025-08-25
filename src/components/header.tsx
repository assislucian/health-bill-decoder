import Link from "next/link"; import { Button } from "@/components/ui/button";
export default function Header(){
  return (<header className="bg-white border-b border-ink-200 sticky top-0 z-10">
    <div className="container py-4 flex items-center justify-between">
      <Link href="/" className="font-semibold">Health‑Bill Decoder</Link>
      <nav className="flex items-center gap-4">
        <Link className="link" href="/upload">Upload</Link>
        <Link className="link" href="/dashboard">Dashboard</Link>
        <Link href="/account"><Button variant="outline">Account</Button></Link>
      </nav>
    </div></header>);
}
