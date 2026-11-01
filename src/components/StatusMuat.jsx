// Tampilan saat data sedang dimuat (state "loading").
// Berupa kerangka kartu berkedip supaya tata letak tidak melompat ketika data tiba.
export default function StatusMuat() {
  const kerangka = Array.from({ length: 6 }, (_, i) => `kerangka-${i}`);

  return (
    <div role="status" aria-live="polite">
      <p className="mb-4 text-sm text-muted">Memuat katalog referensi...</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {kerangka.map((kunci) => (
          <div key={kunci} className="animate-pulse overflow-hidden rounded-xl bg-panel">
            <div className="h-40 bg-white/5" />
            <div className="space-y-2 p-4">
              <div className="h-3 w-1/3 rounded bg-white/10" />
              <div className="h-4 w-3/4 rounded bg-white/10" />
              <div className="h-3 w-1/2 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
