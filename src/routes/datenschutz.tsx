import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/wertkammer-logo.png";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Wertkammer" },
      { name: "description", content: "Datenschutzerklärung der Wertkammer." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
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
        <h1 className="font-serif text-4xl md:text-5xl mb-10">Datenschutzerklärung</h1>

        <section className="space-y-10 text-foreground/90 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-gold mb-3">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgende Information gibt einen einfachen Überblick darüber, was mit deinen
              personenbezogenen Daten passiert, wenn du diese Website besuchst.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-gold mb-3">2. Datenerfassung auf dieser Website</h2>
            <h3 className="font-serif text-lg text-foreground mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Verantwortlich ist:
            </p>
            <p className="mb-6">
              Tyson Mettbach<br />
              Lindenstraße 36<br />
              31737 Rinteln<br />
              E-Mail: wertkammer@hotmail.com
            </p>

            <h3 className="font-serif text-lg text-foreground mb-2">Wie erfassen wir deine Daten?</h3>
            <p>
              Deine Daten werden zum einen dadurch erhoben, dass du uns diese mitteilst. Andere
              Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
              Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald
              du unsere Website betrittst.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-gold mb-3">3. Deine Rechte</h2>
            <p>
              Du hast jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger
              und Zweck deiner gespeicherten personenbezogenen Daten. Du hast außerdem ein Recht
              auf Berichtigung oder Löschung dieser Daten. Wenn du eine Einwilligung zur
              Datenverarbeitung erteilt hast, kannst du diese jederzeit für die Zukunft
              widerrufen. Zudem steht dir ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-gold mb-3">4. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>
              Wir setzen keine Analyse-Tools oder Tracking-Software von Drittanbietern ein.
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
