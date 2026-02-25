import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HistoryPage from "../pages/HistoryPage";
import RetroRoomPage from "../pages/RetroRoomPage";
import ActionTrackerPage from "../pages/ActionTrackerPage";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("RetroBoard")).toBeInTheDocument(); });
    it("HistoryPage renders", () => { wrap(<HistoryPage />); expect(screen.getByText("Retrospective History")).toBeInTheDocument(); });
    it("RetroRoomPage renders", () => { wrap(<RetroRoomPage />); expect(screen.getByText("Sprint 42 Retro")).toBeInTheDocument(); });
    it("ActionTrackerPage renders", () => { wrap(<ActionTrackerPage />); expect(screen.getByText("Action Item Tracker")).toBeInTheDocument(); });
});
