import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  id: string;
  name: string;
  description?: string;
};

export default function CategoryIndex() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function getCategories() {
    try {
      const response = await axios.get(
        "http://localhost:3000/categories"
      );

      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCategory(id: string) {
    const confirmDelete = confirm(
      "Yakin ingin menghapus kategori?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:3000/categories/${id}`
      );

      getCategories();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="p-6 max-w-5xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Kategori</h1>
          <p className="text-gray-500 text-sm">
            Kelola kategori event
          </p>
        </div>

        <Link
          to="/dashboard/kategori/create"
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
              <th className="px-4 py-2 text-left">
                Nama
              </th>
              <th className="px-4 py-2 text-left">
                Deskripsi
              </th>
              <th className="px-4 py-2 text-left">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.length > 0 ? (
              categories.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-4 py-3">
                    {index + 1}
                  </td>

                  <td className="px-4 py-3 font-medium">
                    {item.name}
                  </td>

                  <td className="px-4 py-3">
                    {item.description || "-"}
                  </td>

                  <td className="px-4 py-3 flex gap-2">

                    <Link
                      to={`/dashboard/kategori/edit/${item.id}`}
                      className="text-xs px-2 py-1 border rounded hover:bg-yellow-50"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        deleteCategory(item.id)
                      }
                      className="text-xs px-2 py-1 border rounded hover:bg-red-50"
                    >
                      Hapus
                    </button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-gray-400"
                >
                  Belum ada kategori
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="px-4 py-2 text-xs text-gray-400 border-t">
          Total {categories.length} kategori
        </div>
      </div>
    </div>
  );
}