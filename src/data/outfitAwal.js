// Data awal (dummy) entitas utama: Outfit.
// Gambar ada di public/img/ dan dipanggil lewat "/img/...".
export const outfitAwal = [
  {
    id: 1,
    nama: "Urban Monochrome",
    vibe: "Streetwear",
    kategori: "Atasan & Bawahan",
    cutting: "Oversized",
    tier: "Casual",
    gambar: "/img/img 1.jpg",
    items: [
      { id: "1-a", nama: "Hoodie oversized hitam", platform: "Tokopedia", dimiliki: true },
      { id: "1-b", nama: "Celana cargo abu-abu", platform: "Shopee", dimiliki: true },
      { id: "1-c", nama: "Sneakers putih", platform: "TikTokShop", dimiliki: false },
      { id: "1-d", nama: "Tas selempang hitam", platform: "Shopee", dimiliki: false },
    ],
  },
  {
    id: 2,
    nama: "Weekend Minimalist",
    vibe: "Kasual",
    kategori: "Dress",
    cutting: "Regular",
    tier: "Higher",
    gambar: "/img/img 2.jpg",
    items: [
      { id: "2-a", nama: "Dress linen putih", platform: "Uniqlo", dimiliki: false },
      { id: "2-b", nama: "Flat shoes krem", platform: "Zara", dimiliki: false },
      { id: "2-c", nama: "Tote bag kanvas", platform: "Zara", dimiliki: false },
    ],
  },
  {
    id: 3,
    nama: "Boardroom Classic",
    vibe: "Formal",
    kategori: "Outer & Bawahan",
    cutting: "Slim Fit",
    tier: "Higher",
    gambar: "/img/img 3.jpg",
    items: [
      { id: "3-a", nama: "Blazer hitam slim fit", platform: "Zara", dimiliki: true },
      { id: "3-b", nama: "Celana chino navy", platform: "Levi's", dimiliki: true },
      { id: "3-c", nama: "Kemeja putih", platform: "Uniqlo", dimiliki: true },
    ],
  },
];
