# Centralized Data Directory (`src/data/json`)

All portfolio content is maintained here in clean, structured JSON format:

- `profile.json`: Personal identity, contact endpoints, hero text, and verification stats.
- `experience.json`: Industrial work and voluntary leadership experience timelines, company logos, and organization links.
- `projects.json`: Deep-tech systems catalog, technical metrics, verified silicon targets, and architecture points.
- `skills.json`: Multi-tier skill taxonomy covering programming, AI/ML, Computer Vision, Edge AI, GenAI, and DevOps.
- `achievements.json`: National laurels, hackathon championships, and academic distinctions.
- `education.json`: Collegiate degrees, coursework focus, and academic marks.
- `journey.json`: Chronological evolution milestones from software fundamentals to autonomous agents.

Each corresponding TypeScript file in `src/data/*.ts` imports from this folder and provides strict typing via `src/types/index.ts`.
