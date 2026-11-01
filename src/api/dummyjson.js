// Lapisan akses API: semua pemanggilan fetch ke DummyJSON ada di file ini,
// supaya komponen tidak perlu tahu detail URL maupun cara menangani error jaringan.

const BASE_URL = "https://dummyjson.com";

const JEDA_SIMULASI_MS = 0;

const tunggu = (ms) => new Promise((selesai) => setTimeout(selesai, ms));

// Mengambil beberapa produk dari satu kategori.
// Mengembalikan array produk, atau melempar Error berisi pesan yang ramah dibaca.
export async function ambilProdukKategori(slug, signal) {
  if (JEDA_SIMULASI_MS > 0) {
    await tunggu(JEDA_SIMULASI_MS);
  }

  let respons;
  try {
    respons = await fetch(
      `${BASE_URL}/products/category/${slug}?limit=6&select=title,price,brand,thumbnail,rating`,
      { signal }
    );
  } catch (err) {
    if (err.name === "AbortError") throw err; // dibatalkan sengaja, bukan error sungguhan
    throw new Error("Tidak dapat terhubung ke server. Periksa koneksi internetmu.");
  }

  // fetch tidak melempar error untuk status 404/500, jadi dicek manual lewat respons.ok
  if (!respons.ok) {
    throw new Error(`Server menjawab dengan status ${respons.status}.`);
  }

  const data = await respons.json();
  return data.products;
}
