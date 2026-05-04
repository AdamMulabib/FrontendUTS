import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

type FormData = {
  name: string;
  icon?: string;
  description: string;
  status: string;
};

const schema = z.object({
  name: z.string().min(3, "Nama kategori minimal 3 karakter"),
  icon: z.string().optional(),
  description: z.string().min(5, "Deskripsi minimal 5 karakter"),
  status: z.string().min(1, "Status wajib dipilih"),
});

export default function CategoryCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Data kategori:", data);
    alert("Kategori berhasil dibuat!");
  };

  return (
    <div className="p-6 max-w-2xl">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Tambah Kategori Event</h1>
        <p className="text-sm text-gray-500">
          Digunakan untuk mengelompokkan event seperti Seminar, Workshop, dll.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Nama */}
        <div>
          <label className="block text-sm font-medium mb-1">Nama Kategori</label>
          <input
            type="text"
            placeholder="Contoh: Seminar"
            {...register("name")}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Icon */}
        <div>
          <label className="block text-sm font-medium mb-1">Icon (optional)</label>
          <input
            type="text"
            placeholder="Contoh: 🎤"
            {...register("icon")}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block text-sm font-medium mb-1">Deskripsi</label>
          <textarea
            placeholder="Deskripsi kategori"
            {...register("description")}
            className="w-full border p-2 rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            {...register("status")}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Pilih Status --</option>
            <option value="active">Aktif</option>
            <option value="inactive">Nonaktif</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>
          )}
        </div>

        {/* ACTION */}
        <div className="flex justify-between items-center pt-4">
          <Link
            to="/dashboard/kategori"
            className="text-gray-500 text-sm hover:underline"
          >
            Kembali
          </Link>

          <button
            type="submit"
            className="bg-[#7B1D3F] text-white px-4 py-2 rounded hover:opacity-90"
          >
            Simpan Kategori
          </button>
        </div>

      </form>
    </div>
  );
}