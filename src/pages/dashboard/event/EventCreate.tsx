import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

type FormData = {
  name: string;
  category: string;
  date: string;
  location: string;
  description: string;
  status: string;
};

const schema = z.object({
  name: z.string().min(3, "Nama event minimal 3 karakter"),
  category: z.string().min(1, "Kategori wajib dipilih"),
  date: z.string().min(1, "Tanggal wajib diisi"),
  location: z.string().min(3, "Lokasi minimal 3 karakter"),
  description: z.string().min(5, "Deskripsi minimal 5 karakter"),
  status: z.string().min(1, "Status wajib dipilih"),
});

export default function EventCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Event:", data);
    alert("Event berhasil dibuat!");
  };

  return (
    <div className="p-6 max-w-2xl">
      
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Tambah Event</h1>
        <p className="text-gray-500 text-sm">
          Isi data event dengan lengkap
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Nama */}
        <div>
          <label className="block text-sm font-medium mb-1">Nama Event</label>
          <input
            {...register("name")}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Kategori */}
        <div>
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <select {...register("category")} className="w-full border p-2 rounded">
            <option value="">Pilih Kategori</option>
            <option value="Seminar">Seminar</option>
            <option value="Workshop">Workshop</option>
            <option value="Competition">Competition</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
          )}
        </div>

        {/* Tanggal */}
        <div>
          <label className="block text-sm font-medium mb-1">Tanggal</label>
          <input
            type="date"
            {...register("date")}
            className="w-full border p-2 rounded"
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
          )}
        </div>

        {/* Lokasi */}
        <div>
          <label className="block text-sm font-medium mb-1">Lokasi</label>
          <input
            {...register("location")}
            className="w-full border p-2 rounded"
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
          )}
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block text-sm font-medium mb-1">Deskripsi</label>
          <textarea
            {...register("description")}
            className="w-full border p-2 rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select {...register("status")} className="w-full border p-2 rounded">
            <option value="">Pilih Status</option>
            <option value="active">Aktif</option>
            <option value="inactive">Nonaktif</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>
          )}
        </div>

        {/* ACTION */}
        <div className="flex justify-between items-center pt-4">
          <Link to="/dashboard/event" className="text-gray-500 text-sm hover:underline">
            Kembali
          </Link>

          <button className="bg-[#7B1D3F] text-white px-4 py-2 rounded hover:opacity-90">
            Simpan Event
          </button>
        </div>

      </form>
    </div>
  );
}