'use client';
import Header from '@/components/header'; import Footer from '@/components/footer';
import FileDrop from '@/components/file-drop'; import ResultsPanel from '@/components/results-panel';
import { useState } from 'react';

export default function Upload(){
  const [result, setResult] = useState<any|null>(null);
  return (<main>
    <Header/>
    <section className='container py-10'>
      <h1 className='text-3xl font-semibold mb-6'>Upload your bill</h1>
      {!result && <FileDrop onParsed={setResult}/>}
      {result && <ResultsPanel data={result}/>}
    </section>
    <Footer/>
  </main>);
}
