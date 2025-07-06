import Image from "next/image";
import Button from "../ui/button";

const Hero = () => {
  return (
    <section className="relative md:h-svh w-full">
      <div className="flex flex-col-reverse md:flex-row  w-full h-full">
        <div className="p-8 flex bg-background flex-col justify-center text-center lg:text-left flex-1">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-forward mb-6">
            Athena Body Bar and Saloon{" "}
            <span className="text-gradient text-forward">Where <span className="text-text-primary">Beauty</span>  Meets <span className="text-text-secondary">Wellness</span> </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-700 mb-8 max-w-2xl">
            Discover a luxury destination where relaxation, rejuvenation, and
            beauty come together in perfect harmony. Located in the heart of
            Jaipur, Athena offers premium spa and salon experiences crafted just
            for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-text-secondary hover:bg-foreground text-foreground hover:text-background px-8 py-3"
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 bg-transparent"
            >
              Explore Services
            </Button>
          </div>
        </div>

        <div className="w-full h-auto md:h-full md:w-auto relative -z-10 aspect-[4/3] md:aspect-[3/4]">
          <Image
            src="/images/home.png"
            alt="Athena Salon Interior"
            
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

{
  /* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left border-2 border-white">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Athena Body Bar and Saloon - <span className="text-gradient">Where Beauty Meets Wellness</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
                Discover a luxury destination where relaxation, rejuvenation, and beauty come together in perfect
                harmony. Located in the heart of Jaipur, Athena offers premium spa and salon experiences crafted just
                for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3">
                  Book Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 bg-transparent"
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] border-2 border-white">
          <Image
      src="/images/home.jpg"
      alt="Athena Salon Interior"
      fill
      className="object-cover"
      priority
    />
        </div>
          </div> */
}
