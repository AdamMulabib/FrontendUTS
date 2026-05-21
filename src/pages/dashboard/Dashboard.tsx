import axios from "axios";
import { useEffect, useState } from "react";

type Category = {
  id: string;
  name: string;
};

type EventItem = {
  id: string;
  name: string;
  dateEvent: string;
  category?: {
    name: string;
  };
};

type SpeakerItem = {
  id: string;
  name: string;
  bio?: string;
};

type Stat = {
  title: string;
  value: number;
  icon: string;
};

function StatBox({ item }: { item: Stat }) {
  return (
    <div className="bg-white p-4 rounded-lg border hover:shadow transition">
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>{item.title}</span>
        <span>{item.icon}</span>
      </div>
      <h2 className="text-2xl font-bold">{item.value}</h2>
    </div>
  );
}

function EventItemRow({ item }: { item: EventItem }) {
  return (
    <div className="flex justify-between py-2 border-b last:border-none">
      <div>
        <p className="font-medium">{item.name}</p>
        <span className="text-xs text-gray-400">
          {new Date(item.dateEvent).toLocaleDateString("id-ID")}
        </span>
      </div>

      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
        {item.category?.name || "-"}
      </span>
    </div>
  );
}

function SpeakerItemRow({ item }: { item: SpeakerItem }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b last:border-none">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
        {item.name[0]?.toUpperCase()}
      </div>

      <div>
        <p className="text-sm font-medium">{item.name}</p>
        <span className="text-xs text-gray-400">{item.bio || "-"}</span>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [speakers, setSpeakers] = useState<SpeakerItem[]>([]);

  async function fetchDashboardData() {
    try {
      const [categoryResponse, eventResponse, speakerResponse] =
        await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/categories`),
          axios.get(`${import.meta.env.VITE_API_URL}/events`),
          axios.get(`${import.meta.env.VITE_API_URL}/pembicara`),
        ]);

      setCategories(categoryResponse.data);
      setEvents(eventResponse.data);
      setSpeakers(speakerResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const stats: Stat[] = [
    { title: "Kategori", value: categories.length, icon: "📁" },
    { title: "Event", value: events.length, icon: "📆" },
    { title: "Pembicara", value: speakers.length, icon: "🎙️" },
    { title: "Event Aktif", value: events.length, icon: "🟢" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Ringkasan data event</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item) => (
          <StatBox key={item.title} item={item} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <h2 className="font-semibold mb-3">Event Terbaru</h2>

          {events.length > 0 ? (
            events.slice(0, 3).map((event) => (
              <EventItemRow key={event.id} item={event} />
            ))
          ) : (
            <p className="text-sm text-gray-400">Belum ada event</p>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <h2 className="font-semibold mb-3">Pembicara</h2>

          {speakers.length > 0 ? (
            speakers.slice(0, 3).map((speaker) => (
              <SpeakerItemRow key={speaker.id} item={speaker} />
            ))
          ) : (
            <p className="text-sm text-gray-400">Belum ada pembicara</p>
          )}
        </div>
      </div>
    </div>
  );
}
