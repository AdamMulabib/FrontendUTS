import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Pembicara = {
  id: string;
  name: string;
  bio?: string;
  image?: string;
};

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7B1D3F] to-[#c9395e] text-white text-xs font-bold flex items-center justify-center">
      {initials}
    </div>
  );
}

export default function PembicaraIndex() {
  const [speakers, setSpeakers] = useState<Pembicara[]>([]);

  async function getSpeakers() {
    try {
      const response = await axios.get(
        "http://localhost:3000/pembicara"
      );

      setSpeakers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteSpeaker(id: string) {
    const confirmDelete = confirm(
      "Yakin ingin menghapus pembicara?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:3000/pembicara/${id}`
      );

      getSpeakers();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSpeakers();
  }, []);

  return (
    <div className="p-6 max-w-5xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            Pembicara
          </h1>

          <p className="text-gray-500 text-sm">
            Kelola pembicara event
          </p>
        </div>

        <Link
          to="/dashboard/pembicara/create"
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
              <th className="px-4 py-2 text-left">
                No
              </th>

              <th className="px-4 py-2 text-left">
                Pembicara
              </th>

              <th className="px-4 py-2 text-left">
                Bio
              </th>

              <th className="px-4 py-2 text-left">
                Image
              </th>

              <th className="px-4 py-2 text-left">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {speakers.length > 0 ? (
              speakers.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="px-4 py-3">
                    {index + 1}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Avatar name={item.name} />

                      <span className="font-medium">
                        {item.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-500">
                    {item.bio || "-"}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-500">
                    {item.image || "-"}
                  </td>

                  <td className="px-4 py-3 flex gap-2">

                    <Link
                      to={`/dashboard/pembicara/edit/${item.id}`}
                      className="text-xs px-2 py-1 border rounded hover:bg-yellow-50"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        deleteSpeaker(item.id)
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
                  colSpan={5}
                  className="text-center py-10 text-gray-400"
                >
                  Belum ada pembicara
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="px-4 py-2 text-xs text-gray-400 border-t">
          Total {speakers.length} pembicara
        </div>
      </div>
    </div>
  );
}