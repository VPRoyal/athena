import React from 'react'
import { Shield, Star, Users } from "lucide-react"
import Image from 'next/image'

const Description = () => {
  return (
    <section className="md:h-svh w-full relative bg-background">
          <div className="flex flex-col md:flex-row w-full h-full gap-x-10">
            <div className="w-full h-auto md:h-full md:w-auto relative aspect-[4/3] md:aspect-[3/4]">
              <Image
                src="/images/about-left.png"
                alt="Athena Spa Professional Therapists"
                fill
                priority
                className="h-full object-fit"
              />
            </div>

            <div className='py-10 px-5'>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Choose Athena Spa?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Certified Wellness Excellence</h3>
                    <p className="text-foreground/80">
                      Certified therapists with extensive expertise in massage traditions and holistic wellness, ensuring transformative care every session.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Pure & Premium Experience</h3>
                    <p className="text-foreground/80">
                      Natural, botanical products and private suites with soothing ambiance—every detail curated for your comfort and peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Personalized Wellness Journey</h3>
                    <p className="text-foreground/80">
                      Every session begins with consultation and ends with personalized aftercare. Exclusive memberships and thoughtful service guarantee complete satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default Description