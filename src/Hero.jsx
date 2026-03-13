import React, { useEffect, useRef } from "react";
import { portfolioData } from "./components/mock";
import { MapPin, Mail, Linkedin, Github, ArrowDown, Code2 } from "lucide-react";

const SakuraPetals = () => (
    <div className="sakura-container">
        {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="petal" />
        ))}
    </div>
);

export default function Hero() {
    const { personal } = portfolioData;
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add("visible");
            }),
            { threshold: 0.1 }
        );
        const elements = heroRef.current?.querySelectorAll(".fade-up");
        elements?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={heroRef}
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(160deg, #FFF9FB 0%, #FFF0F5 50%, #FFF9FB 100%)",
                paddingTop: "80px",
            }}
        >
            <SakuraPetals />

            {/* Decorative Background Blobs */}
            <div
                style={{
                    position: "absolute",
                    width: 500,
                    height: 500,
                    background: "radial-gradient(circle, rgba(232, 82, 122, 0.07) 0%, transparent 70%)",
                    top: "10%",
                    right: "-10%",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    width: 350,
                    height: 350,
                    background: "radial-gradient(circle, rgba(107, 158, 106, 0.06) 0%, transparent 70%)",
                    bottom: "10%",
                    left: "-5%",
                    pointerEvents: "none",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
                    <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
                        {/* Left Content */}
                        <div>
                            {/* Status Badge */}
                            <div className="fade-up" style={{ animationDelay: "0s" }}>
                                <div
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        background: "rgba(107, 158, 106, 0.1)",
                                        border: "1px solid rgba(107, 158, 106, 0.3)",
                                        borderRadius: 100,
                                        padding: "6px 16px",
                                        marginBottom: 24,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 8,
                                            height: 8,
                                            background: "#6B9E6A",
                                            borderRadius: "50%",
                                            animation: "dotPulse 2s infinite",
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "0.78rem",
                                            fontWeight: 600,
                                            color: "#5A8A59",
                                            letterSpacing: "0.08em",
                                        }}
                                    >
                                        Open to Opportunities
                                    </span>
                                </div>
                            </div>

                            {/* Name */}
                            <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
                                <h1
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                                        fontWeight: 800,
                                        color: "#1A0810",
                                        lineHeight: 1.1,
                                        letterSpacing: "-0.03em",
                                        marginBottom: 12,
                                    }}
                                >
                                    {personal.name.split(" ")[0]}{" "}
                                    <span
                                        style={{
                                            background: "linear-gradient(135deg, #D4547A, #C74B7F)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        {personal.name.split(" ")[1]}
                                    </span>
                                </h1>
                            </div>

                            {/* Title */}
                            <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
                                <p
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "1.1rem",
                                        fontWeight: 500,
                                        color: "#9B7080",
                                        marginBottom: 20,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                    }}
                                >
                                    <Code2 size={18} color="#D4547A" />
                                    {personal.title}
                                </p>
                            </div>

                            {/* About snippet */}
                            <div className="fade-up" style={{ transitionDelay: "0.3s" }}>
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#5C2E40",
                                        lineHeight: 1.75,
                                        maxWidth: 560,
                                        marginBottom: 32,
                                        fontWeight: 400,
                                    }}
                                >
                                    Passionate about creating beautiful, responsive web experiences.
                                    Currently in my 3rd year of B.Tech at{" "}
                                    <span style={{ color: "#D4547A", fontWeight: 600 }}>
                                        Siksha 'O' Anusandhan University
                                    </span>
                                    , Bhubneshwar.
                                </p>
                            </div>

                            {/* Meta info */}
                            <div
                                className="fade-up"
                                style={{
                                    transitionDelay: "0.4s",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 20,
                                    marginBottom: 36,
                                    flexWrap: "wrap",
                                }}
                            >
                                <span
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: "0.87rem",
                                        color: "#9B7080",
                                    }}
                                >
                                    <MapPin size={15} color="#D4547A" />
                                    {personal.location}
                                </span>
                                <span
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: "0.87rem",
                                        color: "#9B7080",
                                    }}
                                >
                                    <Mail size={15} color="#D4547A" />
                                    {personal.email}
                                </span>
                            </div>

                            {/* CTA Buttons */}
                            <div
                                className="fade-up"
                                style={{
                                    transitionDelay: "0.5s",
                                    display: "flex",
                                    gap: 14,
                                    flexWrap: "wrap",
                                    marginBottom: 40,
                                }}
                            >
                                <a
                                    href="#projects"
                                    className="btn-sakura"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    View My Projects
                                </a>
                                <a
                                    href={personal.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline"
                                >
                                    <Linkedin size={16} />
                                    LinkedIn
                                </a>
                            </div>

                            {/* Social Links */}
                            <div
                                className="fade-up"
                                style={{ transitionDelay: "0.6s", display: "flex", gap: 12 }}
                            >
                                {[
                                    { icon: <Github size={18} />, href: personal.github, label: "GitHub" },
                                    { icon: <Linkedin size={18} />, href: personal.linkedin, label: "LinkedIn" },
                                    { icon: <Mail size={18} />, href: `mailto:${personal.email}`, label: "Email" },
                                ].map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={s.label}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: "1.5px solid #F4C2CC",
                                            borderRadius: "50%",
                                            color: "#D4547A",
                                            textDecoration: "none",
                                            background: "#FFF9FB",
                                            transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "#FADADD";
                                            e.currentTarget.style.borderColor = "#D4547A";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "#FFF9FB";
                                            e.currentTarget.style.borderColor = "#F4C2CC";
                                            e.currentTarget.style.transform = "translateY(0)";
                                        }}
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Avatar + Decoration */}
                    <div
                        className="fade-up float-cherry hero-image"
                        style={{ transitionDelay: "0.3s", position: "relative" }}
                    >
                        {/* Cherry blossom image */}
                        <div
                            style={{
                                width: 300,
                                height: 300,
                                borderRadius: "60% 40% 60% 40% / 40% 60% 40% 60%",
                                overflow: "hidden",
                                border: "4px solid #FADADD",
                                boxShadow: "0 20px 60px rgba(212, 84, 122, 0.2), 0 8px 24px rgba(212, 84, 122, 0.1)",
                                position: "relative",
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522383225653-ed111181a951?fm=jpg&q=60&w=600&auto=format&fit=crop"
                                alt="Cherry Blossom"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(135deg, rgba(212, 84, 122, 0.1), transparent)",
                                }}
                            />
                        </div>

                        {/* Floating skill badge */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: -10,
                                left: -20,
                                background: "#FFF9FB",
                                border: "1.5px solid #F4C2CC",
                                borderRadius: 16,
                                padding: "10px 16px",
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                boxShadow: "0 8px 24px rgba(212, 84, 122, 0.12)",
                            }}
                        >
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    background: "linear-gradient(135deg, #E8527A, #C74B7F)",
                                    borderRadius: 10,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                <Code2 size={18} color="white" />
                            </div>
                            <div>
                                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#1A0810", lineHeight: 1 }}>React & JS</p>
                                <p style={{ fontSize: "0.7rem", color: "#9B7080", marginTop: 2 }}>Frontend Dev</p>
                            </div>
                        </div>

                        {/* Top decoration */}
                        <div
                            style={{
                                position: "absolute",
                                top: -15,
                                right: -15,
                                width: 60,
                                height: 60,
                                background: "linear-gradient(135deg, #FADADD, #F48FB1)",
                                borderRadius: "50% 0 50% 0",
                                opacity: 0.6,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Down */}
            <button
                onClick={scrollToAbout}
                style={{
                    position: "absolute",
                    bottom: 32,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "none",
                    border: "1.5px solid #F4C2CC",
                    borderRadius: "50%",
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#D4547A",
                    animation: "floatCherry 2s ease-in-out infinite",
                    zIndex: 10,
                }}
                title="Scroll Down"
            >
                <ArrowDown size={18} />
            </button>

            <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image { display: none !important; }
        }
        .fade-up { transition-delay: var(--delay, 0s); }
      `}</style>
        </section >
    );
}