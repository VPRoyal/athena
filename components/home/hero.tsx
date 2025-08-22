import Image from "next/image";
import Button from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative md:h-svh w-full">
      <div className="flex flex-col-reverse md:flex-row w-full h-full">
        <div className="p-8 flex bg-background flex-col justify-center text-center lg:text-left flex-1">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-forward mb-6">
            Athena Spa & Bodybar{" "}
            <span className="text-gradient text-forward">Where <span className="text-text-primary">Serenity</span> Meets <span className="text-text-secondary">Wellness</span></span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-700 mb-8 max-w-2xl">
            Step into Jaipur's premier spa sanctuary, where tranquillity meets sophistication. Experience bespoke therapies, holistic healing, and personalized care designed to rejuvenate your mind, body, and soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-text-secondary hover:bg-foreground text-foreground hover:text-background px-8 py-3"
            >
              <Link href="https://www.welns.io/product/booking/WFRCHN613855/AthenaBodyBarandSaloonPvtLtd360541?bk_src=GMAPS110">
                Book Your Escape
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 bg-transparent"
            >
              <Link href="/services"> 
                Explore Therapies
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full h-auto md:h-full md:w-auto relative -z-10 aspect-[4/3] md:aspect-[3/4]">
          <Image
            src="/images/home.png"
            alt="Athena Spa Sanctuary Interior"
            fill
            className="h-full object-fit"
            priority
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;