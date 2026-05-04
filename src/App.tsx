import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🌐 Public Pages
import Beranda from "./pages/Beranda";
import Seminar from "./pages/Seminar";
import Competition from "./pages/Compotision";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshow";

// 🔐 Auth
import Login from "./pages/Login";
import Register from "./pages/Register";

// 🧩 Layout
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";

// 🛡 Protected
import ProtectedRoute from "./route/ProtectedRoute";

// 📊 Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";

// 📂 Category
import CategoryIndex from "./pages/dashboard/kategori/CategoryIndex";
import CategoryCreate from "./pages/dashboard/kategori/CategoryCreate";

// 📅 Event
import EventIndex from "./pages/dashboard/event/EventIndex";
import EventCreate from "./pages/dashboard/event/EventCreate";

// 🎤 Pembicara
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌐 PUBLIC */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        {/* 🔐 AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* 🛡 PROTECTED + DASHBOARD */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Category */}
            <Route path="/dashboard/kategori" element={<CategoryIndex />} />
            <Route path="/dashboard/kategori/create" element={<CategoryCreate />} />

            {/* Event */}
            <Route path="/dashboard/events" element={<EventIndex />} />
            <Route path="/dashboard/event/create" element={<EventCreate />} />

            {/* Pembicara */}
            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />

          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;