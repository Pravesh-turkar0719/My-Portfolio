import React, { useState, useEffect } from "react";
import { portfolioData } from "./components/mock";
import { Menu, X, Cherry } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { personal } = portfolioData;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = ["about", "skills", "projects", "education", "contact"];
            for (const sec of sections.reverse()) {
                const el = document.getElementById(sec);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sec);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setMenuOpen(false);
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: "background 0.4s ease, box-shadow 0.4s ease",
                background: scrolled
                    ? "rgba(255, 249, 251, 0.92)"
                    : "rgba(255, 249, 251, 0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: scrolled ? "0 2px 20px rgba(212, 84, 122, 0.08)" : "none",
                borderBottom: scrolled ? "1px solid #F4C2CC" : "1px solid transparent",
            }}
        >
            <div
                className="container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 68,
                }}
            >
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        textDecoration: "none",
                    }}
                >
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
                            boxShadow: "0 4px 12px rgba(199, 75, 127, 0.3)",
                        }}
                    >
                        <Cherry size={18} color="white" />
                    </div>
                    <span
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            color: "#1A0810",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {personal.name.split(" ")[0]}
                        <span style={{ color: "#D4547A" }}>.</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav style={{ display: "flex", alignItems: "center", gap: 6 }} className="desktop-nav">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "0.87rem",
                                    fontWeight: isActive ? 600 : 500,
                                    color: isActive ? "#D4547A" : "#5C2E40",
                                    textDecoration: "none",
                                    padding: "6px 14px",
                                    borderRadius: 100,
                                    background: isActive ? "#FDF0F4" : "transparent",
                                    transition: "color 0.2s ease, background 0.2s ease",
                                    border: isActive ? "1px solid #F4C2CC" : "1px solid transparent",
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.target.style.color = "#D4547A";
                                        e.target.style.background = "#FFF4F7";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.target.style.color = "#5C2E40";
                                        e.target.style.background = "transparent";
                                    }
                                }}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                        className="btn-sakura"
                        style={{ marginLeft: 8, padding: "8px 20px", fontSize: "0.85rem" }}
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: "none",
                        background: "none",
                        border: "1px solid #F4C2CC",
                        borderRadius: 10,
                        padding: "8px",
                        cursor: "pointer",
                        color: "#D4547A",
                    }}
                    className="mobile-menu-btn"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "rgba(255, 249, 251, 0.97)",
                        backdropFilter: "blur(12px)",
                        borderBottom: "1px solid #F4C2CC",
                        padding: "16px 20px 20px",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            style={{
                                display: "block",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                color: "#5C2E40",
                                textDecoration: "none",
                                padding: "10px 0",
                                borderBottom: "1px solid #F4C2CC40",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                        className="btn-sakura"
                        style={{ marginTop: 16, display: "inline-flex" }}
                    >
                        Hire Me
                    </a>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </header>
    );
}