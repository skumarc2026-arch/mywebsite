"use client";

import { useMemo, useState } from "react";

const modules = [
  { n: "01", title: "Data foundations", detail: "Sources, models & semantics", time: "45 min", done: true },
  { n: "02", title: "SAP Datasphere", detail: "Spaces, flows & business layers", time: "1h 20m", active: true },
  { n: "03", title: "SAP Analytics Cloud", detail: "Stories, models & planning", time: "1h 05m" },
  { n: "04", title: "Applied data project", detail: "From question to insight", time: "2h 30m" },
];

const skills: Array<[string, number]> = [
  ["Data modeling", 82], ["Data integration", 64], ["Visualization", 48]
];

export default function Home() {
  const [activeModule, setActiveModule] = useState(1);
  const [tab, setTab] = useState("Pathway");
  const [showCurriculum, setShowCurriculum] = useState(false);
  const current = modules[activeModule];
  const progress = useMemo(() => Math.round(((activeModule + 0.35) / modules.length) * 100), [activeModule]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="DataForge home"><span className="brandmark">DF</span><span>Data<span>Forge</span></span></a>
        <nav aria-label="Primary navigation">
          {["Pathway", "Practice Lab", "Resources"].map((item) => <button key={item} onClick={() => setTab(item)} className={tab === item ? "selected" : ""}>{item}</button>)}
        </nav>
        <div className="header-actions"><button className="search" aria-label="Search">⌕</button><div className="streak"><span>◆</span> 7 day streak</div><button className="avatar" aria-label="Open profile">AK</button></div>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span>LEARNING PATH</span><i></i><span>SAP DATA ANALYTICS</span></div>
        <div className="hero-grid">
          <div>
            <h1>Turn raw data into<br/><em>real decisions.</em></h1>
            <p className="lede">A hands-on learning pathway for the next generation of SAP data engineers. Build the foundation. Master the tools. Solve what matters.</p>
            <div className="hero-actions"><button className="primary" onClick={() => document.getElementById("course")?.scrollIntoView({behavior:"smooth"})}>Continue learning <span>→</span></button><button className="secondary" onClick={() => setShowCurriculum(true)}>View curriculum <span>↘</span></button></div>
          </div>
          <div className="signal-card" aria-label="Current learning progress">
            <div className="signal-head"><span>YOUR MOMENTUM</span><b>THIS WEEK</b></div>
            <div className="metric"><strong>{progress}%</strong><span>PATHWAY<br/>COMPLETE</span></div>
            <div className="bars">{[34,51,45,77,68,94,82].map((h,i)=><i key={i} style={{height:`${h}%`}} className={i===5?"hot":""}></i>)}</div>
            <div className="days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
            <div className="signal-foot"><span><b>4.5h</b> focused</span><span><b>12</b> exercises</span><span><b>3</b> skills up</span></div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Learning topics"><div>SAP DATASPHERE <b>✦</b> DATA MODELING <b>✦</b> SAP ANALYTICS CLOUD <b>✦</b> STORYTELLING WITH DATA <b>✦</b> BUSINESS INSIGHT</div></section>

      <section className="workspace" id="course">
        <aside className="modules">
          <div className="section-label"><span>YOUR PATHWAY</span><b>{progress}% COMPLETE</b></div>
          <h2>Build your<br/>analytics edge.</h2>
          <div className="module-list">
            {modules.map((m,i)=><button key={m.n} onClick={()=>setActiveModule(i)} className={activeModule===i?"module active":"module"}>
              <span className="num">{m.done?"✓":m.n}</span><span className="module-copy"><b>{m.title}</b><small>{m.detail}</small></span><span className="time">{m.time}</span>
            </button>)}
          </div>
        </aside>

        <article className="lesson">
          <div className="lesson-top"><span>MODULE {current.n}</span><span>● IN PROGRESS</span></div>
          <div className="lesson-visual"><div className="grid-lines"></div><span className="tag">CURRENT LESSON</span><div className="cube"><i></i><b>DATA</b></div><div className="orbit one">SOURCE</div><div className="orbit two">MODEL</div><div className="orbit three">INSIGHT</div></div>
          <div className="lesson-body">
            <span className="lesson-count">LESSON 02 OF 06</span>
            <h3>{current.title}:<br/><em>From source to model</em></h3>
            <p>Learn how data moves through SAP&apos;s modern data stack — and how each layer adds context, meaning, and business value.</p>
            <div className="lesson-meta"><span>◷ 18 MIN</span><span>▱ INTERACTIVE</span><span>◎ 5 KNOWLEDGE CHECKS</span></div>
            <button className="start">Start lesson <span>→</span></button>
          </div>
        </article>
      </section>

      <section className="growth">
        <div><span className="section-label">SKILL SIGNAL</span><h2>Your capability<br/>is taking shape.</h2><p>Every exercise strengthens a practical skill you can apply on the job.</p></div>
        <div className="skill-list">{skills.map(([name,val])=><div className="skill" key={name}><div><b>{name}</b><span>{val}%</span></div><div className="track"><i style={{width:`${val}%`}}></i></div></div>)}</div>
        <div className="quote"><span>“</span><p>The goal isn&apos;t to know every feature. It&apos;s to know which questions to ask — and how data can answer them.</p><b>— YOUR LEARNING PRINCIPLE</b></div>
      </section>

      <footer><div className="brand"><span className="brandmark">DF</span><span>Data<span>Forge</span></span></div><p>Training engineers to think in data,<br/>build with purpose, and create impact.</p><div><b>SAP DATA ANALYTICS</b><span>ENGINEER ENABLEMENT PROGRAM · 2026</span></div></footer>

      {showCurriculum && <div className="curriculum-backdrop" role="presentation" onMouseDown={() => setShowCurriculum(false)}>
        <section className="curriculum-panel" role="dialog" aria-modal="true" aria-labelledby="curriculum-title" onMouseDown={(event) => event.stopPropagation()}>
          <div className="curriculum-head">
            <div><span className="eyebrow-text">SAP DATASPHERE · LEARNING PATH</span><h2 id="curriculum-title">From data source<br/>to business insight.</h2></div>
            <button className="close" onClick={() => setShowCurriculum(false)} aria-label="Close curriculum">×</button>
          </div>
          <div className="curriculum-summary"><p>A practical, project-led curriculum for engineers learning to integrate, model, govern, and deliver trusted data products in SAP Datasphere.</p><div><span><b>6</b> MODULES</span><span><b>12h</b> GUIDED LEARNING</span><span><b>6</b> HANDS-ON LABS</span></div></div>
          <div className="curriculum-list">
            {[
              ["01", "Datasphere foundations", "Understand the architecture, spaces, roles, connections, and the end-to-end data lifecycle.", "Explore a Datasphere tenant and create your first workspace", "1h 15m"],
              ["02", "Connect & acquire data", "Set up connections, remote tables, replication flows, and data flows across SAP and non-SAP sources.", "Connect SAP S/4HANA data and build a replication flow", "2h"],
              ["03", "Model the business", "Design local tables, views, associations, analytical datasets, measures, dimensions, and semantic usage.", "Build a sales performance analytical model", "2h 30m"],
              ["04", "Transform & integrate", "Apply graphical and SQL transformations, joins, unions, filters, calculated columns, and delta handling.", "Create a governed customer 360 data flow", "2h 15m"],
              ["05", "Govern & secure", "Use the catalog, metadata, data access controls, lineage, impact analysis, and transport workflows.", "Implement row-level access and trace data lineage", "1h 45m"],
              ["06", "Consume & deliver", "Expose trusted models to SAP Analytics Cloud and other consumers, then monitor performance and usage.", "Publish an executive-ready model to SAP Analytics Cloud", "2h 15m"],
            ].map(([number,title,description,lab,time]) => <article className="curriculum-item" key={number}>
              <span className="curriculum-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p><div className="lab"><b>LAB</b><span>{lab}</span></div></div>
              <span className="curriculum-time">{time}</span>
            </article>)}
          </div>
          <div className="curriculum-footer"><p><b>CAPSTONE OUTCOME</b> Build and publish a secure, reusable SAP Datasphere data product from source to dashboard.</p><button className="start" onClick={() => {setShowCurriculum(false); document.getElementById("course")?.scrollIntoView({behavior:"smooth"})}}>Start pathway <span>→</span></button></div>
        </section>
      </div>}
    </main>
  );
}
