// Props: outfitId, items (array), onToggle (function)
export default function ItemChecklist({ outfitId, items, onToggle }) {
  if (items.length === 0) {
    return <p className="mt-4 text-sm text-muted">Belum ada item.</p>;
  }

  return (
    <ul className="mt-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center gap-3 border-b border-white/10 py-2.5 last:border-0"
        >
          <input
            type="checkbox"
            id={`chk-${item.id}`}
            checked={item.dimiliki}
            onChange={() => onToggle(outfitId, item.id)}
            className="h-4 w-4 accent-accent"
          />
          <label htmlFor={`chk-${item.id}`} className="flex-1 text-sm">
            {item.nama}
            <span className="block text-xs text-muted">{item.platform}</span>
          </label>
          <span
            className={
              "text-xs font-bold " + (item.dimiliki ? "text-muted" : "text-accent")
            }
          >
            {item.dimiliki ? "Dimiliki" : "Perlu dibeli"}
          </span>
        </li>
      ))}
    </ul>
  );
}
