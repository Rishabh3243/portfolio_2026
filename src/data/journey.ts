import { JourneyMilestone } from '../types';

export const journeyMilestones: JourneyMilestone[] = [
  {
    step: 1,
    domain: 'Foundations',
    title: 'Software Development & Fundamentals',
    description: 'Mastered C++, Python, Data Structures & Algorithms, Linux environments, and core backend REST API architecture.',
    keyTech: ['Python', 'C++', 'DSA', 'Linux', 'Git', 'SQL'],
    icon: 'Terminal',
  },
  {
    step: 2,
    domain: 'Data Science',
    title: 'Machine Learning Foundations',
    description: 'Transitioned into statistical learning, predictive modeling, feature engineering, and neural network fundamentals with PyTorch.',
    keyTech: ['PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'EDA'],
    icon: 'BrainCircuit',
  },
  {
    step: 3,
    domain: 'Perception',
    title: 'Computer Vision & Deep Learning',
    description: 'Specialized in real-time object detection, OCR, segmentation, and tracking pipelines using YOLO models, PaddleOCR, and OpenCV.',
    keyTech: ['YOLOv8', 'OpenCV', 'PaddleOCR', 'MediaPipe', 'Tracking'],
    icon: 'Eye',
  },
  {
    step: 4,
    domain: 'Hardware Acceleration',
    title: 'Edge AI & Model Optimization',
    description: 'Pioneered low-latency on-device AI. Optimized models with INT8/FP16 quantization, TensorRT, and RKNN across Jetson, NXP, Rockchip, and Axelera AI.',
    keyTech: ['TensorRT', 'ONNX Runtime', 'RKNN', 'Jetson', 'NXP i.MX', 'Quantization'],
    icon: 'Cpu',
  },
  {
    step: 5,
    domain: 'Language & Retrieval',
    title: 'Generative AI & LLM Systems',
    description: 'Engineered privacy-first RAG pipelines with semantic chunking, ChromaDB persistent stores, sentence embeddings, and adaptive similarity query routers.',
    keyTech: ['Local LLMs', 'RAG', 'ChromaDB', 'LangChain', 'FastAPI'],
    icon: 'Sparkles',
  },
  {
    step: 6,
    domain: 'Autonomous Systems',
    title: 'Agentic Workflows & Multi-Agent Graphs',
    description: 'Building autonomous agent architectures using LangGraph, dynamic tool calling, cyclical reasoning graphs, and deterministic evaluation loops.',
    keyTech: ['LangGraph', 'Tool Calling', 'Agent Workflows', 'Function Calling'],
    icon: 'Workflow',
  },
];
