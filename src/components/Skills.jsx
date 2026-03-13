import React, { useEffect, useRef, useState } from "react";
import { portfolioData } from "./mock";
import { Code, Gamepad2, Brain } from "lucide-react";

const SkillBar = ({ name, level, color, animate }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.87rem", fontWeight: 600, color: "#1A0810" }}>{name}</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#D4547A" }}>{level}%</span>
        </div>
        <div className="skill-bar-bg">
            <div
                className="skill-bar-fill"
                style={{
                    width: animate ? `${level}%` : "0%",
                    background: `linear-gradient(to right, ${color}80, ${color})`,
                }}
            />
        </div>
    </div>
);

const SkillSection = ({ icon, title, skills, animate }) => (
    <div
        style={{
            background: "#FFFFFF",
            border: "1.5px solid #F4C2CC",
            borderRadius: 20,
            padding: 28,
            boxShadow: "0 4px 20px rgba(212, 84, 122, 0.06)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(212, 84, 122, 0.12)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(212, 84, 122, 0.06)";
        }}
    >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div
                style={{
                    width: 40,
                    height: 40,
                    background: "linear-gradient(135deg, #FADADD, #F4C2CC)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {React.cloneElement(icon, { color: "#D4547A", size: 20 })}
            </div>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1A0810" }}>{title}</h3>
        </div>
        {skills.map((s) => (
            <SkillBar key={s.name} {...s} animate={animate} />
        ))}
    </div>
);

export default function Skills() {
    const { skills } = portfolioData;
    const ref = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    setAnimate(true);
                    e.target.classList.add("visible");
                }
            }),
            { threshold: 0.2 }
        );
        ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="section section-alt" ref={ref}>
            <div className="container">
                {/* Header */}
                <div className="fade-up" style={{ marginBottom: 50 }}>
                    <div className="section-label">
                        <Code size={12} />
                        Technical Skills
                    </div>
                    <h2 className="section-title">
                        My <span>Tech Stack</span>
                    </h2>
                    <p className="section-subtitle">
                        A blend of web technologies, game programming, and programming languages I've been working with.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
                        <SkillSection
                            icon={<Code />}
                            title="Full Stack Development"
                            skills={skills.fullStack}
                            animate={animate}
                        />
                    </div>
                    <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
                        <SkillSection
                            icon={<Gamepad2 />}
                            title="Game Programming"
                            skills={skills.gameProgramming}
                            animate={animate}
                        />
                    </div>
                    <div className="fade-up" style={{ transitionDelay: "0.3s" }}>
                        <SkillSection
                            icon={<Brain />}
                            title="Known Languages"
                            skills={skills.languages}
                            animate={animate}
                        />
                    </div>
                </div>

                {/* Tech Tags Row */}
                <div className="fade-up" style={{ transitionDelay: "0.4s", marginTop: 40, textAlign: "center" }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#9B7080", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Also familiar with</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                        {["DOM Manipulation", "API Integration", "OOP", "Git", "Responsive Design", "Problem Solving", "Machine Learning Basics"].map((tag) => (
                            <span key={tag} className="tech-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          #skills .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}