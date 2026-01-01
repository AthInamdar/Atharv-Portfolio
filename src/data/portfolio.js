import { Github, Linkedin, Mail, FileText, Code, Database, Server, Terminal, Cpu, Globe } from "lucide-react";

export const personalInfo = {
    name: "Atharv Inamdar",
    title: "Computer Engineering Student | Full-Stack Developer",
    intro: "I build smart, scalable, and practical tech solutions. Passionate about AI, full-stack development, and crafting seamless user experiences.",
    email: "atharvinamdar595@gmail.com",
    github: "https://github.com/AthInamdar",
    linkedin: "http://linkedin.com/in/atharv-inamdar-149247285/",
    resumeUrl: "https://docs.google.com/document/d/1OGglhdb9Dhts0k5WE1y1GkUNycQjB72RQtfFnmES6Tk/edit?usp=sharing",
    profileImage: "/profile.jpg", // Add your photo in public folder as profile.jpg
};

export const skills = [
    {
        category: "Programming",
        icon: Code,
        items: ["Python (Proficient)", "C", "C++", "Java"],
    },
    {
        category: "Frontend",
        icon: Globe,
        items: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Django", "REST Framework", "Node.js", "Express"],
    },
    {
        category: "Databases",
        icon: Database,
        items: ["MySQL", "MongoDB"],
    },
    {
        category: "Core CS Concepts",
        icon: Cpu,
        items: [
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Software Engineering",
            "EDA",
            "Data Warehousing & Mining",
            "Analysis of Algorithms"
        ],
    },
    {
        category: "Tools & DevOps",
        icon: Terminal,
        items: ["Git", "Postman", "Linux", "Canva", "Digital Marketing", "Content Creation"],
    }
];

export const projects = [
    {
        id: 1,
        title: "NiyatKalpa – BE Final Year Project",
        description:
            "A mobile-based medicine donation platform that redistributes near-expiry medicines to those in need. Uses OCR and AI to extract medicine details, verify information, and streamline the donation process — reducing medical waste while supporting underserved communities.",
        techStack: ["React Native", "TypeScript", "Firebase", "Custom AI Model", "Google Maps API", "Zapier"],
        github: "https://github.com/AthInamdar/NiyatKalpa.git",
        demo: "",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    },

    {
        id: 2,
        title: "SuperVision – Project Management Tool",
        description:
            "A MERN-based task and performance management platform designed to improve coordination between scrum masters and teams using real-time communication, dashboards, and distributed task monitoring.",
        techStack: ["MERN", "REST API", "MongoDB", "WebSockets"],
        github: "https://github.com/AthInamdar",
        demo: "",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    },

    {
        id: 3,
        title: "Cloud-based Project Security Compliance System",
        description:
            "A cloud-native automated security scanning workflow built using Google Cloud and AI. It scans repositories, analyzes vulnerabilities, and generates intelligent auto-fix suggestions using Gemini AI. The pipeline integrates SonarQube, GitHub/GitLab CI, Cloud Run, Cloud Storage, BigQuery, and a Flask dashboard with an AI chatbot.",
        techStack: [
            "Google Cloud Run",
            "Google Cloud Storage",
            "BigQuery",
            "GitHub Actions",
            "GitLab CI",
            "SonarQube",
            "Flask",
            "Gemini AI"
        ],
        github: "https://github.com/AthInamdar/CCLProject.git", // Add when repo is public
        demo: "",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
    },

    {
        id: 4,
        title: "Note Maker",
        description:
            "A secure note-taking application featuring JWT-based authentication, cloud sync, and a clean UI built using Django and React.",
        techStack: ["Django", "React", "JWT", "REST Framework"],
        github: "https://github.com/AthInamdar/Note-Maker.git",
        demo: "",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1000",
    },

    {
        id: 5,
        title: "SS360 – SportSphere360",
        description:
            "A dynamic sports update platform offering real-time information on sports worldwide, created using custom algorithms and a responsive interface.",
        techStack: ["Django", "HTML", "CSS", "JavaScript", "Python"],
        github: "https://github.com/AthInamdar/SS360.git",
        demo: "",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
    },

    {
        id: 6,
        title: "CSS Animation",
        description:
            "A visually engaging project showcasing animations created purely using HTML and CSS without any JavaScript.",
        techStack: ["HTML", "CSS"],
        github: "https://github.com/AthInamdar/cssanimation.git",
        demo: "https://athinamdar.github.io/cssanimation/",
        image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 7,
        title: "Drug Info Summarizer (NLP Project)",
        description:
            "A Streamlit-based NLP application that fetches drug data from the openFDA API and summarizes uses, dosage, side effects, and precautions in a user-friendly format.",
        techStack: ["Python", "Streamlit", "NLP", "openFDA API"],
        github: "https://github.com/AthInamdar/drug_summarizer.git",
        demo: "https://drugsummarizergit.streamlit.app/",
        image: "https://images.unsplash.com/photo-1580281658629-8a8a4e3c2a4d?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 8,
        title: "Power BI Fraud Detection Dashboard",
        description:
            "A data analysis project using Power BI that presents fraud detection insights through interactive dashboards and clear visual storytelling.",
        techStack: ["Power BI", "Data Analysis", "Data Visualization"],
        github: "",
        demo: "https://app.powerbi.com/groups/me/reports/02b2b522-19a2-43eb-a531-19f3061b4487/ReportSection",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 9,
        title: "Real-Time Traffic Congestion System",
        description:
            "A complete IoT-based traffic monitoring system using Kafka, MongoDB, Flask, and Leaflet.js for real-time visualization.",
        techStack: ["Kafka", "MongoDB", "Flask", "Leaflet.js"],
        github: "https://github.com/AthInamdar/Real-Time-Traffic-Congestion-System.git",
        demo: "",
        image: "https://imgs.search.brave.com/Lj6RAGpbSKkJ-lq8GFaiuGpds55Ao-x0z19e7fI3ivs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50b210b20uY29t/L2YvMTc4NDYwLzEy/ODB4NzIwLzQwMDA0/NzY1N2IvaGVhZGVy/X2hpc3RvcmljYWxf/dHJhZmZpY192b2x1/bWVzX2Rlc2t0b3Bf/MTI4MHg3MjBfdHJh/ZmZpYy5qcGc",
    },

];


export const experience = [
    {
        id: 1,
        role: "AI Transformation Consultant – Virtual Internship",
        company: "Tata iQ (Job Simulation)",
        period: "July 2025",
        description:
            "Simulated real-world AI consulting tasks including financial data analysis, credit risk prediction, and strategy development using GenAI tools.",
    },
    {
        id: 2,
        role: "Placement Coordinator",
        company: "Training & Placement Cell, VESIT",
        period: "2024 - Present",
        description:
            "Facilitated campus drives, coordinated with recruiters, and supported placement processes for students.",
    }
];

export const education = [
    {
        id: 1,
        degree: "Bachelor of Engineering in Computer Engineering",
        institution: "Vivekanand Education Society’s Institute of Technology (VESIT), Mumbai University",
        period: "Nov 2022 – Jun 2026",
        description: "GPA: 8.79/10. Focused on software engineering, AI, DSA, and system development.",
    },
    {
        id: 2,
        degree: "HSC – Science",
        institution: "Chaitanya’s International School, Baramati",
        period: "Jun 2020 – Aug 2022",
        description: "Percentage: 77%",
    },
    {
        id: 3,
        degree: "SSC",
        institution: "Chhatrapati Shivaji High School, Vaduj",
        period: "Jun 2014 – Mar 2020",
        description: "Percentage: 93.40%",
    }
];
