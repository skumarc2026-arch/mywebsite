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

const courseTracks = [
  { tag: "FOUNDATION", title: "SAP Datasphere Essentials", level: "Beginner", lessons: "18 lessons", accent: "lime" },
  { tag: "MODELING", title: "Business Data Modeling", level: "Beginner", lessons: "24 lessons", accent: "mint" },
  { tag: "INTEGRATION", title: "Data & Replication Flows", level: "Intermediate", lessons: "20 lessons", accent: "orange" },
  { tag: "ANALYTICS", title: "SAP Analytics Cloud", level: "Intermediate", lessons: "22 lessons", accent: "blue" },
  { tag: "GOVERNANCE", title: "Security & Data Access", level: "Advanced", lessons: "14 lessons", accent: "violet" },
  { tag: "PROJECT", title: "End-to-End Data Product", level: "Capstone", lessons: "8 workshops", accent: "yellow" },
];

export default function Home() {
  const [activeModule, setActiveModule] = useState(1);
  const [tab, setTab] = useState("Pathway");
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [courseSearch, setCourseSearch] = useState("");
  const current = modules[activeModule];
  const progress = useMemo(() => Math.round(((activeModule + 0.35) / modules.length) * 100), [activeModule]);

  return (
    <main>
      <div className="announcement"><span>●</span> NEW COHORT ENROLLMENT IS OPEN <b>—</b> SAP DATASPHERE FOR EARLY-CAREER ENGINEERS <button onClick={() => document.getElementById("catalog")?.scrollIntoView({behavior:"smooth"})}>EXPLORE PROGRAMS →</button></div>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="DataForge home"><span className="brandmark">DF</span><span>Data<span>Forge</span></span></a>
        <nav aria-label="Primary navigation">
          {["Pathway", "Practice Lab", "Resources"].map((item) => <button key={item} onClick={() => setTab(item)} className={tab === item ? "selected" : ""}>{item}</button>)}
        </nav>
        <div className="header-actions"><button className="search" aria-label="Search">⌕</button><div className="streak"><span>◆</span> 7 day streak</div><button className="avatar" aria-label="Open profile">AK</button></div>
      </header>

      <section className="hero photo-hero" id="top">
        <div className="eyebrow"><span>LEARNING PATH</span><i></i><span>SAP DATA ANALYTICS</span></div>
        <div className="hero-grid">
          <div>
            <h1>Build Better <em>Skills.</em></h1>
            <p className="lede">Learn SAP data analytics with guided classes, hands-on labs, and career-focused projects.</p>
            <label className="course-search"><span>⌕</span><input value={courseSearch} onChange={(event) => setCourseSearch(event.target.value)} onFocus={() => document.getElementById("catalog")?.scrollIntoView({behavior:"smooth"})} placeholder="What do you want to learn?" aria-label="Search learning programs"/><button onClick={() => document.getElementById("catalog")?.scrollIntoView({behavior:"smooth"})}>Search</button></label>
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

      <section className="trust-strip">
        <span>OUR LEARNERS BUILD SKILLS FOR</span><div>SAP</div><div>ACCENTURE</div><div>DELOITTE.</div><div>Capgemini</div><div>Infosys</div>
      </section>

      <section className="catalog" id="catalog">
        <div className="catalog-head"><div><span className="eyebrow-text">SAP LEARNING PROGRAMS</span><h2>Explore Our Courses</h2></div><p>Focused learning tracks built around real SAP data workflows—not disconnected feature tours.</p></div>
        <div className="course-browser"><aside className="course-categories"><b>Trending Courses</b><button className="active">SAP Datasphere</button><button>SAP Analytics Cloud</button><button>Data Modeling</button><button>Data Integration</button><button>SAP Business Data Cloud</button><button>Career Preparation</button></aside><div className="course-grid">
          {courseTracks.filter((course) => `${course.title} ${course.tag} ${course.level}`.toLowerCase().includes(courseSearch.toLowerCase())).map((course, index) => <article className={`course-card ${course.accent}`} key={course.title}>
            <div className="course-card-top"><span>{course.tag}</span><b>0{index + 1}</b></div><div className="course-glyph"><i></i><i></i><b>{course.title.split(" ")[0]}</b></div><h3>{course.title}</h3><div className="course-data"><span>{course.level}</span><span>{course.lessons}</span></div><button onClick={() => setShowCurriculum(true)}>View program <span>↗</span></button>
          </article>)}
        </div></div>
        {courseTracks.filter((course) => `${course.title} ${course.tag} ${course.level}`.toLowerCase().includes(courseSearch.toLowerCase())).length === 0 && <p className="no-results">No exact match yet. Try “modeling”, “analytics”, or “beginner”.</p>}
      </section>

      <section className="career-board">
        <div className="career-column">
          <h2>Latest Hiring <span>NEW</span></h2>
          <article className="hiring-poster">
            <div className="poster-brand"><b>DF</b><span>CAREER ALERT</span></div><strong>WE&apos;RE<br/>HIRING!</strong><div className="poster-role">SAP DATA ANALYTICS INTERN</div>
            <ul><li>Early-career opportunity</li><li>Datasphere fundamentals</li><li>SQL and modeling skills</li><li>Portfolio project preferred</li></ul>
            <button>View opportunity</button><small>DEMONSTRATION LISTING</small>
          </article>
        </div>
        <div className="career-column featured">
          <h2>Recently Placed Candidates</h2>
          <article className="placement-story">
            <div className="confetti">✦ · ✦ · ✦</div><div className="candidate-avatar">AK</div><div className="placement-copy"><span>LEARNER MILESTONE</span><strong>PROJECT<br/>SHOWCASE READY</strong><p>Aarav completed the end-to-end SAP Datasphere pathway and presented a governed sales analytics data product.</p><div><b>SAP DATASPHERE</b><b>DATA MODELING</b></div></div>
          </article>
        </div>
        <div className="career-column">
          <h2>Latest Hiring <span>NEW</span></h2>
          <article className="hiring-poster second">
            <div className="poster-brand"><b>DF</b><span>CAREER ALERT</span></div><strong>OPEN<br/>ROLE</strong><div className="poster-role">JUNIOR BI & REPORTING ANALYST</div>
            <ul><li>Graduate opportunity</li><li>Dashboard design skills</li><li>Business storytelling</li><li>SAP Analytics Cloud basics</li></ul>
            <button>View opportunity</button><small>DEMONSTRATION LISTING</small>
          </article>
        </div>
      </section>

      <section className="impact-stats"><div><strong>1,500+</strong><span>ENGINEERS ENABLED</span></div><div><strong>96%</strong><span>LAB COMPLETION</span></div><div><strong>6</strong><span>GUIDED PROGRAMS</span></div><div><strong>24/7</strong><span>LEARNING ACCESS</span></div></section>

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

      <section className="support">
        <div className="support-heading"><span className="eyebrow-text">BEYOND THE COURSE</span><h2>Everything you need<br/>to become job-ready.</h2></div>
        <div className="support-grid">{[
          ["01","Live use cases","Learn through practical scenarios drawn from finance, sales, supply chain, and people analytics."],
          ["02","Weekly assessments","Reinforce every module with applied checks, guided feedback, and focused revision."],
          ["03","Portfolio project","Turn a business question into a secure data product you can confidently demonstrate."],
          ["04","Interview practice","Explain modeling choices, architecture, governance, and trade-offs with clarity."],
          ["05","Career materials","Translate your labs and project work into strong resume and profile evidence."],
          ["06","Learning community","Get peer support, instructor guidance, and ongoing access to practical resources."],
        ].map(([n,title,copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <footer><div className="brand"><span className="brandmark">DF</span><span>Data<span>Forge</span></span></div><p>Training engineers to think in data,<br/>build with purpose, and create impact.</p><div><b>SAP DATA ANALYTICS</b><span>ENGINEER ENABLEMENT PROGRAM · 2026</span></div></footer>

      <aside className="enquiry-card"><div className="enquiry-title">Reach Out to Us <span>⌄</span></div><form onSubmit={(event) => event.preventDefault()}><input placeholder="Enter your full name" aria-label="Full name"/><input placeholder="Enter phone number" aria-label="Phone number"/><input placeholder="Enter your course" aria-label="Course of interest"/><button type="submit">Submit</button></form></aside>
      <a className="call-float" href="tel:+918882178896" aria-label="Call DataForge">☎</a>
      <div className="contact-bar"><span>◉ +91-8882178896</span><span>✉ Learn SAP with DataForge</span><span>▣ Live guided classes</span></div>

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
