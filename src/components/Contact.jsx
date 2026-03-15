import React, { useEffect, useRef } from "react";
import { portfolioData } from "./mock";
import { Mail, Phone, MapPin, Linkedin, Send, MessageSquare, Github, Cherry } from "lucide-react";
// 1. Import the Formspree hooks
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const { personal } = portfolioData;
    const ref = useRef(null);

    // 2. Initialize Formspree with your ID
    const [state, handleSubmit] = useForm("xbdzakew");

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

    const inputStyle = {
        width: "100%",
        background: "#FFFFFF",
        border: "1.5px solid #F4C2CC",
        borderRadius: 12,
        padding: "12px 16px",
        fontFamily: "'Nunito', sans-serif",
        fontSize: "0.93rem",
        color: "#1A0810",
        outline: "none",
        boxSizing: "border-box",
    };

    return (
        <section id="contact" className="section" ref={ref}>
            <div className="container">
                <div className="fade-up" style={{ marginBottom: 50 }}>
                    <div className="section-label">
                        <MessageSquare size={12} />
                        Contact
                    </div>
                    <h2 className="section-title">
                        Let's <span>Connect</span>
                    </h2>
                    <p className="section-subtitle">
                        Open to internships, collaborations, and exciting projects. Let's build something amazing together!
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40, alignItems: "start" }}>
                    {/* Left side remains the same */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
                            <div style={{ background: "linear-gradient(135deg, #D4547A, #C74B7F)", borderRadius: 20, padding: 28, color: "white", boxShadow: "0 12px 40px rgba(199, 75, 127, 0.25)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                                    <Cherry size={22} color="white" />
                                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem", fontWeight: 700 }}>Get In Touch</h3>
                                </div>
                                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.9, marginBottom: 24 }}>
                                    I'm currently open to internships and freelance projects. Feel free to reach out!
                                </p>
                                {[
                                    { icon: <Phone size={16} />, text: personal.phone },
                                    { icon: <Mail size={16} />, text: personal.email },
                                    { icon: <MapPin size={16} />, text: personal.location },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                                        <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            {item.icon}
                                        </div>
                                        <span style={{ fontSize: "0.87rem", opacity: 0.9 }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Social Links Box */}
                        <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
                            <div style={{ background: "#FFFFFF", border: "1.5px solid #F4C2CC", borderRadius: 20, padding: 24, boxShadow: "0 4px 20px rgba(212, 84, 122, 0.06)" }}>
                                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#C74B7F", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Connect Online</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                    {[
                                        { icon: <Linkedin size={18} />, label: "LinkedIn", handle: "praveshturkar0719", href: personal.linkedin },
                                        { icon: <Github size={18} />, label: "GitHub", handle: "praveshturkar", href: personal.github },
                                        { icon: <Mail size={18} />, label: "Email", handle: personal.email, href: `mailto:${personal.email}` },
                                    ].map((s) => (
                                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "#FFF9FB", border: "1px solid #F4C2CC", borderRadius: 12, textDecoration: "none", transition: "all 0.2s ease" }}>
                                            <div style={{ color: "#D4547A" }}>{s.icon}</div>
                                            <div>
                                                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#1A0810", lineHeight: 1 }}>{s.label}</p>
                                                <p style={{ fontSize: "0.75rem", color: "#9B7080", marginTop: 2 }}>{s.handle}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="fade-up" style={{ transitionDelay: "0.2s" }}>
                        <div style={{ background: "#FFFFFF", border: "1.5px solid #F4C2CC", borderRadius: 24, padding: 36, boxShadow: "0 8px 32px rgba(212, 84, 122, 0.08)" }}>
                            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#1A0810", marginBottom: 8 }}>Send a Message</h3>
                            <p style={{ fontSize: "0.87rem", color: "#9B7080", marginBottom: 28 }}>I'll get back to you within 24 hours.</p>

                            {/* 3. Handle the Success State */}
                            {state.succeeded ? (
                                <div style={{ background: "rgba(107, 158, 106, 0.1)", border: "1px solid rgba(107, 158, 106, 0.3)", borderRadius: 14, padding: "20px 24px", textAlign: "center" }}>
                                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#5A8A59", fontSize: "1rem", marginBottom: 4 }}>Message Sent!</p>
                                    <p style={{ fontSize: "0.87rem", color: "#6B9E6A" }}>Thanks for reaching out, Pravesh. Check your inbox soon!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                                    <div>
                                        <label htmlFor="full-name" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#5C2E40", display: "block", marginBottom: 8 }}>Your Name</label>
                                        <input id="full-name" name="name" type="text" placeholder="e.g. Alex Johnson" required style={inputStyle} />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#5C2E40", display: "block", marginBottom: 8 }}>Email Address</label>
                                        <input id="email" name="email" type="email" placeholder="e.g. hello@example.com" required style={inputStyle} />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>
                                    <div>
                                        <label htmlFor="message" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#5C2E40", display: "block", marginBottom: 8 }}>Message</label>
                                        <textarea id="message" name="message" placeholder="Tell me about your project..." required rows={5} style={{ ...inputStyle, resize: "vertical", minHeight: 120 }} />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                                    </div>
                                    <button type="submit" className="btn-sakura" style={{ justifyContent: "center" }} disabled={state.submitting}>
                                        <Send size={16} />
                                        {state.submitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`@media (max-width: 768px) { #contact .container > div:nth-child(2) { grid-template-columns: 1fr !important; } }`}</style>
        </section>
    );
}