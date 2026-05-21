import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type FormData = {
  name: string;
  bio?: string;
  image?: string;
};

export default function PembicaraEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<FormData>();

  async function getPembicara() {
    try {
      const response = await axios.get(`http://localhost:3000/pembicara/${id}`);
      reset(response.data);
    } catch (error) {
      console.log(error);
      alert("Gagal mengambil data pembicara");
    }
  }

  async function onSubmit(data: FormData) {
    try {
      await axios.put(`http://localhost:3000/pembicara/${id}`, data);

      alert("Pembicara berhasil diupdate!");
      navigate("/dashboard/pembicara");
    } catch (error) {
      console.log(error);
      alert("Gagal update pembicara");
    }
  }

  useEffect(() => {
    getPembicara();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Pembicara</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block font-medium mb-1">Nama Pembicara</label>
          <input
            {...register("name")}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea
            {...register("bio")}
            className="border p-2 rounded w-full h-28"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">URL Gambar</label>
          <input
            {...register("image")}
            className="border p-2 rounded w-full"
          />
        </div>

        <button className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
          Update Pembicara
        </button>
      </form>
    </div>
  );
}