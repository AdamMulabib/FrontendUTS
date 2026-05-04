import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/UseAuthStore";

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {

        logout();
        navigate("/login");
    };

  return (
    <div className="flex w-full min-h-screen">
      <aside className="w-44 bg-amber-700 flex flex-col justify-between p-4 text-white">
        
        <div className="flex items-center justify-center border-b border-white/100 h-16"> 
          <h2 className="text-2xl font-bold mb-4">InvoFest</h2>
        </div> 

        <div>  
          <nav className="flex flex-col gap-2">
            <nav className="flex flex-col gap-2">
            <Link 
                to="/dashboard" 
                className="p-2 rounded-2xl hover:bg-black transition-colors ease-in duration-150"
            >
                Dashboard
            </Link>

            <Link 
                to="/dashboard/kategori"
                className="p-2 rounded-2xl hover:bg-black transition-colors ease-in duration-150"
            >
                Kategori Event
            </Link>

            <Link 
                to="/dashboard/events"
                className="p-2 rounded-2xl hover:bg-black transition-colors ease-in duration-150"
            >
                Event
            </Link>

            <Link 
                to="/dashboard/pembicara"
                className="p-2 rounded-2xl hover:bg-black transition-colors ease-in duration-150"
            >
                Pembicara
            </Link>
            </nav>
          </nav>
        </div> 

        <div>
            <button onClick={handleLogout} type="button" className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition active:scale-[0.98]">
            Logout
            </button>
        </div>
      </aside>

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}