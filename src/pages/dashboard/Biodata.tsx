export default function Biodata() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-8 border border-slate-100">
        <h1 className="text-3xl font-bold text-[#7B1D3F] mb-2">
          Biodata Mahasiswa
        </h1>
        <p className="text-slate-500 mb-8">
          Data mahasiswa pembuat website Event Management System.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-xl p-5">
            <p className="text-sm text-slate-500">Nama</p>
            <h2 className="text-lg font-bold text-slate-800">
              Adam Mulabib
            </h2>
          </div>

          <div className="bg-slate-50 rounded-xl p-5">
            <p className="text-sm text-slate-500">NIM</p>
            <h2 className="text-lg font-bold text-slate-800">
              24090040
            </h2>
          </div>

          <div className="bg-slate-50 rounded-xl p-5">
            <p className="text-sm text-slate-500">Kelas</p>
            <h2 className="text-lg font-bold text-slate-800">
              D4 TI
            </h2>
          </div>

          <div className="bg-slate-50 rounded-xl p-5">
            <p className="text-sm text-slate-500">Program Studi</p>
            <h2 className="text-lg font-bold text-slate-800">
              D-4 Teknik Informatika
            </h2>
          </div>

          <div className="bg-slate-50 rounded-xl p-5">
            <p className="text-sm text-slate-500">Mata Kuliah</p>
            <h2 className="text-lg font-bold text-slate-800">
              Pemrograman Web 2
            </h2>
          </div>

          <div className="bg-slate-50 rounded-xl p-5">
            <p className="text-sm text-slate-500">Judul Project</p>
            <h2 className="text-lg font-bold text-slate-800">
              Event Management System
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}