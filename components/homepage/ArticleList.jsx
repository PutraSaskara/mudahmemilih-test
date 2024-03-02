// components/ArticleSection.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    paramtitle: "Membangun-Masa-Depan-Melalui-Caleg-Berkualitas-Kriteria-Calon-Legislatif-yang-Baik",
    title:
      "Membangun Masa Depan Melalui Caleg Berkualitas: Kriteria Calon Legislatif yang Baik",
    content:
      "Calon Legislatif (Caleg) yang baik adalah fondasi penting bagi sebuah sistem demokrasi yang berfungsi optimal. Beberapa kriteria esensial harus dikedepankan agar Caleg mampu membawa perubahan positif dan mewakili aspirasi masyarakat dengan baik, yaitu:",
    imageUrl:
      "https://ik.imagekit.io/m1akscp5q/a%20group%20of%20poli%2057921ff7-0dad-4f27-8307-84e54831f977.png?updatedAt=1703826071579",
  },
  {
    id: 2,
    paramtitle: "Peran-Vital-Generasi-Muda-dalam-Pemilu-Membangun-Masa-Depan-Demokrasi",
    title:
      "Peran Vital Generasi Muda dalam Pemilu: Membangun Masa Depan Demokrasi",
    content:
      "Generasi muda memegang peranan kunci dalam menjaga kesehatan dan keberlanjutan sistem demokrasi melalui partisipasi mereka dalam proses pemilihan umum (Pemilu)",
    imageUrl:
      "https://ik.imagekit.io/m1akscp5q/a%20group%20of%20a%20yo%20a98dbeed-3d13-4a7f-9ddf-15736ee405bd.png?updatedAt=1703826071869",
  },
  {
    id: 3,
    paramtitle: "Kampanye-Digital-Mengangkat-Bendera-Ramah-Lingkungan-dalam-Demokrasi-Modern",
    title:
      "Kampanye Digital: Mengangkat Bendera Ramah Lingkungan dalam Demokrasi Modern",
    content:
      "Perkembangan teknologi informasi telah membawa perubahan monumental dalam berbagai aspek kehidupan, dan tidak terkecuali dalam dunia politik dan kampanye.",
    imageUrl:
      "https://ik.imagekit.io/m1akscp5q/a%20group%20of%20poli%20718b45bb-2eb8-44a1-9eb8-978b4f5d1cab.png?updatedAt=1703826071939",
  },
  {
    id: 4,
    paramtitle: "Menelusuri-Peran-Penting-Porsi-Pemilih-Politik-Generasi-Muda-dalam-Pemilu-2024",
    title:
      "Menelusuri Peran Penting: Porsi Pemilih Politik Generasi Muda dalam Pemilu 2024",
    content:
      "Pemilu tahun 2024 akan menjadi tonggak sejarah yang krusial bagi peran pemilih politik generasi muda dalam membentuk masa depan negara. Generasi muda, yang diidentifikasi sebagai kelompok usia antara 18 hingga 35 tahun, diperkirakan akan memiliki porsi pemilih yang signifikan pada tahun tersebut. Partisipasi mereka di",
    imageUrl:
      "https://ik.imagekit.io/m1akscp5q/a%20group%20of%20youn%20dbc5b3dc-19d0-4c12-933d-e2009bc4019d.png?updatedAt=1703830488228",
  },
  {
    id: 5,
    paramtitle: "sejarah-pemilu-di-Indonesia-dari-masa-ke-masa",
    title:
    "SEJARAH PEMILU DI INDONESIA DARI MASA KE MASA",
    content:
    "Pemilihan umum (Pemilu) telah menandai langkah-langkah penting dalam perkembangan demokrasi Indonesia sejak proklamasi kemerdekaan pada tahun 1945. Dari pemilu pertama pada tahun 1955 hingga pemilu terakhir pada tahun 2019, Indonesia telah melalui perjalanan yang panjang dan dinamis dalam menentukan wakil-wakilnya di tingkat nasional dan daerah.",
    imageUrl:
    "/gambar-article-5.png",
  },
  {
    id: 6,
    paramtitle: "cara-pindah-lokasi-pemilihan-atau-tps-pemilu-2024",
    title:
    "CARA PINDAH LOKASI PEMILIHAN ATAU TPS PEMILU 2024",
    content:
    "Tempat Pemungutan Suara (TPS) menjadi lokasi kunci pelaksanaan Pemilu 2024, yang dijadwalkan pada tanggal 14 Februari 2024 dan telah ditetapkan sebagai hari libur nasional.",
    imageUrl:
      "/gambar-article-6.png",
  },
  {
    id: 7,
    paramtitle: "debat-capres-ketiga-pemilu-2024",
    title:
    "DEBAT CAPRES KETIGA PEMILU 2024",
    content:
    "Debat Pemilihan Presiden (Pilpres) ke-3 pada tahun 2024 menghadirkan ketegangan dan argumen antara tiga calon presiden, Anies Baswedan, Prabowo Subianto, dan Ganjar Pranowo. Acara yang berlangsung selama 120 menit ini dibagi menjadi enam segmen yang membahas tema pertahanan, keamanan, hubungan internasional, dan geopolitik.",
    imageUrl:
    "/gambar-article-7.png",
  },
  {
    id: 8,
    paramtitle: "Pemilu-2024-Bali-Duel-Sengit-153-Calon-Legislatif-dan-554-Caleg-Pertarungan-Kursi-Dewan-Rakyat!",
    title:
    "Pemilu 2024 Bali: Duel Sengit 153 Calon Legislatif dan 554 Caleg, Pertarungan Kursi Dewan Rakyat!",
    content:
    "Sebanyak 153 calon legislatif asal Bali berhasil mendapatkan tempat dalam daftar calon tetap (DCT) untuk Pemilihan Umum 2024. Mereka akan bersaing memperebutkan delapan kursi anggota Dewan Perwakilan Rakyat (DPR) RI dari daerah pemilihan (Dapil) Bali. Persaingan diprediksi sangat ketat, melibatkan sejumlah politikus kawakan dan pendatang baru yang akan bersaing meraih dukungan masyarakat.",
    imageUrl:
    "/gambar-article-8.png",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const ArticleSection = () => {
  return (
    <section className="py-16 mx-2 font-sans">
      <div className="container mx-auto">
        <h2 className="text-3xl text-sans font-semibold mb-8 mx-auto text-center">
          Kenali Pilihanmu dengan artikel yang tersedia
        </h2>
        <p className="text-center text-sm font-normal my-2 text-abu ">
          Temukan pemahaman mendalam tentang dinamika politik dan perubahan
          masyarakat melalui serangkaian artikel yang informatif. Dari peran
          vital generasi muda dalam pemilu hingga kampanye digital yang
          mengangkat bendera ramah lingkungan, eksplorasi ini akan membantu Anda
          memilih dengan bijak.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.slice(0, 8).map((article) => (
            <Link key={article.id} href={`/article/${article.paramtitle}`}>
            <div
              key={article.id}
              className="bg-white lg:p-6 p-4 rounded-lg w-151 h-54 hover:bg-accent2 shadow-md flex"
            >
              <div className="flex-none my-auto w-fit mr-4 pr-0 bg-gray-200">
                <Image
                  src={article.imageUrl}
                  alt="Article"
                  width={202}
                  height={179}
                  className="w-40"
                />
              </div>
              <div>
                <h3 className="lg:text-xl text-[10px] font-semibold mb-4">
                  {truncateText(article.title, 50)}
                </h3>
                <p className="text-gray-600 text-[8px] lg:text-base">
                  {truncateText(article.content, 100)}
                </p>
                <button className="mt-4 py-2 pr-4 inline-flex items-center justify-center align-middle text-center my-auto  hover:text-primary text-black font-semibold rounded">
                  Get Info
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
