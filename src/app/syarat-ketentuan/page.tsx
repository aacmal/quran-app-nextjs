import type { Metadata } from "next";
import LegalPageLayout from "@components/Seo/LegalPageLayout";
import JsonLd from "@components/Seo/JsonLd";
import {
  createLegalPageJsonLd,
  createPageMetadata,
} from "@utils/seo";

const PATH = "/syarat-ketentuan";
const TITLE = "Syarat & Ketentuan";
const DESCRIPTION = "Aturan singkat untuk menggunakan Laman Ayat.";

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function TermsPage() {
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
            Penggunaan situs
          </h2>
          <p className="mt-3">
            Laman Ayat dibuat untuk membantu Anda membaca dan mendengarkan
            Al-Qur&apos;an. Situs ini dapat digunakan tanpa akun dan tanpa biaya.
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
            Kementerian Agama Republik Indonesia. Tafsir berasal dari{" "}
            <a
              href="https://quran.kemenag.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >
              Quran Kemenag
            </a>
            . Daftar surat dasar juga tersimpan di dalam aplikasi.
          </p>
          <p className="mt-3">
            Kami berusaha menampilkan data dengan benar. Namun, Quran.com atau
            Quran Kemenag bisa mengalami gangguan atau mengubah datanya. Untuk
            rujukan resmi dan pembelajaran lebih lanjut, gunakan sumber asli atau
            mintalah bimbingan guru yang tepercaya.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Gunakan secara wajar
          </h2>
          <p className="mt-3">
            Gunakan isi situs dengan tetap menghormati hak atas terjemahan, audio,
            dan bahan lain dari sumbernya. Jangan melakukan tindakan yang dapat
            merusak atau mengganggu situs, mencoba masuk ke sistem tanpa izin,
            atau menggunakan Laman Ayat untuk kegiatan yang melanggar hukum.
            Laman Ayat bukan situs resmi Quran.com maupun Kementerian Agama.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Penanda ayat dan pilihan tema
          </h2>
          <p className="mt-3">
            Ayat yang Anda tandai dan pilihan tema disimpan di browser pada
            perangkat yang Anda gunakan. Data tersebut akan terhapus jika Anda
            menghapus data situs dari browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            Perubahan dan gangguan
          </h2>
          <p className="mt-3">
            Sebagian fitur bergantung pada Quran.com dan Quran Kemenag. Jika
            salah satunya mengalami gangguan, beberapa bagian Laman Ayat mungkin
            tidak dapat digunakan. Kami juga dapat memperbaiki atau mengubah
            fitur bila diperlukan. Jika ketentuan ini berubah, tanggal di bagian
            atas akan diperbarui.
          </p>
        </section>
      </LegalPageLayout>
    </>
  );
}
