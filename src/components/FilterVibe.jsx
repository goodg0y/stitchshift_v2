// Props: pilihan (array string), aktif (string), onPilih (function)
export default function FilterVibe({ pilihan, aktif, onPilih }) {
  return (
    <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter vibe">
      {pilihan.map((vibe) => (
        <button
          key={vibe}
          type="button"
          onClick={() => onPilih(vibe)}
          aria-pressed={aktif === vibe}
          className={
            "rounded-full px-5 py-2 text-sm font-semibold transition-colors " +
            (aktif === vibe
              ? "bg-accent text-white"
              : "bg-panel text-muted hover:text-cream")
          }
        >
          {vibe}
        </button>
      ))}
    </div>
  );
}
