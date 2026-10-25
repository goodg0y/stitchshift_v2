import ItemChecklist from "./ItemChecklist";

// Props: outfit (object), onHapus (function), onToggleItem (function)
export default function KartuOutfit({ outfit, onHapus, onToggleItem }) {
  const total = outfit.items.length;
  const dimiliki = outfit.items.filter((i) => i.dimiliki).length;
  const persen = total === 0 ? 0 : Math.round((dimiliki / total) * 100);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-panel">
      {outfit.gambar ? (
        <img
          src={outfit.gambar}
          alt={`Set outfit ${outfit.nama}`}
          className="h-56 w-full object-cover"
        />
      ) : (
        <div
          className="flex h-56 items-center justify-center bg-white/5 font-serif text-6xl text-muted"
          aria-hidden="true"
        >
          {outfit.nama.charAt(0).toUpperCase()}
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold text-accent">
          {outfit.vibe} · {outfit.tier} tier
        </p>
        <h3 className="mt-1 font-serif text-xl font-bold">{outfit.nama}</h3>
        <p className="text-sm text-muted">
          {outfit.kategori} · {outfit.cutting}
        </p>

        <ItemChecklist
          outfitId={outfit.id}
          items={outfit.items}
          onToggle={onToggleItem}
        />

        <div className="mt-auto pt-4">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div className="h-full bg-accent transition-all" style={{ width: `${persen}%` }} />
          </div>
          <p className="mt-2 text-sm text-muted">
            {dimiliki} dari {total} item dimiliki
          </p>
          <button
            type="button"
            onClick={() => onHapus(outfit.id)}
            className="mt-3 text-xs font-semibold text-muted transition-colors hover:text-accent"
          >
            Hapus outfit
          </button>
        </div>
      </div>
    </article>
  );
}
