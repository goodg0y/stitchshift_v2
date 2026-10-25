export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <a href="#top" className="font-serif text-xl font-bold tracking-wide">
          StitchShift
        </a>
        <nav aria-label="Navigasi utama">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-muted">
            <li><a href="#koleksi" className="transition-colors hover:text-accent">Koleksi</a></li>
            <li><a href="#tambah" className="transition-colors hover:text-accent">Tambah Outfit</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
