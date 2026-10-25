# StitchShift Frontend

Asisten mix and match pakaian dan pelacak target belanja fashion.
Entitas utama: **Outfit** (set pakaian berisi beberapa item belanja).

Stack: React + Vite + Tailwind CSS v4.

## Menjalankan
```bash
npm install
npm run dev
```
Buka http://localhost:5173

## Struktur komponen (`src/components/`)
| Komponen | Fungsi | Props utama |
|---|---|---|
| `Header` | Judul dan navigasi | - |
| `RingkasanOutfit` | Jumlah outfit, item dimiliki, perlu dibeli | `totalOutfit`, `totalItem`, `totalDimiliki` |
| `FilterVibe` | Tombol filter berdasarkan vibe | `pilihan`, `aktif`, `onPilih` |
| `DaftarOutfit` | Render list `.map()` + teks "Belum ada data outfit" | `daftar`, `onHapus`, `onToggleItem` |
| `KartuOutfit` | Kartu satu outfit beserta progres | `outfit`, `onHapus`, `onToggleItem` |
| `ItemChecklist` | Checklist item dimiliki / perlu dibeli | `outfitId`, `items`, `onToggle` |
| `FormTambahOutfit` | Form controlled untuk menambah outfit | `onTambah` |

State utama (`daftarOutfit`) ada di `App.jsx`.
