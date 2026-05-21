import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  bio: z.string().min(3, "Bio minimal 3 karakter"),
  image: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function PembicaraCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/pembicara`, data);

      alert("Pembicara berhasil ditambahkan!");
      navigate("/dashboard/pembicara");
    } catch (error) {
      console.log(error);
      alert("Gagal menambahkan pembicara");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Tambah Pembicara</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block font-medium mb-1">Nama Pembicara</label>
          <input
            {...register("name")}
            placeholder="Contoh: Budi Santoso"
            className="border p-2 rounded w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea
            {...register("bio")}
            placeholder="Contoh: Praktisi teknologi dan pembicara seminar nasional"
            className="border p-2 rounded w-full h-28"
          />
          {errors.bio && (
            <p className="text-red-500 text-sm">{errors.bio.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">URL Gambar</label>
          <input
            {...register("image")}
            placeholder="https://example.com/foto.jpg"
            className="border p-2 rounded w-full"
          />
        </div>

        <button className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
          Simpan
        </button>
      </form>
    </div>
  );
}