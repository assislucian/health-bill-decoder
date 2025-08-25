import type { Config } from "tailwindcss";
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:{
        brand:{50:'#eef6ff',100:'#d9ecff',200:'#bfe0ff',300:'#93c8ff',400:'#5aa8ff',500:'#2a86ff',600:'#1f6ee0',700:'#1959b3',800:'#164b94',900:'#143e79'},
        ink:{50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',700:'#334155',900:'#0f172a'},
        success:'#16a34a',warn:'#f59e0b',danger:'#ef4444'
      },
      boxShadow:{soft:'0 8px 24px rgba(2,6,23,0.08)'},
      borderRadius:{xl:'1rem','2xl':'1.25rem'}
    }
  },
  plugins: [],
} satisfies Config;
