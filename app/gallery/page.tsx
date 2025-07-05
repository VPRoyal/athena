import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    src: "/images/gallary-1.png",
    alt: "Luxury Spa Treatment Room",
    category: "Spa",
  },
  {
    src: "/images/gallary-2.png",
    alt: "Hair Styling Session",
    category: "Hair",
  },
  {
    src: "/images/gallary-3.jpg",
    alt: "Facial Treatment",
    category: "Facial",
  },
  {
    src: "/images/gallary-4.jpg",
    alt: "Salon Interior",
    category: "Interior",
  },
  {
    src: "/images/gallary-5.jpg",
    alt: "Bridal Makeup",
    category: "Bridal",
  },
  {
    src: "/images/gallary-6.png",
    alt: "Massage Therapy",
    category: "Massage",
  },
//   {
//     src: "/placeholder.svg?height=400&width=300",
//     alt: "Happy Client",
//     category: "Client",
//   },
//   {
//     src: "/placeholder.svg?height=300&width=400",
//     alt: "Product Display",
//     category: "Products",
//   },
]

 const Gallery=()=> {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-text-primary to-text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-background mb-6">Gallery</h1>
            <p className="text-xl text-background-secondary/80 max-w-3xl mx-auto">
              View our serene ambiance, service excellence, and satisfied clients through our image collection.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl shadow-foreground/50 hover:shadow-foreground/20 transition-all duration-300"
              >
                <CardContent className=" bg-foreground-secondary/30 p-3!">
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 bg-background/20"
                    />
                    <div className="absolute inset-0 bg-green/0 group-hover:bg-green/20 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                        <p className="text-sm font-medium text-foreground">{image.alt}</p>
                        <p className="text-xs text-foreground-primary">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-16 bg-gradient-to-r from-text-secondary to-text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-background">Experience the Athena Difference</h2>
            <p className="text-xl max-w-3xl mx-auto text-background/80">
              Every corner of our salon reflects our commitment to luxury, comfort, and excellence. See why our clients
              choose Athena for their beauty and wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/customer-2.jpg"
                alt="Athena Gallery Collage"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-background/20 text-background rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-background">Luxury Interiors</h3>
                  <p className="text-background/80">Elegant and serene spaces designed for your comfort and relaxation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-background/20 text-background rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-background">Expert Professionals</h3>
                  <p className="text-background/80">Skilled beauticians and therapists dedicated to your beauty goals.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-background/20 text-background rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-background">Happy Clients</h3>
                  <p className="text-background/80">
                    Satisfied customers who trust us with their beauty and wellness needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery;