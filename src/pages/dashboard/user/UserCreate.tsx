import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  foto: z.string().optional(),
  role: z.string().min(1, "Role wajib dipilih"),
});

type FormData = z.infer<typeof schema>;

export default function UserCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      role: "user",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/simpan-user`, data);

      alert("User berhasil dibuat!");
      navigate("/dashboard/users");
        } catch (error: any) {
        console.log("ERROR CREATE USER:", error.response?.data || error);

        alert(
            error.response?.data?.message || "Gagal menambahkan user"
        );
    }
};


  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">Tambah User</h1>

      <p className="text-sm text-gray-500 mb-6">
        Digunakan untuk menambahkan user dan mengatur hak akses.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* USERNAME */}
        <div>
          <label className="block font-medium">Username</label>

          <input
            type="text"
            placeholder="Contoh: admin"
            {...register("username")}
            className="w-full border p-2 rounded"
          />

          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block font-medium">Password</label>

          <input
            type="password"
            placeholder="Masukkan password"
            {...register("password")}
            className="w-full border p-2 rounded"
          />

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* FOTO */}
        <div>
          <label className="block font-medium">Foto</label>

          <input
            type="text"
            placeholder="Contoh: admin.jpg"
            {...register("foto")}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* ROLE */}
        <div>
          <label className="block font-medium">Role</label>

          <select {...register("role")} className="w-full border p-2 rounded">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Simpan User
        </button>
      </form>
    </div>
  );
}