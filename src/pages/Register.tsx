import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = z
  .object({
    username: z.string().min(2, "Username harus diisi"),
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string().min(8, "Konfirmasi password minimal 8 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
      alert("Akun berhasil dibuat!");
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">

      {/* 🔵 KIRI (GAMBAR) */}
      <div className="w-1/2 hidden md:block relative">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-3xl font-bold">INVOFEST</h1>
          <p>Bergabung & mulai perjalananmu</p>
        </div>
      </div>

      {/* 🟣 KANAN (FORM FULL) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-16">

        <h1 className="text-4xl font-bold text-[#7B1D3F] mb-2">
          Daftar Akun
        </h1>
        <p className="text-gray-400 mb-8">
          Lengkapi data untuk bergabung
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* USERNAME */}
          <div>
            <label className="text-sm font-bold">Username</label>
            <input
              {...register("username")}
              className="w-full px-4 py-3 border rounded-xl mt-2"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-bold">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-3 border rounded-xl mt-2"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold">Password</label>
              <input
                type="password"
                {...register("password")}
                className="w-full px-4 py-3 border rounded-xl mt-2"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-bold">Konfirmasi</label>
              <input
                type="password"
                {...register("confirmPassword")}
                className="w-full px-4 py-3 border rounded-xl mt-2"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#7B1D3F] text-white py-3 rounded-xl flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Loading...
              </>
            ) : (
              "Daftar Sekarang"
            )}
          </button>

          {/* LINK LOGIN */}
          <p className="text-sm text-gray-500">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-[#7B1D3F] font-bold">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}