import React, { useEffect, useRef } from "react";
import { portfolioData } from "./mock";
import { Folder, Calendar, ExternalLink, Sparkles, Clock } from "lucide-react";

export default function Projects() {
    const { projects } = portfolioData;
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
        <section id="projects" className="section" ref={ref}>
            <div className="container">
                {/* Header */}
                <div className="fade-up" style={{ marginBottom: 50 }}>
                    <div className="section-label">
                        <Folder size={12} />
                        Projects
                    </div>
                    <h2 className="section-title">
                        What I've <span>Built</span>
                    </h2>
                    <p className="section-subtitle">
                        A collection of projects that showcase my journey in web development and programming.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="fade-up project-card"
                            style={{ transitionDelay: `${idx * 0.15}s` }}
                        >
                            {/* Top accent bar */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: 4,
                                    borderRadius: "20px 20px 0 0",
                                    background: `linear-gradient(to right, ${project.color}60, ${project.color})`,
                                }}
                            />

                            {/* Header */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        background: `${project.color}15`,
                                        border: `1.5px solid ${project.color}30`,
                                        borderRadius: 14,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Folder size={22} color={project.color} />
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <div
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 5,
                                            background: project.status === "In Progress" ? "rgba(107, 158, 106, 0.1)" : "rgba(212, 84, 122, 0.1)",
                                            border: `1px solid ${project.status === "In Progress" ? "rgba(107, 158, 106, 0.3)" : "rgba(212, 84, 122, 0.3)"}`,
                                            borderRadius: 100,
                                            padding: "4px 10px",
                                            fontSize: "0.72rem",
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 700,
                                            color: project.status === "In Progress" ? "#5A8A59" : "#D4547A",
                                        }}
                                    >
                                        <Clock size={10} />
                                        {project.status}
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    color: "#1A0810",
                                    marginBottom: 4,
                                    lineHeight: 1.3,
                                }}
                            >
                                {project.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "0.8rem",
                                    color: project.color,
                                    fontWeight: 600,
                                    marginBottom: 14,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                }}
                            >
                                <Sparkles size={12} />
                                {project.subtitle}
                            </p>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#5C2E40",
                                    lineHeight: 1.7,
                                    marginBottom: 20,
                                }}
                            >
                                {project.description}
                            </p>

                            {/* Date */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontSize: "0.8rem",
                                    color: "#9B7080",
                                    marginBottom: 16,
                                }}
                            >
                                <Calendar size={13} />
                                {project.date}
                            </div>

                            {/* Tech Tags */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                                {project.tech.map((t) => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>

                            {/* Footer */}
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline"
                                    style={{ padding: "8px 18px", fontSize: "0.82rem" }}
                                >
                                    <ExternalLink size={14} />
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #projects .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}