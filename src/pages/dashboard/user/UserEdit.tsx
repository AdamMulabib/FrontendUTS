import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type FormData = {
  username: string;
  password?: string;
  foto?: string;
  role: string;
};

export default function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<FormData>();

  async function getUser() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${id}`
      );

      reset({
        username: response.data.username,
        foto: response.data.foto || "",
        role: response.data.role || "user",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmit(data: FormData) {
    try {
      const payload = {
        username: data.username,
        foto: data.foto,
        role: data.role,
        ...(data.password ? { password: data.password } : {}),
      };

      await axios.put(`${import.meta.env.VITE_API_URL}/users/${id}`, payload);

      alert("User berhasil diupdate!");
      navigate("/dashboard/users");
    } catch (error) {
      console.log(error);
      alert("Gagal update user");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">Edit User</h1>

      <p className="text-sm text-gray-500 mb-6">
        Perbarui data user dan hak akses.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block font-medium">Username</label>

          <input
            type="text"
            {...register("username")}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Password Baru</label>

          <input
            type="password"
            placeholder="Kosongkan jika tidak ingin mengubah password"
            {...register("password")}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Foto</label>

          <input
            type="text"
            {...register("foto")}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Role</label>

          <select {...register("role")} className="w-full border p-2 rounded">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Update User
        </button>
      </form>
    </div>
  );
}