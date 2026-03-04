import { Plus, ThumbsUp, MessageCircle, Settings, Users, ArrowRight } from "lucide-react";
import { Button, Avatar } from "@geenius-ui/react-css";

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
                <Button variant="primary" size="sm">Next Phase <ArrowRight size={14} /></Button>
                <Button variant="ghost" icon={<Settings size={18} />} />
            </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)", padding: "var(--space-6)", flex: 1, overflow: "hidden" }}>
            {columns.map(col => (
                <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    <h2 style={{ fontSize: "16px", fontWeight: 700, textAlign: "center", paddingBottom: "var(--space-2)", borderBottom: "2px solid var(--color-border)" }}>{col.title} ({col.items.length})</h2>

                    <Button variant="outline" icon={<Plus size={16} />} className="retro-add-card">Add Card</Button>

                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", overflowY: "auto", paddingBottom: "var(--space-6)" }}>
                        {col.items.map((item, i) => (
                            <div key={i} className="sticky-note" style={{ background: col.color }}>
                                <p style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.4, marginBottom: "var(--space-4)", color: "var(--color-text-primary)" }}>{item.text}</p>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                                        <Button variant="outline" size="sm">
                                            <ThumbsUp size={12} /> {item.votes > 0 ? item.votes : ""}
                                        </Button>
                                        <Button variant="ghost" size="sm" icon={<MessageCircle size={14} />} />
                                    </div>
                                    {item.author && <Avatar fallback={item.author} size="sm" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
