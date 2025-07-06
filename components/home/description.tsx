import React from 'react'
import { Shield, Star, Users } from "lucide-react"
import Image from 'next/image'

const Description = () => {
  return (
    <section className=" h-svh relative bg-foreground-secondary/10 md:bg-background">
          <div className="flex w-full h-full gap-x-10 ">
            <div className="w-full h-auto absolute md:h-full md:w-auto md:relative -z-10 md:z-0 aspect-[3/4]">
              <Image
                src="/images/about-left.png"
                alt="Athena Professional Team"
                // width={600}
                // height={400}
                fill
                priority
                className="h-full object-fit"
              />
            </div>

            <div className='py-20 px-5 md:py-10'>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Choose Athena?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Certified Excellence</h3>
                    <p className="text-foreground/80">
                      Govt. Registered Private Limited Company with certified & trained professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Safety & Privacy</h3>
                    <p className="text-foreground/80">
                      Hygienic, premium spa infrastructure with safe & private spaces for families and women.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Client Satisfaction</h3>
                    <p className="text-foreground/80">
                      Affordable packages & loyalty memberships with 100% client privacy and satisfaction guaranteed.
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