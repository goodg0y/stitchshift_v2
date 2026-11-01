// Tampilan saat pengambilan data gagal (state "error").
// Props: pesan (string), onCobaLagi (function)
export default function PesanError({ pesan, onCobaLagi }) {
  return (
    <div role="alert" className="rounded-xl bg-panel p-6">
      <h3 className="font-serif text-lg font-bold text-accent">Gagal memuat katalog</h3>
      <p className="mt-2 text-sm text-muted">{pesan}</p>
      <button
        type="button"
        onClick={onCobaLagi}
        className="mt-4 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-accent-dark"
      >
        Coba Lagi
      </button>
    </div>
  );
}
