import { useEffect, useState } from "react";
import KartuProduk from "./KartuProduk";
import StatusMuat from "./StatusMuat";
import PesanError from "./PesanError";
import { ambilProdukKategori } from "../api/dummyjson";
import { KATEGORI_KATALOG } from "../data/kategoriKatalog";

// Menampilkan referensi produk dari API DummyJSON.
// Tiga kondisi data: "loading" -> "success" atau "error".
export default function KatalogReferensi() {
  const [kategori, setKategori] = useState(KATEGORI_KATALOG[0].slug);
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"
  const [produk, setProduk] = useState([]);
  const [pesanError, setPesanError] = useState("");
  const [percobaan, setPercobaan] = useState(0); // dinaikkan agar efek jalan ulang

  // Efek ini jalan saat komponen tampil, saat kategori berganti,
  // dan saat tombol "Coba Lagi" menaikkan nilai percobaan.
  useEffect(() => {
    const pengendali = new AbortController();

    async function muatProduk() {
      try {
        const hasil = await ambilProdukKategori(kategori, pengendali.signal);
        setProduk(hasil);
        setStatus("success");
      } catch (err) {
        if (err.name === "AbortError") return; // permintaan lama dibatalkan, abaikan
        setPesanError(err.message);
        setStatus("error");
      }
    }

    muatProduk();

    // Cleanup: batalkan permintaan lama kalau kategori berganti sebelum selesai
    return () => pengendali.abort();
  }, [kategori, percobaan]);

  function pilihKategori(slug) {
    if (slug === kategori) return;
    setStatus("loading");
    setKategori(slug);
  }

  function cobaLagi() {
    setStatus("loading");
    setPercobaan((n) => n + 1);
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Kategori produk">
        {KATEGORI_KATALOG.map((k) => (
          <button
            key={k.slug}
            type="button"
            onClick={() => pilihKategori(k.slug)}
            aria-pressed={kategori === k.slug}
            className={
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors " +
              (kategori === k.slug
                ? "bg-accent text-white"
                : "bg-panel text-muted hover:text-cream")
            }
          >
            {k.label}
          </button>
        ))}
      </div>

      {status === "loading" && <StatusMuat />}

      {status === "error" && <PesanError pesan={pesanError} onCobaLagi={cobaLagi} />}

      {status === "success" && produk.length === 0 && (
        <p className="py-6 text-muted">Belum ada produk untuk kategori ini.</p>
      )}

      {status === "success" && produk.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {produk.map((p) => (
            <KartuProduk key={p.id} produk={p} />
          ))}
        </div>
      )}
    </div>
  );
}
