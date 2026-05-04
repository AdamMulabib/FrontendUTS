import { Link } from "react-router-dom";

const events = [
  { id: 1, name: "Seminar AI", category: "Seminar", date: "2026-01-10", status: "Aktif" },
  { id: 2, name: "Workshop React", category: "Workshop", date: "2026-02-15", status: "Nonaktif" },
];

export default function EventIndex() {
  return (
    <div className="p-6 max-w-6xl">

      {/* HEADER */}
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

      {/* TABLE */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          
          {/* HEAD */}
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Kategori</th>
              <th className="px-4 py-2 text-left">Tanggal</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {events.map((item, index) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                
                <td className="px-4 py-3">{index + 1}</td>

                <td className="px-4 py-3 font-medium">{item.name}</td>

                <td className="px-4 py-3">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </td>

                <td className="px-4 py-3 text-gray-500">
                  {new Date(item.date).toLocaleDateString("id-ID")}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      item.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-3 flex gap-2">
                  <button className="text-xs px-2 py-1 border rounded hover:bg-yellow-50">
                    Edit
                  </button>
                  <button className="text-xs px-2 py-1 border rounded hover:bg-red-50">
                    Hapus
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="px-4 py-2 text-xs text-gray-400 border-t">
          Total {events.length} event
        </div>
      </div>

    </div>
  );
}