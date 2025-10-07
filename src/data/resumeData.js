// Jerry Wang 個人履歷資料配置文件
// 您可以在這裡輕鬆編輯所有個人資訊

export const resumeData = {
  // 個人基本資訊
  personal: {
    firstName: "Jerry",
    lastName: "Wang",
    title: "Jerry Wang - AI Researcher & Software Engineer",
    address: "Taipei, Taiwan",
    phone: "",
    email: "111306078@g.nccu.edu.tw",
    description: "AI Researcher specializing in Deep Learning, Information Retrieval, Adversarial Machine Learning, and Trustworthy AI. Currently conducting research in Graph RAG systems and developing novel approaches for Theory of Mind in Large Language Models.",
    profileImage: "assets/img/ted_cover.jpg",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/teddyagee", icon: "fab fa-linkedin-in" },
      { platform: "github", url: "https://github.com/pen9rum", icon: "fab fa-github" },
      { platform: "google", url: "https://scholar.google.com/citations?user=NzBilksAAAAJ&hl=zh-TW", icon: "fab fa-google-scholar" },
      { platform: "cv", url: "https://pen9rum-github-io.vercel.app", icon: "fas fa-id-card" }
    ]
  },

  // 最新消息
  news: [
    {
      date: "Sep. 2025",
      content: "Our paper Observer, not Player is accepted by NeurIPS Law workshop 2025!"
    },
    {
      date: "Jun. 2025",
      content: "Our paper Attention Tracker is accepted by KDD prompt optimization workshop 2025!"
    },
    {
      date: "Sep. 2024",
      content: "Our paper Social Temperature is accepted by IEEE ICS main track 2024!"
    }
  ],

  // 工作與研究經驗
  experience: [   
    {
      title: "Research Assistant",
      company: "Graph Lab, Stony Brook University",
      period: "Aug. 2025 – Present",
      description: "Advisor: Prof. Tengfei Ma. Developing CocoRAG — Dynamic Graph RAG system enhanced with improved Chain-of-Thought prompting (Coconut) for more robust reasoning. Targeted to evaluate on Knowledge Graph QA tasks.",
      image: "/assets/img/kdd_2025.jpg",
    },
    {
      title: "Research Assistant",
      company: "Reinforcement Gaming Lab, Academia Sinica",
      period: "July 2025 – Present",
      description: "Advisor: Prof. Ti-Rong Wu. Developing a stochastic MCTS-based Go Variant using Deep Reinforcement Learning. Modified traditional MCTS tree architecture to accommodate multi-turn gaming environments under AlphaZero Structure.",
      image: "/assets/img/kdd_2025.jpg",
    },
    {
      title: "Research Assistant",
      company: "Software Security Lab, NCCU",
      period: "July 2024 – Present",
      description: "Advisor: Prof. Fang Yu. Developed DeRAG, a novel black-box attack leveraging Differential Evolution for adversarial prompt optimization in RAG systems. Achieved state-of-the-art attack success (100%@Top-10 on MS MARCO, >70%@Top-20 on SciFact).",
      image: "/assets/img/kdd_2025.jpg",
    },
    {
      title: "Research Assistant",
      company: "Future Media Lab, NCCU",
      period: "Jan. 2024 – Sep. 2025",
      description: "Advisor: Prof. Chen, Lyn Chao-ling. Developed real-time social activity monitoring system using deep learning multi-modal models including sound and emotion recognition with YOLO and DeepFace. Created BEARing framework improving NBA player performance prediction accuracy by over 10%.",
      image: "/assets/img/kdd_2025.jpg",
    },
    {
      title: "QA Engineer (Accelerator Program)",
      company: "Binance - AI and Data Service Team",
      period: "Sep. 2025 – Present",
      description: "Evaluating risk check agent for AI safety, created over 1,000 test cases and auto pipeline on AWS SageMaker. Designed red teaming single-turn and multi-turn prompts to attack internal bot for bot robustness.",
      image: "/assets/img/kdd_2025.jpg",
    },
    {
      title: "Testing Engineer Intern",
      company: "Carousell",
      period: "Feb. 2025 – Jun. 2025",
      description: "Implemented automation testing using Golang and Jenkins to enhance testing efficiency by 12%. Optimized Trinity for iOS and Android, streamlining version control and deployment using Gemini and Copilot.",
      image: "/assets/img/kdd_2025.jpg",
    },
    {
      title: "Software Engineer Intern",
      company: "Delta Electronics",
      period: "Jan. 2024 – Feb. 2024",
      description: "Built Python-based automation system for car motoring pipeline data evaluation and report generation, enhancing efficiency by 15% across the entire workflow with C language for experiment mocking.",
      image: "/assets/img/kdd_2025.jpg",
    }
  ],

  // 教育背景
  education: [
    {
      school: "National ChengChi University (NCCU)",
      degree: "Bachelor of Commerce in Management Information Systems",
      field: "Double Major in Bachelor of Science in Artificial Intelligence Applications",
      period: "Sept. 2022 – Present",
      gpa: "3.92/4.0 (CS courses GPA: 4.0)",
      image: "https://upload.wikimedia.org/wikipedia/zh/thumb/3/33/National_Chengchi_University_logo.svg/1200px-National_Chengchi_University_logo.svg.png"
    }
  ],

  // 技能
  skills: {
    title: "Technical Skills & Tools",
    icons: [
      "fab fa-python",
      "fab fa-java",
      "fab fa-js-square",
      "fab fa-react",
      "fab fa-node-js",
      "fab fa-docker",
      "fab fa-aws",
      "fab fa-google",
      "fab fa-github",
      "fas fa-database",
      "fas fa-brain",
      "fas fa-robot"
    ],
    workflow: [
      "AI/ML Frameworks: TensorFlow, PyTorch, AutoML, Amazon Bedrock, Amazon SageMaker, Vertex AI, YOLO",
      "Full-stack Development: Python, Java, Golang, C, SQL, HTML/CSS, JavaScript, React, React Native, FastAPI, Spring Boot",
      "Databases & Cloud: Firebase, MySQL, MongoDB, Google Cloud Platform, Docker, K8S, FAISS",
      "Research Areas: Deep Learning, RAG Systems, Adversarial ML, Theory of Mind in AI, Reinforcement Learning"
    ]
  },

  // 榮譽與獎項
  awards: [
    "Deliman AI Scholarship, NCCU - 2025",
    "College Student Research Grant by National Science and Technology Council - 2025",
    "1st Place – Google DevJam Hackathon 2025 (Gemini-powered Abroad Application Assistant)",
    "Finalist – Government Presidential Hackathon 2024 (Electric bus energy optimization system)",
    "2nd Place – AWS Generative AI Applications Hackathon 2024",
    "3rd Place – Meichu Hackathon - Kronos Research 2022",
    "Top 3 – ACT Influential Plan Business Technology Application Competition 2022",
    "Reviewer – Efficient Reasoning Workshop, NeurIPS 2025"
  ],

  // 出版物
  publications: [
    {
      title: "Gradient-Free Adversarial Prompt Optimization for RAG Systems via Differential Evolution",
      authors: "Wang, J., and Yu, F.",
      venue: "Under review at KDD 2026 (Research Track)",
      status: "Under Review",
      image: "/assets/img/kdd_2025.jpg",
      links: {
        pdf: "#",
        code: "#",
        abstract: "#"
      }
    },
    {
      title: "DeRAG: Black-box Adversarial Attacks on Retrieval-Augmented Generation Applications via Prompt Injection",
      authors: "Wang, J., and Yu, F.",
      venue: "KDD 2025 (Workshop on Prompt Optimization)",
      status: "Accepted",
      image: "/assets/img/kdd_2025.jpg",
      links: {
        pdf: "#",
        code: "#",
        abstract: "#"
      }
    },
    {
      title: "Social Temperature: Real-Time Social Activity Monitoring Based on Deep Learning Methods",
      authors: "Kuan-wu Chu, Joanna Qiong-yue Chen, Jerry Wang, et al.",
      venue: "2024 International Computer Symposium, IEEE",
      status: "Accepted",
      image: "/assets/img/IEEE.jpg",
      links: {
        pdf: "#",
        abstract: "#"
      }
    },
    {
      title: "Observer, Not Player: Simulating Theory of Mind in Large Language Models through Game Observation",
      authors: "Wang, J., and Liu, T. Y.",
      venue: "NeurIPS 2025 Workshop on LAW",
      status: "Under Review",
      image: "/assets/img/Neurips2025.jpg",
      links: {
        pdf: "#",
        abstract: "#"
      }
    },
    {
      title: "BEARing the Game: Basketball Event Analysis with Recurrent Networks",
      authors: "Yao, Y.C and Wang, J.",
      venue: "TANet 2026",
      status: "Under Review",
      image: "/assets/img/TANET2025.jpg",
      links: {
        pdf: "#",
        abstract: "#"
      }
    }
  ],

  // 領導力與教學
  leadership: [
    "Google Developer Student Clubs (GDSC), NCCU - Project Lead & Vice President (July 2023 – July 2025): Directed teams of 10+ members, led community of 500+ participants, oversaw 10+ AI projects",
    "Teaching Assistant, NCCU - Data Structures Course (Sept. 2024 – Jan. 2025): Taught Java-based data structures to 100+ students, developed automated grading system",
    "Managed course content focusing on Deep Learning, RAG, and Python fundamentals"
  ],

  // 研究興趣
  interests: [
    "My research interests span across multiple cutting-edge areas of artificial intelligence and machine learning. I am particularly passionate about Deep Learning, Information Retrieval, Adversarial Machine Learning, and Trustworthy AI. My work focuses on developing robust AI systems that can reason effectively and handle adversarial scenarios.",
    "I am deeply interested in exploring Theory of Mind in AI, Multimodal Learning, and Deep Reinforcement Learning. Currently, I am working on innovative approaches to improve reasoning capabilities in Large Language Models and developing novel Graph RAG systems that enhance knowledge retrieval and reasoning in AI applications."
  ],

  // 導航選單
  navigation: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Publications", href: "#publications" },
    { name: "Awards", href: "#awards" },
    { name: "Leadership", href: "#leadership" },
    { name: "Interests", href: "#interests" }
  ]
};