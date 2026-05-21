import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type FormData = {
  name: string;
  categoryId: string;
  pembicaraId: string;
  dateEvent: string;
  location: string;
  description: string;
};

type Category = {
  id: string;
  name: string;
};

type Speaker = {
  id: string;
  name: string;
};

export default function EventEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories`
        );

        const speakerResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/pembicara`
        );

        const eventResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/events/${id}`
        );

        const event = eventResponse.data;

        setCategories(categoryResponse.data);
        setSpeakers(speakerResponse.data);

        reset({
          name: event.name,
          categoryId: event.categoryId,
          pembicaraId: event.speakers?.[0]?.pembicaraId || "",
          dateEvent: event.dateEvent
            ? event.dateEvent.substring(0, 10)
            : "",
          location: event.location,
          description: event.description,
        });
      } catch (error) {
        console.log(error);
        alert("Gagal mengambil data event");
      }
    }

    fetchData();
  }, [id, reset]);

  async function onSubmit(data: FormData) {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/events/${id}`, {
        name: data.name,
        categoryId: data.categoryId,
        dateEvent: data.dateEvent,
        location: data.location,
        description: data.description,
        pembicaraIds: [data.pembicaraId],
      });

      alert("Event berhasil diupdate!");
      navigate("/dashboard/events");
    } catch (error) {
      console.log(error);
      alert("Gagal update event");
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block font-medium mb-1">Nama Event</label>
          <input
            {...register("name")}
            className="border p-2 rounded w-full"
          />
        </div>

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
        </div>

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
        </div>

        <div>
          <label className="block font-medium mb-1">Tanggal Event</label>
          <input
            type="date"
            {...register("dateEvent")}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Lokasi</label>
          <input
            {...register("location")}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Deskripsi</label>
          <textarea
            {...register("description")}
            className="border p-2 rounded w-full h-28"
          />
        </div>

        <button className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition">
          Update Event
        </button>
      </form>
    </div>
  );
}