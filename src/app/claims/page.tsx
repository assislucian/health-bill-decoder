'use client';
import Header from '@/components/header'; import Footer from '@/components/footer';
import { Card } from '@/components/ui/card';
const MOCK=[
  {id:'c1', file:'arztrechnung_1234.pdf', status:'submitted', insurer:'Allianz', last_update:'2025-08-24'},
  {id:'c2', file:'rezept_0715.pdf', status:'draft', insurer:'Debeka', last_update:'2025-08-22'}
];
export default function Claims(){
  return (<main>
    <Header/>
    <section className='container py-10'>
      <h1 className='text-3xl font-semibold mb-6'>Claims</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {MOCK.map(c=>(<Card key={c.id}>
          <div className='flex items-center justify-between'>
            <div>
              <div className='font-medium'>{c.file}</div>
              <div className='text-sm text-ink-700'>{c.insurer} · updated {new Date(c.last_update).toLocaleDateString()}</div>
            </div>
            <span className='text-ink-700'>{c.status}</span>
          </div>
        </Card>))}
      </div>
    </section>
    <Footer/>
  </main>);
}
