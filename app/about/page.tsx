import Image from "next/image";
import Button from "@/components/ui/button";
import { Heart, Waves, Sparkles } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen font-sans transition-colors duration-300
      bg-gradient-to-br from-[var(--background)] via-[var(--background-secondary)] to-white
      dark:from-[var(--foreground)] dark:to-zinc-950 text-[var(--foreground)] dark:text-[var(--background)]">

      {/* HERO SPLIT: IMAGE | TEXT */}
      <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col-reverse md:flex-row items-center md:items-stretch gap-0 px-0 mb-0 relative">
        
        {/* Left: Large Brand Image */}
        <div className="w-full md:w-1/2 h-60 md:h-auto relative">
          <div className="absolute  rounded-[3rem] lg:rounded-none pointer-events-none" />
          <Image
            src="/images/customer-1.png" // <-- Replace with your signature spa/brand visual!
            alt="Athena Spa Sanctuary"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-[3rem] lg:rounded-none"
            priority
          />
        </div>
        
        {/* Right: Text and CTA */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 md:p-16 bg-gradient-to-bl from-white/60 via-pink-50/80 to-fuchsia-100/50 dark:from-fuchsia-950/90 dark:via-zinc-900 dark:to-black ">
          <span className="uppercase tracking-widest text-xs font-bold text-[var(--text-secondary)] dark:text-[var(--text-primary)] mb-4 block">
            About Athena
          </span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-4 bg-clip-text text-transparent
            bg-gradient-to-tr from-pink-500 via-fuchsia-400 to-rose-400 dark:from-pink-200 dark:to-fuchsia-300">
            Serenity, Reimagined
          </h1>
          <p className="text-base md:text-lg text-[var(--foreground-secondary)] dark:text-pink-100/80 mb-7">
            Step inside Jaipur’s refined oasis—where ancient wisdom meets luxury wellness. Every Athena ritual is curated to nourish your body, still your mind, and inspire your spirit.  
          </p>
          <Button
            className="bg-[var(--text-primary)] hover:bg-[var(--text-secondary)] text-[var(--background-secondary)] dark:bg-[var(--text-primary)] dark:hover:bg-[var(--text-secondary)] dark:text-[var(--background)] font-bold px-8 py-3 rounded-full transition shadow self-start"
            size="lg"
          >
            <Link href="https://www.welns.io/product/booking/WFRCHN613855/AthenaBodyBarandSaloonPvtLtd360541?bk_src=GMAPS110">
              Book Your Escape
            </Link>
          </Button>
        </div>
      </section>

      {/* STORY & PHILOSOPHY */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-[var(--background-secondary)] to-pink-50 dark:from-fuchsia-950/80 dark:to-zinc-900 transition">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          {/* Story */}
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-left mb-4 text-[var(--text-secondary)] dark:text-[var(--text-primary)]">
              Our Story
            </h2>
            <div className="rounded-xl bg-white/80 dark:bg-fuchsia-950/90 shadow-lg p-6 md:p-8 border border-pink-100 dark:border-fuchsia-900">
              <p className="text-base md:text-lg text-[var(--foreground-secondary)] dark:text-pink-100/90">
                Athena Spa & Bodybar was envisioned to bring authentic, gentle healing and sublime tranquility to Jaipur.  
                In our sanctuary, the journey is as enriching as the destination—guided by expert hands, mindful of every detail, and rooted in care.
                <br /><br />
                Our blend of ancient therapies and modern techniques is dedicated to your transformation and peace.
              </p>
            </div>
          </div>
          {/* Philosophy */}
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-left mb-4 text-[var(--text-secondary)] dark:text-[var(--text-primary)]">
              Our Philosophy
            </h2>
            <div className="rounded-xl bg-white/80 dark:bg-fuchsia-950/90 shadow-lg p-6 md:p-8 border border-pink-100 dark:border-fuchsia-900">
              <ul className="space-y-5 text-[var(--foreground-secondary)] dark:text-pink-100/85 text-base">
                <li className="flex items-start gap-3">
                  <Heart className="mt-1 w-5 h-5 text-fuchsia-400 dark:text-pink-200" />
                  <span>
                    <b>Personalized Journeys:</b> Every session begins with a bespoke consultation, tailored just for you.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Waves className="mt-1 w-5 h-5 text-pink-400 dark:text-fuchsia-200" />
                  <span>
                    <b>Harmony of Science & Soul:</b> We unite traditional therapies with advanced techniques for total well-being.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 w-5 h-5 text-yellow-400 dark:text-yellow-200" />
                  <span>
                    <b>Only the Purest Touch:</b> Botanical oils and world-class spa products—gentle, safe, and always effective.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE ATHENA DIFFERENCE */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-pink-100 via-fuchsia-50 to-white dark:from-black dark:via-fuchsia-950/60 dark:to-zinc-900 transition">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-10 text-left md:text-center 
            text-[var(--text-secondary)] dark:text-[var(--text-primary)]"
          >The Athena Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white/90 dark:bg-fuchsia-950/90 p-8 shadow-xl border border-pink-100 dark:border-fuchsia-900">
              <h3 className="font-serif font-semibold text-base md:text-lg text-[var(--text-primary)] dark:text-fuchsia-200 mb-2">Certified, Caring Therapists</h3>
              <p className="text-[var(--foreground-secondary)] dark:text-pink-100/80 text-sm md:text-base">
                Meticulous, expert, and always empathetic—our certified team brings deep tradition and genuine care to every session.
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 dark:bg-fuchsia-950/90 p-8 shadow-xl border border-pink-100 dark:border-fuchsia-900">
              <h3 className="font-serif font-semibold text-base md:text-lg text-[var(--text-primary)] dark:text-fuchsia-200 mb-2">A Sanctuary for Senses</h3>
              <p className="text-[var(--foreground-secondary)] dark:text-pink-100/80 text-sm md:text-base">
                Private suites, tranquil lighting, and gentle music set the mood for soulful relaxation.
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 dark:bg-fuchsia-950/90 p-8 shadow-xl border border-pink-100 dark:border-fuchsia-900">
              <h3 className="font-serif font-semibold text-base md:text-lg text-[var(--text-primary)] dark:text-fuchsia-200 mb-2">Committed to Purity</h3>
              <p className="text-[var(--foreground-secondary)] dark:text-pink-100/80 text-sm md:text-base">
                From pure massage oils to eco-selected products—every detail is chosen for purity, health, and environmental consciousness.
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 dark:bg-fuchsia-950/90 p-8 shadow-xl border border-pink-100 dark:border-fuchsia-900">
              <h3 className="font-serif font-semibold text-base md:text-lg text-[var(--text-primary)] dark:text-fuchsia-200 mb-2">Custom Aftercare</h3>
              <p className="text-[var(--foreground-secondary)] dark:text-pink-100/80 text-sm md:text-base">
                Every session ends with hydration, relaxation, and tips for lasting wellness in daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-gradient-to-r from-[var(--text-primary)] via-fuchsia-400 to-pink-500 dark:from-fuchsia-900 dark:via-pink-950 dark:to-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-5 text-white drop-shadow">
            Begin Your Renewal at Athena
          </h2>
          <p className="mb-7 text-base md:text-lg text-pink-100/90">
            Wellness is your birthright. Experience it in an oasis crafted for your senses and your soul.
          </p>
          <Button
            className="bg-white text-[var(--text-primary)] hover:bg-pink-100 font-bold px-8 py-3 rounded-full shadow-lg"
            size="lg"
          >
            <Link href="https://www.welns.io/product/booking/WFRCHN613855/AthenaBodyBarandSaloonPvtLtd360541?bk_src=GMAPS110">
              Book Your Spa Journey
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}