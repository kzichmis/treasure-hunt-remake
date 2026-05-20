import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/wertkammer-logo.png";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Wertkammer" },
      { name: "description", content: "Impressum der Wertkammer gemäß § 5 DDG." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-gold/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Wertkammer" width={40} height={40} className="w-10 h-10 object-contain" />
            <span className="font-serif text-lg text-gold">Wertkammer</span>
          </Link>
          <Link to="/" className="text-sm text-gold hover:underline">← Zurück</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Rechtliches</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-10">Impressum</h1>

        <section className="space-y-8 text-foreground/90 leading-relaxed">
          <div>
            <h2 className="font-serif text-xl text-gold mb-2">Angaben gemäß § 5 DDG</h2>
            <p>
              Tyson Mettbach<br />
              Lindenstraße 36<br />
              31737 Rinteln
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-gold mb-2">Kontakt</h2>
            <p>E-Mail: kontakt@wertkammer.de</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-gold mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Tyson Mettbach<br />
              Lindenstraße 36<br />
              31737 Rinteln
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-gold mb-2">Haftungsausschluss</h2>
            <p className="text-sm text-muted-foreground">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
              Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
              deren Betreiber verantwortlich.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/10 py-8 px-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Wertkammer
      </footer>
    </div>
  );
}
