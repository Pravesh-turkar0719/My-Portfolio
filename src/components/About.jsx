import React, { useEffect, useRef } from "react";
import { portfolioData } from "./mock";
import { User, Globe, Languages } from "lucide-react";

export default function About() {
    const { personal, softSkills, languages } = portfolioData;
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add("visible");
            }),
            { threshold: 0.15 }
        );
        ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
                    {/* Left */}
                    <div>
                        <div className="fade-up">
                            <div className="section-label">
                                <User size={12} />
                                About Me
                            </div>
                            <h2 className="section-title">
                                Crafting Digital <span>Experiences</span>
                            </h2>
                        </div>
                        <div className="sakura-divider">
                            <div className="sakura-petal-icon" />
                            <div className="sakura-petal-icon" style={{ transform: "rotate(90deg)" }} />
                            <div className="sakura-petal-icon" />
                        </div>
                        <div className="fade-up" style={{ transitionDelay: "0.15s" }}>
                            <p style={{ fontSize: "1rem", color: "#5C2E40", lineHeight: 1.85, marginBottom: 20 }}>
                                {personal.about}
                            </p>
                        </div>
                        <div className="fade-up" style={{ transitionDelay: "0.25s" }}>
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #FDF0F4, #FFF4F7)",
                                    border: "1px solid #F4C2CC",
                                    borderRadius: 16,
                                    padding: "20px 24px",
                                    marginTop: 24,
                                }}
                            >
                                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#C74B7F", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Contact Details</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                    {[
                                        { label: "Phone", value: personal.phone },
                                        { label: "Email", value: personal.email },
                                        { label: "Location", value: personal.location },
                                    ].map((item) => (
                                        <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                                            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.76rem", fontWeight: 600, color: "#9B7080", minWidth: 60 }}>{item.label}</span>
                                            <span style={{ fontSize: "0.88rem", color: "#1A0810", fontWeight: 500 }}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        {/* Soft Skills */}
                        <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
                            <div
                                style={{
                                    background: "#FFFFFF",
                                    border: "1.5px solid #F4C2CC",
                                    borderRadius: 20,
                                    padding: 28,
                                    boxShadow: "0 4px 20px rgba(212, 84, 122, 0.06)",
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "0.8rem",
                                        fontWeight: 700,
                                        color: "#C74B7F",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        marginBottom: 18,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                    }}
                                >
                                    <User size={14} /> Core Strengths
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                    {softSkills.map((skill) => (
                                        <div
                                            key={skill}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8,
                                                background: "#FDF0F4",
                                                border: "1px solid #F4C2CC",
                                                borderRadius: 100,
                                                padding: "8px 16px",
                                                fontSize: "0.85rem",
                                                fontWeight: 600,
                                                color: "#5C2E40",
                                                fontFamily: "'Poppins', sans-serif",
                                                transition: "background 0.2s ease, transform 0.2s ease",
                                                cursor: "default",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = "#FADADD";
                                                e.currentTarget.style.transform = "translateY(-2px)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "#FDF0F4";
                                                e.currentTarget.style.transform = "translateY(0)";
                                            }}
                                        >
                                            <div style={{ width: 6, height: 6, background: "#D4547A", borderRadius: "50% 0 50% 0", transform: "rotate(45deg)" }} />
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="fade-up" style={{ transitionDelay: "0.3s" }}>
                            <div
                                style={{
                                    background: "#FFFFFF",
                                    border: "1.5px solid #F4C2CC",
                                    borderRadius: 20,
                                    padding: 28,
                                    boxShadow: "0 4px 20px rgba(212, 84, 122, 0.06)",
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "0.8rem",
                                        fontWeight: 700,
                                        color: "#C74B7F",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        marginBottom: 18,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                    }}
                                >
                                    <Languages size={14} /> Languages
                                </p>
                                <div style={{ display: "flex", gap: 12 }}>
                                    {languages.map((lang) => (
                                        <div
                                            key={lang}
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: 6,
                                                background: "linear-gradient(135deg, #FDF0F4, #FFF4F7)",
                                                border: "1px solid #F4C2CC",
                                                borderRadius: 14,
                                                padding: "14px 24px",
                                            }}
                                        >
                                            <Globe size={20} color="#D4547A" />
                                            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#1A0810" }}>{lang}</span>
                                            <span style={{ fontSize: "0.72rem", color: "#9B7080" }}>Proficient</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick stats */}
                        <div className="fade-up" style={{ transitionDelay: "0.4s" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                                {[
                                    { number: "3rd", label: "Year B.Tech" },
                                    { number: "2+", label: "Projects Built" },
                                    { number: "7+", label: "Skills Mastered" },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        style={{
                                            background: "linear-gradient(135deg, #D4547A, #C74B7F)",
                                            borderRadius: 16,
                                            padding: "20px 12px",
                                            textAlign: "center",
                                            boxShadow: "0 6px 20px rgba(199, 75, 127, 0.25)",
                                        }}
                                    >
                                        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>{stat.number}</p>
                                        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.8)", marginTop: 4, fontWeight: 500 }}>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}