import Image from "next/image";
import { Sparkles, Heart, Waves, Users } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";

const SPA_SERVICES = [
  {
    name: "Swedish Full Body Massage",
    duration: "60 min",
    price: "₹2000",
    desc: "Timeless gliding strokes for deep relaxation, stress reduction, and improved circulation.",
    badge: "Relaxation",
    icon: <Heart className="w-7 h-7 text-pink-400/80" />,
  },
  {
    name: "Deep Tissue Massage",
    duration: "60 min",
    price: "₹2200",
    desc: "Focused pressure for chronic pain, knots, and serious muscle relief.",
    badge: "Therapeutic",
    icon: <Waves className="w-7 h-7 text-rose-400/80" />,
  },
  {
    name: "Aromatherapy Massage",
    duration: "60 min",
    price: "₹2500",
    desc: "Healing essential oils tailored for emotional balance and spiritual well-being.",
    badge: "Aromatherapy",
    icon: <Sparkles className="w-7 h-7 text-fuchsia-500/80" />,
  },
  {
    name: "Balinese Massage",
    duration: "90 min",
    price: "₹3000",
    desc: "Traditional Indonesian acupressure, stretches, and aromatherapy for energy flow and body-mind harmony.",
    badge: "Energy Balance",
    icon: <Waves className="w-7 h-7 text-yellow-400/80" />,
  },
  {
    name: "Hot Stone Therapy",
    duration: "90 min",
    price: "₹3500",
    desc: "Heated basalt stones melt deep muscle tension—perfect for stress dissolution.",
    badge: "Heat Therapy",
    icon: <Heart className="w-7 h-7 text-orange-400/80" />,
  },
  {
    name: "Thai Traditional Massage",
    duration: "60 min",
    price: "₹2200",
    desc: "Stretching, acupressure, and rhythmic rocking on a mat for flexibility and holistic energy release.",
    badge: "Traditional",
    icon: <Waves className="w-7 h-7 text-indigo-400/70" />,
  },
  {
    name: "Head, Neck & Shoulder Massage",
    duration: "30 min",
    price: "₹1000",
    desc: "Quick session to relieve digital tension, boost focus, and combat fatigue.",
    badge: "Targeted Relief",
    icon: <Heart className="w-7 h-7 text-sky-400/80" />,
  },
  {
    name: "Couple Massage (Swedish)",
    duration: "60 min",
    price: "₹3800",
    desc: "Share the experience side-by-side in a luxury suite—pure, memorable relaxation for two.",
    badge: "For Two",
    icon: <Users className="w-7 h-7 text-pink-400/80" />,
  },
];

const MEMBERSHIPS = [
  {
    name: "Silver Bliss",
    months: 1,
    price: "₹3999",
    featured: false,
    perks: [
      "2 Swedish Massages",
      "10% off all other services",
    ],
  },
  {
    name: "Golden Glow",
    months: 3,
    price: "₹9999",
    featured: false,
    perks: [
      "8 Massages (any type)",
      "15% off add-ons",
    ],
  },
  {
    name: "Platinum Peace",
    months: 6,
    price: "₹18499",
    featured: true,
    perks: [
      "18 Spa Services",
      "20% off all bookings",
      "Priority bookings",
    ],
  },
  {
    name: "Royal Athena",
    months: 12,
    price: "₹33250",
    featured: true,
    perks: [
      "35 Spa Services",
      "3 Free Premium Plus Sessions",
      "25% off all extra services",
      "VIP Priority & gifts"
    ],
  },
];

const valueProps = [
  {
    title: "Certified Therapists",
    desc: "Highly trained staff with deep expertise in massage and wellness traditions. Continuous training ensures truly transformative care.",
    icon: <Heart className="w-6 h-6 text-fuchsia-400" />,
  },
  {
    title: "Luxurious Environment",
    desc: "Private suites, soothing lighting, relaxing music, and aromatherapy: every detail evokes tranquility.",
    icon: <Waves className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "Pure, Natural Products",
    desc: "Only premium, botanical, and skin-loving oils. No harsh chemicals, ever.",
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Personalized Experience",
    desc: "Each session starts with a consult for a tailored, goal-oriented approach—pressure, focus, and oils matched to you.",
    icon: <Heart className="w-6 h-6 text-lime-400" />,
  },
  {
    title: "Aftercare Rituals",
    desc: "Relax, hydrate, and receive personalized therapist advice for best post-session wellness.",
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
  },
];
export default function Services() {
  return (
    <main className="min-h-screen font-sans transition-colors duration-300
      bg-gradient-to-br 
        from-background via-background-secondary to-white
      dark:from-[var(--foreground)] dark:via-foreground-secondary dark:to-zinc-950 text-[var(--foreground)] dark:text-background">

      {/* ===== HERO ===== */}
      <section className="pt-16 md:pt-28 pb-10 px-4 flex flex-col md:flex-row items-center justify-center gap-10 relative">
        {/* Hero content column */}
        <div className="w-full md:w-2/3 z-10 text-center md:text-left">
          <h1 className="font-serif text-center text-4xl md:text-6xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-fuchsia-400 to-rose-400 dark:from-pink-300 dark:to-fuchsia-300 drop-shadow">
            Our Premium Services
          </h1>
          <p className="text-lg text-center md:text-xl mb-7  mx-auto md:mx-0 text-foreground-secondary dark:text-pink-100/90">
            Premium therapies, a tranquil sanctuary, and personalized care—experience holistic wellness reimagined at Athena.
          </p>
        </div>
      </section>

      {/* ===== WHY ATHENA ===== */}
      <section className="py-10 md:py-16 
        bg-background dark:bg-foreground-secondary transition-colors">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map(({ title, desc, icon }, i) => (
            <div
              key={i}
              className="shadow-lg rounded-2xl p-6 flex flex-col gap-3 border border-pink-100 
                bg-white/90 dark:bg-gradient-to-br dark:from-fuchsia-950/90 dark:to-black/60 dark:shadow-fuchsia-900/40 dark:border-pink-900"
            >
              <div className="flex items-center gap-3">
                <span>{icon}</span>
                <span className="font-serif font-semibold text-lg text-text-secondary dark:text-text-primary">{title}</span>
              </div>
              <div className="text-foreground-secondary dark:text-pink-100/80 text-base">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SPA SERVICES CARDS ===== */}
      <section className="py-14 md:py-20 
        bg-gradient-to-br from-pink-50 via-fuchsia-50 to-white 
        dark:from-fuchsia-950/90 dark:via-zinc-900 dark:to-black transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-11 text-text-primary dark:text-text-secondary">
            Signature Spa Treatments
          </h2>
          <div className="grid gap-9 md:grid-cols-2 xl:grid-cols-3">
            {SPA_SERVICES.map((svc, i) => (
              <div
                key={svc.name}
                className="
                  flex flex-col min-h-[240px]
                  bg-gradient-to-tr from-white via-fuchsia-50 to-pink-50
                  dark:from-zinc-900 dark:via-fuchsia-950/60 dark:to-black
                  rounded-3xl shadow-2xl p-7 pt-7 group border border-pink-100 dark:border-fuchsia-900
                  transition hover:scale-[1.025]
                "
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-xl bg-pink-100/60 dark:bg-fuchsia-800/70 shadow p-2">{svc.icon}</div>
                  <h3 className="font-serif font-semibold text-lg text-text-primary dark:text-text-secondary">{svc.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs font-medium bg-pink-50 dark:bg-fuchsia-900 text-pink-600 dark:text-fuchsia-100 px-3 py-1 rounded-full shadow">{svc.badge}</span>
                  <span className="text-xs rounded-lg bg-pink-100 dark:bg-fuchsia-950 text-pink-600 dark:text-pink-100 font-semibold px-2 py-1">{svc.duration}</span>
                  <span className="text-xs rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-600 dark:text-fuchsia-100 font-bold px-2 py-1">{svc.price}</span>
                </div>
                <p className="text-foreground-secondary dark:text-pink-100/80 text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEMBERSHIP PLANS ===== */}
      <section className="pt-12 pb-8 px-4
        bg-gradient-to-br from-fuchsia-50 via-pink-50 to-white 
        dark:from-zinc-900 dark:via-fuchsia-950/50 dark:to-black transition-colors">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8 text-text-secondary dark:text-text-primary">
            Athena Memberships
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {MEMBERSHIPS.map((plan, i) => (
              <div
                key={plan.name}
                className={`
                  relative rounded-3xl
                  bg-gradient-to-tr from-white via-fuchsia-50 to-pink-50
                  dark:from-zinc-900 dark:via-fuchsia-950/40 dark:to-black
                  border-2
                  ${plan.featured
                    ? "border-text-secondary shadow-2xl ring-2 ring-pink-100 dark:ring-fuchsia-800 bg-pink-50 dark:bg-fuchsia-900/80"
                    : "border-fuchsia-100 dark:border-fuchsia-950"}
                  p-7 flex flex-col transition`}
              >
                {plan.featured && (
                  <div className="absolute right-6 -top-5 text-xs py-1 px-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-300 text-white rounded-full shadow font-bold font-sans uppercase tracking-wider">
                    Highlighted
                  </div>
                )}
                <h3 className="font-serif text-xl mb-1 text-text-secondary dark:text-text-primary">{plan.name}</h3>
                <div className="text-lg font-semibold text-fuchsia-600 dark:text-pink-200 mb-1">{plan.months} Month{plan.months > 1 && "s"}</div>
                <div className="font-bold text-2xl text-[var(--foreground)] dark:text-white mb-3">{plan.price}</div>
                <ul className="space-y-2 mb-4">
                  {plan.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground-secondary dark:text-pink-100/80">
                      <span className="inline-block w-2 h-2 bg-text-primary rounded-full"></span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="bg-text-secondary hover:bg-text-primary text-background dark:text-background font-bold rounded-lg shadow transition"
                >
                  Get Membership
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-foreground-secondary dark:text-pink-100/60 mt-8">
            *Memberships are transferable, GST applies; see terms in center.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA & FOOTER ===== */}
      <section className="pt-14 md:pt-20 pb-10 bg-gradient-to-tr from-pink-100 via-fuchsia-50 to-white dark:from-fuchsia-950/80 dark:to-black transition-colors">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary dark:text-text-secondary font-bold mb-6">
            Begin Your Wellness Journey
          </h2>
          <p className="text-lg text-foreground-secondary dark:text-pink-100/80 mb-8">
            Book your personalized spa experience or secure a special membership—step into true luxury and holistic care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-text-primary hover:bg-text-secondary text-background dark:bg-text-primary dark:hover:bg-text-secondary dark:text-background font-bold px-8"
              >
              <Link href="/contact">
                Book Appointment
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-text-primary text-text-primary dark:border-text-secondary dark:text-text-secondary font-bold px-8"
            >
              <Link href="tel:+911414564860">
                Call Now: +91-141-4564860
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}