import { Plus, Users, Calendar, ArrowRight } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

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
            <Button variant="primary" icon={<Plus size={18} />}>Start New Retro</Button>
        </div>

        <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {retros.map((r, i) => (
                <Card key={i} padding="lg" className={r.status === "Active" ? "retro-active-card" : ""}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                                <h2 style={{ fontSize: "18px", fontWeight: 700 }}>{r.title}</h2>
                                {r.status === "Active" && <Badge variant="default" size="sm">IN PROGRESS</Badge>}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", color: "var(--color-text-tertiary)", fontSize: "13px", fontWeight: 500 }}>
                                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Calendar size={14} /> {r.date}</span>
                                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Users size={14} /> {r.participants} joined</span>
                                <span>{r.actions} Action Items</span>
                            </div>
                        </div>
                        <Button variant="ghost">Enter <ArrowRight size={16} /></Button>
                    </div>
                </Card>
            ))}
        </div>
    </div>);
}
