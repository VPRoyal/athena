import { Card, CardContent } from "../ui/card"
import { Heart, Waves, Sparkles } from "lucide-react"
import Link from "next/link"
import Button from "../ui/button"

const Services = () => {
  return (
    <section className="py-16 bg-text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-background">
              Signature Spa Therapies - Your Journey to Wellness
            </h2>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
              Our certified therapists blend ancient healing traditions with modern luxury techniques, creating transformative experiences tailored to your unique wellness needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/20 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="py-4! text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-background mb-4">Relaxation Therapies</h3>
                <p className="text-foreground/90">Swedish & Deep Tissue massages for complete relaxation and muscle tension relief.</p>
              </CardContent>
            </Card>

            <Card className="bg-background/20 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="py-4! text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-background mb-4">Holistic Healing</h3>
                <p className="text-foreground/90">Aromatherapy, Balinese, and Thai Traditional massages for energy balance and spiritual well-being.</p>
              </CardContent>
            </Card>

            <Card className="bg-background/20 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="py-4! text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Waves className="h-8 w-8 text-text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-background mb-4">Premium Treatments</h3>
                <p className="text-foreground/90">Hot Stone Therapy, Couple Massages, and targeted wellness sessions in luxury private suites.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-medium text-foreground mb-4">🌿 Tranquillity. Healing. Transformation.</p>
              <Button
                variant="outline"
                className="border-background! text-background! hover:bg-background! hover:text-foreground! bg-transparent"
              >
                <Link href="/services">
                  View All Therapies
                </Link>
              </Button>
          </div>
        </div>
      </section>
  )
}
export default Services