import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  job: z.string().min(3, "Pekerjaan minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  photo: z.string().optional(),
  bio: z.string().min(5, "Bio minimal 5 karakter"),
  status: z.string().min(1, "Status wajib dipilih"),
});

type FormData = z.infer<typeof schema>;

export default function PembicaraCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Pembicara:", data);
    alert("Pembicara berhasil ditambahkan!");
  };

  return (
    <div className="p-6 max-w-2xl">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Tambah Pembicara</h1>
        <p className="text-gray-500 text-sm">
          Tambahkan data pembicara untuk event
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Nama */}
        <div>
          <label className="text-sm font-medium">Nama</label>
          <input {...register("name")} className="w-full border p-2 rounded" />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Pekerjaan */}
        <div>
          <label className="text-sm font-medium">Pekerjaan</label>
          <input {...register("job")} className="w-full border p-2 rounded" />
          {errors.job && <p className="text-red-500 text-xs">{errors.job.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input {...register("email")} className="w-full border p-2 rounded" />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Foto */}
        <div>
          <label className="text-sm font-medium">URL Foto</label>
          <input {...register("photo")} className="w-full border p-2 rounded" />
        </div>

        {/* Bio */}
        <div>
          <label className="text-sm font-medium">Bio</label>
          <textarea {...register("bio")} className="w-full border p-2 rounded" />
          {errors.bio && <p className="text-red-500 text-xs">{errors.bio.message}</p>}
        </div>

        {/* Status */}
        <div>
          <label className="text-sm font-medium">Status</label>
          <select {...register("status")} className="w-full border p-2 rounded">
            <option value="">Pilih Status</option>
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
          {errors.status && <p className="text-red-500 text-xs">{errors.status.message}</p>}
        </div>

        {/* ACTION */}
        <div className="flex justify-between items-center pt-4">
          <Link to="/dashboard/pembicara" className="text-sm text-gray-500 hover:underline">
            Kembali
          </Link>

          <button className="bg-[#7B1D3F] text-white px-4 py-2 rounded hover:opacity-90">
            Simpan
          </button>
        </div>

      </form>
    </div>
  );
}