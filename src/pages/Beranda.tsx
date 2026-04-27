import { motion } from "framer-motion";


  const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

export default function Beranda() {
  const faqItems = [
    { title: "Apa itu INVOFEST?", description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri..." },
    { title: "Bagaimana saya mengetahui pemenang kompetisi?", description: "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri." },
    { title: "Kapan dan dimana INVOFEST dilaksanakan?", description: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025." },
    { title: "Apa yang didapat pemenang dalam kompetisi?", description: "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat."},
    { title: "Apakah ada biaya pendaftaran di INVOFEST?", description: "Semua kegiatan dipastikan berbayar ya teman-teman." },
    { title: "Bagaimana cara mendaftar event?", description: "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event..." },
  ];

  const categorySummary = [
    {
      title: "IT Seminar",
      description: "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    },
    {
      title: "IT Talkshow",
      description: "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description: "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      description: "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  const eventSections = [
    {
      title: "IT Seminar",
      desc: `Seminar Nasional Teknologi Informasi ini mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.`,
      btnLabel: "INFO SELENGKAPNYA",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png",
      mascotAlt: "Mascot Seminar",
      mascotLeft: false,
      bg: "white",
    },
    {
      title: "IT Talkshow",
      desc: `Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.`,
      btnLabel: "INFO SELENGKAPNYA",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
      mascotAlt: "Mascot Talkshow",
      mascotLeft: true,
      bg: "pink",
    },
    {
      title: "IT Workshop",
      desc: `Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.`,
      btnLabel: "INFO SELENGKAPNYA",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
      mascotAlt: "Mascot Workshop",
      mascotLeft: false,
      bg: "white",
    },
    {
      title: "IT Competition",
      desc: `"From Creation to Innovation" adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.`,
      btnLabel: "INFO SELENGKAPNYA",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
      mascotAlt: "Mascot Competition",
      mascotLeft: true,
      bg: "pink",
    },
  ];



  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* ── 1. HERO ── */}
     <section className="flex flex-col md:flex-row items-center justify-between px-16 py-20 max-w-6xl mx-auto">
  
      <motion.div
        className="max-w-xl text-left"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
      >
        <img src="https://www.invofest-harkatnegeri.com/assets/text-image.png" alt="INVOFEST" className="w-72 mb-6" />
        <div className="text-gray-700 leading-relaxed mb-8 text-lg">
          Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema <span className="font-bold">“Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”</span>.
        </div>
        <div className="flex gap-4">
          <button className="bg-[#7B1D3F] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#5a1530] transition-colors shadow-md">
            INFO SELENGKAPNYA
          </button>
          <button className="border-2 border-[#7B1D3F] text-[#7B1D3F] text-sm font-semibold px-6 py-3 rounded hover:bg-[#7B1D3F] hover:text-white transition-all">
            HUBUNGI PANITIA
          </button>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0 flex-shrink-0"
        variants={zoomIn}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.8 }}
      >
        <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" alt="Mascot" className="w-80 h-80 object-contain drop-shadow-xl" />
      </motion.div>

    </section>

     <section className="bg-[#fce8ef] py-10 relative overflow-hidden">
  
  {/* Wave Atas */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
    <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <path d="M0,80 C360,120 1080,40 1440,80 L1440,0 L0,0 Z" fill="white" />
    </svg>
  </div>

  <div className="max-w-6xl mx-auto text-left relative z-10 px-8 py-20">

    {/* TITLE */}
    <motion.h2
      className="text-5xl font-bold text-[#7B1D3F] mb-6"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      Tentang INVOFEST
    </motion.h2>

    {/* PARAGRAF */}
        <motion.p
          className="text-gray-700 text-lg leading-relaxed mb-16 text-justify"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema <span className="font-bold">“Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”</span>. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
        </motion.p>

        {/* CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorySummary.map((item, index) => (
            
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border-r-8 border-[#7B1D3F] flex flex-col justify-between h-full hover:shadow-lg transition-shadow"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#7B1D3F] mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{item.description}</p>
              </div>
              <button className="bg-[#7B1D3F] text-white text-[10px] font-bold py-2.5 px-4 rounded w-max uppercase">
                INFO SELENGKAPNYA
              </button>
            </motion.div>

          ))}
        </div>
      </div>

      {/* Wave Bawah */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,80 C360,120 1080,40 1440,80 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

    </section>

      {/* EVENT SECTIONS */}
      {/* Parameter 'idx' dihapus untuk memperbaiki error TS6133 */}
      {eventSections.map((ev) => (
      <section key={ev.title} className={`py-12 relative overflow-hidden ${ev.bg === "pink" ? "bg-[#fce8ef]" : "bg-white"}`}>
        
        {ev.bg === "pink" && (
          <>
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
              <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path d="M0,80 C360,120 1080,40 1440,80 L1440,0 L0,0 Z" fill="white" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
              <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path d="M0,80 C360,120 1080,40 1440,80 L1440,0 L0,0 Z" fill="white" />
              </svg>
            </div>
          </>
        )}

        <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 ${ev.mascotLeft ? "md:flex-row" : "md:flex-row-reverse"} relative z-10 px-12 py-20`}>

          {/* GAMBAR */}
          <motion.div
            className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
            variants={ev.mascotLeft ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={ev.mascot} alt={ev.mascotAlt} className="max-w-xs md:max-w-md h-auto object-contain drop-shadow-2xl" />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="w-full md:w-1/2 text-left"
            variants={ev.mascotLeft ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#7B1D3F] mb-6">{ev.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-10 text-lg text-justify">{ev.desc}</p>
            <button className="bg-[#7B1D3F] text-white text-sm font-bold px-8 py-4 rounded-lg hover:bg-[#5a1530] transition-all shadow-md uppercase">
              {ev.btnLabel}
            </button>
          </motion.div>

        </div>
      </section>
    ))}

      {/* ── 4. FAQ ── */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center border-t border-gray-50">
  
      {/* JUDUL */}
      <motion.h2
        className="text-4xl font-extrabold text-[#7B1D3F] mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Punya Pertanyaan?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        
        {faqItems.map((item, i) => (
          
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <details className="border-2 border-[#7B1D3F] rounded-xl px-6 py-5 cursor-pointer hover:bg-gray-50 transition-colors">
              <summary className="text-gray-700 font-bold text-sm list-none outline-none">
                ⌄ {item.title}
              </summary>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed border-t border-[#7B1D3F]/10 pt-4">
                {item.description}
              </p>
            </details>
          </motion.div>

        ))}

      </div>
    </section>
    </div>
  );
}