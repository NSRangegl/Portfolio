import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./lib/**/*.ts"], theme:{ extend:{
 colors:{paper:"#0A0E0D",ink:"#E8EEEC",muted:"#8A9A95",line:"#1F2B28",accent:"#3DDC97"},
 fontFamily:{sans:["var(--font-geist-sans)","system-ui","sans-serif"],mono:["var(--font-geist-mono)","ui-monospace","monospace"],display:["var(--font-geist-sans)","system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
