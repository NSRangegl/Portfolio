import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
const url="https://portfolio-ursn.vercel.app";
const desc="Analista de Dados & Business Intelligence em Macaé/RJ. Power BI, SQL, Python e automação de processos para RH, comercial e operações.";
export const metadata:Metadata={metadataBase:new URL(url),title:{default:"Natan dos Santos Rangel — Analista de Dados & BI",template:"%s · Natan Rangel"},description:desc,
 openGraph:{type:"website",url,locale:"pt_BR",siteName:"Natan Rangel",title:"Natan dos Santos Rangel — Analista de Dados & BI",description:desc},
 twitter:{card:"summary",title:"Natan dos Santos Rangel — Analista de Dados & BI",description:desc},alternates:{canonical:url}};
export const viewport:Viewport={themeColor:"#0A0E0D",width:"device-width",initialScale:1};
export default function L({children}:{children:React.ReactNode}){return(<html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}><body>{children}</body></html>)}
