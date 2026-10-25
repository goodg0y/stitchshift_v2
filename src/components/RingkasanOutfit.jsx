// Props: totalOutfit, totalItem, totalDimiliki (angka)
export default function RingkasanOutfit({ totalOutfit, totalItem, totalDimiliki }) {
  const perluDibeli = totalItem - totalDimiliki;

  return (
    <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-white/10 py-6 text-center sm:text-left">
      <div>
        <dt className="text-sm text-muted">Outfit tersimpan</dt>
        <dd className="font-serif text-3xl font-bold">{totalOutfit}</dd>
      </div>
      <div>
        <dt className="text-sm text-muted">Item dimiliki</dt>
        <dd className="font-serif text-3xl font-bold">{totalDimiliki}</dd>
      </div>
      <div>
        <dt className="text-sm text-muted">Perlu dibeli</dt>
        <dd className="font-serif text-3xl font-bold text-accent">{perluDibeli}</dd>
      </div>
    </dl>
  );
}
