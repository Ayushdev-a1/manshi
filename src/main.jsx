import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, ArrowUpRight, Check, ExternalLink, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Card } from "./components/ui/card";
import "./index.css";

const projects = [
  {
    no: "01",
    type: "ROCK PHOSPHATE MINING",
    title: "Birmania Rock Phosphate Mine",
    client: "FCI Aravali Gypsum and Minerals India Limited (FAGMIL)",
    text: "Terms of Reference and EIA study covering baseline data collection, report preparation and coordination for regulatory approval.",
    tags: ["ToR", "EIA", "Baseline"]
  },
  {
    no: "02",
    type: "MULTI-MINERAL ASSESSMENT",
    title: "Bauxite, Limestone & Basemetal Projects",
    client: "Madhya Pradesh State Mining Corporation Limited (MPSMC)",
    text: "ToR and EIA studies across multiple mineral categories, including EIA/EMP documentation, regulatory liaison and technical reporting.",
    tags: ["ToR", "EIA/EMP", "Regulatory"]
  },
  {
    no: "03",
    type: "GOVERNMENT PSU / HIGH-VOLUME DELIVERY",
    title: "B2 Category Sand Mining Projects",
    client: "Madhya Pradesh State Mining Corporation (Govt. PSU)",
    text: "Environmental Clearance proposals for 150+ B2 category sand-mining projects and additional mineral projects, supporting portfolio-wide compliance.",
    tags: ["150+ Proposals", "EC", "Compliance"]
  },
  {
    no: "04",
    type: "STAKEHOLDER CONSULTATION",
    title: "Public Hearing Coordination",
    client: "Major & minor mineral projects",
    text: "Executed and coordinated statutory Public Hearings in compliance with EIA Notification 2006, facilitating stakeholder consultation and regulatory approval.",
    tags: ["Public Hearing", "Stakeholders"]
  }
];

const expertise = [
  ["01", "Environmental Assessment", "EIA, EMP and Environmental Clearance documentation for mining and mineral-sector projects.", ["EIA", "EMP", "EC", "ToR"]],
  ["02", "Air Quality & Modelling", "Air quality analysis, AERMOD input preparation and interpretation of dispersion prediction outputs.", ["AERMOD Cloud", "Air Quality"]],
  ["03", "Regulatory Coordination", "Coordination with SEAC, SEIAA and MoEF&CC for Environmental Clearance and Terms of Reference.", ["SEAC", "SEIAA", "MoEF&CC"]],
  ["04", "Compliance & Reporting", "Half-yearly compliance reporting, regulatory documentation, technical presentations and stakeholder communication.", ["Compliance", "Reporting"]],
  ["05", "Digital Environmental Tools", "PARIVESH Portal filing, Google Earth Pro site mapping and baseline data visualization.", ["PARIVESH", "Google Earth Pro"]],
  ["06", "ESG Direction", "Growing focus on ESG reporting, carbon accounting and GHG emissions assessment as a professional growth area.", ["ESG", "Carbon", "GHG"]]
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const nav = ["About", "Expertise", "Projects", "Journey", "Contact"];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const goHome = () => {
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-forest">
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-terracotta" style={{ scaleX }} />

      <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-6">
          <button onClick={goHome} className="flex items-center gap-3 font-bold text-left" aria-label="Back to homepage">
            <span className="grid size-9 place-items-center rounded-full border border-forest text-[10px] tracking-widest">MN</span>
            <span className="hidden sm:inline">Manshi Kumari Neha</span>
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
          <nav className={`${open ? "absolute left-0 right-0 top-[72px] flex" : "hidden"} flex-col gap-5 border-b border-forest/10 bg-paper p-6 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
            {nav.map((item) => (
              <button key={item} type="button" onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-sm font-semibold text-forest/70 transition hover:text-forest">
                {item}
              </button>
            ))}
            <Button onClick={() => { setContactOpen(true); setOpen(false); }} className="hidden md:inline-flex">
              Let's connect <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <Reveal>
            <p className="mb-6 text-[10px] font-bold tracking-[.22em] text-forest/55">ENVIRONMENTAL MANAGEMENT · EIA · ESG</p>
            <h1 className="max-w-3xl font-serif text-[clamp(3.2rem,7vw,5.7rem)] font-semibold leading-[.96] tracking-[-.05em]">
              Turning environmental data into <em className="text-terracotta">responsible decisions.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-forest/65 sm:text-lg">
              Environmental professional with close to four years of experience across Environmental Impact Assessment,
              Environmental Management Plans, Environmental Clearance, air quality analysis and regulatory coordination.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => scrollToSection("projects")} className="group">Explore my work <ArrowUpRight className="ml-2 size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Button>
              <Button variant="outline" onClick={() => setContactOpen(true)}>Get in touch</Button>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-forest/15 pt-6">
              {[["3.8+", "years specialized experience"], ["150+", "B2 EC proposals"], ["FAA", "QCI/NABET accredited"]].map(([a,b]) =>
                <div key={a}><div className="font-serif text-2xl font-semibold">{a}</div><div className="mt-1 text-[10px] leading-4 text-forest/55">{b}</div></div>
              )}
            </div>
          </Reveal>

          <Reveal delay={.12} className="mx-auto w-full max-w-[530px]">
            <motion.div
              className="relative h-[470px] overflow-hidden rounded-[42%_58%_50%_50%/43%_42%_58%_57%] bg-forest shadow-soft sm:h-[570px]"
              whileHover={{ scale: 1.012 }}
              transition={{ duration: .5 }}
            >
              <motion.div className="absolute -right-16 -top-10 size-72 rounded-full bg-moss/80 blur-[1px]" animate={{ y: [0, 18, 0], x: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="absolute -bottom-20 -left-16 size-64 rounded-full bg-terracotta/80" animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
              <div className="absolute inset-[12%] rounded-full border border-paper/15" />
              <motion.div className="absolute right-[17%] top-[14%] text-8xl text-paper/20" animate={{ rotate: [20, 35, 20] }} transition={{ duration: 8, repeat: Infinity }}>⌁</motion.div>
              <div className="absolute bottom-[12%] left-[10%] w-[80%] rounded-3xl bg-paper/95 p-6 shadow-2xl backdrop-blur sm:p-8">
                <span className="text-[9px] font-bold tracking-[.2em] text-forest/55">FIELD NOTE / 01</span>
                <h2 className="mt-4 font-serif text-4xl font-semibold leading-none sm:text-5xl">Measure.<br />Interpret.<br />Improve.</h2>
                <p className="mt-5 text-xs leading-5 text-forest/60">Environmental assessment grounded in evidence, regulation and stakeholder coordination.</p>
              </div>
            </motion.div>
          </Reveal>
        </section>

        <div className="overflow-hidden bg-terracotta py-4 text-paper">
          <motion.div className="flex min-w-max items-center gap-7 text-[10px] font-bold tracking-widest" animate={{ x: ["0%", "-35%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
            {[...Array(2)].flatMap((_,i) => ["EIA","Environmental Compliance","Air Quality","Environmental Clearance","Stakeholder Engagement","ESG Awareness"].map(x => <span key={`${i}-${x}`} className="flex items-center gap-7">{x}<span>✦</span></span>))}
          </motion.div>
        </div>

        <section id="about" className="mx-auto grid max-w-6xl gap-12 px-5 py-28 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal><p className="text-[10px] font-bold tracking-[.2em] text-forest/50">01 / ABOUT</p><h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">Environmental work with a <em className="text-terracotta">practical lens.</em></h2></Reveal>
          <Reveal delay={.08} className="text-base leading-7 text-forest/65 sm:text-lg"><p>I work at the intersection of environmental assessment, regulatory requirements and project delivery. My experience spans the lifecycle of environmental approvals — from preliminary site visits and baseline monitoring to technical reporting, appraisal coordination and compliance reporting.</p><p className="mt-6">I am now looking to bring this environmental-domain depth into digital ESG work, with an interest in framework research, client project management, ESG reporting, carbon accounting and GHG emissions assessment.</p></Reveal>
        </section>

        <section id="expertise" className="bg-forest py-28 text-paper">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal><p className="text-[10px] font-bold tracking-[.2em] text-paper/55">02 / EXPERTISE</p></Reveal>
            <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map(([no,title,text,tags],i) => (
                <Reveal key={no} delay={i*.04} className="h-full">
                  <motion.article whileHover={{ y: -5 }} className={`h-full min-h-[280px] p-8 ${i===0 ? "bg-[#254a40]" : "bg-forest"}`}>
                    <span className="text-[10px] text-paper/50">{no}</span>
                    <h3 className="mt-12 font-serif text-3xl leading-tight">{title}</h3>
                    <p className="mt-4 text-sm leading-6 text-paper/60">{text}</p>
                    <div className="mt-7 flex flex-wrap gap-2">{tags.map(t=><Badge key={t} className="border-paper/20 text-paper/70">{t}</Badge>)}</div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-28 sm:px-6">
          <Reveal><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold tracking-[.2em] text-forest/50">03 / SELECTED PROJECTS</p><h2 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">Selected <em className="text-terracotta">field experience.</em></h2></div><p className="max-w-sm text-sm leading-6 text-forest/55">A snapshot of environmental assessment, clearance and stakeholder work across mining projects.</p></div></Reveal>
          <div className="mt-14 divide-y divide-forest/10 border-y border-forest/10">
            {projects.map((p,i) => (
              <Reveal key={p.no} delay={i*.05}>
                <motion.article whileHover={{ x: 7 }} className="grid gap-6 py-10 lg:grid-cols-[55px_1fr_210px]">
                  <span className="font-serif text-2xl">{p.no}</span>
                  <div><p className="text-[10px] font-bold tracking-[.16em] text-terracotta">{p.type}</p><h3 className="mt-2 font-serif text-3xl font-semibold">{p.title}</h3><p className="mt-1 text-xs text-forest/50">{p.client}</p><p className="mt-5 max-w-2xl text-sm leading-6 text-forest/60">{p.text}</p></div>
                  <div className="flex flex-wrap content-start gap-2 lg:justify-end">{p.tags.map(t=><Badge key={t}>{t}</Badge>)}</div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="journey" className="bg-[#e9e3d4] py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <Reveal><p className="text-[10px] font-bold tracking-[.2em] text-forest/50">04 / PROFESSIONAL JOURNEY</p></Reveal>
            <div className="mt-12 border-l border-forest/20 pl-7 sm:pl-10">
              {[
                ["NOV 2022 — JUN 2026","Assistant Manager — Environmental Clearance & EIA","Oceao-Enviro Management Solutions (India) Pvt. Ltd., Ghaziabad",["Managed end-to-end environmental clearance coordination.","Prepared EIA, EMP, EC and compliance documentation.","Conducted air quality analysis and interpreted AERMOD outputs.","Delivered ToR, Public Hearing and Final Technical presentations."]],
                ["2020 — 2022","M.Sc. Environmental Sciences","Central University of Jharkhand",[]],
                ["2017 — 2019","B.Sc. Bio-Technology","Magadh University",[]]
              ].map(([date,title,org,items],i)=>
                <Reveal key={date} delay={i*.08} className="relative pb-14 last:pb-0">
                  <span className="absolute -left-[37px] top-1 size-3 rounded-full bg-terracotta ring-8 ring-[#e9e3d4] sm:-left-[47px]" />
                  <p className="text-[10px] font-bold tracking-widest text-forest/50">{date}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">{title}</h3>
                  <p className="mt-2 text-sm text-forest/55">{org}</p>
                  {items.length>0 && <ul className="mt-5 space-y-2 text-sm leading-6 text-forest/60">{items.map(x=><li key={x} className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-terracotta"/>{x}</li>)}</ul>}
                </Reveal>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-28 sm:px-6 lg:grid-cols-[1.2fr_.8fr]">
          <Card className="p-8 sm:p-12">
            <p className="text-[10px] font-bold tracking-[.2em] text-forest/50">CREDENTIAL</p>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl font-semibold sm:text-4xl">QCI/NABET Accredited <em className="text-terracotta">Functional Area Associate</em></h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-forest/60">Air pollution monitoring, prevention and control (AP) & Meteorology; Air quality modelling and prediction (AQ).</p>
          </Card>
          <div className="flex flex-wrap content-center gap-2">{["AERMOD Cloud","Google Earth Pro","PARIVESH Portal","EIA Notification 2006","CPCB / SPCB norms"].map(x=><Badge key={x} className="bg-[#e9e3d4] px-4 py-2">{x}</Badge>)}</div>
        </section>

        <section id="contact" className="bg-forest py-28 text-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_.8fr]">
            <Reveal><p className="text-[10px] font-bold tracking-[.2em] text-paper/50">05 / CONTACT</p><h2 className="mt-5 max-w-2xl font-serif text-5xl font-semibold leading-tight sm:text-6xl">Let's build a more <em className="text-terracotta">responsible future.</em></h2><p className="mt-7 max-w-xl text-sm leading-6 text-paper/60">Open to conversations around environmental management, ESG, compliance, research and project work.</p></Reveal>
            <Reveal delay={.1} className="divide-y divide-paper/15 border-y border-paper/15">
              <a href="mailto:manshikumarineha19@gmail.com" className="flex items-center gap-4 py-6 group"><Mail/><div className="flex-1"><span className="block text-[9px] uppercase tracking-widest text-paper/45">Email</span><strong className="text-sm">manshikumarineha19@gmail.com</strong></div><ExternalLink className="size-4 transition group-hover:translate-x-1"/></a>
              <a href="https://www.linkedin.com/in/manshi-kumari-neha178a261a2" target="_blank" rel="noreferrer" className="flex items-center gap-4 py-6 group"><ExternalLink/><div className="flex-1"><span className="block text-[9px] uppercase tracking-widest text-paper/45">LinkedIn</span><strong className="text-sm">Connect on LinkedIn</strong></div><ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1"/></a>
              <a href="tel:+919279965501" className="flex items-center gap-4 py-6 group"><Phone/><div className="flex-1"><span className="block text-[9px] uppercase tracking-widest text-paper/45">Phone</span><strong className="text-sm">+91 92799 65501</strong></div><ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1"/></a>
              <div className="flex items-center gap-4 py-6"><MapPin/><div><span className="block text-[9px] uppercase tracking-widest text-paper/45">Based in</span><strong className="text-sm">Patna, Bihar, India</strong></div></div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-[10px] text-forest/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>© 2026 Manshi Kumari Neha</span><span>Environmental Management · EIA · ESG</span>
      </footer>
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-forest/50 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onMouseDown={(e) => { if (e.target === e.currentTarget) setContactOpen(false); }}
          >
            <motion.div role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title"
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-paper p-7 text-forest shadow-2xl sm:p-9"
              initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button type="button" onClick={() => setContactOpen(false)} aria-label="Close contact dialog"
                className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-forest/10 text-forest/60 transition hover:bg-forest hover:text-paper">
                <X className="size-4" />
              </button>
              <div className="pr-10">
                <p className="text-[9px] font-bold tracking-[.22em] text-terracotta">LET'S CONNECT</p>
                <h2 id="contact-dialog-title" className="mt-3 font-serif text-4xl font-semibold leading-tight">Start a conversation.</h2>
                <p className="mt-4 text-sm leading-6 text-forest/60">
                  For environmental management, ESG, compliance, research or project discussions, reach out directly.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                <a href="mailto:manshikumarineha19@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-forest/10 bg-white/50 p-4 transition hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-lg">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest text-paper"><Mail className="size-4" /></span>
                  <span className="min-w-0 flex-1"><span className="block text-[9px] font-bold uppercase tracking-widest text-forest/45">Email</span>
                    <strong className="mt-1 block truncate text-sm">manshikumarineha19@gmail.com</strong></span>
                  <ArrowUpRight className="size-4 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a href="tel:+919279965501"
                  className="group flex items-center gap-4 rounded-2xl border border-forest/10 bg-white/50 p-4 transition hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-lg">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-terracotta text-paper"><Phone className="size-4" /></span>
                  <span className="flex-1"><span className="block text-[9px] font-bold uppercase tracking-widest text-forest/45">Phone</span>
                    <strong className="mt-1 block text-sm">+91 92799 65501</strong></span>
                  <ArrowUpRight className="size-4 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              <p className="mt-6 text-center text-[10px] text-forest/40">Patna, Bihar · India</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <button type="button" onClick={goHome} aria-label="Back to top" className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full bg-forest text-paper shadow-xl transition hover:-translate-y-1"><ArrowUp className="size-4"/></button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
