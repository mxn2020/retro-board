import { Plus, Users, Calendar, ArrowRight } from "lucide-react";

export default function HistoryPage() {
    const retros = [
        { title: "Sprint 42 Retro", date: "Oct 25, 2026", participants: 8, actions: 3, status: "Active" },
        { title: "Sprint 41 Retro", date: "Oct 11, 2026", participants: 7, actions: 5, status: "Completed" },
        { title: "Q3 Wrap-up", date: "Sep 30, 2026", participants: 14, actions: 12, status: "Completed" },
        { title: "Sprint 40 Retro", date: "Sep 27, 2026", participants: 8, actions: 2, status: "Completed" },
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: 4 }}>Retrospective History</h1>
                <p style={{ color: "var(--color-text-secondary)" }}>Review past insights and track your team's improvement over time.</p>
            </div>
            <button className="btn btn-primary"><Plus size={18} /> Start New Retro</button>
        </div>

        <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {retros.map((r, i) => (
                <div key={i} className="card" style={{ padding: "var(--space-5)", display: "flex", justifyContent: "space-between", alignItems: "center", borderLeft: r.status === "Active" ? "4px solid var(--color-accent-primary)" : "1px solid var(--color-border)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <h2 style={{ fontSize: "18px", fontWeight: 700 }}>{r.title}</h2>
                            {r.status === "Active" && <span style={{ background: "var(--color-accent-soft)", color: "var(--color-accent-primary)", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: 12 }}>IN PROGRESS</span>}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", color: "var(--color-text-tertiary)", fontSize: "13px", fontWeight: 500 }}>
                            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Calendar size={14} /> {r.date}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Users size={14} /> {r.participants} joined</span>
                            <span>{r.actions} Action Items</span>
                        </div>
                    </div>
                    <button className="btn btn-ghost" style={{ color: "var(--color-accent-primary)" }}>Enter <ArrowRight size={16} /></button>
                </div>
            ))}
        </div>
    </div>);
}
