import { useEffect, useState } from "react";

const STORAGE_KEY = "wertkammer-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur border border-gold/30 shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 text-sm text-foreground/90">
          <p className="font-serif text-base text-gold mb-1">Cookies</p>
          <p className="text-muted-foreground leading-relaxed">
            Wir verwenden Cookies, um diese Website bestmöglich zu betreiben. Durch die Nutzung
            stimmen Sie der Verwendung notwendiger Cookies zu. Weitere Informationen finden Sie im{" "}
            <a href="/impressum" className="text-gold underline">Impressum</a>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => decide("declined")}
            className="border border-border px-4 py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={() => decide("accepted")}
            className="bg-gold text-primary-foreground px-4 py-2 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
