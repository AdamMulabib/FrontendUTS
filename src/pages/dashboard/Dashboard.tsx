type Stat = {
  title: string;
  value: number;
  icon: string;
};

type EventItem = {
  name: string;
  category: string;
  date: string;
};

type SpeakerItem = {
  name: string;
  job: string;
};

// 🔥 data dummy
const stats: Stat[] = [
  { title: "Kategori", value: 8, icon: "📁" },
  { title: "Event", value: 20, icon: "📆" },
  { title: "Pembicara", value: 6, icon: "🎙️" },
  { title: "Event Aktif", value: 4, icon: "🟢" },
];

const events: EventItem[] = [
  { name: "Seminar AI 2025", category: "Seminar", date: "10 Jan 2026" },
  { name: "Workshop UI/UX", category: "Workshop", date: "15 Feb 2026" },
  { name: "Startup Talk", category: "Talkshow", date: "20 Mar 2026" },
];

const speakers: SpeakerItem[] = [
  { name: "Danang Avan M", job: "UI/UX Designer" },
  { name: "Lhuqita Fazry", job: "Software Engineer" },
  { name: "Dendi Purwanto", job: "Product Manager" },
];

// 🔹 CARD STAT
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

// 🔹 LIST ITEM EVENT
function EventItemRow({ item }: { item: EventItem }) {
  return (
    <div className="flex justify-between py-2 border-b last:border-none">
      <div>
        <p className="font-medium">{item.name}</p>
        <span className="text-xs text-gray-400">{item.date}</span>
      </div>
      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
        {item.category}
      </span>
    </div>
  );
}

// 🔹 LIST ITEM SPEAKER
function SpeakerItemRow({ item }: { item: SpeakerItem }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b last:border-none">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
        {item.name[0]}
      </div>
      <div>
        <p className="text-sm font-medium">{item.name}</p>
        <span className="text-xs text-gray-400">{item.job}</span>
      </div>
    </div>
  );
}

// 🔥 MAIN DASHBOARD
export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Ringkasan data event</p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item) => (
          <StatBox key={item.title} item={item} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-4">

        {/* EVENT */}
        <div className="bg-white p-4 rounded-lg border">
          <h2 className="font-semibold mb-3">Event Terbaru</h2>
          {events.map((e, i) => (
            <EventItemRow key={i} item={e} />
          ))}
        </div>

        {/* SPEAKER */}
        <div className="bg-white p-4 rounded-lg border">
          <h2 className="font-semibold mb-3">Pembicara</h2>
          {speakers.map((s, i) => (
            <SpeakerItemRow key={i} item={s} />
          ))}
        </div>

      </div>
    </div>
  );
}