// Every visible string on the page lives here so it can be audited against
// DESIGN.md section 0 (verified facts) and section 1 (binding copy rules).
// No em-dashes or en-dashes anywhere. Plain hyphens only.

export const links = {
  startFree: "https://automaton-memory.com/Automaton-Abots.html#free-tier",
  whitepaper: "https://automaton-memory.com/whitepaper.html",
  github: "https://github.com/plundrpunk/automaton-abotv2",
  discord: "https://discord.gg/8fsh4TUw4",
  site: "https://automaton-memory.com/",
} as const;

// CTA labels: one label per intent, page-wide.
export const cta = {
  startFree: "Start free",
  whitepaper: "Read the whitepaper",
  discord: "Join the Discord",
  github: "View on GitHub",
} as const;

export const masthead = {
  wordmark: "Automaton Memory System",
  nav: [
    { label: "The argument", href: "#the-argument" },
    { label: "Evidence", href: "#evidence" },
    { label: "Rates", href: "#rates" },
  ],
  menuOpen: "Menu",
  menuClose: "Close",
  skip: "Skip to content",
} as const;

export const headline = {
  dateline: "A launch note from Dead Reckoning Foundry. September 2026.",
  title: "The next run should start where the last one stopped.",
  deck: "Automaton Memory System keeps what agents learn, retrieves it inside the right scope, and turns repeated work into reviewed procedure.",
  figure: {
    label: "Fig. 1.",
    caption: "Dead reckoning: each fix is written down so the next leg starts from a known position, not a guess.",
    alt: "A nautical chart on a wooden table with brass dividers, a parallel rule, and a pencil track of plotted fixes. Monochrome photograph.",
  },
} as const;

export const coldStart = {
  heading: "Every session begins with amnesia.",
  paragraphs: [
    "An agent finishes a task, learns something useful, and the session ends. The lesson ends with it. The next run repeats the investigation, meets the same dead end, and asks the same questions.",
    "The cost is not only tokens. It is trust. A team cannot rely on a system that cannot say what it knew, what it did, and why it did it.",
  ],
  pullQuote: "A run that leaves nothing behind cannot be improved.",
} as const;

export const tiers = {
  heading: "What is worth keeping.",
  figure: {
    label: "Fig. 2.",
    caption: "The three tiers of H-MEM and their retention.",
    ariaLabel: "Three horizontal bands separated by rules: Episodic, Semantic, and Procedural memory, each with what it holds and how long it is retained.",
    bands: [
      {
        name: "Episodic",
        what: "What happened.",
        kinds: "Events, sessions, decisions.",
        retention: "Retained 730 days",
      },
      {
        name: "Semantic",
        what: "What it means.",
        kinds: "Concepts and facts.",
        retention: "Kept until superseded",
      },
      {
        name: "Procedural",
        what: "How to do it again.",
        kinds: "Reviewed procedures and automata.",
        retention: "Usage-based retention",
      },
    ],
  },
  paragraphs: [
    "Episodic memory is what happened: sessions, events, decisions, and outcomes. It is retained for 730 days by default.",
    "Semantic memory is what it means: durable knowledge, concepts, and facts. It is kept until it is superseded.",
    "Procedural memory is how to do it again: reviewed procedures and executable automata. Retention follows usage, and each automaton carries a Wilson-score confidence interval.",
    "Keeping them distinct is what lets retrieval bring back the right kind of record.",
  ],
} as const;

export const loop = {
  heading: "How a run becomes a record.",
  figure: {
    label: "Fig. 3.",
    caption: "The operating loop. Tool names are the real MCP surface.",
    ariaLabel: "A circle with four nodes, Recall, Act, Record, and Resume, read clockwise. The arcs between them carry the tool names search_memories, execute_automaton, create_memory, create_continuation, and claim_continuation.",
    nodes: ["Recall", "Act", "Record", "Resume"],
    arcs: {
      recallToAct: "search_memories",
      actToRecord: "execute_automaton",
      recordToResume: "create_memory",
      resumeToRecall: ["create_continuation", "claim_continuation"],
    },
  },
  steps: [
    {
      verb: "Recall.",
      text: "A session bootstraps and searches memory before it acts. Dense vectors and BM25 keyword search run together, fused by reciprocal rank, and applied after the tenant, project, agent, and connector scope rules.",
    },
    {
      verb: "Act.",
      text: "The agent works with grounded context. Execution and permissions stay with your runtime or with AOS. Memory informs. It does not authorize.",
    },
    {
      verb: "Record.",
      text: "Outcomes are written back through admission control: seven checks before anything becomes durable. Memory links keep the provenance, from prerequisites and references to decisions, sources, and owners.",
    },
    {
      verb: "Resume.",
      text: "A continuation hands the next session its goal, next action, blockers, and priority memories. The next session claims it and continues from there.",
    },
  ],
} as const;

export const evidence = {
  heading: "What the numbers say, and what they do not.",
  benchmark: {
    note: "Table 1.",
    noteText: "MemoryArena, held-out math tasks 10 to 19. Judge: claude-sonnet-4-6. March 25, 2026.",
    caption: "Same model, same tasks. The memory layer is the variable.",
    columns: ["Condition", "Success rate", "Path score", "Cost"],
    rows: [
      { condition: "AMS H-MEM", success: "0.50", path: "0.7764", cost: "$33.28" },
      { condition: "Pure long-context baseline", success: "0.30", path: "0.5532", cost: "$41.46" },
    ],
    delta: { condition: "Delta", success: "+20 points", path: "+0.22", cost: "19.7% lower" },
    paragraph:
      "Same model, same tasks: the memory layer is the only variable. On the same 10 tasks that is a 67% higher task-success rate with 20% lower run cost. Broader-domain claims are left off this page until they replicate.",
  },
  safety: {
    note: "Table 2.",
    noteText: "Memory-safety harness across three attack families: poisoning, cross-tenant leakage, extraction.",
    caption: "Attack outcomes by memory configuration.",
    columns: ["Condition", "Poisoning", "Leakage", "Blocked"],
    rows: [
      { condition: "Naive memory", poisoning: "1.00", leakage: "1.00", blocked: "0.00" },
      { condition: "User-scoped memory", poisoning: "0.50", leakage: "0.00", blocked: "0.80" },
      { condition: "Defended memory", poisoning: "0.00", leakage: "0.00", blocked: "1.00" },
    ],
    paragraph: "User scoping blocks cross-tenant leakage but leaves same-user poisoning. Defended writes close the documented gap.",
    caveat: "Synthetic offline harness. No third-party audit or certification is implied.",
  },
} as const;

export const boundary = {
  statement: "Memory is not permission.",
  paragraph:
    "Automaton Memory System holds memory. The Automaton Operating System, AOS, governs execution: policy, trust tiers T0 to T3, scoped credentials, approvals, and audit trails. A remembered procedure never grants the right to act.",
  archive: {
    label: "Fig. 4.",
    caption: "Provenance. Every record keeps its source.",
    alt: "An open drawer of a wooden card catalog, filled with typed index cards. Monochrome photograph.",
  },
  scoreboard: {
    label: "Fig. 5.",
    caption: "Bayesian trust scoreboard in the Automaton dashboard. Wilson-score intervals tighten as repeated work runs. Snapshot, April 2026.",
    alt: "Screenshot of the Automaton dashboard Smart Actions page: a Bayesian trust scoreboard with total actions, total executions, success rate, and per-category success rates with confidence interval widths.",
  },
} as const;

export const rates = {
  heading: "Rates.",
  columns: ["Tier", "Monthly", "Includes"],
  rows: [
    { tier: "Free", monthly: "$0", includes: "2 custom ABots, 100 memories" },
    { tier: "Professional", monthly: "$199", includes: "100,000 memories, 500 automata" },
    { tier: "Runtime add-on (AOS)", monthly: "+$299", includes: "Orchestration, approvals, traces" },
    { tier: "Enterprise", monthly: "from $999", includes: "Multi-tenancy, RBAC, self-host" },
  ],
  pilot: "Design-partner pilot: 3 slots, $500 per month for 90 days.",
  interfaces: {
    eyebrow: "Interfaces",
    paragraph:
      "Automaton Memory System is headless. It reaches Claude Code, Codex, Cursor, Slack agents, and custom ABots through MCP, REST, and CLI.",
  },
} as const;

export const colophon = {
  published: "Published by Dead Reckoning Foundry, September 2026.",
  setIn: "Set in Newsreader and IBM Plex Mono.",
  siteLabel: "automaton-memory.com",
  copyright: "© 2026 Dead Reckoning Foundry",
} as const;
