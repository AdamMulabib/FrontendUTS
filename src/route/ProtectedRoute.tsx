import { Navigate } from "react-router-dom";
import { useAuthStore as UseAuthStore } from "../store/UseAuthStore";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const isAuthenticated = UseAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}