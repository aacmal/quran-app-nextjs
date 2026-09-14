import type { Metadata } from "next";
import LegalPageLayout from "@components/Seo/LegalPageLayout";
import JsonLd from "@components/Seo/JsonLd";
import {
  createLegalPageJsonLd,
  createPageMetadata,
} from "@utils/seo";

const PATH = "/kebijakan-privasi";
const TITLE = "Kebijakan Privasi";
const DESCRIPTION =
  "Cara Laman Ayat menggunakan data, sumber bacaan, dan pilihan privasi Anda.";

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={createLegalPageJsonLd({
          title: TITLE,
          description: DESCRIPTION,
          path: PATH,
        })}
      />
      <LegalPageLayout
        eyebrow="Tentang Laman Ayat"
        title={TITLE}
        updatedAt="14 September 2026"
      >
        <section>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Data pribadi
          </h2>
          <p className="mt-3">
            Anda tidak perlu membuat akun untuk menggunakan Laman Ayat. Kami juga
            tidak meminta nama, alamat email, nomor telepon, atau data pembayaran.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Asal teks Al-Qur&apos;an dan tafsir
          </h2>
          <p className="mt-3">
            Teks Arab, tulisan Latin, terjemahan bahasa Indonesia, informasi
            surat, pembagian juz, dan audio berasal dari{" "}
            <a
              href="https://api.quran.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >
              Quran.com
            </a>
            . Terjemahan bahasa Indonesia yang digunakan adalah terjemahan
            Kementerian Agama Republik Indonesia.
          </p>
          <p className="mt-3">
            Tafsir berasal dari{" "}
            <a
              href="https://quran.kemenag.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >
              Quran Kemenag
            </a>
            . Daftar surat dasar juga tersimpan di dalam aplikasi. Karena data
            tersebut berasal dari layanan lain, isinya dapat berubah atau tidak
            tersedia untuk sementara waktu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Penanda ayat dan pilihan tema
          </h2>
          <p className="mt-3">
            Ayat yang Anda tandai dan pilihan tema disimpan di browser pada
            perangkat yang Anda gunakan. Data ini hanya tersimpan di perangkat
            Anda. Jika data situs di browser dihapus, penanda dan pilihan tema
            juga ikut terhapus.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Data kunjungan
          </h2>
          <p className="mt-3">
            Untuk mengetahui halaman yang sering dibuka dan memperbaiki situs,
            kami menggunakan Google Analytics. Layanan ini dapat menerima
            informasi seperti jenis perangkat, browser, waktu kunjungan, dan
            perkiraan lokasi. Data tersebut dikelola oleh Google sesuai kebijakan
            privasinya.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Tautan ke situs lain
          </h2>
          <p className="mt-3">
            Beberapa tautan di Laman Ayat mengarah ke situs lain, seperti
            Quran.com dan Quran Kemenag. Penggunaan data di situs tersebut
            mengikuti kebijakan mereka masing-masing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Perubahan kebijakan
          </h2>
          <p className="mt-3">
            Halaman ini akan diperbarui jika ada perubahan pada cara Laman Ayat
            menggunakan data. Tanggal pembaruan dapat dilihat di bagian atas.
          </p>
        </section>
      </LegalPageLayout>
    </>
  );
}
