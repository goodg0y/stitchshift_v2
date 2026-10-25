import KartuOutfit from "./KartuOutfit";

// Props: daftar (array outfit), onHapus, onToggleItem
export default function DaftarOutfit({ daftar, onHapus, onToggleItem }) {
  // Conditional rendering: tampilan saat daftar kosong
  if (daftar.length === 0) {
    return <p className="py-10 text-muted">Belum ada data outfit.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {daftar.map((outfit) => (
        <KartuOutfit
          key={outfit.id}
          outfit={outfit}
          onHapus={onHapus}
          onToggleItem={onToggleItem}
        />
      ))}
    </div>
  );
}
