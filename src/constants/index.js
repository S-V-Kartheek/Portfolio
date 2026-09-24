export const myProjects = [
  {
    id: 16,
    title: "Lenny Growth Assistant",
    description:
      "A RAG chat assistant with hybrid lexical + vector search over Lenny's Podcast transcripts, tuned to a confidence threshold that hit 100% recall@6 and eliminated hallucinated answers by refusing low-confidence queries.",
    subDescription: [
      "Engineered hybrid retrieval (pgvector + Reciprocal Rank Fusion) across 40+ indexed episodes and 4.4k searchable, citation-linked passages.",
      "Diagnosed and fixed a production outage in the semantic search pipeline caused by a deprecated embedding model, then built retry/backoff, quota-aware batching, and automatic multi-provider LLM failover for resilience against third-party API instability.",
      "Hardened AI-generated content against XSS using allow-list HTML sanitization, strict CSP, and sandboxed rendering, validated by 129 adversarial security tests.",
      "Tech stack: React, TypeScript, FastAPI, PostgreSQL/pgvector, Multi-LLM (Gemini/Anthropic/Grok).",
    ],
    href: "https://github.com/S-V-Kartheek/Lenny-Growth-Assistant",
    logo: "",
    image: "/assets/projects/lenny-growth-assistant.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TypeScript", path: "" },
      { id: 3, name: "FastAPI", path: "" },
      { id: 4, name: "PostgreSQL", path: "" },
      { id: 5, name: "pgvector", path: "" },
    ],
  },
  {
    id: 11,
    title: "RepoTalk: Codebase Q&A Agent",
    description:
      "An agentic Q&A system that autonomously selects retrieval tools, validates context, and iterates on answers using ReAct-style reasoning over any GitHub codebase.",
    subDescription: [
      "Grounded responses in AST-aware retrieval (Tree-sitter chunking) and hybrid vector search so answers stay accurate to the actual code.",
      "Built the evaluation harness alongside the product: an automated scorer measuring answer faithfulness, relevancy, and context precision.",
      "Productionized with SSE token streaming, persistent multi-session chat history, Redis-backed rate-limiting, and OAuth-based authentication.",
      "Tech stack: React.js, Node.js, FastAPI, Python, Qdrant, PostgreSQL, Redis.",
    ],
    href: "https://github.com/S-V-Kartheek/repochat-ai",
    logo: "",
    image: "/assets/projects/portfolio-interface.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "FastAPI", path: "" },
      { id: 4, name: "Python", path: "/assets/logos/python.svg" },
      { id: 5, name: "Qdrant", path: "" },
      { id: 6, name: "PostgreSQL", path: "" },
      { id: 7, name: "Redis", path: "" },
    ],
  },
  {
    id: 14,
    title: "Explainable Fraud Detection Engine",
    description:
      "An agentic fraud investigation pipeline where an LLM autonomously generates SHAP-grounded explanation reports via RAG tool calls, achieving 0.92 ROC-AUC & 95% recall across 6.36M+ transactions.",
    subDescription: [
      "Built a risk-scoring model (LightGBM) with SHAP-based explanations so analysts could trust and act on every flagged case, scoring transactions in real time.",
      "Delivered a full analyst workflow — batch CSV scanning, a risk simulator, model benchmarking, and executive dashboards — turning model output into decisions non-technical stakeholders could act on.",
      "Tech stack: FastAPI, React.js, Python, LightGBM, ChromaDB.",
    ],
    href: "https://github.com/S-V-Kartheek",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "FastAPI", path: "" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "LightGBM", path: "" },
      { id: 5, name: "ChromaDB", path: "" },
    ],
  },
  {
    id: 15,
    title: "AI Sales Agent",
    description:
      "An autonomous conversational agent (LLaMA-3.1 + RAG over Pinecone) that independently handles real-time Q&A and books demos over WebSocket.",
    subDescription: [
      "Grounded every reply in an indexed knowledge base so answers stay accurate instead of hallucinated.",
      "Designed a node-based conversation flow (welcome → qualify → Q&A → scheduling) with typed session state and persistent context across long, multi-turn conversations.",
      "Added structured logging, Zod validation, and CRM persistence via MongoDB for production reliability.",
      "Tech stack: Node.js, TypeScript, Express, WebSockets, LLaMA-3.1, RAG, Pinecone, MongoDB.",
    ],
    href: "https://github.com/S-V-Kartheek",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "TypeScript", path: "" },
      { id: 3, name: "Express.js", path: "" },
      { id: 4, name: "LLaMA-3.1", path: "" },
      { id: 5, name: "Pinecone", path: "" },
    ],
  },
  {
    id: 12,
    title: "SmartCRM Platform",
    description:
      "A CRM built end to end — bulk CSV ingestion with row-level validation, rule-based audience segmentation, and AI-assisted campaign drafting.",
    subDescription: [
      "Built REST API routes for customer and order CRUD with bulk CSV ingestion and row-level validation.",
      "Implemented rule-based audience segmentation and AI-assisted campaign drafting.",
      "Owned the full SDLC solo, from schema/ERD design to live deployment on Vercel and Render, with campaign analytics dashboards tracking funnel metrics end-to-end via Docker Compose.",
    ],
    href: "https://github.com/S-V-Kartheek/xeno-crm-platform",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "TypeScript", path: "" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "Next.js", path: "" },
      { id: 4, name: "React", path: "/assets/logos/react.svg" },
      { id: 5, name: "PostgreSQL", path: "" },
      { id: 6, name: "Prisma", path: "" },
      { id: 7, name: "Docker", path: "/assets/logos/docker.svg" },
    ],
  },
  {
    id: 13,
    title: "AI Legal Assistance Platform",
    description:
      "Architected a service-oriented legal assistance platform with 8 deployed microservices and a shared React + TypeScript frontend.",
    subDescription: [
      "Built microservices for Law Bot, Chat, Police Portal, Auth, Multilingual, Therapy, Stego, and AI Avatar.",
      "Implemented real-time WebSocket chat with reactions, typing indicators, and online tracking.",
      "Created Citizen/Police FIR dashboards with complaint analytics and responsive UI, cutting manual legal review time by 50%.",
    ],
    href: "https://github.com/S-V-Kartheek/AI-Powered-Legal-Assistance-Tool-Dual-LLM-Architecture-for-Central-State-Laws",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "Express.js", path: "" },
      { id: 4, name: "FastAPI", path: "" },
      { id: 5, name: "Socket.io", path: "/assets/logos/socketio.svg" },
      { id: 6, name: "TypeScript", path: "" },
      { id: 7, name: "CSS", path: "/assets/logos/css3.svg" },
    ],
  },
  {
    id: 1001,
    title: "Her Haven - Women's Health and Safety Platform",
    description:
      "Developed a comprehensive platform featuring AI avatar, health tracking, secure chat, steganography for secret messages, and therapy support.",
    subDescription: [
      "AI avatar, health tracking, secure chat, steganography for secret messages, therapy support."
    ],
    href: "https://github.com/S-V-Kartheek/Her-Haven",
    logo: "",
    image: "/assets/projects/auth-system.jpg", // Placeholder image
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 4, name: "Socket.IO", path: "/assets/logos/socketio.svg" },
      { id: 5, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 6, name: "Pandas", path: "/assets/logos/pandas.svg" },
      { id: 7, name: "Matplotlib", path: "/assets/logos/matplotlib.svg" },
    ],
  },
  {
    id: 4,
    title: "Smart Agri Platform", 
    description:
      "A smart agriculture platform with AI-powered crop disease detection, plant and crop identification, and personalized recommendations. Includes a modern web UI and secure user management for efficient farm operations.",
    subDescription: [
      "AI crop disease detection, plant identification, crop suitability analysis, secure login, and a responsive web interface."
    ],
    href: "https://github.com/S-V-Kartheek/AgriSage-AI-Powered-Smart-Farming-System",
    logo: "",
    image: "/assets/projects/farmeasy.jpg", // Make sure to add this image to your assets
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 3, name: "TensorFlow", path: "/assets/logos/tensorFlow.svg" },
      { id: 4, name: "Keras", path: "/assets/logos/Keras.svg" },
      { id: 5, name: "OpenCV", path: "/assets/logos/OpenCV.svg" },
      { id: 6, name: "NumPy", path: "/assets/logos/NumPy.svg" },
      { id: 7, name: "Kibana", path: "/assets/logos/Kibana.svg" },
      { id: 8, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 9, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 10, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 1003,
    title: "Attendance Automation with Face Recognition",
    description:
      "Built a web-based system for faculty to log in, take attendance using face recognition, and send absentee emails with a click. Integrated secure email authentication and real-time attendance tracking.",
    subDescription: [
      "Web-based attendance with face recognition.",
      "Secure email authentication and real-time tracking."
    ],
    href: "https://github.com/S-V-Kartheek/Attendance-System-Using-Face-Recognition",
    logo: "",
    image: "/assets/projects/attendance.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/face.svg" },
      { id: 4, name: "React", path: "/assets/logos/html5.svg" },
      { id: 5, name: "Nodejs", path: "/assets/logos/css3.svg" },
      { id: 6, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 1002,
    title: "Online Payment Fraud Detection",
    description:
      "Developed a machine learning pipeline to detect fraudulent transactions. Created an interactive Streamlit-based interface for seamless user interaction.",
    subDescription: [
      "Machine learning pipeline for fraud detection.",
      "Streamlit-based user interface."
    ],
    href: "https://github.com/S-V-Kartheek/100DaysOfPython",
    logo: "",
    image: "/assets/projects/fraud-detect.png",
    tags: [
      { id: 1, name: "TensorFlow", path: "/assets/logos/tensorFlow.svg" },
      { id: 2, name: "Scikit-learn", path: "/assets/logos/scikit-learn.svg" },
      { id: 3, name: "Streamlit", path: "/assets/logos/streamlit.svg" },
    ],
  },
  {
    id: 6,
    title: "pyfun-arcade",
    description: "A platform featuring 30+ single and multiplayer games available to play.",
    subDescription: [
      "Includes games like Pong, Blackjack, Hangman, Caesar Cipher, modern Turtle games, Snake, and more."    
    ],
    href: "https://github.com/S-V-Kartheek/100DaysOfPython",
    logo: "",
    image: "/assets/projects/spotify-clone.jpg", // Place your screenshot here
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "A modern, interactive portfolio website to showcase my projects, skills, and experience. Built with React, Vite, Tailwind CSS, and Three.js for a beautiful and responsive user experience.",
    subDescription: [
      "3D visuals, animated UI, project gallery, contact form, and responsive design."
    ],
    href: "", // Add your GitHub link here if available
    logo: "",
    image: "/assets/projects/portfolio.jpg", // Place your screenshot here
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Three.js", path: "/assets/logos/threejs.svg" },
      { id: 5, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 6, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 7, name: "CSS", path: "/assets/logos/css3.svg" },
    ],
  },
 
];

export const mySocials = [
  {
    name: "Phone",
    href: "tel:+919392684602",
    icon: "/assets/socials/whatsApp.svg", // You can use a phone or WhatsApp icon
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kartheek-sanka",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/S-V-Kartheek",
    icon: "/assets/logos/github.svg",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    job: "Evobi Automations Private Limited",
    date: "Jun. 2026 - Present",
    contents: [
      "Scoped requirements directly with the mobile team and engineered an automated CI/CD pipeline for mobile app builds — new builds are tested and pushed to production with zero manual intervention, cutting release turnaround time.",
      "Partnered with finance stakeholders to build an ERP portal integrated with Tally, automating data synchronization, invoice generation, and quotation creation to cut manual data entry and turnaround time.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    job: "IIIT Gwalior",
    date: "Jan. 2026 - Jun. 2026",
    contents: [
      "Developed a multimodal graph-based recommendation system (GCN, VGAE, cross-attention hybrid filtering) with a professor-led research team.",
      "Outperformed state-of-the-art baselines on personalized ranking benchmarks; resulting paper accepted at the FICTA 2026 International Conference.",
    ],
  },
  {
    title: "AI Engineer Intern",
    job: "Infosys Springboard",
    date: "Aug. 2025 - Oct. 2025",
    contents: [
      "Built and deployed a full-stack document processing platform via REST APIs, ingesting PDF, DOC, and image files through OCR, NLP & TTS pipelines, unit tested across all stages before production deployment.",
      "Designed a citation-aware RAG pipeline with semantic chunking and embedding-based retrieval, achieving 85% answer relevance across a multi-tenant document corpus by having the system validate the accuracy of its own context before responding.",
      "Presented progress in weekly mentor demo reviews and re-scoped deliverables mid-sprint based on feedback.",
    ],
  },
  {
    title: "Research Intern",
    job: "SRM University AP",
    date: "Jun. 2025 - Aug. 2025",
    contents: [
      "Developed a full-stack legal document analysis platform with a React frontend and modular REST APIs.",
      "Orchestrated a service-oriented backend for document parsing, jurisdiction routing, and Q&A.",
    ],
  },
];
export const reviews = [
  {
    name: "Prateek",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Shivam",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Rahul",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "karthik Mehra",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Mahesh",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
