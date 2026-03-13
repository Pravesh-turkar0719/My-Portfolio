export const portfolioData = {
    personal: {
        name: "Pravesh Turkar",
        title: "Frontend Developer & B.Tech Student",
        subtitle: "Building Interactive & User-Friendly Web Experiences",
        location: "Bhubneshwar, Odisha",
        phone: "+91 93568 67872",
        email: "praveshturkar75@gmail.com",
        linkedin: "https://www.linkedin.com/in/praveshturkar0719",
        github: "https://github.com/Pravesh-turkar0719",
        about: "I am a third-year B.Tech student with a strong interest in frontend development. I enjoy building interactive and user-friendly web interfaces while focusing on clean design and performance. With strengths in creative thinking and problem solving, I like turning ideas into functional digital experiences and continuously improving my development skills through hands-on projects.",
        avatar: null,
    },

    education: [
        {
            id: 1,
            institution: "ITER, Siksha 'O' Anusandhan University",
            degree: "B.Tech",
            field: "Computer Science & Engineering",
            grade: "CGPA: In Progress",
            year: "2023 – 2027",
            icon: "graduation",
            current: true,
        },
        {
            id: 2,
            institution: "Funde Science and IT Jr. College",
            degree: "Intermediate (XII)",
            field: "Science & IT",
            grade: "65.83%",
            year: "2021 – 2023",
            icon: "school",
            current: false,
        },
        {
            id: 3,
            institution: "Vivek Mandir School, Gondia",
            degree: "Secondary (X)",
            field: "General",
            grade: "88.60%",
            year: "2021",
            icon: "school",
            current: false,
        },
    ],

    skills: {
        fullStack: [
            { name: "HTML5", level: 92, color: "#E8527A" },
            { name: "CSS3", level: 88, color: "#D4547A" },
            { name: "JavaScript", level: 82, color: "#C74B7F" },
            { name: "ReactJS", level: 78, color: "#B03070" },
            { name: "Node.js", level: 65, color: "#8B1A4A" },
            { name: "DOM Manipulation", level: 85, color: "#D4547A" },
            { name: "API Integration", level: 75, color: "#E8527A" },
        ],
        gameProgramming: [
            { name: "C", level: 72, color: "#6B9E6A" },
            { name: "C++", level: 70, color: "#5A8A59" },
        ],
        languages: [
            { name: "Python", level: 68, color: "#7B6FA0" },
            { name: "Java", level: 62, color: "#8A7BAF" },
        ],
    },

    softSkills: [
        "Creative Thinking",
        "Time Management",
        "Good Communication",
        "Problem Solving",
        "Good Listener",
        "Team Player",
    ],

    languages: ["English", "Hindi"],

    projects: [
        {
            id: 1,
            title: "Temporal Deck",
            subtitle: "Internet Time Machine",
            date: "March 2026",
            status: "In Progress",
            description:
                "Temporal Deck is a modern web application designed to explore the evolution of websites across time. The platform allows users to enter a domain name and navigate through historical versions of that website using the Internet Archive's Wayback Machine.",
            tech: ["ReactJS", "JavaScript", "API Integration", "CSS3"],
            color: "#E8527A",
            link: "#",
            featured: true,
        },
        {
            id: 2,
            title: "Timberman",
            subtitle: "Console Game in C++",
            date: "Feb 2026",
            status: "In Progress",
            description:
                "Developed a console-based version of the classic Timberman game using C++. The game involves controlling a character to chop a tree while avoiding falling branches. Implemented core game mechanics such as player movement, collision detection, score tracking, and increasing game difficulty using object-oriented programming concepts in C++.",
            tech: ["C++", "OOP", "Game Logic", "Console I/O"],
            color: "#6B9E6A",
            link: "#",
            featured: false,
        },
    ],
};
