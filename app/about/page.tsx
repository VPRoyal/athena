import Image from "next/image"
import Button from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Users, Heart } from "lucide-react"


// Dummy Data
const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Senior Hair Stylist",
    experience: "8+ years",
    specialization: "Hair Coloring & Styling",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Anjali Gupta",
    role: "Spa Therapist",
    experience: "6+ years",
    specialization: "Body Treatments & Massage",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Meera Jain",
    role: "Beauty Expert",
    experience: "10+ years",
    specialization: "Facial Treatments & Bridal Makeup",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Kavita Singh",
    role: "Wellness Consultant",
    experience: "5+ years",
    specialization: "Holistic Wellness Programs",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const achievements = [
  {
    icon: Star,
    title: "500+ Happy Clients",
    description: "Trusted by hundreds of satisfied customers",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Government registered with trained experts",
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description: "Safe and private spaces for all",
  },
  {
    icon: Heart,
    title: "100% Satisfaction",
    description: "Guaranteed quality and privacy",
  },
]
const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-text-primary to-text-secondary ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-background mb-6">
              About Athena
            </h1>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Where Beauty Meets Wellness - Discover our story, meet our team, and learn about our commitment to
              excellence in beauty and wellness services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p className="text-lg">
                  Athena Body Bar and Saloon was born from a vision to create a sanctuary where beauty and wellness
                  converge in perfect harmony. Located in the heart of Jaipur, we have established ourselves as a
                  premier destination for luxury spa and salon experiences.
                </p>
                <p>
                  Our journey began with a simple belief: that everyone deserves to feel beautiful, confident, and
                  rejuvenated. We combine traditional wellness practices with modern beauty techniques to offer our
                  clients an unparalleled experience.
                </p>
                <p>
                  As a government-registered private limited company, we maintain the highest standards of
                  professionalism, hygiene, and client satisfaction. Our certified professionals are passionate about
                  helping you discover your best self.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/customer-1.png"
                alt="Athena Salon Interior"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gradient-to-r from-foreground to-foreground/80 text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-background/90 mb-6">
                To provide exceptional beauty and wellness services that enhance our clients' natural beauty while
                promoting overall well-being. We strive to create a luxurious, safe, and welcoming environment where
                every client feels valued and pampered.
              </p>

              <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-background/90">
                To be recognized as Jaipur's leading beauty and wellness destination, setting new standards for
                excellence in service, hygiene, and client satisfaction.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-background rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Excellence</h4>
                    <p className="text-background/90">Delivering the highest quality services with attention to detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-background rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Safety & Hygiene</h4>
                    <p className="text-background/90">Maintaining pristine cleanliness and safety standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-background rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Client-Centric</h4>
                    <p className="text-background/90">Putting our clients' needs and satisfaction first</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-background rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Innovation</h4>
                    <p className="text-background/90">Embracing the latest techniques and technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground  mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Our certified professionals bring years of experience and passion to deliver exceptional beauty and
              wellness services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-text-secondary/80">
                <CardContent className="p-6!">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-background font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-foreground/80 font-semibold mb-2">{member.experience}</p>
                  <p className="text-sm text-foreground-secondary/80 ">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Athena?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-background">
                  <CardContent className="py-6! px-4!">
                    <div className="w-16 h-16 bg-text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-background" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-text-primary mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-foreground-secondary/50">{achievement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-secondary mb-6">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-text-secondary shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/70 mb-6 italic">
                  "One of the best spa experiences I've ever had. Athena offers comfort, care, and calmness. A true
                  oasis in Jaipur!"
                </p>
                <div className="text-right">
                  <p className="font-semibold text-foreground">— Ritika Mehra</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-text-secondary shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/70 mb-6 italic">
                  "Their bridal services were phenomenal. The makeup stayed perfect throughout my big day!"
                </p>
                <div className="text-right">
                  <p className="font-semibold text-foreground">— Sneha Rathore</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-text-primary to-background/30 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Experience the Athena Difference</h2>
          <p className="text-xl mb-8 text-foreground/70">
            Join hundreds of satisfied clients who have made Athena their trusted partner in beauty and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/80 px-8 py-3">
              Book Your Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background! text-background! hover:bg-foreground px-8 py-3 bg-transparent"
            >
              Visit Our Salon
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About