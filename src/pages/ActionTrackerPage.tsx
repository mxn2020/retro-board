import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Button, Card, Select, SelectItem } from "@geenius-ui/react-css";

export default function ActionTrackerPage() {
    const actions = [
        { text: "Set up SLAs for PR reviews (Max 24h)", owner: "Mehdi N.", status: "todo", source: "Sprint 42", date: "Oct 25" },
        { text: "Investigate staging flakiness", owner: "Alex L.", status: "in-progress", source: "Sprint 42", date: "Oct 25" },
        { text: "Schedule team offsite", owner: "Sarah J.", status: "done", source: "Q3 Wrap-up", date: "Sep 30" },
        { text: "Update onboarding docs", owner: "Mehdi N.", status: "done", source: "Sprint 40", date: "Sep 27" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Action Item Tracker</h1>

        <Card padding="none">
            <div style={{ padding: "var(--space-3) var(--space-4)", background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "var(--space-2)" }}>
                <Button variant="outline" size="sm">Active (2)</Button>
                <Button variant="ghost" size="sm">Completed (2)</Button>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                {actions.map((a, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-4)", borderBottom: "1px solid var(--color-border)", background: a.status === "done" ? "var(--color-bg-primary)" : "var(--color-bg-card)" }}>
                        <Button variant="ghost" size="sm" style={{ padding: 0, color: a.status === "done" ? "var(--color-success)" : "var(--color-text-tertiary)" }}>
                            {a.status === "done" ? <CheckCircle2 size={24} /> : a.status === "in-progress" ? <Clock size={24} style={{ color: "var(--color-warning)" }} /> : <Circle size={24} />}
                        </Button>
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: "15px", fontWeight: 600, color: a.status === "done" ? "var(--color-text-secondary)" : "var(--color-text-primary)", textDecoration: a.status === "done" ? "line-through" : "none" }}>{a.text}</p>
                            <div style={{ display: "flex", gap: "var(--space-4)", fontSize: "13px", color: "var(--color-text-tertiary)", marginTop: 4, fontWeight: 500 }}>
                                <span>Owner: <strong>{a.owner}</strong></span>
                                <span>From: {a.source}</span>
                                <span>Created: {a.date}</span>
                            </div>
                        </div>
                        <Select defaultValue={a.status} style={{ fontSize: "13px" }}>
                            <SelectItem value="todo">To Do</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="done">Done</SelectItem>
                        </Select>
                    </div>
                ))}
            </div>
        </Card>
    </div>);
}
