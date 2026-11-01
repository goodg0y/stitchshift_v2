import { useState } from "react";
import Header from "./components/Header";
import RingkasanOutfit from "./components/RingkasanOutfit";
import KatalogReferensi from "./components/KatalogReferensi";
import FormTambahOutfit from "./components/FormTambahOutfit";
import FilterVibe from "./components/FilterVibe";
import DaftarOutfit from "./components/DaftarOutfit";
import { outfitAwal } from "./data/outfitAwal";
import { VIBE } from "./data/opsi";

export default function App() {
  // State utama: daftar outfit (array of object)
  const [daftarOutfit, setDaftarOutfit] = useState(outfitAwal);
  const [vibeAktif, setVibeAktif] = useState("Semua");

  function tambahOutfit(outfitBaru) {
    setDaftarOutfit((sebelumnya) => [outfitBaru, ...sebelumnya]);
  }

  function hapusOutfit(id) {
    setDaftarOutfit((sebelumnya) => sebelumnya.filter((o) => o.id !== id));
  }

  // Menandai satu item sebagai dimiliki / belum dimiliki
  function toggleItem(outfitId, itemId) {
    setDaftarOutfit((sebelumnya) =>
      sebelumnya.map((outfit) =>
        outfit.id !== outfitId
          ? outfit
          : {
              ...outfit,
              items: outfit.items.map((item) =>
                item.id === itemId ? { ...item, dimiliki: !item.dimiliki } : item
              ),
            }
      )
    );
  }

  // Data turunan (dihitung dari state, bukan disimpan terpisah)
  const outfitTampil =
    vibeAktif === "Semua"
      ? daftarOutfit
      : daftarOutfit.filter((o) => o.vibe === vibeAktif);
  const semuaItem = daftarOutfit.flatMap((o) => o.items);
  const totalDimiliki = semuaItem.filter((i) => i.dimiliki).length;

  return (
    <div id="top" className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-7">
        <section className="pt-10">
          <h1 className="max-w-2xl font-serif text-3xl font-bold leading-tight sm:text-5xl">
            Temukan gaya yang benar-benar mewakili kamu
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Kumpulkan set outfit favoritmu dan lacak item apa saja yang masih perlu dibeli.
          </p>
          <RingkasanOutfit
            totalOutfit={daftarOutfit.length}
            totalItem={semuaItem.length}
            totalDimiliki={totalDimiliki}
          />
        </section>

        <section id="koleksi" className="mt-12" aria-labelledby="judul-koleksi">
          <h2 id="judul-koleksi" className="mb-4 font-serif text-2xl font-bold">
            Koleksi outfit
          </h2>
          <FilterVibe pilihan={["Semua", ...VIBE]} aktif={vibeAktif} onPilih={setVibeAktif} />
          <DaftarOutfit
            daftar={outfitTampil}
            onHapus={hapusOutfit}
            onToggleItem={toggleItem}
          />
        </section>

        <section id="katalog" className="mt-16" aria-labelledby="judul-katalog">
          <h2 id="judul-katalog" className="font-serif text-2xl font-bold">
            Referensi belanja
          </h2>
          <p className="mb-4 mt-1 max-w-xl text-sm text-muted">
            Contoh produk dari katalog online (data API DummyJSON) untuk inspirasi item outfitmu.
          </p>
          <KatalogReferensi />
        </section>

        <section id="tambah" className="mt-16 max-w-3xl" aria-labelledby="judul-tambah">
          <h2 id="judul-tambah" className="mb-4 font-serif text-2xl font-bold">
            Tambah outfit baru
          </h2>
          <FormTambahOutfit onTambah={tambahOutfit} />
        </section>
      </main>

      <footer className="mt-16 border-t border-white/10 py-5">
        <p className="mx-auto max-w-6xl px-4 text-sm text-muted sm:px-7">
          &copy; 2026 StitchShift. Proyek Tugas Mata Kuliah Web.
        </p>
      </footer>
    </div>
  );
}
