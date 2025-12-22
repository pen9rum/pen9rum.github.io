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
description: `I am an upcoming M.S./Ph.D. student in Computer Science (Artificial Intelligence) at 2026 Fall. I recently graduated from National Chengchi University with a double major in Information Management and Artificial Intelligence Applications, where I conducted research under the guidance of <a href="https://homepage.iis.sinica.edu.tw/pages/tirongwu/index_zh.html" target="_blank" rel="noopener noreferrer">Prof. Ti-rong Wu</a> (Academia Sinica), <a href="https://mis2.nccu.edu.tw/zh_tw/Faculty/Faculty_01/FANG-YU-33653605" target="_blank" rel="noopener noreferrer">Prof. Fang Yu</a> (NCCU), <a href="https://www.futuremedialab.tw/contact" target="_blank" rel="noopener noreferrer">Prof. Lyn Chao-ling Chen</a> (NCCU), and <a href="https://sites.google.com/site/matf0123/home" target="_blank" rel="noopener noreferrer">Prof. Tengfei Ma</a> (SBU). My research interests span AI agents, Information Retrieval, Adversarial Machine Learning, Trustworthy AI, Theory of Mind in AI, Deep Reinforcement Learning, and Reasoning in Large Language Models and Structured Knowledge. If you are interested in collaborating, please feel free to reach out!`,
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
      date: "Oct. 2025",
content: `Awarded the <a href="http://www.ta-yung.com.tw/" target="_blank" rel="noopener noreferrer">
<strong>National Lin Hsiung Chen Foundation Scholarship</strong>
</a> (for the top 1 AI student).`
    },
    {
      date: "Oct. 2025",
      content: `Our paper <strong>Aging Decline in Basketball Career Trend Prediction Based on Machine Learning and LSTM Model</strong> 
      is accepted at 
      <a href="https://tanet2025.niu.edu.tw/" target="_blank" rel="noopener noreferrer">
      TANET 2025 Main Track</a>!`
    },
    {
      date: "Sep. 2025",
      content: `Our paper <strong>Observer, Not Player</strong> is accepted at 
      <a href="https://reasoning-workshop.github.io/" target="_blank" rel="noopener noreferrer">
      NeurIPS 2025 Workshop on Foundations of Reasoning in Language Models (FoRLM)</a> 
      and 
      <a href="https://sites.google.com/view/law-2025" target="_blank" rel="noopener noreferrer">
      Workshop on Bridging Language, Agents, and World Models (LAW)</a>!`
    },
    {
      date: "Jun. 2025",
      content: `Our paper <strong>DeRAG: Black-box Adversarial Attacks on Retrieval-Augmented Generation Applications via Prompt Injection</strong> 
      is accepted at 
      <a href="https://kdd-prompt-optimization-workshop.github.io/kdd-2025-prompt-optimization/" target="_blank" rel="noopener noreferrer">
      KDD 2025 Workshop on Prompt Optimization</a>!`
    },
    {
      date: "Sep. 2024",
      content: `Our paper <strong>Social Temperature</strong> is accepted at 
      <a href="https://tanet2024.conf.nycu.edu.tw/agenda" target="_blank" rel="noopener noreferrer">
      IEEE ICS 2024 (International Computer Symposium)</a>!`
    }
  ],


  // 工作與研究經驗
  experience: [
    {
      title: "Research Assistant",
      company: "Graph Lab, Stony Brook University",
      period: "Aug. 2025 – Present",
      description: `Advisor: Prof. Tengfei Ma.<br>
Developing CocoRAG — Dynamic Graph RAG system enhanced with improved Chain-of-Thought prompting (Coconut) for more robust reasoning.<br>
Targeted to evaluate on Knowledge Graph QA tasks.`,
      image: "/assets/img/SBU.png",
    },
    {
      title: "Research Assistant",
      company: "Reinforcement Gaming Lab, Academia Sinica",
      period: "July 2025 – Present",
      description: `Advisor: Prof. Ti-Rong Wu.<br>
Developed a stochastic MCTS-based Go Variant using Deep Reinforcement Learning. Modified traditional MCTS tree architecture to accommodate multi-turn gaming environments under the AlphaZero framework.`,
      image: "/assets/img/academia sinica.jpg",
    },
    {
      title: "Research Assistant",
      company: "Software Security Lab, NCCU",
      period: "July 2024 – Present",
      description: `Advisor: Prof. Fang Yu.<br>
Developed <strong>DeRAG</strong>, a novel black-box attack leveraging Differential Evolution for adversarial prompt optimization in RAG systems. Achieved state-of-the-art attack success (<strong>100%@Top-10</strong> on MS MARCO, <strong>>70%@Top-20</strong> on SciFact).`,
      image: "https://upload.wikimedia.org/wikipedia/zh/thumb/3/33/National_Chengchi_University_logo.svg/1200px-National_Chengchi_University_logo.svg.png",
    },
    {
      title: "Research Assistant",
      company: "Future Media Lab, NCCU",
      period: "Jan. 2024 – Sep. 2025",
      description: `Advisor: Prof. Lyn Chao-ling Chen.<br>
⬛ Developed real-time social activity monitoring system using deep learning multi-modal models, including sound and emotion recognition with YOLO and DeepFace.<br><br>
⬛ Created the 2-stage framework on improving NBA player performance prediction accuracy by over 10%.`,
      image: "/assets/img/ai centre.png",
    },

    {
      title: "QA Engineer (Accelerator Program)",
      company: "Binance - AI and Data Service Team",
      period: "Sep. 2025 – Present",
      description: "Evaluating risk check agent for AI safety, created over 1,000 test cases and auto pipeline on AWS SageMaker. Designed red teaming single-turn and multi-turn prompts to attack internal bot for bot robustness.",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUzMzPwuQv1vQkrLjQuMDPXpxLyuwonLDQjKTQ8OTEwMjLirw/uuAtxXilIQS85NzJqWSpBPTBfUS1VSy42NTLoswxaTi0gKDXJnRXTpBJMRC/BlxeJbyUXIzVuXCo/OzFkVCx2YSm395DeAAAFKklEQVR4nO2d63baMBCEARtjTBqSBpoAbdO+/0vWNja+aaV1aoO0O9/f4HM80Y52dbG0WAAAAAAAAAAAAAAAAAAAAAAAAABfI0uzR7/CvMSHyyF+9EvMSbRfr9b76NGvMR/xdr1artZbsa0YL3KBy1ziQqjEOCsFFhIzkRKjbSWwkLgV6MV4fxNYSNyLa8VbiC6FBmp06AgsJB5EBWrLg41ESV6M+y1YtaKYQO15UJ4XDSEqK1BjSuBSSAFHhKicQK1qUVpi6DUq6UEpXuyUapTEkAs4qwcleDFyt2DVioEGqiVNDLwYZCsaSzVKYogFHMuDjcTwvOhME4NADcyLbA+2JAbViqNCtJYYUqCO6GTaEsPpbkZ6sJEYihcZpRolMYwC7gsebCSG4EVmqUa2oveBOjpN9CX6njQcA16ORL+HxP/hwUaiz15kpInE+R/wOWkw0kRy/JkkTom+Jg1GiCZP3399Y0j0M1AHiy8mgT82i/Q3Q6KPyzYcDy7fNvkv05eVW6J/XmQU23mIbsrfppxA9a0M53lwU/2aJdEvLzJKtdKDNekLp0f1KFAZpVpHIFOiPwXcuBC9ElSgMmrRZNkTWEhk9Kh+1KicNPH01hfIDVQPvDjegzWs1O+BF98/RnuwhuPFj/c76xkSPx/tr0m0YIGzFZPj8+PbcBE972ytWJVqZhwF3Gr37IEPc4nnHf2aZIhesQZqsjt7ITCX+EoGqiFNdLEkjeT46onAQiIRqMY00YVMGqudPwLJQLV0Mg1Ed+NPiF7Ju5vhazo8WGP0YuJJJ9Ng8CJToFGiTx6sGXiR4cGagRf98mBNz4vsFizotaJvHqzpBOoogT2Jjw/RODKXUnmgJjeBRC9KPdvqURMqRCPi2cmJPz/+mF//VsCRpVp0PhEBeCvgyFIt/Xv6vIvEYsBLtVCVNMgQzb26ojxWBSqZJvJWvs+QuJyyIPvJ0otkqVb2t2Q/WRZwpAfL/vYeExvViN4qwirf0pHkIuzy7zHqv43oLYG4pv5S1z10IH5zhPD8o/7WrBrZmcQZ0RM240iyM4mIme7WOHLeQO0svrDK6tazr62CgEwIZjrF+ZzLNr1ZtVFJvVe3jkrqvYpnPi8OFl9GSBwMr0YUZoPCfK5lG8PMNru4NgyR2cW1YYg8jxeNiy/MVjROczAD1Th6nGPZhpj4ZUk0Do+Zg1xiqmr6pEEuvjB6VEIgSyI5ozp1oFoWX5xeJKepGF60rG1MW6NaF18cE4aWqUanF63rU1MmDcc+GasXrdPFjqThWNeYbt9N5tqEkBdw1GvGZ+uUfxGoZ+o1I9eejTwvTnOMSHpxfrt0JN/y5Hz2RPx3sk/3ytQlnUSh/DaU70MFfamCfKigplFQlyoYWygYHxrH+OyZmiDG+ArmaRTMtSmYL1Uw561g3ULB2pOC9UMFa8AK1vEpBO3FMCN+P434PVHi97WJ35sofn+p+D3C4vd5i9+rL/57C/nfzCj47kn8t2vyvz9U8A2pgu+AFXzLreB7fAVnKig4F0PB2SYKzqdRcMaQgnOiFJz1peC8NgVn7ik4N1HB2ZcKzi9VcAatgnOEFZwFreA8bwVnsis4V1/B3QgK7rdQcEeJgntmFNwVpOC+JwV3dim4d03B3XkK7j9UcIelgntIFdwlq+A+YAV3Oiu4l1vB3eodL0rzYM0tUCWG6JWqRpVQi1KUBZyUUs1MMeoPeETPIT5cJFUyJrJ0osM6AAAAAAAAAAAAAAAAAAAAAAAAKOQfUZliHlImaHIAAAAASUVORK5CYII=",
    },
    {
      title: "Testing Engineer Intern",
      company: "Carousell",
      period: "Feb. 2025 – Jun. 2025",
      description: "Implemented automation testing using Golang and Jenkins to enhance testing efficiency by 12%. Optimized Trinity for iOS and Android, streamlining version control and deployment using Gemini and Copilot.",
      image: "data:image/png;base64,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",
    },
    {
      title: "Software Engineer Intern",
      company: "Delta Electronics",
      period: "Jan. 2024 – Feb. 2024",
      description: "Built Python-based automation system for car motoring pipeline data evaluation and report generation, enhancing efficiency by 15% across the entire workflow with C language for experiment mocking.",
      image: "data:image/jpeg;base64,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",
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
      // links: {
      //   pdf: "#",
      //   code: "#",
      //   abstract: "#"
      // }
    },
    {
      title: "DeRAG: Black-box Adversarial Attacks on Retrieval-Augmented Generation Applications via Prompt Injection",
      authors: "Wang, J., and Yu, F.",
      venue: "KDD 2025 (Workshop on Prompt Optimization)",
      status: "Accepted",
      image: "/assets/img/kdd_2025.jpg",
      links: {
        pdf: "https://arxiv.org/abs/2507.15042",
      }
    },
    {
      title: "Social Temperature: Real-Time Social Activity Monitoring Based on Deep Learning Methods",
      authors: "Kuan-wu Chu, Joanna Qiong-yue Chen, Jerry Wang, et al.",
      venue: "2024 International Computer Symposium, IEEE",
      status: "Accepted",
      image: "/assets/img/IEEE.jpg",
      links: {
        pdf: "https://ieeexplore.ieee.org/abstract/document/10959961",
      }
    },
    {
      title: "Observer, Not Player: Simulating Theory of Mind in Large Language Models through Game Observation",
      authors: "Wang, J., and Liu, T. Y.",
      venue: "NeurIPS 2025 Workshop on LAW and FORLM (dual acceptance)",
      status: "Accepted",
      image: "/assets/img/Neurips2025.jpg",
      links: {
        pdf: "COMING SOON",
      }
    },
    {
      title: "BEARing the Game: Basketball Event Analysis with Recurrent Networks",
      authors: "Yao, Y.C and Wang, J.",
      venue: "TANet 2025",
      status: "Accepted",
      image: "/assets/img/TANET2025.jpg",
      links: {
        pdf: "https://arxiv.org/abs/2509.25858",
      }
    }
  ],

  // 領導力與教學
  leadership: [
    "Google Build With AI Build real-world GenAI applications using Gemini 2.0 Multimodal API using the Gen AI Python SDK speaker. (May 2025)",
    "Google Developer Student Clubs (GDSC), NCCU - Project Lead & Vice President (July 2023 – July 2025)",
    "Teaching Assistant, NCCU - Data Structures Course (Sept. 2024 – Jan. 2025): ",
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
  ]
};