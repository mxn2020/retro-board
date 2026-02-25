import { Plus, ThumbsUp, MessageCircle, Settings, Users } from "lucide-react";

export default function RetroRoomPage() {
    const columns = [
        {
            title: "Went Well", color: "var(--retro-column-went-well)", items: [
                { text: "Deployed the new billing system perfectly.", votes: 4, author: "MN" },
                { text: "Great team communication this sprint.", votes: 2, author: "JD" }
            ]
        },
        {
            title: "Needs Improvement", color: "var(--retro-column-needs-improvement)", items: [
                { text: "PR reviews took too long, blocking QA.", votes: 5, author: "" },
                { text: "Staging environment was flaky all week.", votes: 3, author: "AL" }
            ]
        },
        {
            title: "Action Items", color: "var(--retro-column-action-items)", items: [
                { text: "Set up SLAs for PR reviews (Max 24h).", votes: 0, author: "MN" }
            ]
        }
    ];

    return (<div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "var(--color-bg-secondary)" }}>
        <div style={{ padding: "var(--space-4) var(--space-6)", background: "var(--color-bg-card)", borderBottom: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <h1 style={{ fontSize: "18px", fontWeight: 700 }}>Sprint 42 Retro</h1>
                <div style={{ height: 24, width: 1, background: "var(--color-border)" }}></div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--color-text-secondary)", fontSize: "13px", fontWeight: 500 }}>
                    <Users size={16} /> 8 active
                </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)" }}>Stage: <strong style={{ color: "var(--color-text-primary)" }}>Voting</strong></span>
                <button className="btn btn-primary btn-sm">Next Phase <ArrowRight size={14} /></button>
                <button className="btn btn-ghost" style={{ padding: 6 }}><Settings size={18} /></button>
            </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)", padding: "var(--space-6)", flex: 1, overflow: "hidden" }}>
            {columns.map(col => (
                <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    <h2 style={{ fontSize: "16px", fontWeight: 700, textAlign: "center", paddingBottom: "var(--space-2)", borderBottom: "2px solid var(--color-border)" }}>{col.title} ({col.items.length})</h2>

                    <button className="btn" style={{ width: "100%", padding: "12px", background: "var(--color-bg-card)", color: "var(--color-text-tertiary)", borderStyle: "dashed" }}><Plus size={16} /> Add Card</button>

                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", overflowY: "auto", paddingBottom: "var(--space-6)" }}>
                        {col.items.map((item, i) => (
                            <div key={i} className="sticky-note" style={{ background: col.color }}>
                                <p style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.4, marginBottom: "var(--space-4)", color: "var(--color-text-primary)" }}>{item.text}</p>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                                        <button className="btn btn-sm" style={{ background: "var(--color-bg-card)", border: "none", boxShadow: "0 1px 2px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
                                            <ThumbsUp size={12} style={{ color: "var(--color-text-tertiary)" }} /> {item.votes > 0 ? item.votes : ""}
                                        </button>
                                        <button className="btn btn-sm btn-ghost" style={{ padding: 4, color: "var(--color-text-tertiary)" }}><MessageCircle size={14} /></button>
                                    </div>
                                    {item.author && <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--color-bg-tertiary)", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, border: "2px solid var(--color-bg-card)" }}>{item.author}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>);
}

// Ensure ArrowRight is imported in retro room too
const ArrowRight = require("lucide-react").ArrowRight;
