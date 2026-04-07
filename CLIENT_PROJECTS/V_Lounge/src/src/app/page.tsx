export default function Home() {
  return (
    <main>
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-gradient-to-b from-black/80 to-transparent">
        <a href="#" className="font-serif text-2xl tracking-[0.15em] text-gold">
          V LOUNGE
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-[0.2em] uppercase text-foreground/70">
          <a href="#menu" className="hover:text-gold transition-colors">
            Menu
          </a>
          <a href="#experience" className="hover:text-gold transition-colors">
            Experience
          </a>
          <a href="#events" className="hover:text-gold transition-colors">
            Events
          </a>
          <a href="#gallery" className="hover:text-gold transition-colors">
            Gallery
          </a>
          <a
            href="#reserve"
            className="border border-gold/40 px-5 py-2 text-gold hover:bg-gold/10 transition-all"
          >
            Reserve
          </a>
        </div>
        <button className="md:hidden text-foreground/70" aria-label="Menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-purple-deep">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 50%, rgba(45, 27, 61, 0.8) 0%, transparent 70%), radial-gradient(ellipse at 70% 30%, rgba(184, 134, 11, 0.15) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="atmosphere-overlay absolute inset-0" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="gold-line mx-auto mb-8" />
          <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-6">
            Cocktail Bar &amp; Lounge
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-cream gold-glow leading-tight">
            V Lounge
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/60 font-light max-w-lg mx-auto leading-relaxed">
            Handcrafted cocktails. Curated atmosphere. An intimate escape.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reserve"
              className="px-8 py-3.5 bg-gold/90 text-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold transition-colors"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="px-8 py-3.5 border border-foreground/20 text-foreground/70 text-sm tracking-[0.2em] uppercase hover:border-gold/50 hover:text-gold transition-all"
            >
              View Menu
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent" />
        </div>
      </section>

      {/* ── Signature Cocktails ── */}
      <section id="menu" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4">
              The Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Signature Cocktails
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                name: "Velvet Noir",
                ingredients:
                  "Bourbon, blackberry, activated charcoal, smoked rosemary",
                price: "RM 48",
              },
              {
                name: "Golden Hour",
                ingredients:
                  "Gin, passionfruit, elderflower, saffron tincture",
                price: "RM 52",
              },
              {
                name: "Purple Haze",
                ingredients:
                  "Vodka, butterfly pea, lavender, citrus foam",
                price: "RM 45",
              },
              {
                name: "Smoke & Mirrors",
                ingredients:
                  "Mezcal, pineapple, chipotle, hickory smoke",
                price: "RM 55",
              },
              {
                name: "Midnight Rose",
                ingredients:
                  "Dark rum, rose water, pomegranate, cardamom bitters",
                price: "RM 50",
              },
              {
                name: "The Diplomat",
                ingredients:
                  "Cognac, fig, walnut, angostura, orange peel",
                price: "RM 58",
              },
            ].map((cocktail) => (
              <div
                key={cocktail.name}
                className="group border border-foreground/5 p-8 hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl text-cream group-hover:text-gold transition-colors">
                    {cocktail.name}
                  </h3>
                  <span className="text-gold/70 text-sm ml-4 whitespace-nowrap">
                    {cocktail.price}
                  </span>
                </div>
                <p className="text-foreground/40 text-sm leading-relaxed">
                  {cocktail.ingredients}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block border border-gold/30 px-8 py-3 text-gold/80 text-sm tracking-[0.2em] uppercase hover:bg-gold/5 transition-all"
            >
              Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* ── Experience / About ── */}
      <section
        id="experience"
        className="py-24 md:py-32 px-6 md:px-12 bg-purple-deep/40"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-purple/50 border border-foreground/5 relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at center, rgba(201, 169, 110, 0.08) 0%, transparent 70%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-foreground/10 text-sm tracking-widest uppercase">
              Bar Interior Photo
            </div>
          </div>

          <div>
            <p className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4">
              The Experience
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-tight">
              Where the Night
              <br />
              Comes Alive
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-foreground/50 leading-relaxed mb-6">
              V Lounge is more than a bar. It&apos;s an atmosphere — carefully
              crafted from the first sip to the last note. Dim lighting, curated
              vinyl sets, and cocktails mixed with precision and intention.
            </p>
            <p className="text-foreground/50 leading-relaxed mb-8">
              Every drink tells a story. Our bartenders bring years of craft and
              creativity to every glass, using locally sourced ingredients and
              house-made syrups, bitters, and infusions.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="font-serif text-3xl text-gold">50+</span>
                <p className="text-foreground/40 text-sm mt-1">Cocktails</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-gold">5</span>
                <p className="text-foreground/40 text-sm mt-1">Bartenders</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-gold">7</span>
                <p className="text-foreground/40 text-sm mt-1">Days a Week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Events ── */}
      <section id="events" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4">
              What&apos;s On
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Events &amp; Nights
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                day: "Every Thursday",
                title: "Vinyl Sessions",
                desc: "Live DJ spinning jazz, soul, and funk on original vinyl. Complimentary welcome drink before 9PM.",
              },
              {
                day: "Every Friday",
                title: "Mixology Night",
                desc: "Watch our head bartender craft limited-edition cocktails live. Only 30 seats — reservation required.",
              },
              {
                day: "Every Saturday",
                title: "Late Lounge",
                desc: "Extended hours until 3AM. Deep house, low lights, and our midnight menu of bold, spirit-forward drinks.",
              },
              {
                day: "First Sunday",
                title: "Private Tasting",
                desc: "Monthly spirits masterclass. Learn the craft behind the cocktail. Limited to 12 guests per session.",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="group border border-foreground/5 p-8 hover:border-gold/20 transition-all duration-500"
              >
                <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">
                  {event.day}
                </span>
                <h3 className="font-serif text-2xl text-cream mt-2 mb-3 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <p className="text-foreground/40 text-sm leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section
        id="gallery"
        className="py-24 md:py-32 px-6 md:px-12 bg-purple-deep/40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4">
              The Space
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Gallery
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: "Cocktail Close-up", tall: true },
              { label: "Bar Counter", tall: false },
              { label: "Lounge Seating", tall: false },
              { label: "Bartender at Work", tall: false },
              { label: "Ambient Lighting", tall: false },
              { label: "Event Night", tall: true },
            ].map((item) => (
              <div
                key={item.label}
                className={`relative bg-purple/30 border border-foreground/5 overflow-hidden ${
                  item.tall ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at center, rgba(201, 169, 110, 0.05) 0%, transparent 70%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-foreground/10 text-xs tracking-widest uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservation & Contact ── */}
      <section id="reserve" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-4">
              Join Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-tight">
              Reserve Your
              <br />
              Evening
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-foreground/50 leading-relaxed mb-8">
              Walk-ins are welcome, but we recommend reserving for groups of 4 or
              more, especially on weekends. Private rooms available for special
              occasions.
            </p>
            <a
              href="#"
              className="inline-block px-10 py-4 bg-gold/90 text-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold transition-colors"
            >
              Make a Reservation
            </a>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-xl text-cream mb-4">Hours</h3>
              <div className="space-y-2 text-foreground/50 text-sm">
                <div className="flex justify-between border-b border-foreground/5 pb-2">
                  <span>Monday — Wednesday</span>
                  <span className="text-foreground/70">5PM — 12AM</span>
                </div>
                <div className="flex justify-between border-b border-foreground/5 pb-2">
                  <span>Thursday — Friday</span>
                  <span className="text-foreground/70">5PM — 2AM</span>
                </div>
                <div className="flex justify-between border-b border-foreground/5 pb-2">
                  <span>Saturday</span>
                  <span className="text-foreground/70">6PM — 3AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground/70">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-cream mb-4">Find Us</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Level 23, Tower B
                <br />
                The Exchange 106
                <br />
                Kuala Lumpur, Malaysia
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-cream mb-4">Contact</h3>
              <div className="space-y-1 text-foreground/50 text-sm">
                <p>+60 3-XXXX-XXXX</p>
                <p>hello@vlounge.my</p>
                <p className="text-gold/60">@vlounge.kl</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-foreground/5 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#"
            className="font-serif text-xl tracking-[0.15em] text-gold/70"
          >
            V LOUNGE
          </a>
          <div className="flex items-center gap-6 text-foreground/30 text-xs tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-gold transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              WhatsApp
            </a>
          </div>
          <p className="text-foreground/20 text-xs">
            &copy; 2026 V Lounge. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
