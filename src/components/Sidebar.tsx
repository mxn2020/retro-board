import { Link, useLocation } from "react-router-dom";
import { History, LayoutDashboard, CheckSquare, Sparkles } from "lucide-react";
import { Avatar } from "@geenius-ui/react-css";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: History, label: "All Retrospectives" },
        { to: "/board", icon: LayoutDashboard, label: "Active Sprint 42" },
        { to: "/actions", icon: CheckSquare, label: "Action Tracker" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <div style={{ background: "var(--color-bg-tertiary)", color: "var(--color-accent-primary)", padding: 8, borderRadius: "var(--radius-md)" }}><Sparkles size={20} /></div>
            <div>
                <strong style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.5px" }}>RetroBoard</strong>
                <div style={{ fontSize: "11px", color: "var(--color-text-tertiary)", fontWeight: 600 }}>Acme Engineering</div>
            </div>
        </div>

        <nav style={{ padding: "var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px 14px", borderRadius: "var(--radius-md)", color: loc.pathname === l.to ? "var(--color-text-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-bg-secondary)" : "transparent", fontWeight: loc.pathname === l.to ? 700 : 600, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={18} style={{ color: loc.pathname === l.to ? "var(--color-accent-primary)" : "inherit" }} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <Avatar fallback="MN" size="sm" src="https://i.pravatar.cc/100?img=3" />
                <div style={{ fontWeight: 600, fontSize: "13px" }}>Mehdi</div>
            </div>
            <ThemeToggle />
        </div>
    </aside>);
}
