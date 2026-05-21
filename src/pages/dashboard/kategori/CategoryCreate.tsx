import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nama kategori minimal 3 karakter"),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CategoryCreate() {
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
      await axios.post(
        `${import.meta.env.VITE_API_URL}/categories`,
        data
      );

      alert("Kategori berhasil dibuat!");
      navigate("/dashboard/kategori");
    } catch (error) {
      console.log(error);
      alert("Gagal menambahkan kategori");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">
        Tambah Kategori Event
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        Digunakan untuk mengelompokkan event seperti
        Seminar, Workshop, dll.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {/* NAMA */}
        <div>
          <label className="block font-medium">
            Nama Kategori
          </label>

          <input
            type="text"
            placeholder="Contoh: Seminar"
            {...register("name")}
            className="w-full border p-2 rounded"
          />

          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* DESKRIPSI */}
        <div>
          <label className="block font-medium">
            Deskripsi
          </label>

          <textarea
            placeholder="Masukkan deskripsi kategori"
            {...register("description")}
            className="w-full border p-2 rounded h-28"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Simpan Kategori
        </button>
      </form>
    </div>
  );
}