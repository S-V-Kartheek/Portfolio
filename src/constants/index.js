export const myProjects = [
  {
    id: 11,
    title: "RepoTalk",
    description:
      "Engineered a full-stack Q&A platform over any GitHub codebase with SSE token streaming, persistent chat history, rate-limiting, and OAuth authentication.",
    subDescription: [
      "Built an AST-aware code retrieval pipeline using Tree-sitter chunking and hybrid vector search.",
      "Added automated scoring for answer faithfulness, relevancy, and context precision in production.",
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
    id: 12,
    title: "SmartCRM Platform",
    description:
      "Designed and implemented a CRM platform with customer/order APIs, CSV ingestion, audience segmentation, campaign analytics, and AI-assisted campaign drafting.",
    subDescription: [
      "Built REST API routes for customer and order CRUD with bulk CSV ingestion and row-level validation.",
      "Implemented rule-based audience segmentation and AI-assisted campaign drafting.",
      "Built analytics dashboards with funnel metrics and AI retrospectives, deployed using Docker Compose on Vercel and Render.",
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
    href: "www.linkedin.com/in/kartheek-sanka",
    icon: "/assets/socials/linkedIn.svg",
  }
];

export const experiences = [
  {
    title: "Bachelor of Technology (B.Tech.) in Computer Science and Engineering",
    job: "SRM Institute of Science and Technology, Amaravati, India",
    date: "2023 – 2027",
    contents: [
      "Pursuing B.Tech. in Computer Science and Engineering at SRM University, Amaravati.",
      "Core coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, and Machine Learning.",
      "Actively involved in coding competitions, hackathons, and technical clubs to enhance practical and teamwork skills.",
      "Developed strong foundations in programming (C, C++, Python, Java, JavaScript) and problem-solving."
    ],
  },
  {
    title: "Research Intern (GenAI Powered Legal Assistance with Dual LLM Architecture,)",
    job: "SRM Institute of Science and Technology, Amaravati, India",
    date: "2024 – Present",
    contents: [
      "Designed and implementing a novel dual Large Language Model (LLM) architecture** for improved contextual understanding and nuanced responses to complex legal queries, leveraging advanced Generative AI and Natural Language Processing (NLP) techniques.",
      "Utilized key technologies and tools** such as Python, TensorFlow/PyTorch, Hugging Face Transformers, cloud services like Google Cloud AI."
    ],
  }
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
