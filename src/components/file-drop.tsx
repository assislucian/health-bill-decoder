'use client';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

export default function FileDrop({ onParsed }:{ onParsed:(d:any)=>void }){
  const [isOver,setIsOver] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState<string|null>(null);
  const inputRef = useRef<HTMLInputElement|null>(null);

  const handleFiles = async (files: FileList | null) => {
    const file = files?.[0]; if(!file) return;
    setIsLoading(true); setError(null);
    try{
      const body=new FormData(); body.append('file',file);
      const res=await fetch('/api/parse',{method:'POST',body});
      if(!res.ok) throw new Error('Parse failed');
      const json=await res.json();
      onParsed(json);
    }catch(e:any){ setError(e.message||'Failed to parse'); }
    finally{ setIsLoading(false); }
  };

  return (
    <div
      className={`card p-8 text-center transition border-2 border-dashed ${isOver?'border-brand-500 bg-brand-50':'border-ink-200'}`}
      onDragOver={(e)=>{e.preventDefault(); setIsOver(true);}}
      onDragLeave={()=>setIsOver(false)}
      onDrop={(e)=>{ e.preventDefault(); setIsOver(false); handleFiles(e.dataTransfer.files); }}
      onClick={()=>inputRef.current?.click()}
      role="button"
      aria-label="Upload PDF"
      tabIndex={0}
    >
      <input ref={inputRef} type="file" accept="application/pdf" className="hidden" onChange={(e)=>handleFiles(e.target.files)}/>
      <p className="text-ink-700">Drop your medical bill PDF here or click to select</p>
      <div className="mt-4"><Button disabled={isLoading}>{isLoading?'Parsing...':'Upload PDF'}</Button></div>
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
}
