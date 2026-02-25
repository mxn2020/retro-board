import { CheckCircle2, Circle, Clock } from "lucide-react";

export default function ActionTrackerPage() {
    const actions = [
        { text: "Set up SLAs for PR reviews (Max 24h)", owner: "Mehdi N.", status: "todo", source: "Sprint 42", date: "Oct 25" },
        { text: "Investigate staging flakiness", owner: "Alex L.", status: "in-progress", source: "Sprint 42", date: "Oct 25" },
        { text: "Schedule team offsite", owner: "Sarah J.", status: "done", source: "Q3 Wrap-up", date: "Sep 30" },
        { text: "Update onboarding docs", owner: "Mehdi N.", status: "done", source: "Sprint 40", date: "Sep 27" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Action Item Tracker</h1>

        <div className="card" style={{ overflow: "hidden" }}>
            <div style={{ padding: "var(--space-3) var(--space-4)", background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "var(--space-2)" }}>
                <button className="btn btn-sm" style={{ background: "var(--color-bg-card)", boxShadow: "var(--card-shadow)" }}>Active (2)</button>
                <button className="btn btn-sm btn-ghost">Completed (2)</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                {actions.map((a, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-4)", borderBottom: "1px solid var(--color-border)", background: a.status === "done" ? "var(--color-bg-primary)" : "var(--color-bg-card)" }}>
                        <button className="btn-ghost" style={{ padding: 0, color: a.status === "done" ? "var(--color-success)" : "var(--color-text-tertiary)" }}>
                            {a.status === "done" ? <CheckCircle2 size={24} /> : a.status === "in-progress" ? <Clock size={24} style={{ color: "var(--color-warning)" }} /> : <Circle size={24} />}
                        </button>
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: "15px", fontWeight: 600, color: a.status === "done" ? "var(--color-text-secondary)" : "var(--color-text-primary)", textDecoration: a.status === "done" ? "line-through" : "none" }}>{a.text}</p>
                            <div style={{ display: "flex", gap: "var(--space-4)", fontSize: "13px", color: "var(--color-text-tertiary)", marginTop: 4, fontWeight: 500 }}>
                                <span>Owner: <strong>{a.owner}</strong></span>
                                <span>From: {a.source}</span>
                                <span>Created: {a.date}</span>
                            </div>
                        </div>
                        <select style={{ padding: "4px 8px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)", fontSize: "13px", fontWeight: 600 }} defaultValue={a.status}>
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}
