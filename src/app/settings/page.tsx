'use client';
import Header from '@/components/header'; import Footer from '@/components/footer';
import { Card } from '@/components/ui/card'; import { Input } from '@/components/ui/input'; import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Settings(){
  const [form,setForm] = useState<any>({lang:'de'});
  useEffect(()=>{try{const s=localStorage.getItem('hbd_settings'); if(s) setForm(JSON.parse(s));}catch{}},[]);
  const save=()=>{localStorage.setItem('hbd_settings', JSON.stringify(form)); alert('Saved locally');}
  return (<main>
    <Header/>
    <section className='container py-10'>
      <Card className='max-w-2xl'>
        <h1 className='text-2xl font-semibold mb-4'>Settings</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div><label className='text-sm'>Full name</label><Input value={form.fullName||''} onChange={e=>setForm({...form,fullName:e.target.value})}/></div>
          <div><label className='text-sm'>Policy #</label><Input value={form.policy||''} onChange={e=>setForm({...form,policy:e.target.value})}/></div>
          <div className='md:col-span-2'><label className='text-sm'>Address</label><Input value={form.address||''} onChange={e=>setForm({...form,address:e.target.value})}/></div>
          <div><label className='text-sm'>Insurer</label><Input value={form.insurer||''} onChange={e=>setForm({...form,insurer:e.target.value})}/></div>
          <div><label className='text-sm'>IBAN (optional)</label><Input value={form.iban||''} onChange={e=>setForm({...form,iban:e.target.value})}/></div>
          <div><label className='text-sm'>Language (de/en)</label><Input value={form.lang||'de'} onChange={e=>setForm({...form,lang:e.target.value as any})}/></div>
        </div>
        <div className='mt-6'><Button onClick={save}>Save</Button></div>
      </Card>
    </section>
    <Footer/>
  </main>);
}
