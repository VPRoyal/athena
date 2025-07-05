import Image from 'next/image'
import Button from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Palette, Sparkles, Waves, Heart, Flower } from "lucide-react"


const services = [
  {
    category: "Hair Services",
    icon: Scissors,
    services: [
      {
        name: "Haircuts & Styling",
        price: "₹800 - ₹2000",
        description: "Professional cuts and styling for all hair types",
      },
      { name: "Hair Coloring", price: "₹1500 - ₹4000", description: "Vibrant colors and dimensional highlights" },
      { name: "Hair Treatments", price: "₹1200 - ₹3000", description: "Deep conditioning and repair treatments" },
    ],
  },
  {
    category: "Facial Treatments",
    icon: Sparkles,
    services: [
      { name: "Classic Facial", price: "₹1000 - ₹1800", description: "Deep cleansing and rejuvenating facial" },
      { name: "Anti-Aging Facial", price: "₹2000 - ₹3500", description: "Advanced anti-aging treatment" },
      { name: "Royal Gold Facial", price: "₹3000 - ₹5000", description: "Luxury gold-infused facial treatment" },
    ],
  },
  {
    category: "Body Treatments",
    icon: Heart,
    services: [
      { name: "Thai Body Massage", price: "₹2000 - ₹3500", description: "Traditional Thai massage therapy" },
      { name: "Deep Tissue Therapy", price: "₹2500 - ₹4000", description: "Therapeutic deep tissue massage" },
      { name: "Aroma Therapy", price: "₹2200 - ₹3800", description: "Relaxing aromatherapy session" },
    ],
  },
  {
    category: "Spa Treatments",
    icon: Waves,
    services: [
      { name: "Hot Stone Massage", price: "₹2800 - ₹4500", description: "Soothing hot stone therapy" },
      { name: "Red Wine Body Polish", price: "₹3000 - ₹4800", description: "Luxurious body exfoliation" },
      { name: "Cupping Therapy", price: "₹1800 - ₹3000", description: "Traditional cupping treatment" },
    ],
  },
  {
    category: "Bridal Services",
    icon: Flower,
    services: [
      { name: "Bridal Makeup", price: "₹8000 - ₹15000", description: "Complete bridal makeup package" },
      { name: "Pre-Bridal Treatments", price: "₹5000 - ₹12000", description: "Complete pre-wedding beauty package" },
      { name: "Mehendi & Styling", price: "₹2000 - ₹5000", description: "Traditional mehendi and styling" },
    ],
  },
  {
    category: "Wellness Programs",
    icon: Palette,
    services: [
      { name: "Detox Package", price: "₹4000 - ₹8000", description: "Complete body detoxification program" },
      { name: "Skin Tightening", price: "₹3500 - ₹6000", description: "Advanced skin tightening treatments" },
      { name: "Body Scrubs & Wraps", price: "₹2500 - ₹4500", description: "Exfoliating body treatments" },
    ],
  },
]
const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-secondary mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-foreground  max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness services, each designed to rejuvenate, refresh,
              and enhance your natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-text-primary ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-background ">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-text-secondary" />
                      </div>
                      <CardTitle className="font-serif text-2xl text-text-secondary">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="border-l-4 border-primary-200 pl-4 py-2 ">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg text-foregorund">{service.name}</h3>
                            <span className="text-text-secondary font-semibold text-sm">{service.price}</span>
                          </div>
                          <p className="text-foreground-secondary/10 text-sm">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Spa Treatments Highlight */}
      <section className="py-16 bg-gradient-to-r from-background to-backgorund-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-text-secondary">
                Spa & Body Treatments - Relax. Refresh. Rejuvenate.
              </h2>
              <p className="text-xl mb-8">
                At Athena Spa, we believe wellness is not a luxury – it's a necessity. Indulge in treatments that soothe
                the body and calm the mind.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-xl mb-4">Our Signature Treatments</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Thai Body Massage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Deep Tissue Therapy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Aroma Therapy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Hot Stone Massage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Red Wine Body Polish</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Cupping Therapy</span>
                  </li>
                </ul>

                <p className="text-text-secondary mt-4">🌿 Holistic healing with authentic techniques and serene ambiance.</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/spa-bed.jpg"
                alt="Spa Treatment Room"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-text-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-background-secondary/80  mb-8">
            Book your appointment today and discover why Athena is Jaipur's premier destination for beauty and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background hover:bg-text-secondary text-foreground px-8 py-3">
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 bg-transparent"
            >
              Call Now: +91-XXXXXXXXXX
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services