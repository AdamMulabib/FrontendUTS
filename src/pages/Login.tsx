import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAuthStore as UseAuthStore } from "../store/UseAuthStore";

type FormData = {
  nim: string;
  password: string;
};

const schema = z.object({
  nim: z.string().min(1, "NIM harus diisi"),
  password: z.string().min(1, "Password harus diisi"),
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const login = UseAuthStore((state) => state.login);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (data.nim !== "24090040" || data.password !== "24090040") {
      alert("Login Gagal: NIM atau password salah");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Login Berhasil!");
      login(data.nim);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* KIRI - GAMBAR FULL */}
      <div className="w-1/2 hidden md:block relative">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
          alt="Login Visual"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-3xl font-bold">INVOFEST</h2>
          <p className="text-sm opacity-80">
            Solusi event & teknologi masa kini
          </p>
        </div>
      </div>

      {/* KANAN - FORM FULL */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-12">
        <div className="w-full max-w-lg">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-[#7B1D3F]">
              Selamat Datang!
            </h1>
            <p className="text-gray-400 mt-3">
              Silakan login untuk melanjutkan
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* NIM */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                NIM
              </label>
              <input
                {...register("nim")}
                type="text"
                disabled={isLoading}
                className={`w-full px-4 py-3.5 border rounded-xl outline-none transition ${
                  errors.nim
                    ? "border-red-500 bg-red-50"
                    : "border-slate-200 focus:border-[#7B1D3F]"
                }`}
                placeholder="Masukkan NIM"
              />
              {errors.nim && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.nim.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                disabled={isLoading}
                className={`w-full px-4 py-3.5 border rounded-xl outline-none transition ${
                  errors.password
                    ? "border-red-500 bg-red-50"
                    : "border-slate-200 focus:border-[#7B1D3F]"
                }`}
                placeholder="Masukkan password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#832B49] text-white py-4 rounded-xl font-bold hover:bg-[#6a223b] flex items-center justify-center gap-2 transition active:scale-[0.98] disabled:bg-slate-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Memproses...
                </>
              ) : (
                "Login"
              )}
            </button>

            <div className="text-sm text-center text-slate-500">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="text-[#7B1D3F] font-bold hover:underline"
              >
                Daftar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}