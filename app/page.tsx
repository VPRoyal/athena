import Image from "next/image";
import Button from "@/components/ui/button";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Description from "@/components/home/description";
import CTA from "@/components/home/cta";
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <Services />

      {/* Why Choose Athena */}
      <Description />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
