import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nama event minimal 3 karakter"),
  categoryId: z.string().min(1, "Kategori wajib dipilih"),
  pembicaraId: z.string().min(1, "Pembicara wajib dipilih"),
  dateEvent: z.string().min(1, "Tanggal event wajib diisi"),
  location: z.string().min(3, "Lokasi minimal 3 karakter"),
  description: z.string().min(5, "Deskripsi minimal 5 karakter"),
});

type FormData = z.infer<typeof schema>;

type Category = {
  id: string;
  name: string;
};

type Speaker = {
  id: string;
  name: string;
};

export default function EventCreate() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories`
        );

        const speakerResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/pembicara`
        );

        setCategories(categoryResponse.data);
        setSpeakers(speakerResponse.data);
      } catch (error) {
        console.log(error);
        alert("Gagal mengambil data kategori atau pembicara");
      }
    }

    fetchData();
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/events`, {
        name: data.name,
        categoryId: data.categoryId,
        dateEvent: data.dateEvent,
        location: data.location,
        description: data.description,
        pembicaraIds: [data.pembicaraId],
      });

      alert("Event berhasil dibuat!");
      navigate("/dashboard/events");
    } catch (error) {
      console.log(error);
      alert("Gagal membuat event");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Tambah Event</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* NAMA EVENT */}
        <div>
          <label className="block font-medium mb-1">Nama Event</label>
          <input
            {...register("name")}
            placeholder="Nama Event"
            className="border p-2 rounded w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* KATEGORI */}
        <div>
          <label className="block font-medium mb-1">Kategori Event</label>
          <select
            {...register("categoryId")}
            className="border p-2 rounded w-full"
          >
            <option value="">Pilih Kategori</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <p className="text-red-500 text-sm">{errors.categoryId.message}</p>
          )}
        </div>

        {/* PEMBICARA */}
        <div>
          <label className="block font-medium mb-1">Pembicara</label>
          <select
            {...register("pembicaraId")}
            className="border p-2 rounded w-full"
          >
            <option value="">Pilih Pembicara</option>
            {speakers.map((speaker) => (
              <option key={speaker.id} value={speaker.id}>
                {speaker.name}
              </option>
            ))}
          </select>
          {errors.pembicaraId && (
            <p className="text-red-500 text-sm">{errors.pembicaraId.message}</p>
          )}
        </div>

        {/* TANGGAL */}
        <div>
          <label className="block font-medium mb-1">Tanggal Event</label>
          <input
            type="date"
            {...register("dateEvent")}
            className="border p-2 rounded w-full"
          />
          {errors.dateEvent && (
            <p className="text-red-500 text-sm">{errors.dateEvent.message}</p>
          )}
        </div>

        {/* LOKASI */}
        <div>
          <label className="block font-medium mb-1">Lokasi</label>
          <input
            {...register("location")}
            placeholder="Lokasi"
            className="border p-2 rounded w-full"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        {/* DESKRIPSI */}
        <div>
          <label className="block font-medium mb-1">Deskripsi</label>
          <textarea
            {...register("description")}
            placeholder="Deskripsi"
            className="border p-2 rounded w-full h-28"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition">
          Simpan Event
        </button>
      </form>
    </div>
  );
}