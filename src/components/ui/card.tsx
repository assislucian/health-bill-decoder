import * as React from 'react'; import { clsx } from 'clsx'; export function Card({className,...p}:React.HTMLAttributes<HTMLDivElement>){return <div className={clsx('card p-6',className)} {...p}/>}
