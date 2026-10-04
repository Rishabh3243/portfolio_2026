import { Experience } from '../types';

export const experienceData: Experience[] = [
  // --- Professional / Work Experience ---
  {
    id: 'universal-software-ai-engineer',
    role: 'AI Engineer',
    company: 'Universal Software',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Sep 2026 – Present',
    duration: 'Present',
    category: 'work',
    points: [
      'Engineering enterprise-grade LLM applications and Retrieval-Augmented Generation (RAG) architectures with multi-turn conversational grounding.',
      'Designing scalable vector indexing, semantic search, and similarity retrieval pipelines utilizing Pinecone vector database with hybrid search and metadata filtering.',
      'Building stateful agentic workflows, prompt routing, and tool invocation loops using LangChain and LangGraph for automated document synthesis and querying.',
      'Benchmarking and optimizing embedding models, chunking strategies, and retrieval precision to minimize hallucinations and maximize context relevance.'
    ],
    technologies: [
      'LLMs',
      'RAG',
      'Pinecone',
      'LangChain',
      'LangGraph',
      'Python',
      'Vector DB',
      'FastAPI'
    ],
    keyAchievements: [
      'Production deployment of enterprise RAG pipeline with Pinecone vector database',
      'Engineered low-latency multi-turn conversational agents with stateful LangGraph workflows'
    ],
  },
  {
    id: 'weboccult-junior-ai',
    role: 'Junior AI/ML Engineer',
    company: 'Weboccult Technologies',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Sep 2025 – Aug 2026',
    duration: '1 Year',
    category: 'work',
    points: [
      'Designed, trained, and deployed end-to-end Computer Vision inference pipelines for real-time Edge AI applications across diverse embedded hardware platforms.',
      'Built and optimized multi-task Computer Vision pipelines for classification, detection, segmentation, and OCR using YOLO and PaddleOCR, achieving real-time inference across CPU, GPU, and NPU runtimes.',
      'Engineered and benchmarked hardware-aware model optimization and quantization pipelines, improving inference throughput by 30% and reducing memory consumption by up to 50% on resource-constrained edge devices.',
      'Integrated multi-protocol video input streams including USB, IP (RTSP), CSI, and MIPI cameras, ensuring resilient video ingestion and fault-tolerant stream processing.',
      'Ported and optimized vision models across NXP i.MX 8M Plus, NVIDIA Jetson, Rockchip RKNN, Axelera AI, MediaTek Arbor SBC, Amobile G700, and Raspberry Pi IMX500, adapting inference pipelines to platform-specific hardware constraints.',
      'Developed and fine-tuned custom vision models (mobile phone detection, item/skittle detection, and container tracking) integrated with CPU-accelerated OCR engines.',
      'Automated Linux edge deployment workflows, environment setup, and pipeline monitoring using robust Bash/Shell scripts.',
      'Engineered showcase Edge AI prototypes exhibited at global technology expos including CES, Embedded World, and EuroShop.',
      'Conducted on-site client deployments, live validation, hardware calibration, and real-time troubleshooting under real-world operational constraints.'
    ],
    technologies: [
      'YOLO',
      'PaddleOCR',
      'TensorRT',
      'ONNX Runtime',
      'NVIDIA Jetson',
      'NXP i.MX 8M Plus',
      'Rockchip RKNN',
      'Axelera AI',
      'RTSP / MIPI / CSI',
      'Bash',
      'Docker'
    ],
    keyAchievements: [
      'Showcased Edge AI prototypes at CES, Embedded World, and EuroShop',
      'Achieved +30% throughput and up to 50% lower memory footprint via quantization',
      'Zero-latency multi-stream camera ingestion on edge hardware'
    ],
  },
  {
    id: 'weboccult-trainee-ai',
    role: 'Trainee AI/ML Engineer',
    company: 'Weboccult Technologies',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Jan 2025 – Aug 2025',
    duration: '8 Months',
    category: 'work',
    points: [
      'Worked with OpenCV, NLP, dataset annotation, and AI inference pipeline development on DeepX and Deeper-i NPUs.',
      'Developed and deployed an end-to-end Edge AI car parking solution for Japan IT Week in collaboration with Deeper-i, enabling real-time parking space detection and monitoring.',
      'Built FastAPI-based REST APIs for AI model inference and seamless integration with client application backends.'
    ],
    technologies: [
      'OpenCV',
      'DeepX NPU',
      'Deeper-i NPU',
      'FastAPI',
      'Python',
      'Dataset Annotation',
      'REST APIs'
    ],
    keyAchievements: [
      'Deployed live demo at Japan IT Week with Deeper-i',
      'Architected resilient inference REST microservices in FastAPI'
    ],
  },
  {
    id: 'edunet-intern',
    role: 'AI & ML Intern',
    company: 'Edunet Foundation',
    location: 'Anand, Gujarat, India',
    period: 'May 2024 – Jun 2024',
    duration: '2 Months',
    category: 'work',
    points: [
      'Built a Driver Behavior Monitoring System utilizing computer vision and neural networks for real-time driver state and facial landmark analysis.',
      'Developed image pre-processing pipelines and automated data scraping scripts using Python and OpenCV for efficient dataset collection and processing.'
    ],
    technologies: [
      'Python',
      'OpenCV',
      'Computer Vision',
      'Facial Landmarks',
      'Data Scraping'
    ],
    keyAchievements: [
      'Implemented real-time EAR (Eye Aspect Ratio) calculation for drowsiness detection'
    ],
  },

  // --- Voluntary & Collateral / Community Experience ---
  {
    id: 'gfg-chairperson',
    role: 'Chairperson — Student Chapter',
    company: 'GeeksforGeeks (GFG) Student Chapter, BVM',
    location: 'Anand, Gujarat, India',
    period: 'Aug 2023 – Jul 2024',
    duration: '1 Year',
    category: 'voluntary',
    points: [
      'Elected to lead a core executive committee of 25+ student developers organizing technical hackathons, bootcamps, and AI workshops across the institution.',
      'Conducted hands-on technical sessions covering Python programming, Data Structures & Algorithms, and introductory Computer Vision pipelines for 500+ student attendees.',
      'Fostered collaborative engineering peer groups, coordinated competitive programming leagues, and invited industry leaders for interactive technical seminars.'
    ],
    technologies: [
      'Python',
      'Data Structures',
      'Technical Mentorship',
      'Event Leadership',
      'Community Building'
    ],
    keyAchievements: [
      'Spearheaded 8+ campus technical events reaching 500+ engineering students',
      'Recognized for outstanding leadership and community engagement'
    ],
  },
  {
    id: 'hacktoberfest-contributor',
    role: 'Global Open-Source Contributor',
    company: 'Hacktoberfest — DigitalOcean & GitHub',
    location: 'Remote / Global',
    period: 'Oct 2022',
    duration: '1 Month',
    category: 'voluntary',
    points: [
      'Voluntarily contributed to open-source software repositories, submitting clean pull requests for developer tools and algorithm libraries.',
      'Authored, tested, and successfully merged 5 pull requests adhering to strict open-source review guidelines.',
      'Secured a verified global rank in the top 40,000 contributors worldwide.'
    ],
    technologies: [
      'Git',
      'GitHub',
      'Open Source',
      'Python',
      'Code Review'
    ],
    keyAchievements: [
      'Top 40,000 global ranking with 5 accepted and merged pull requests'
    ],
  },
  {
    id: 'bvm-tech-mentor',
    role: 'AI Community Mentor & Peer Lead',
    company: 'BVM Technical Club',
    location: 'Anand, Gujarat, India',
    period: 'Jul 2022 – Jun 2023',
    duration: '1 Year',
    category: 'voluntary',
    points: [
      'Mentored sophomore and freshman students in foundational Python scripting, Git version control, and Linux command-line development.',
      'Helped organize internal hackathons and guided teams in developing working machine learning prototypes for academic exhibitions.'
    ],
    technologies: [
      'Python',
      'Linux',
      'Git',
      'Machine Learning Mentorship'
    ],
    keyAchievements: [
      'Mentored 60+ junior peers in computer vision and software fundamentals'
    ],
  },
];
