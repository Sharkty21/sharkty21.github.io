import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, MapPin, ChevronRight, Award, ArrowUpRight, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SiDotnet, SiReact, SiTypescript, SiVite,
  SiTailwindcss, SiMongodb, SiOpenai, SiGithub,
  SiPostgresql, SiAuth0, SiReactquery, SiTemporal
} from "react-icons/si";
import { TbBrandCSharp, TbBrandAws, TbBrandAzure, TbSparkles, TbCursorText, TbBrain } from "react-icons/tb";
import assistMoreScreenshot from "/assets/screenshot-1778724702611-XCF7f-bv.png";
import simpleSelfEmployScreenshot from "/assets/screenshot-1778727490596-p-4iUBbj.png";
import kennesawStateLogo from "/assets/Kennesaw.svg";
import purdueLogo from "/assets/Purdue.svg";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-end">
        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="text-primary hover:text-primary/80 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const skillsColumnA = [
  { icon: SiReact, label: "React" },
  { icon: SiDotnet, label: ".NET" },
  { icon: TbBrandAws, label: "AWS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiOpenai, label: "OpenAI" },
  { icon: SiTemporal, label: "Temporal" },
  { icon: TbSparkles, label: "AI" },
  { icon: SiAuth0, label: "Auth0" },
];

const skillsColumnB = [
  { icon: TbBrandCSharp, label: "C#" },
  { icon: TbBrandAzure, label: "Azure" },
  { icon: TbCursorText, label: "Cursor" },
  { icon: TbBrain, label: "Langfuse" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiReactquery, label: "TanStack" },
];

const SkillMarqueeColumn = ({ skills, direction }: { skills: typeof skillsColumnA; direction: "up" | "down" }) => {
  const doubled = [...skills, ...skills];
  return (
    <div className="relative h-[420px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      <div className={direction === "up" ? "animate-marquee-up" : "animate-marquee-down"}>
        {doubled.map((skill, i) => (
          <div
            key={`${skill.label}-${i}`}
            className="flex items-center gap-3 px-4 py-3 mb-3 rounded-xl border border-border/40 bg-background/60 backdrop-blur-sm hover:border-primary/30 transition-colors"
          >
            <skill.icon className="w-5 h-5 text-muted-foreground shrink-0" />
            <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const allSkills = [...skillsColumnA, ...skillsColumnB];

const SkillMarqueeRow = () => {
  const doubled = [...allSkills, ...allSkills];
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="animate-marquee-left flex gap-3 w-max">
        {doubled.map((skill, i) => (
          <div
            key={`${skill.label}-${i}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/40 bg-background/60 backdrop-blur-sm shrink-0"
          >
            <skill.icon className="w-4 h-4 text-muted-foreground shrink-0" />
            <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-20 pb-16">
      <div className="flex items-center justify-between w-full gap-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl lg:shrink-0 min-w-0"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">Chicago, IL</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Tyler Sharkey
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl leading-relaxed">
            Lead Software Engineer & AI Systems Architect. Designing robust, scalable architectures with a focus on precision and performance.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="mailto:tylermsharkey@gmail.com" data-testid="button-contact">
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href="https://linkedin.com/in/tylermsharkey" target="_blank" rel="noreferrer" data-testid="link-linkedin">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href="https://github.com/SharkeyDevelopment" target="_blank" rel="noreferrer" data-testid="link-github">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 lg:hidden -mx-6 sm:-mx-8"
          >
            <SkillMarqueeRow />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex items-center gap-3"
        >
          <SkillMarqueeColumn skills={skillsColumnA} direction="up" />
          <SkillMarqueeColumn skills={skillsColumnB} direction="down" />
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-border/40">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl"
      >
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8">About</h2>
        <div className="text-xl md:text-3xl text-foreground font-light leading-relaxed space-y-8">
          <p>
            I began my career as a Purdue educated mechanical engineer. The transition to software wasn't just a career shift; it was a realization that the same principles of system design and optimization applied elegantly to code.
          </p>
          <p>
            Today, I am a lead engineer at Origami Risk; both managing a team and developing as an engineer. We build complex, industry-recognized AI-enhanced RMIS systems. My philosophy is: be tool agnostic, focus on real value delivery. Achieving true 10-100x efficiency isn't just leveraging AI, but training and uplifting your team and organization to improve everyone's job satisfaction and output.
          </p>
          <p>
            I pride myself on my abilities to constantly context switch, my servant leader and player-coach management style, and my ability to build genuine connection with clients and coworkers. I standout from most engineers because of my product vision and strong interpersonal skills.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const ExperienceSection = () => {
  const roles = [
    {
      title: "Development Team Lead",
      company: "Origami Risk - Chicago, IL",
      description: "Leading 7 engineers, driving AI systems architecture and maintaining exceptional sprint velocity. Led 100+ successful consecutive sprints over multiple year period.",
      highlights: [
        "Led architecture and delivery of AI Policy Ingestion solution, headlining Origami’s recognition as a Market Leader in 2026 Annual RMIS Report. AWS Bedrock, Langfuse & Temporal async workflow for scanning PDFs, matching existing db records, creating records.",
        "Led architecture and delivery of AI Policy Ingestion solution, headlining Origami’s recognition as a Market Leader in 2026 Annual RMIS Report. AWS Bedrock, Langfuse & Temporal async workflow for scanning PDFs, matching existing db records, creating records.",
        "Top 6/100 all-time contributors to main code repo",
        "Implemented SDLC improvements including AI automated code review, repo level Cursor skills for repetitive tasks, PR templates, spike workflows, code review standards, onboarding processes and development documentation. My documentation has over 24k views and the highest reputation score (421) in StackOverflow."
      ]
    },
    {
      title: "Associate Dev Team Lead",
      company: "Origami Risk - Chicago, IL",
      description: "Quickly promoted from Product Engineer to management role, mentored interns and junior engineers, managed complex feature rollouts, and managed through agile transformation.",
      highlights: [
        "Zero-downtime migration of global email infrastructure (20M+ emails) to AWS.",
        "Led 3 consecutive internship programs, leading to 5+ interns hired.",
        "Led the first security sprint team, contributing to a successful Mandiant audit."
      ]
    },
    {
      title: "Product Engineer",
      company: "Origami Risk - Chicago, IL",
      description: "Delivered robust product features, established foundational code patterns, and advocated for rigorous code quality.",
      highlights: []
    },
    {
      title: "Product Development Engineer",
      company: "Panduit - Tinley Park, IL",
      description: "Mechanical design and test engineer for network infrastructure solutions.",
      highlights: []
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border/40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-widest text-primary uppercase mb-16">Experience & Impact</motion.h2>
        
        <div className="space-y-16">
          {roles.map((role, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-semibold text-foreground mb-1">{role.title}</h3>
                <p className="text-primary font-medium mb-4">{role.company}</p>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{role.description}</p>
                
                {role.highlights.length > 0 && (
                  <ul className="space-y-3">
                    {role.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 max-w-2xl">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const AwardsSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border/40 bg-secondary/30 -mx-6 px-6 sm:-mx-8 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-widest text-primary uppercase mb-12">Recognition & Awards</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="bg-background border border-border p-8 rounded-2xl shadow-sm flex flex-col">
              <Award className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">2026 RMIS Market Leader</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">Led architecture and delivery of the AI Policy Ingestion solution — headlining Origami Risk's recognition as a Market Leader in the 2026 Annual RMIS Report. Built on AWS Bedrock, Langfuse, and Temporal for async workflow execution over millions of PDFs.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="font-normal text-xs bg-secondary hover:bg-secondary">AWS Bedrock</Badge>
                <Badge variant="secondary" className="font-normal text-xs bg-secondary hover:bg-secondary">Langfuse</Badge>
                <Badge variant="secondary" className="font-normal text-xs bg-secondary hover:bg-secondary">Temporal</Badge>
              </div>
              <a
                href="https://www.origamirisk.com/resources/insights/take-control-of-your-insurance-program/"
                target="_blank"
                rel="noreferrer"
                data-testid="link-award-rmis"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/70 transition-colors"
              >
                Read the report <ArrowUpRight className="w-3 h-3" />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-background border border-border p-8 rounded-2xl shadow-sm flex flex-col">
              <Award className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">2025 Verdantix Green Quadrant Leader</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">Architected and delivered TCOR Analytics — an AI-powered dashboard and search platform — earning Origami Risk a Leader position in the Verdantix Green Quadrant RMIS 2025 Report.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="font-normal text-xs bg-secondary hover:bg-secondary">AI Analytics</Badge>
                <Badge variant="secondary" className="font-normal text-xs bg-secondary hover:bg-secondary">Enterprise Search</Badge>
              </div>
              <a
                href="https://www.origamirisk.com/solutions/rmis/tcor-analytics/"
                target="_blank"
                rel="noreferrer"
                data-testid="link-award-verdantix"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/70 transition-colors"
              >
                Read the report <ArrowUpRight className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ArrowHorizontal = () => (
  <svg width="28" height="12" viewBox="0 0 28 12" fill="none" className="shrink-0 text-zinc-300 dark:text-zinc-600 hidden md:block">
    <path d="M0 6H24M24 6L19 1M24 6L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDown = () => (
  <svg width="12" height="28" viewBox="0 0 12 28" fill="none" className="shrink-0 text-zinc-300 dark:text-zinc-600 md:hidden mx-auto">
    <path d="M6 0V24M6 24L1 19M6 24L11 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArchDiagram = () => (
  <div className="w-full select-none">
    <div className="relative rounded-2xl border border-blue-200/30 dark:border-blue-800/20 bg-blue-50/20 dark:bg-blue-950/10 p-5 sm:p-6 md:p-8 pt-8 md:pt-10">
      <div className="absolute -top-3 left-5">
        <span className="inline-flex items-center gap-1.5 bg-blue-500 text-white text-[11px] font-medium tracking-wide px-3 py-1 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          Azure
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
        <div className="flex-1 min-w-0 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 p-4">
          <span className="text-[11px] font-medium text-blue-500 tracking-wide">Frontend</span>
          <p className="text-sm font-semibold text-foreground mt-1.5 leading-snug">React &middot; TypeScript</p>
          <p className="text-xs text-muted-foreground mt-0.5">Vite &middot; TanStack Query &middot; shadcn &middot; Tailwind</p>
        </div>

        <ArrowHorizontal />
        <ArrowDown />

        <div className="flex-1 min-w-0 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 p-4">
          <span className="text-[11px] font-medium text-emerald-500 tracking-wide">API Backend</span>
          <p className="text-sm font-semibold text-foreground mt-1.5 leading-snug">C# &middot; .NET</p>
          <p className="text-xs text-muted-foreground mt-0.5">REST API &middot; Service/Repository Pattern</p>
          <div className="mt-3 inline-flex items-center gap-1.5 bg-purple-50 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-800/30 rounded-lg px-2.5 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="text-[11px] font-medium text-purple-600 dark:text-purple-400">AIProvider.cs</span>
          </div>
        </div>

        <ArrowHorizontal />
        <ArrowDown />

        <div className="flex-1 min-w-0 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 p-4">
          <span className="text-[11px] font-medium text-amber-500 tracking-wide">Database</span>
          <p className="text-sm font-semibold text-foreground mt-1.5 leading-snug">SQL Server</p>
        </div>
      </div>
    </div>

    <div className="flex justify-center py-1.5">
      <svg width="2" height="28" viewBox="0 0 2 28" className="text-purple-300 dark:text-purple-600">
        <line x1="1" y1="0" x2="1" y2="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M1 22L3.5 28H-1.5L1 22Z" fill="currentColor" />
      </svg>
    </div>

    <div className="flex justify-center">
      <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 px-5 py-3 text-center">
        <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 tracking-wide">External</span>
        <p className="text-sm font-semibold text-foreground mt-0.5">OpenAI API</p>
        <p className="text-xs text-muted-foreground">GPT-4o &middot; Assistants</p>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border/40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-widest text-primary uppercase mb-16">Personal Projects</motion.h2>

        {/* AssistMore */}
        <motion.div variants={fadeInUp} className="group relative bg-secondary/20 rounded-3xl overflow-hidden border border-border/50 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-4">
                <h3 className="text-3xl font-bold tracking-tight">AssistMore</h3>
                <Badge variant="outline" className="rounded-full px-3 py-0.5 border-primary/20 text-primary">AI-Native SaaS</Badge>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                A SaaS CRM for Personal Assistants to act as COOs for UHNW/HNW clients — providing proactive, anticipatory service across the client's lifestyle with AI-native support built into every workflow.
              </p>

              <div className="flex items-center gap-4">
                <Button asChild className="rounded-full">
                  <a href="https://nice-meadow-0b06ab110.4.azurestaticapps.net/assistant" target="_blank" rel="noreferrer" data-testid="link-assistmore-demo">
                    View Live <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-muted/30 p-8 lg:p-0 flex items-center justify-center relative overflow-hidden min-h-[300px]">
              <div className="relative w-[85%] lg:w-full lg:-right-12 lg:top-8 rounded-xl lg:rounded-tl-xl overflow-hidden shadow-2xl border border-border/50 transition-transform duration-700 group-hover:-translate-y-2">
                <img
                  src={assistMoreScreenshot}
                  alt="AssistMore Application Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 px-8 md:px-14 py-8 md:py-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5">Architecture</p>
            <ArchDiagram />
          </div>
        </motion.div>

        {/* Simple Self Employ */}
        <motion.div variants={fadeInUp} className="group relative bg-secondary/20 rounded-3xl overflow-hidden border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-4">
                <h3 className="text-3xl font-bold tracking-tight">Simple Self Employ</h3>
                <Badge variant="outline" className="rounded-full px-3 py-0.5 border-primary/20 text-primary">CRM</Badge>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-md">
                The CRM built for the independent contractor. No bloat, no learning curve — just quotes, jobs, and invoices in seconds.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Button asChild className="rounded-full">
                  <a href="https://simpleselfemploy.com/login" target="_blank" rel="noreferrer" data-testid="link-sse-demo">
                    View Live <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="ghost" className="rounded-full hover:bg-background">
                  <a href="https://github.com/SharkeyDevelopment" target="_blank" rel="noreferrer" data-testid="link-sse-repo">
                    Source Code <Github className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-muted/30 p-8 lg:p-0 flex items-center justify-center relative overflow-hidden min-h-[300px]">
              <div className="relative w-[85%] lg:w-full lg:-right-12 lg:top-8 rounded-xl lg:rounded-tl-xl overflow-hidden shadow-2xl border border-border/50 transition-transform duration-700 group-hover:-translate-y-2">
                <img
                  src={simpleSelfEmployScreenshot}
                  alt="Simple Self Employ Application Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

const stackSections = [
  {
    id: "backend",
    title: "APIs & Backend",
    summary: "C# · .NET · REST · Security",
    body: `A design-oriented backend engineer who leans heavily on proven patterns — dependency injection, repository pattern, and service abstractions keep code testable and maintainable. Comfortable with async/await and Task-based parallelism for high-throughput workloads. Strong foundation in security and authentication across OAuth, JWT, and identity providers. Primary professional stack is C# on .NET, building everything from REST APIs to background workers.`,
    tags: ["C#", ".NET", "REST APIs", "Dependency Injection", "Async / Tasks", "Parallelism", "OAuth", "JWT", "Security"]
  },
  {
    id: "frontend",
    title: "Frontend",
    summary: "React · TypeScript · Vite",
    body: `Builds reusable, maintainable component libraries in React/Vite/TypeScript — from design systems to full product UIs. Comfortable with standard patterns: typed API clients, TanStack Query for server state, and libraries like AG Grid, shadcn/ui, and Tailwind CSS for polished, accessible interfaces. Introduced React and TanStack Query adoption org-wide at Origami Risk.`,
    tags: ["React", "TypeScript", "Vite", "TanStack Query", "shadcn/ui", "Tailwind CSS", "AG Grid", "Framer Motion"]
  },
  {
    id: "database",
    title: "Database",
    summary: "SQL · ORM · NoSQL",
    body: `Strong SQL fundamentals and object-relational model design as the professional foundation — complex queries, schema design, and performance tuning across large datasets. Also worked with DynamoDB and MongoDB for document/key-value workloads, and blob storage like Azure Blob Storage and AWS S3 for object persistence.`,
    tags: ["SQL", "SQL Server", "Drizzle ORM", "DynamoDB", "MongoDB", "Azure Blob Storage", "AWS S3"]
  },
  {
    id: "cloud",
    title: "Cloud",
    summary: "AWS · Azure",
    body: `Professional experience across AWS services — most notably owning a zero-downtime migration of global email infrastructure using AWS SES, S3, Lambda, and DynamoDB to process millions of emails without issue. Also uses Secrets Manager, SQS for queueing, and AWS Bedrock for AI solutions and governance. Uses Azure for personal projects including the AssistMore application — Static Web Apps, Azure AI Foundry, and Azure-managed services.`,
    tags: ["AWS SES", "AWS Lambda", "AWS S3", "DynamoDB", "AWS Bedrock", "SQS", "Secrets Manager", "Azure Static Web Apps", "Azure AI Foundry"]
  },
  {
    id: "ai",
    title: "AI & Integrations",
    summary: "Cursor · Bedrock · Langfuse · Temporal",
    body: `Primarily develops with Cursor — leveraging it for skill creation, repo-level rules, automated code review, spec generation, and rapid feature development. Previously used GitHub Copilot in a similar capacity. On the integration side: Auth0 for enterprise authentication, Langfuse for AI prompt management and governance, Temporal for parallel long-running workflow execution, and AWS Bedrock for production AI inference pipelines.`,
    tags: ["Cursor", "GitHub Copilot", "Auth0", "Langfuse", "Temporal", "AWS Bedrock", "OpenAI API", "Azure OpenAI"]
  }
];

const TechStackSection = () => {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen(prev => prev === id ? null : id);

  return (
    <section className="py-16 md:py-24 border-t border-border/40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-widest text-primary uppercase mb-12">Tech Stack & Tools</motion.h2>

        <motion.div variants={fadeInUp} className="divide-y divide-border/40 border-t border-b border-border/40">
          {stackSections.map((section) => {
            const isOpen = open === section.id;
            return (
              <div key={section.id}>
                <button
                  onClick={() => toggle(section.id)}
                  data-testid={`toggle-stack-${section.id}`}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <div>
                    <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{section.title}</span>
                    {!isOpen && (
                      <span className="ml-3 text-sm text-muted-foreground font-normal">{section.summary}</span>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 max-w-3xl">
                        <p className="text-muted-foreground leading-relaxed mb-5">{section.body}</p>
                        <div className="flex flex-wrap gap-2">
                          {section.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="font-normal text-xs rounded-full px-3 py-1">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

const KSULogo = () => (
  <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-border/40 bg-white shadow-sm">
    <img
      src={kennesawStateLogo}
      alt="Kennesaw State University"
      className="w-10 h-10 object-contain"
      onError={(e) => {
        const t = e.currentTarget as HTMLImageElement;
        t.style.display = "none";
        const parent = t.parentElement;
        if (parent) {
          parent.style.background = "#c8a951";
          parent.innerHTML = '<span style="color:#fff;font-weight:700;font-size:16px;">KSU</span>';
        }
      }}
    />
  </div>
);

const PurdueLogo = () => (
  <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-border/40 bg-white shadow-sm">
    <img
      src={purdueLogo}
      alt="Purdue University"
      className="w-10 h-10 object-contain"
      onError={(e) => {
        const t = e.currentTarget as HTMLImageElement;
        t.style.display = "none";
        const parent = t.parentElement;
        if (parent) {
          parent.style.background = "#c28e0e";
          parent.innerHTML = '<span style="color:#000;font-weight:700;font-size:14px;">PU</span>';
        }
      }}
    />
  </div>
);

const EducationSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border/40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-widest text-primary uppercase mb-12">Education</motion.h2>

        <div className="space-y-8">
          <motion.div variants={fadeInUp} className="flex items-center gap-5 border-b border-border/40 pb-8">
            <KSULogo />
            <div className="flex-1 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-medium text-foreground">Master of Science, Software Engineering</h3>
                <p className="text-muted-foreground mt-1">Kennesaw State University</p>
              </div>
              <div className="text-sm font-medium text-primary shrink-0">2022</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-5">
            <PurdueLogo />
            <div className="flex-1 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-medium text-foreground">Bachelor of Science, Mechanical Engineering</h3>
                <p className="text-muted-foreground mt-1">Purdue University</p>
              </div>
              <div className="text-sm font-medium text-primary shrink-0">2019</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="pt-32 pb-16 border-t border-border/40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">Let's build something exceptional.</motion.h2>
        <motion.p variants={fadeInUp} className="text-muted-foreground mb-10 text-lg">
          Currently open to discussing new opportunities, architecture consulting, or just talking shop.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-6 mb-24">
          <a 
            href="mailto:tylermsharkey@gmail.com" 
            className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
            data-testid="footer-link-email"
          >
            <Mail className="w-4 h-4" />
            tylermsharkey@gmail.com
          </a>
          <a 
            href="https://linkedin.com/in/tylermsharkey" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
            data-testid="footer-link-linkedin"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn <ArrowUpRight className="w-3 h-3 opacity-50" />
          </a>
          <a 
            href="https://github.com/SharkeyDevelopment" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
            data-testid="footer-link-github"
          >
            <Github className="w-4 h-4" />
            GitHub <ArrowUpRight className="w-3 h-3 opacity-50" />
          </a>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <NavBar />
      <main className="max-w-5xl mx-auto px-6 sm:px-8">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AwardsSection />
        <ProjectsSection />
        <TechStackSection />
        <EducationSection />
        <Footer />
      </main>
    </div>
  );
}
