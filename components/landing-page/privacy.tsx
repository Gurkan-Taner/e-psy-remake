export default function Privacy() {
  return (
    <section className="py-32 bg-[rgb(45,53,49)]/50">
      <div className="max-w-[1200px] mx-auto px-12 grid md:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-9">
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.025em] leading-[1.15]">
            Votre jardin secret <br />
            <span className="italic">reste secret.</span>
          </h2>
          <div className="space-y-8">
            {[
              {
                t: "Pas de compte",
                d: "Aucun e-mail, aucun mot de passe. Vous arrivez, vous parlez.",
              },
              {
                t: "Cryptage total",
                d: "Vos échanges sont éphémères et disparaissent une fois la session close.",
              },
              {
                t: "Zéro jugement",
                d: "L'anonymat permet une liberté de parole absolue.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-1 h-12 bg-[rgb(145,165,155)]/30 rounded-full" />
                <div>
                  <h4 className="font-medium text-[#E6EAE8] mb-1">{item.t}</h4>
                  <p className="text-[rgba(230,234,232,0.5)] font-light">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-full border border-[rgb(145,165,155)]/10 flex items-center justify-center">
          <div className="absolute inset-12 rounded-full border border-[rgb(145,165,155)]/20 animate-[spin_20s_linear_infinite]" />
          <div className="text-center p-8 bg-[rgb(50,59,54)] z-10 rounded-2xl shadow-2xl">
            <span className="text-5xl">🔒</span>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[rgb(145,165,155)]">
              End-to-end Encrypted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
