import * as React from "react"; import { clsx } from "clsx";
export function Button({ className, variant="primary", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: "primary"|"outline"|"ghost"}){
  const base="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition";
  const v={primary:"bg-brand-600 text-white hover:bg-brand-700 shadow-soft",outline:"border border-ink-200 text-ink-900 bg-white hover:bg-ink-100",ghost:"text-ink-900 hover:bg-ink-100"} as const;
  return <button className={clsx(base, v[variant], className)} {...props}/>;
}
