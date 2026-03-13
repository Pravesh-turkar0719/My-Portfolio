import React, { useEffect, useRef } from "react";
import { portfolioData } from "./mock";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
    const { education } = portfolioData;
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add("visible");
            }),
            { threshold: 0.1 }
        );
        ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="education" className="section section-alt" ref={ref}>
            <div className="container">
                <div className="fade-up" style={{ marginBottom: 50 }}>
                    <div className="section-label">
                        <GraduationCap size={12} />
                        Education
                    </div>
                    <h2 className="section-title">
                        Academic <span>Journey</span>
                    </h2>
                    <p className="section-subtitle">
                        My educational path that has shaped my technical and analytical abilities.
                    </p>
                </div>

                {/* Timeline */}
                <div style={{ position: "relative", paddingLeft: 50, maxWidth: 720 }}>
                    {/* Vertical Line */}
                    <div
                        style={{
                            position: "absolute",
                            left: 20,
                            top: 6,
                            bottom: 0,
                            width: 2,
                            background: "linear-gradient(to bottom, #D4547A, #F4C2CC, transparent)",
                        }}
                    />

                    {education.map((edu, idx) => (
                        <div
                            key={edu.id}
                            className="fade-up"
                            style={{
                                transitionDelay: `${idx * 0.15}s`,
                                position: "relative",
                                marginBottom: idx < education.length - 1 ? 36 : 0,
                            }}
                        >
                            {/* Timeline dot */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: -38,
                                    top: 20,
                                    width: 14,
                                    height: 14,
                                    background: edu.current ? "#C74B7F" : "#F4C2CC",
                                    border: `2px solid ${edu.current ? "#C74B7F" : "#D4547A"}`,
                                    borderRadius: "50%",
                                    boxShadow: edu.current ? "0 0 0 4px rgba(199, 75, 127, 0.2), 0 0 12px rgba(199, 75, 127, 0.3)" : "0 0 0 3px #FDF0F4",
                                    animation: edu.current ? "dotPulse 2s infinite" : "none",
                                }}
                            />

                            {/* Card */}
                            <div
                                style={{
                                    background: "#FFFFFF",
                                    border: `1.5px solid ${edu.current ? "#D4547A40" : "#F4C2CC"}`,
                                    borderRadius: 18,
                                    padding: "24px 28px",
                                    boxShadow: edu.current
                                        ? "0 8px 32px rgba(199, 75, 127, 0.1)"
                                        : "0 4px 16px rgba(212, 84, 122, 0.05)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateX(6px)";
                                    e.currentTarget.style.boxShadow = "0 12px 36px rgba(199, 75, 127, 0.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateX(0)";
                                    e.currentTarget.style.boxShadow = edu.current
                                        ? "0 8px 32px rgba(199, 75, 127, 0.1)"
                                        : "0 4px 16px rgba(212, 84, 122, 0.05)";
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 10 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div
                                            style={{
                                                width: 38,
                                                height: 38,
                                                background: edu.current
                                                    ? "linear-gradient(135deg, #D4547A, #C74B7F)"
                                                    : "linear-gradient(135deg, #FADADD, #F4C2CC)",
                                                borderRadius: 10,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {edu.current ? (
                                                <GraduationCap size={18} color="white" />
                                            ) : (
                                                <BookOpen size={18} color="#D4547A" />
                                            )}
                                        </div>
                                        <div>
                                            <h3
                                                style={{
                                                    fontFamily: "'Poppins', sans-serif",
                                                    fontSize: "1rem",
                                                    fontWeight: 700,
                                                    color: "#1A0810",
                                                    marginBottom: 2,
                                                }}
                                            >
                                                {edu.institution}
                                            </h3>
                                            <p style={{ fontSize: "0.82rem", color: "#9B7080" }}>
                                                {edu.degree} — {edu.field}
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "0.78rem",
                                            fontWeight: 600,
                                            color: edu.current ? "#C74B7F" : "#9B7080",
                                            background: edu.current ? "#FDF0F4" : "#F7F7F7",
                                            border: `1px solid ${edu.current ? "#F4C2CC" : "#E8E8E8"}`,
                                            padding: "4px 12px",
                                            borderRadius: 100,
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {edu.year}
                                    </span>
                                </div>

                                <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 10 }}>
                                    <span
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "0.78rem",
                                            fontWeight: 700,
                                            background: "linear-gradient(135deg, #D4547A, #C74B7F)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        {edu.grade}
                                    </span>
                                    {edu.current && (
                                        <span
                                            style={{
                                                background: "rgba(107, 158, 106, 0.1)",
                                                border: "1px solid rgba(107, 158, 106, 0.3)",
                                                borderRadius: 100,
                                                padding: "3px 10px",
                                                fontSize: "0.72rem",
                                                fontFamily: "'Poppins', sans-serif",
                                                fontWeight: 700,
                                                color: "#5A8A59",
                                            }}
                                        >
                                            Currently Enrolled
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
