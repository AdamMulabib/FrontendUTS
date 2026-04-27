import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Building2,
  ChevronDown
} from "lucide-react";

export default function Talkshow() {
  const speakers = [
    {
      name: "Moh. Ichsan Maulana",
      role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role: "Programmer, PT. Pertamina Drilling Service Indonesia",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role: "Android Developer, PT. Astra Internasional",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Bayu Adi Prasetiyo",
      role: "Software Engineer, KOMPAS.ID",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
    },
  ];

  const details = [
    { icon: <Calendar size={28} />, text: "Senin, 24 November 2025" },
    { icon: <Clock size={28} />, text: "08.00 WIB - 12.00 WIB" },
    { icon: <MapPin size={28} />, text: "Aula Gedung C" },
    { icon: <Building2 size={28} />, text: "Kampus 1 (Mataram) Universitas Harkat Negeri" },
  ];

  const faqItems = [
    {
      title: "Apa itu INVOFEST?",
      description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diadakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Bagaimana saya mengetahui pemenang kompetisi?",
      description: "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri.",
    },
    {
      title: "Kapan dan dimana INVOFEST dilaksanakan?",
      description: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Apa yang didapat pemenang dalam kompetisi?",
      description: "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.",
    },
    {
      title: "Apakah ada biaya pendaftaran di INVOFEST?",
      description: "Semua kegiatan dipastikan berbayar ya teman-teman.",
    },
    {
      title: "Bagaimana cara mendaftar event?",
      description: "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-16 py-20 max-w-6xl mx-auto">
  
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-lg"
      >
        <h1 className="text-5xl font-bold text-[#7B1D3F] mb-3">IT Talkshow</h1>

        <p className="text-xl text-[#7B1D3F] font-semibold italic mb-5">
          "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan"
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi 
          cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan
          AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.
        </p>

        <button className="bg-[#7B1D3F] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#5a1530] transition-colors duration-200">
          Daftar Sekarang
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-0 flex-shrink-0"
      >
        <img
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
          alt="INVOFEST Mascot"
          className="w-80 h-80 object-contain drop-shadow-xl"
        />
      </motion.div>

    </section>

      {/* Tentang IT Talkshow */}
      <section className="relative bg-[#fce8ef] py-20 px-8 text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto py-8"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#7B1D3F] mb-6"
        >
          Tentang IT Talkshow
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed text-base"
        >
          Seiring teknologi, khususnya kecerdasan buatan (AI), 
          yang semakin meresap ke dalam setiap aspek kehidupan kita, 
          muncul sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, 
          atau justru sebaliknya? Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: 
          “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” 
          Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, 
          melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas ke dalam inti pengembangan AI. 
          Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, 
          tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
        </motion.p>
      </motion.div>
    </section>

      {/* Speakers */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-800 mb-16"
      >
        Temui Pembicara Khusus Kami
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-wrap justify-center gap-6"
      >
        {speakers.map((s) => (
          <motion.div
            key={s.name}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.8 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-200 rounded-xl pt-16 pb-6 px-5 relative w-48 shadow-sm"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-[#7B1D3F] overflow-hidden bg-pink-100">
              <img
                src={s.img}
                alt={s.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold text-[#7B1D3F] text-sm">{s.name}</p>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">{s.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Pelaksanaan IT Talkshow */}
    <section className="relative bg-[#fce8ef] py-20 px-8 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto py-8"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#7B1D3F] mb-10"
        >
          Pelaksanaan IT Talkshow
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {details.map((d, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm"
            >
              <div className="bg-[#7B1D3F] text-white rounded-lg w-14 h-14 flex items-center justify-center flex-shrink-0">
                {d.icon}
              </div>
              <p className="text-gray-700 font-medium text-sm text-left">
                {d.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>

      {/* FAQ */}
      <section className="py-16 px-8 max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-800 mb-10"
      >
        FAQ
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {faqItems.map((item, i) => (
          <motion.details
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="border-2 border-[#7B1D3F] rounded-lg px-5 py-4 text-left group cursor-pointer"
          >
            <summary className="flex items-center gap-3 text-gray-700 font-medium text-sm list-none outline-none">
              <ChevronDown className="text-[#7B1D3F] group-open:rotate-180 transition-transform" size={20} />
              {item.title}
            </summary>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-3 text-gray-500 text-sm leading-relaxed"
            >
              {item.description}
            </motion.p>
          </motion.details>
        ))}
      </motion.div>
    </section>
    </div>
  );
}