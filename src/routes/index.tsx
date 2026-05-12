import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-treasures.jpg";
import { Gem, Crown, Armchair, Palette, Coins, BookOpen, Phone, MessageCircle, Mail, ShieldCheck, Banknote, Eye, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wertkammer – Diskreter Ankauf von Nachlässen & Wertgegenständen" },
      { name: "description", content: "Wertkammer kauft deutschlandweit Schmuck, Uhren, Antiquitäten, Kunst und Nachlässe zu fairen Tageshöchstpreisen. Diskret, kostenlos, vor Ort." },
      { property: "og:title", content: "Wertkammer – Werte mit Würde" },
      { property: "og:description", content: "Diskreter Ankauf von Nachlässen, Schmuck, Kunst und Antiquitäten – deutschlandweit." },
    ],
  }),
  component: Index,
});

const categories = [
  { icon: Gem, title: "Schmuck & Edelsteine", desc: "Goldketten, Brillanten, Perlen, Bernstein, antiker Trauring." },
  { icon: Crown, title: "Armband- & Taschenuhren", desc: "Rolex, Patek Philippe, Omega, IWC, A. Lange & Söhne." },
  { icon: Palette, title: "Gemälde & Grafiken", desc: "Alte Meister, Klassische Moderne, signierte Druckgrafik." },
  { icon: Armchair, title: "Möbel & Designstücke", desc: "Biedermeier, Jugendstil, Bauhaus, Mid-Century Klassiker." },
  { icon: Coins, title: "Silber, Münzen & Orden", desc: "Tafelsilber, Sammlermünzen, militärhistorische Auszeichnungen." },
  { icon: BookOpen, title: "Raritäten & Sammlungen", desc: "Porzellan, Teppiche, alte Bücher, Pelze, Schallplatten." },
];

const promises = [
  { icon: Eye, title: "Kostenlose Begutachtung", desc: "Wir beurteilen Ihre Stücke unverbindlich – persönlich bei Ihnen zu Hause oder per Foto." },
  { icon: ShieldCheck, title: "Absolute Diskretion", desc: "Jede Bewertung und Abwicklung erfolgt vertraulich, anonym und ohne unangenehme Fragen." },
  { icon: Banknote, title: "Sofortige Auszahlung", desc: "Bei Annahme erhalten Sie den vereinbarten Betrag bar oder per Sofortüberweisung." },
  { icon: Truck, title: "Komplette Räumung", desc: "Auf Wunsch übernehmen wir die haushaltsschonende Räumung des gesamten Nachlasses." },
];

const steps = [
  { n: "01", title: "Kontakt aufnehmen", desc: "Schreiben Sie uns über WhatsApp, per E-Mail oder rufen Sie uns direkt an." },
  { n: "02", title: "Termin & Sichtung", desc: "Wir vereinbaren einen unverbindlichen Termin – deutschlandweit, oft schon innerhalb weniger Tage." },
  { n: "03", title: "Faires Angebot", desc: "Sie erhalten ein transparentes Angebot zu aktuellen Tageshöchstpreisen, ohne Kleingedrucktes." },
  { n: "04", title: "Sofortige Abwicklung", desc: "Bezahlung und Abholung erfolgen direkt – schnell, sauber und respektvoll." },
];

function Index() {
  const whatsappLink = "https://wa.me/491638907459?text=Hallo%20Wertkammer%2C%20ich%20m%C3%B6chte%20gerne%20folgende%20St%C3%BCcke%20unverbindlich%20bewerten%20lassen%3A";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
          <a href="#top" className="font-serif text-xl tracking-wide text-gold">Wertkammer</a>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#kategorien" className="hover:text-gold transition-colors">Ankauf</a>
            <a href="#warum" className="hover:text-gold transition-colors">Versprechen</a>
            <a href="#ablauf" className="hover:text-gold transition-colors">Ablauf</a>
            <a href="#kontakt" className="hover:text-gold transition-colors">Kontakt</a>
          </nav>
          <a href="tel:+491638907459" className="hidden sm:inline-flex items-center gap-2 text-sm text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" /> Anrufen
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen hero-radial flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Antike Schätze auf dunklem Samt – Goldtaschenuhr, Diamantring, Silberleuchter, Porzellanvase"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24 pb-20">
          <div className="gold-divider mb-8" />
          <p className="text-xs tracking-[0.4em] text-gold/80 uppercase mb-6">Wertkammer</p>
          <Gem className="w-10 h-10 text-gold mx-auto mb-8" />
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
            Werte mit <span className="gradient-gold-text italic">Würde.</span><br />
            Schätze mit <span className="gradient-gold-text italic">Charakter.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Wir kaufen, was andere übersehen.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10">
            Diskreter Ankauf von Nachlässen, Schmuck, Antiquitäten und Sammlerstücken – deutschlandweit, persönlich und zu fairen Tageshöchstpreisen.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 border border-gold px-8 py-4 text-sm tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 shadow-gold"
          >
            Kostenlose Bewertung anfragen
          </a>
          <p className="mt-8 text-sm text-muted-foreground/70 italic">Aus Staub wird Wert.</p>
        </div>
      </section>

      {/* Categories */}
      <section id="kategorien" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Was wir ankaufen</p>
            <h2 className="font-serif text-4xl md:text-5xl">Sechs Felder, ein Maßstab</h2>
            <div className="gold-divider mt-8 !h-12" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {categories.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-10 hover:bg-secondary transition-colors duration-500 group">
                <Icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
                <h3 className="font-serif text-2xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promises */}
      <section id="warum" className="py-28 px-6 bg-card/40 border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Unser Versprechen</p>
            <h2 className="font-serif text-4xl md:text-5xl">Warum Wertkammer</h2>
            <div className="gold-divider mt-8 !h-12" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {promises.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-gold/40 rounded-full mb-6">
                  <Icon className="w-7 h-7 text-gold" strokeWidth={1.2} />
                </div>
                <h3 className="font-serif text-xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="ablauf" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">So einfach geht es</p>
            <h2 className="font-serif text-4xl md:text-5xl">Vier Schritte zum fairen Preis</h2>
            <div className="gold-divider mt-8 !h-12" />
          </div>
          <div className="space-y-px bg-gold/10">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="bg-background grid md:grid-cols-[120px_1fr] gap-6 p-8 md:p-10 items-start">
                <span className="font-serif text-4xl text-gold/70">{n}</span>
                <div>
                  <h3 className="font-serif text-2xl mb-2">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-28 px-6 bg-card/40 border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Kontakt</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Sprechen wir über Ihre Schätze</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Senden Sie uns ein paar Fotos oder rufen Sie an. Innerhalb von 24 Stunden erhalten Sie eine erste Einschätzung – kostenlos und unverbindlich.
          </p>

          <div className="grid sm:grid-cols-3 gap-px bg-gold/10 mb-16">
            <a href={whatsappLink} target="_blank" rel="noopener" className="bg-background p-8 hover:bg-secondary transition-colors group">
              <MessageCircle className="w-7 h-7 text-gold mx-auto mb-4" strokeWidth={1.2} />
              <p className="font-serif text-lg mb-1">WhatsApp</p>
              <p className="text-sm text-muted-foreground">Chat direkt mit Fotos</p>
            </a>
            <a href="tel:+491638907459" className="bg-background p-8 hover:bg-secondary transition-colors">
              <Phone className="w-7 h-7 text-gold mx-auto mb-4" strokeWidth={1.2} />
              <p className="font-serif text-lg mb-1">Telefon</p>
              <p className="text-sm text-muted-foreground">Mo–Sa, 9–20 Uhr</p>
            </a>
            <a href="mailto:kontakt@wertkammer.de" className="bg-background p-8 hover:bg-secondary transition-colors">
              <Mail className="w-7 h-7 text-gold mx-auto mb-4" strokeWidth={1.2} />
              <p className="font-serif text-lg mb-1">E-Mail</p>
              <p className="text-sm text-muted-foreground">kontakt@wertkammer.de</p>
            </a>
          </div>

          <form className="text-left grid gap-5 max-w-2xl mx-auto" onSubmit={(e) => { e.preventDefault(); window.location.href = whatsappLink; }}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input required placeholder="Ihr Name" className="bg-input/40 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
              <input required type="email" placeholder="E-Mail oder Telefon" className="bg-input/40 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
            </div>
            <textarea rows={5} placeholder="Was möchten Sie verkaufen? (Beschreibung, Herkunft, ggf. Fotos folgen)" className="bg-input/40 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none" />
            <button type="submit" className="border border-gold px-8 py-4 text-sm tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 justify-self-start">
              Anfrage absenden
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Gem className="w-4 h-4 text-gold" />
            <span className="font-serif text-base text-foreground">Wertkammer</span>
            <span className="text-muted-foreground/60">· Deutschlandweiter Ankauf</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Wertkammer. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
