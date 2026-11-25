import { links, results, projects, stack, jobs, edu, courses } from "@/lib/content";
const Label=({children}:{children:React.ReactNode})=><p className="font-mono text-xs uppercase tracking-[0.14em] text-muted"><span className="text-accent">{"// "}</span>{children}</p>;
const Sec=({id,n,title,children}:{id:string;n:string;title:string;children:React.ReactNode})=>(
 <section id={id} className="border-t border-line">
  <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
   <div className="md:col-span-3"><Label>{n}</Label><h2 className="mt-3 font-display font-semibold tracking-tight text-3xl md:text-4xl">{title}</h2></div>
   <div className="md:col-span-9">{children}</div>
  </div>
 </section>);
export default function Home(){return(<>
 <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur-sm">
  <nav aria-label="Principal" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
   <a href="#topo" className="font-medium">N. Rangel</a>
   <ul className="hidden gap-7 md:flex">{[["resultados","Resultados"],["projetos","Projetos"],["stack","Stack"],["experiencia","Experiência"],["contato","Contato"]].map(([h,l])=><li key={h}><a className="lnk" href={`#${h}`}>{l}</a></li>)}</ul>
   <a href={links.cv} className="border border-ink px-3 py-1.5 transition-colors hover:bg-ink hover:text-paper" download>Currículo</a>
  </nav>
 </header>
 <main id="topo">
  <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-12 md:pb-28 md:pt-24">
   <div className="rise md:col-span-7">
    <Label>Analista de Dados &amp; Business Intelligence · Macaé/RJ</Label>
    <h1 className="mt-6 font-display font-semibold tracking-tight text-5xl leading-[1] md:text-7xl">Natan dos Santos Rangel<span className="cursor" aria-hidden /></h1>
    <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">Transformo dados em informações estratégicas, automatizando processos e desenvolvendo soluções que geram resultados para os negócios.</p>
    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
     <a className="bg-accent px-5 py-3 text-paper transition-opacity hover:opacity-90" href="#projetos">Ver projetos</a>
     <a className="lnk self-center" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
     <a className="lnk self-center" href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    </div>
   </div>
   <aside className="rise self-end border border-line bg-black/30 md:col-span-5" style={{animationDelay:".15s"}} aria-label="Resultado em destaque">
    <div className="flex items-center gap-2 border-b border-line px-4 py-2 font-mono text-xs text-muted"><span className="h-2 w-2 bg-accent"/>engeman / rh_fechamento_mensal</div>
    <div className="space-y-5 p-5">
     <p className="font-display font-semibold tracking-tight text-5xl leading-none text-accent md:text-6xl">3 dias → 2 h</p>
     <div className="space-y-4 font-mono text-xs">
      <div><p className="text-muted">antes · 3 dias</p><div className="mt-2 h-3 w-full bg-muted/40"/></div>
      <div><p className="text-accent">depois · 2 h</p><div className="mt-2 h-3 bg-accent" style={{width:"4%"}}/></div>
     </div>
     <p className="text-sm leading-relaxed text-muted">Fechamento dos relatórios mensais de RH após o dashboard em Power BI. Barras ilustrativas, sem escala exata.</p>
    </div>
   </aside>
  </section>

  <Sec id="sobre" n="01" title="Sobre">
   <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
    <p>Atuo com coleta, ETL e modelagem de dados e com dashboards analíticos em Power BI, SQL e Python. Minha vivência vem de áreas de RH, financeiro, comercial, operações e treinamentos, onde estruturei indicadores e gestão por métricas.</p>
    <p className="text-muted">Comecei em rotinas administrativas e logísticas de empresas industriais e marítimas, e foi ali que aprendi o problema de negócio por trás de cada planilha. Hoje busco soluções que aumentem a eficiência e a confiabilidade das informações.</p>
   </div>
  </Sec>

  <Sec id="resultados" n="02" title="Resultados">
   <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2">{results.map(r=>(
    <div key={r.t} className="border-t border-ink pt-4"><dt className="font-display font-semibold tracking-tight text-4xl md:text-5xl">{r.n}</dt><dd className="mt-3 text-sm leading-relaxed text-muted">{r.t}<span className="mt-2 block font-mono text-xs uppercase tracking-wider text-accent">{r.o}</span></dd></div>))}
   </dl>
  </Sec>

  <Sec id="projetos" n="03" title="Projetos">
   <ol className="divide-y divide-line border-y border-line">{projects.map((p,i)=>(
    <li key={p.t}><article className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-8">
     <div className="lg:col-span-4"><span className="font-mono text-xs text-muted">{String(i+1).padStart(2,"0")}</span><h3 className="mt-1 text-xl font-medium">{p.t}</h3><p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">{p.c}</p><p className="mt-1 text-sm text-muted">{p.o}</p></div>
     <div className="space-y-3 text-sm leading-relaxed lg:col-span-8">
      <p><span className="font-mono text-xs uppercase text-muted">Problema </span>{p.p}</p>
      <p><span className="font-mono text-xs uppercase text-muted">Solução </span>{p.s}</p>
      <p><span className="font-mono text-xs uppercase text-muted">Resultado </span>{p.r}</p>
      <ul className="flex flex-wrap gap-2 pt-1">{p.k.map(k=><li key={k} className="border border-line px-2 py-0.5 font-mono text-xs">{k}</li>)}</ul>
     </div></article></li>))}
   </ol>
   <p className="mt-6 text-sm text-muted">Dados corporativos não são publicados. Os estudos com dados simulados estão no <a className="lnk text-ink" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
  </Sec>

  <Sec id="stack" n="04" title="Stack">
   <dl className="divide-y divide-line border-y border-line">{stack.map(([a,b])=>(
    <div key={a} className="grid gap-1 py-4 sm:grid-cols-3"><dt className="font-mono text-xs uppercase tracking-wider text-muted">{a}</dt><dd className="sm:col-span-2">{b}</dd></div>))}
   </dl>
  </Sec>

  <Sec id="experiencia" n="05" title="Experiência">
   <ol className="relative space-y-10 border-l border-line pl-8">{jobs.map(j=>(
    <li key={j.c} className="relative"><span aria-hidden className="absolute -left-[37px] top-2 h-2.5 w-2.5 bg-accent"/>
     <p className="font-mono text-xs uppercase tracking-wider text-muted">{j.d}</p>
     <h3 className="mt-1 text-lg font-medium">{j.r} <span className="font-normal text-muted">· {j.c}</span></h3>
     <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">{j.b.map(b=><li key={b}>{b}</li>)}</ul></li>))}
   </ol>
  </Sec>

  <Sec id="formacao" n="06" title="Formação">
   <ul className="space-y-2 text-lg">{edu.map(e=><li key={e}>{e}</li>)}</ul>
   <p className="mb-3 mt-10 font-mono text-xs uppercase tracking-wider text-muted">Cursos e certificações</p>
   <ul className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">{courses.map(c=><li key={c} className="border-b border-line pb-2">{c}</li>)}</ul>
  </Sec>

  <Sec id="contato" n="07" title="Contato">
   <p className="font-display font-semibold tracking-tight text-4xl leading-tight md:text-6xl">Tem um problema de dados para resolver?</p>
   <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
    <a className="bg-accent px-6 py-3 text-paper transition-opacity hover:opacity-90" href={`mailto:${links.email}`}>{links.email}</a>
    <a className="lnk" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
    <a className="lnk" href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
   </div>
  </Sec>
 </main>
 <footer className="border-t border-line"><p className="mx-auto max-w-6xl px-6 py-8 font-mono text-xs text-muted">© 2026 Natan dos Santos Rangel · Macaé/RJ</p></footer>
</>)}
