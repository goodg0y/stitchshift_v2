// Props: produk (object dari API: title, price, brand, thumbnail, rating)
export default function KartuProduk({ produk }) {
  return (
    <article className="overflow-hidden rounded-xl bg-panel">
      <img
        src={produk.thumbnail}
        alt={produk.title}
        loading="lazy"
        className="h-40 w-full bg-white/5 object-contain"
      />
      <div className="p-4">
        {/* Tidak semua produk punya brand, jadi dicek dulu (conditional rendering) */}
        {produk.brand && (
          <p className="text-xs font-semibold text-accent">{produk.brand}</p>
        )}
        <h3 className="mt-1 text-sm font-semibold leading-snug">{produk.title}</h3>
        <p className="mt-2 text-sm text-muted">
          US$ {produk.price.toFixed(2)} · ★ {produk.rating}
        </p>
      </div>
    </article>
  );
}
