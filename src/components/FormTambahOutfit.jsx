import { useState } from "react";
import { VIBE, KATEGORI, CUTTING, TIER } from "../data/opsi";

const formAwal = {
  nama: "",
  vibe: VIBE[0],
  kategori: KATEGORI[0],
  cutting: CUTTING[0],
  tier: TIER[0],
  items: "",
};

const kelasInput =
  "w-full rounded-lg bg-panel px-3 py-2.5 text-sm text-cream placeholder:text-muted/60 focus:outline-2 focus:outline-accent";

// Komponen kecil untuk dropdown agar form tidak berulang-ulang
function Pilihan({ label, name, value, opsi, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-muted">
        {label}
      </label>
      <select id={name} name={name} value={value} onChange={onChange} className={kelasInput}>
        {opsi.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

// Props: onTambah (function yang menerima object outfit baru)
export default function FormTambahOutfit({ onTambah }) {
  // Controlled component: semua nilai input disimpan di state
  const [form, setForm] = useState(formAwal);
  const [error, setError] = useState("");

  function ubah(e) {
    const { name, value } = e.target;
    setForm((sebelumnya) => ({ ...sebelumnya, [name]: value }));
  }

  function kirim(e) {
    e.preventDefault();

    const nama = form.nama.trim();
    const namaItem = form.items
      .split(",")
      .map((teks) => teks.trim())
      .filter(Boolean);

    if (nama === "") {
      setError("Nama outfit wajib diisi.");
      return;
    }
    if (namaItem.length === 0) {
      setError("Isi minimal satu item, pisahkan dengan koma.");
      return;
    }

    const id = Date.now();
    const platform = form.tier === "Casual" ? "Shopee" : "Uniqlo"; // referensi awal sesuai tier

    onTambah({
      id,
      nama,
      vibe: form.vibe,
      kategori: form.kategori,
      cutting: form.cutting,
      tier: form.tier,
      gambar: "",
      items: namaItem.map((n, i) => ({
        id: `${id}-${i}`,
        nama: n,
        platform,
        dimiliki: false,
      })),
    });

    setForm(formAwal);
    setError("");
  }

  return (
    <form onSubmit={kirim} noValidate className="rounded-xl bg-panel/60 p-5 sm:p-6">
      <div className="mb-5">
        <label htmlFor="nama" className="mb-2 block text-sm font-semibold text-muted">
          Nama outfit
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={form.nama}
          onChange={ubah}
          placeholder="Contoh: Campus Layering"
          className={kelasInput}
        />
      </div>

      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        <Pilihan label="Vibe" name="vibe" value={form.vibe} opsi={VIBE} onChange={ubah} />
        <Pilihan label="Kategori" name="kategori" value={form.kategori} opsi={KATEGORI} onChange={ubah} />
        <Pilihan label="Tipe cutting" name="cutting" value={form.cutting} opsi={CUTTING} onChange={ubah} />
        <Pilihan label="Tier belanja" name="tier" value={form.tier} opsi={TIER} onChange={ubah} />
      </div>

      <div className="mb-5">
        <label htmlFor="items" className="mb-2 block text-sm font-semibold text-muted">
          Daftar item <span className="font-normal">(pisahkan dengan koma)</span>
        </label>
        <textarea
          id="items"
          name="items"
          rows="3"
          value={form.items}
          onChange={ubah}
          placeholder="Contoh: Kemeja flanel kotak, Celana jeans lurus, Sepatu canvas"
          className={kelasInput}
        />
      </div>

      {error !== "" && (
        <p role="alert" className="mb-4 text-sm font-semibold text-accent">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="rounded-full bg-accent px-8 py-3 text-sm font-semibold transition-colors hover:bg-accent-dark"
      >
        Tambah
      </button>
    </form>
  );
}
