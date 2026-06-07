import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  id: string;
  username: string;
  foto?: string | null;
  role: string;
  createdAt: string;
};

export default function UserIndex() {
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users`
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id: string) {
    const confirmDelete = confirm("Yakin ingin menghapus user?");

    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`);

      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-6 max-w-5xl">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">User</h1>
          <p className="text-gray-500 text-sm">
            Kelola data user dan hak akses
          </p>
        </div>

        <Link
          to="/dashboard/users/create"
          className="bg-[#7B1D3F] text-white px-4 py-2 rounded hover:opacity-90"
        >
          + Tambah
        </Link>
      </div>

      {/* TABLE */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2 text-left">Foto</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Dibuat</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((item, index) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3 font-medium">{item.username}</td>

                  <td className="px-4 py-3">{item.foto || "-"}</td>

                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2 py-1 rounded font-medium ${
                        item.role === "admin"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item.role}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    {new Date(item.createdAt).toLocaleDateString("id-ID")}
                  </td>

                  <td className="px-4 py-3 flex gap-2">
                    <Link
                      to={`/dashboard/users/edit/${item.id}`}
                      className="text-xs px-2 py-1 border rounded hover:bg-yellow-50"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteUser(item.id)}
                      className="text-xs px-2 py-1 border rounded hover:bg-red-50"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">
                  Belum ada user
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="px-4 py-2 text-xs text-gray-400 border-t">
          Total {users.length} user
        </div>
      </div>
    </div>
  );
}