import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface EventType {
  id: string;
  name: string;
  location: string;
  dateEvent: string;
  category?: {
    name: string;
  };
  speakers?: {
    pembicara: {
      name: string;
    };
  }[];
}

export default function EventIndex() {
  const [events, setEvents] = useState<EventType[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events`);
      setEvents(response.data);
    } catch (error) {
      console.error("Gagal mengambil event", error);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Yakin ingin menghapus event?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error("Gagal hapus event", error);
      alert("Gagal menghapus event");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="p-6 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Event</h1>
          <p className="text-gray-500 text-sm">Kelola semua event</p>
        </div>

        <Link
          to="/dashboard/event/create"
          className="bg-[#7B1D3F] hover:opacity-90 text-white text-sm px-4 py-2 rounded"
        >
          + Tambah Event
        </Link>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Kategori</th>
              <th className="px-4 py-2 text-left">Pembicara</th>
              <th className="px-4 py-2 text-left">Tanggal</th>
              <th className="px-4 py-2 text-left">Lokasi</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {events.length > 0 ? (
              events.map((item, index) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3 font-medium">{item.name}</td>

                  <td className="px-4 py-3">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {item.category?.name || "-"}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    {item.speakers?.[0]?.pembicara?.name || "-"}
                  </td>

                  <td className="px-4 py-3 text-gray-500">
                    {new Date(item.dateEvent).toLocaleDateString("id-ID")}
                  </td>

                  <td className="px-4 py-3">{item.location}</td>

                  <td className="px-4 py-3 flex gap-2">
                    <Link
                      to={`/dashboard/event/edit/${item.id}`}
                      className="text-xs px-2 py-1 border rounded hover:bg-yellow-50"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-xs px-2 py-1 border rounded hover:bg-red-50"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-400">
                  Belum ada event
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="px-4 py-2 text-xs text-gray-400 border-t">
          Total {events.length} event
        </div>
      </div>
    </div>
  );
}