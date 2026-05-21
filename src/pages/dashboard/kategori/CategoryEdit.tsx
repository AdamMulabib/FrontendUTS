import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type FormData = {
  name: string;
  description?: string;
};

export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  async function getCategory() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories/${id}`
      );

      reset(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmit(data: FormData) {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/categories/${id}`,
        data
      );

      alert("Kategori berhasil diupdate!");
      navigate("/dashboard/kategori");
    } catch (error) {
      console.log(error);
      alert("Gagal update kategori");
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">
        Edit Kategori
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        Perbarui data kategori event.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div>
          <label className="block font-medium">
            Nama Kategori
          </label>

          <input
            type="text"
            {...register("name")}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">
            Deskripsi
          </label>

          <textarea
            {...register("description")}
            className="w-full border p-2 rounded h-28"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Update Kategori
        </button>
      </form>
    </div>
  );
}