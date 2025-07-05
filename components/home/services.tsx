import { Card, CardContent } from "../ui/card"
import { Scissors, Palette, Sparkles} from "lucide-react"
import Link from "next/link"
import Button from "../ui/button"

const Services = () => {
  return (
    <section className="py-16 bg-text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-background">
              Salon Services - Your Style, Our Passion
            </h2>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
              Our expert stylists and beauticians bring elegance and modern fashion to life through personalized care
              and professional techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/20 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="py-4! text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scissors className="h-8 w-8 text-text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-background mb-4">Haircuts & Styling</h3>
                <p className="text-foreground/90">Professional cuts and styling for all hair types and preferences.</p>
              </CardContent>
            </Card>

            <Card className="bg-background/20 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="py-4! text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-background mb-4">Hair Coloring & Highlights</h3>
                <p className="text-foreground/90">Vibrant colors and dimensional highlights to transform your look.</p>
              </CardContent>
            </Card>

            <Card className="bg-background/20 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="py-4! text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-background mb-4">Facials & Makeup</h3>
                <p className="text-foreground/90">Expert facials, cleanups, and bridal & party makeup services.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-medium text-foreground mb-4">✨ Precision. Elegance. Excellence.</p>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-background! text-background! hover:bg-background! hover:text-foreground! bg-transparent"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
  )
}
export default Services
