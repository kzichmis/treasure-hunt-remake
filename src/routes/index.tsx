import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/wertkammer-logo.png";
import imgZinn from "@/assets/cat-zinn.jpg";
import imgMuenzen from "@/assets/cat-muenzen.jpg";
import imgLuxusuhren from "@/assets/cat-luxusuhren.jpg";
import imgBestecke from "@/assets/cat-bestecke.jpg";
import imgTeppiche from "@/assets/cat-teppiche.jpg";
import imgPelze from "@/assets/cat-pelze.jpg";
import imgBronze from "@/assets/cat-bronzefiguren.jpg";
import imgSchmuck from "@/assets/cat-schmuck.jpg";
import imgModeschmuck from "@/assets/cat-modeschmuck.jpg";
import imgPorzellan from "@/assets/cat-porzellan.jpg";
import imgKleinmoebel from "@/assets/cat-kleinmoebel.jpg";
import imgGemaelde from "@/assets/cat-gemaelde.jpg";
import { Phone, MessageCircle, Mail, ShieldCheck, Banknote, Eye, Home, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wertkammer – Wir kaufen Ihre vergessenen Schätze | Bundesweit" },
      { name: "description", content: "Wertkammer: Kostenloser Hausbesuch, unverbindliche Wertschätzung & Gutachten. Ankauf von Schmuck, Gold, Uhren, Münzen, Antiquitäten – bundesweit zu Tageshöchstpreisen." },
      { property: "og:title", content: "Wertkammer – Wir kaufen Ihre vergessenen Schätze" },
      { property: "og:description", content: "Machen Sie Ihre Staubfänger zu Geld – bundesweiter Ankauf, kostenloser Hausbesuch." },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "+49 152 27 03 28 58";
const PHONE_TEL = "+4915227032858";
const WHATSAPP = "https://wa.me/4915227032858?text=Hallo%20Wertkammer%2C%20ich%20m%C3%B6chte%20gerne%20folgende%20St%C3%BCcke%20bewerten%20lassen%3A";

const ankaufItems = [
  { name: "Zinn", img: imgZinn },
  { name: "Münzen", img: imgMuenzen },
  { name: "Luxusuhren", img: imgLuxusuhren },
  { name: "Bestecke", img: imgBestecke },
  { name: "Teppiche", img: imgTeppiche },
  { name: "Pelze", img: imgPelze },
  { name: "Bronzefiguren", img: imgBronze },
  { name: "Gold & Silberschmuck", img: imgSchmuck },
  { name: "Modeschmuck", img: imgModeschmuck },
  { name: "Porzellan", img: imgPorzellan },
  { name: "Antike Kleinmöbel", img: imgKleinmoebel },
  { name: "Gemälde", img: imgGemaelde },
];

const promises = [
  { icon: Home, title: "Kostenloser Hausbesuch", desc: "Wir kommen bundesweit zu Ihnen – persönlich, pünktlich und ohne Anfahrtskosten." },
  { icon: Eye, title: "Unverbindliche Wertschätzung", desc: "Wir schätzen den Wert Ihrer Stücke vor Ort – fachkundig, transparent und kostenfrei." },
  { icon: ShieldCheck, title: "Diskretion & Vertrauen", desc: "Jede Begutachtung erfolgt vertraulich und respektvoll – ohne unangenehme Fragen." },
  { icon: Banknote, title: "Tageshöchstpreise – Sofort bar", desc: "Bei Annahme erhalten Sie den vereinbarten Betrag sofort in bar oder per Überweisung." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Wertkammer Logo" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <span className="font-serif text-lg md:text-xl tracking-wide text-gold hidden sm:inline">Wertkammer</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#ankauf" className="hover:text-gold transition-colors">Ankauf</a>
            <a href="#service" className="hover:text-gold transition-colors">Service</a>
            <a href="#kontakt" className="hover:text-gold transition-colors">Kontakt</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex items-center gap-2 text-sm text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen hero-radial flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-28 pb-20">
          <p className="text-xs tracking-[0.4em] text-gold/80 uppercase mb-6">Bundesweit für Sie im Einsatz</p>
          <img src={logo} alt="Wertkammer – Wappen mit Krone, Diamant und gekreuzten Schwertern" width={1024} height={1024} className="w-56 md:w-72 mx-auto mb-6 drop-shadow-[0_10px_40px_rgba(212,175,55,0.25)]" />
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-5">
            Wir kaufen Ihre <span className="gradient-gold-text italic">vergessenen Schätze</span>
          </h1>
          <p className="text-lg md:text-xl text-gold/90 italic mb-6">Machen Sie Ihre Staubfänger zu Geld!</p>
          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10">
            Kostenloser Hausbesuch · Unverbindliche Wertschätzung & Gutachten · Ankauf zu Tageshöchstpreisen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-3 border border-gold px-8 py-4 text-sm tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 shadow-gold">
              <MessageCircle className="w-4 h-4" /> WhatsApp Bewertung
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-all">
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Ankauf Liste – wie auf dem Flyer */}
      <section id="ankauf" className="py-24 px-6 border-t border-gold/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Ankauf von</p>
            <h2 className="font-serif text-4xl md:text-5xl">Was wir gerne für Sie ankaufen</h2>
            <div className="gold-divider mt-8 !h-12" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ankaufItems.map((item) => (
              <figure key={item.name} className="group relative overflow-hidden border border-gold/20 bg-card/40">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <span className="font-serif text-lg md:text-xl text-gold">{item.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="text-center mt-14 text-muted-foreground italic font-serif text-xl">
            … und vieles mehr aus Ihrem Nachlass.
          </p>
        </div>
      </section>

      {/* Service / Versprechen */}
      <section id="service" className="py-24 px-6 bg-card/40 border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Unser Service</p>
            <h2 className="font-serif text-4xl md:text-5xl">Kostenlos. Diskret. Bundesweit.</h2>
            <div className="gold-divider mt-8 !h-12" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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

          <div className="mt-16 max-w-3xl mx-auto border border-gold/30 p-8 md:p-10 text-center">
            <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Unser Versprechen</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              „Kostenloser Hausbesuch, unverbindliche Wertschätzung & Gutachten – Ankauf zu Tageshöchstpreisen."
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile / Checkliste */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Warum Wertkammer</p>
            <h2 className="font-serif text-4xl md:text-5xl">Vertrauen, das sich auszahlt</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Bundesweiter Hausbesuch – ohne Anfahrtskosten",
              "Sofortige Barzahlung bei Ankauf",
              "Erfahrene Gutachter & faire Tagespreise",
              "Kostenlose & unverbindliche Schätzung",
              "Diskrete Abwicklung – auch bei Nachlässen",
              "Auf Wunsch komplette Haushaltsauflösung",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 bg-card/60 border border-gold/15 px-5 py-4">
                <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24 px-6 bg-card/40 border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <img src={logo} alt="Wertkammer" width={1024} height={1024} className="w-24 mx-auto mb-6 opacity-90" loading="lazy" />
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Kontakt</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Sprechen wir über Ihre Schätze</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Senden Sie uns ein paar Fotos via WhatsApp oder rufen Sie direkt an – Sie erhalten innerhalb von 24 Stunden eine erste Einschätzung.
          </p>

          <div className="grid sm:grid-cols-3 gap-px bg-gold/10 mb-16">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-background p-8 hover:bg-secondary transition-colors">
              <MessageCircle className="w-7 h-7 text-gold mx-auto mb-4" strokeWidth={1.2} />
              <p className="font-serif text-lg mb-1">WhatsApp</p>
              <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
            </a>
            <a href={`tel:${PHONE_TEL}`} className="bg-background p-8 hover:bg-secondary transition-colors">
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

          <form className="text-left grid gap-5 max-w-2xl mx-auto" onSubmit={(e) => { e.preventDefault(); window.location.href = WHATSAPP; }}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input required placeholder="Ihr Name" className="bg-input/40 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
              <input required placeholder="E-Mail oder Telefon" className="bg-input/40 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors" />
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
            <img src={logo} alt="Wertkammer" width={32} height={32} className="w-8 h-8 object-contain" loading="lazy" />
            <span className="font-serif text-base text-foreground">Wertkammer</span>
            <span className="text-muted-foreground/60">· Bundesweiter Ankauf</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Wertkammer. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
