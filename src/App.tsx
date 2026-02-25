import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HistoryPage from "./pages/HistoryPage";
import RetroRoomPage from "./pages/RetroRoomPage";
import ActionTrackerPage from "./pages/ActionTrackerPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<HistoryPage />} />
          <Route path="/board" element={<RetroRoomPage />} />
          <Route path="/actions" element={<ActionTrackerPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
