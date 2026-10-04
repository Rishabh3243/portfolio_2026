# Rishabh Parmar — AI/ML Developer & Edge AI Engineer Portfolio

A sleek, modern, multipage developer portfolio engineered for **Rishabh Parmar**, an **AI/ML Developer & Edge AI Engineer**.

Built specifically to showcase expertise in **Computer Vision, Edge AI, Generative AI, LLMs, AI Agents, and Hardware-Aware Model Quantization (TensorRT, ONNX Runtime, RKNN, TFLite)**.

---

## ⚡ Architecture & Tech Stack

* **Architecture:** Multipage Single Page Application (SPA) with zero external routing overhead. Supports both clean URLs (`/`, `/about`, `/projects`, `/ai-lab`, `/experience`, `/contact`) and hash fallbacks.
* **Framework:** React 18 + Vite + TypeScript
* **Styling:** Tailwind CSS (Minimalist dark aesthetic, deep charcoal matte panels, subtle borders, high-contrast typography)
* **Motion & Transitions:** Framer Motion (page transitions + micro-interactions; respects `prefers-reduced-motion`)
* **Icons:** Lucide React
* **Deployment & Containerization:** Multi-stage Docker build + Nginx (Gzip compression, static asset caching, SPA routing)

---

## 📁 Multipage Project Structure

```text
portfolio_2026/
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── avatar.svg                    # Cyber-neural developer avatar schematic
│   │   ├── projects/
│   │   │   ├── localdoc-ai.svg               # LocalDoc AI RAG & ChromaDB schematic
│   │   │   ├── virtudrum.svg                 # VirtuDrum 3D hand tracking & 60 FPS HUD
│   │   │   ├── driver-safety.svg             # Driver safety & facial landmark EAR HUD
│   │   │   ├── edge-parking.svg              # Japan IT Week DeepX/Deeper-i NPU parking
│   │   │   ├── edge-engine.svg               # Multi-platform Jetson/NXP/Rockchip engine
│   │   │   └── agent-orchestrator.svg        # LangGraph stateful agent execution graph
│   │   ├── experience/
│   │   │   ├── weboccult.svg                 # Weboccult Technologies brand emblem
│   │   │   └── edunet.svg                    # Edunet Foundation brand emblem
│   │   └── achievements/
│   │       ├── sih-2023.svg                  # SIH 2023 National 1st Place Trophy
│   │       ├── nptel.svg                     # NPTEL Star 12x certification emblem
│   │       ├── cvm-award.svg                 # CVM Gaurav Puraskar medal graphic
│   │       └── gfg-chairperson.svg           # GeeksforGeeks BVM Chairperson badge
│   │
│   ├── resume/
│   │   ├── README.txt                        # Resume placement instructions
│   │   └── Rishabh_Parmar_Resume.pdf         # Resume linked directly in navigation & hero
│   │
│   ├── favicon.svg                           # Custom neural processor SVG icon
│   ├── og-image.svg                          # Social share card (1200x630 preview)
│   ├── robots.txt                            # Search engine crawler permissions
│   └── sitemap.xml                           # Search engine indexing sitemap
│
├── src/
│   ├── context/
│   │   └── RouterContext.tsx                 # Zero-dependency SPA multipage router
│   │
│   ├── pages/
│   │   ├── HomePage.tsx                      # Focused landing overview (Hero, Bento Focus, Highlights, CTA)
│   │   ├── AboutPage.tsx                     # Bio, Engineering Directives, Skills, Education, & Journey
│   │   ├── ProjectsPage.tsx                  # Full projects catalog with filters, search, and metrics
│   │   ├── AILabPage.tsx                     # Edge AI Lab, Local RAG Simulator, & LangGraph Agents
│   │   ├── ExperiencePage.tsx                # Career timeline (Weboccult, Edunet) & SIH 2023 laurels
│   │   └── ContactPage.tsx                   # Dedicated contact hub with client-validated form
│   │
│   ├── components/
│   │   ├── Navbar.tsx                        # Floating pill navigation with active page indicator
│   │   ├── Footer.tsx                        # Minimalist footer with page navigation & social links
│   │   ├── Hero.tsx                          # Focused hero with status badge & primary actions
│   │   ├── AIStack.tsx                       # 4 focus cards linking directly to the AI Lab
│   │   ├── About.tsx                         # Narrative background & core engineering directives
│   │   ├── Projects.tsx                      # Projects catalog module with live category filtering
│   │   ├── ProjectCard.tsx                   # Reusable card with metrics & silicon tags
│   │   ├── EdgeAI.tsx                        # Edge AI Lab & target silicon matrix
│   │   ├── GenAI.tsx                         # Generative AI & Interactive RAG simulator
│   │   ├── AIAgents.tsx                      # LangGraph Autonomous Agent architecture
│   │   ├── ComputerVision.tsx                # "What I Build" 5-domain technical breakdown
│   │   ├── Experience.tsx                    # Career timeline module
│   │   ├── Achievements.tsx                  # SIH 2023 Winner, NPTEL Star, CVM Puraskar
│   │   ├── Education.tsx                     # B.Tech at BVM & higher secondary credentials
│   │   ├── Journey.tsx                       # Technical journey: Foundations ➔ Edge ➔ Agents
│   │   ├── Contact.tsx                       # Validated contact form & direct channels
│   │   ├── Skills.tsx                        # Categorized skills with search & domain filters
│   │   └── SectionHeading.tsx                # Reusable heading with technical eyebrow badge
│   │
│   ├── data/
│   │   ├── profile.ts                        # Bio, contacts, stats, & tech badges
│   │   ├── skills.ts                         # Categorized technical skills dataset
│   │   ├── projects.ts                       # Real CV, Edge AI, GenAI & Agent projects
│   │   ├── experience.ts                     # Career timeline details & expo achievements
│   │   ├── achievements.ts                   # National hackathon & academic laurels
│   │   ├── education.ts                      # Academic degrees & credentials
│   │   └── journey.ts                        # 6-phase engineering evolution milestones
│   │
│   ├── hooks/
│   │   └── useReducedMotion.ts               # Accessibility: respects OS reduced motion settings
│   │
│   ├── lib/
│   │   └── utils.ts                          # ClassName merger (clsx + tailwind-merge)
│   │
│   ├── types/
│   │   └── index.ts                          # Strongly typed TypeScript data contracts
│   │
│   ├── App.tsx                               # Router-powered application entry
│   ├── main.tsx                              # React DOM root entry
│   └── index.css                             # Tailwind layers & sleek minimalist card utilities
│
├── .dockerignore                             # Docker build context exclusions
├── .gitignore                                # Git ignore file for Node and build artifacts
├── Dockerfile                                # Multi-stage production container
├── docker-compose.yml                        # Docker Compose service definition (port 3000:80)
├── nginx.conf                                # Nginx SPA fallback, caching & gzip
├── index.html                                # SEO tags, Open Graph, & font preloading
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🗺️ Multipage Routing Map

| Route | Page | Purpose & Content |
| :--- | :--- | :--- |
| **`/`** | **Home** | **Focused, uncluttered overview**: Developer title, status badge, concise bio, 4-card focus bento, key stats, top 3 featured projects, and contact banner. |
| **`/about`** | **About** | Complete engineering background, core directives, categorized skills directory, B.Tech credentials, and the 6-stage technical evolution journey. |
| **`/projects`** | **Projects** | Full project directory with category tabs (`All`, `Computer Vision`, `Edge AI`, `GenAI`, `LLM`, `AI Agents`), live search, verified silicon badges, and metrics. |
| **`/ai-lab`** | **AI Lab** | Dedicated deep-dive: **Edge AI Lab** (Jetson, NXP, Rockchip, Axelera, RPi), **Interactive Local RAG Simulator**, **LangGraph Agent State Machine**, and 5-domain CV pipelines. |
| **`/experience`** | **Experience** | Career timeline at Weboccult Technologies and Edunet Foundation, global expo exhibits (CES, Embedded World, EuroShop, Japan IT Week), and SIH 2023 National Winner laurels. |
| **`/contact`** | **Contact** | Dedicated reach hub with direct email/phone/LinkedIn links, 1-click email copying, and client-side validated inquiry form. |

---

## 🐳 Docker Deployment

The application features a production-ready multi-stage Docker build:

* **Stage 1 (Builder):** Uses `node:20-alpine` to install dependencies and compile the production bundle via `npm run build`.
* **Stage 2 (Runner):** Uses `nginx:1.25-alpine` to serve static assets from `dist/` with gzip compression, caching headers, and SPA routing (`try_files $uri $uri/ /index.html;`).

### Running with Docker Compose:

```bash
docker compose up -d --build
```

The website will be accessible at: `http://localhost:3000`

---

## 💻 Local Development Setup

When you are ready to run the project locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📄 License

© 2026 Rishabh Parmar. Created for professional AI/ML engineering portfolio demonstration.
