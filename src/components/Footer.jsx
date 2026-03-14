import React from "react";
import { portfolioData } from "./mock";
import { Cherry, Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    const { personal } = portfolioData;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            style={{
                background: "#1A0810",
                color: "#F4C2CC",
                padding: "60px 0 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative petal shapes */}
            <div
                style={{
                    position: "absolute",
                    top: 20,
                    right: 80,
                    width: 120,
                    height: 120,
                    background: "radial-gradient(circle, rgba(212, 84, 122, 0.08) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 40,
                    left: 60,
                    width: 80,
                    height: 80,
                    background: "radial-gradient(circle, rgba(212, 84, 122, 0.06) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                {/* Top section */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1fr 1fr",
                        gap: 40,
                        marginBottom: 48,
                    }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    background: "linear-gradient(135deg, #E8527A, #C74B7F)",
                                    borderRadius: "50% 0 50% 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transform: "rotate(-10deg)",
                                }}
                            >
                                <Cherry size={18} color="white" />
                            </div>
                            <span
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.2rem",
                                    color: "#FADADD",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {personal.name}
                            </span>
                        </div>
                        <p
                            style={{
                                fontSize: "0.88rem",
                                lineHeight: 1.75,
                                color: "rgba(244, 194, 204, 0.7)",
                                maxWidth: 280,
                                marginBottom: 20,
                            }}
                        >
                            A passionate frontend developer crafting beautiful digital experiences.
                            Open to opportunities in web development and software engineering.
                        </p>
                        <div style={{ display: "flex", gap: 10 }}>
                            {[
                                { icon: <Github size={16} />, href: personal.github },
                                { icon: <Linkedin size={16} />, href: personal.linkedin },
                                { icon: <Mail size={16} />, href: `mailto:${personal.email}` },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: 36,
                                        height: 36,
                                        background: "rgba(244, 194, 204, 0.1)",
                                        border: "1px solid rgba(244, 194, 204, 0.2)",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#F4C2CC",
                                        textDecoration: "none",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "rgba(212, 84, 122, 0.3)";
                                        e.currentTarget.style.borderColor = "#D4547A";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "rgba(244, 194, 204, 0.1)";
                                        e.currentTarget.style.borderColor = "rgba(244, 194, 204, 0.2)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "0.82rem",
                                fontWeight: 700,
                                color: "#D4547A",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                marginBottom: 20,
                            }}
                        >
                            Navigation
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {["About", "Skills", "Projects", "Education", "Contact"].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    style={{
                                        color: "rgba(244, 194, 204, 0.65)",
                                        textDecoration: "none",
                                        fontSize: "0.87rem",
                                        fontFamily: "'Nunito', sans-serif",
                                        transition: "all 0.2s ease",
                                        display: "inline-block",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#FADADD";
                                        e.currentTarget.style.transform = "translateX(6px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "rgba(244, 194, 204, 0.65)";
                                        e.currentTarget.style.transform = "translateX(0)";
                                    }}
                                >
                                    → {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Tech */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "0.82rem",
                                fontWeight: 700,
                                color: "#D4547A",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                marginBottom: 20,
                            }}
                        >
                            Tech Stack
                        </h4>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {["HTML5", "CSS3", "JavaScript", "ReactJS", "Node.js", "C++", "Python"].map((tech) => (
                                <span
                                    key={tech}
                                    style={{
                                        background: "rgba(244, 194, 204, 0.08)",
                                        border: "1px solid rgba(244, 194, 204, 0.15)",
                                        borderRadius: 100,
                                        padding: "4px 12px",
                                        fontSize: "0.75rem",
                                        fontFamily: "'Poppins', sans-serif",
                                        color: "rgba(244, 194, 204, 0.7)",
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "rgba(244, 194, 204, 0.1)", marginBottom: 24 }} />

                {/* Bottom bar */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: 28,
                        flexWrap: "wrap",
                        gap: 16,
                    }}
                >
                    <p
                        style={{
                            fontSize: "0.82rem",
                            color: "rgba(244, 194, 204, 0.5)",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            fontFamily: "'Nunito', sans-serif",
                        }}
                    >
                        © 2026 {personal.name}. Made with{" "}
                        <Heart size={12} color="#D4547A" fill="#D4547A" />
                        {" "}and lots of{" "}
                        <Cherry size={12} color="#D4547A" />
                    </p>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            background: "rgba(212, 84, 122, 0.15)",
                            border: "1px solid rgba(212, 84, 122, 0.3)",
                            borderRadius: 100,
                            padding: "8px 16px",
                            color: "#F4C2CC",
                            cursor: "pointer",
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(212, 84, 122, 0.3)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(212, 84, 122, 0.15)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <ArrowUp size={14} />
                        Back to Top
                    </button>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </footer>
    );
}