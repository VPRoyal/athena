"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Calendar from "@/components/ui/calender"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { format } from "date-fns"

const Contact = () => {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const spaServices = [
    "Swedish Full Body Massage",
    "Deep Tissue Massage", 
    "Aromatherapy Massage",
    "Balinese Massage",
    "Hot Stone Therapy",
    "Thai Traditional Massage",
    "Head, Neck & Shoulder Massage",
    "Couple Massage (Swedish)",
    "Consultation & Custom Treatment"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, Phone)")
      return
    }
  
    const appointmentData = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      service: formData.service,
      date: date?.toISOString(),
      message: formData.message.trim(),
      timestamp: new Date().toISOString(),
    }
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      })
  
      const result = await response.json()
  
      if (response.ok) {
        alert("🌸 Thank you! Your spa consultation request has been submitted successfully. We will contact you within 24 hours to confirm your appointment.")
        
        // Reset form
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
        setDate(undefined)
      } else {
        alert(`❌ ${result.error || 'Something went wrong. Please try again or call us directly at 0141-4564860'}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("❌ Network error. Please check your connection and try again, or call us directly at 0141-4564860")
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-secondary to-white dark:from-foreground dark:to-zinc-950 transition-colors">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-text-secondary dark:text-text-primary mb-4">
            Contact Athena Spa
          </h1>
          <p className="text-lg md:text-xl text-foreground-secondary dark:text-pink-100/80 max-w-2xl mx-auto">
            Ready to begin your wellness journey? Book your spa consultation or reach out with any questions about our holistic therapies.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Contact Form - Compact Design */}
            <Card className="border-0 shadow-xl bg-white/95 dark:bg-fuchsia-950/90 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="font-serif text-xl md:text-2xl text-text-secondary dark:text-text-primary">
                  Book Your Spa Experience
                </CardTitle>
                <p className="text-sm text-foreground-secondary dark:text-pink-100/70">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-foreground dark:text-pink-100/90 mb-1">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="h-10"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground dark:text-pink-100/90 mb-1">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91-9660099463"
                        className="h-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-foreground dark:text-pink-100/90 mb-1">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="h-10"
                      required
                    />
                  </div>

                  {/* Service & Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-foreground dark:text-pink-100/90 mb-1">
                        Preferred Therapy *
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select a spa therapy" />
                        </SelectTrigger>
                        <SelectContent>
                          {spaServices.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground dark:text-pink-100/90 mb-1">
                        Preferred Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent h-10"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-foreground dark:text-pink-100/90 mb-1">
                      Additional Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Any specific wellness goals, health concerns, or preferences..."
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-text-primary hover:bg-text-secondary text-white font-semibold h-11 mt-6"
                  >
                    Submit Spa Consultation Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information Column */}
            <div className="space-y-6">
              {/* Main Contact Info */}
              <Card className="border-0 shadow-xl bg-white/95 dark:bg-fuchsia-950/90 backdrop-blur">
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-xl text-text-secondary dark:text-text-primary">
                    Athena Spa & Bodybar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-pink-100 text-sm mb-1">Address</h3>
                      <p className="text-foreground-secondary dark:text-pink-100/70 text-sm leading-relaxed">
                        F-143, Azad Marg, Bagdiya Bhawan,<br />C-Scheme, Jaipur - 302001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-pink-100 text-sm mb-1">Phone</h3>
                      <p className="text-foreground-secondary dark:text-pink-100/70 text-sm">0141-4564860</p>
                      <p className="text-foreground-secondary dark:text-pink-100/70 text-sm">+91-9660099463</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-pink-100 text-sm mb-1">Email</h3>
                      <p className="text-foreground-secondary dark:text-pink-100/70 text-sm">bookings@athenabodybar.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-pink-100 text-sm mb-1">Website</h3>
                      <p className="text-foreground-secondary dark:text-pink-100/70 text-sm">AthenabodyBar.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-pink-100 text-sm mb-1">Operating Hours</h3>
                      <p className="text-foreground-secondary dark:text-pink-100/70 text-sm">Daily: 9:00 AM - 9:00 PM</p>
                      <p className="text-xs italic text-text-primary dark:text-fuchsia-200">Prior appointments recommended</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-xl bg-white/95 dark:bg-fuchsia-950/90 backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-lg text-text-secondary dark:text-text-primary">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <Button className="bg-text-secondary hover:bg-text-primary text-white h-10" onClick={() => window.open("tel:+911414564860", "_blank")}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-text-primary text-text-primary hover:bg-text-primary hover:text-white h-10"
                      onClick={() => window.open("https://wa.me/919660099463", "_blank")}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                  <div className="p-3 bg-pink-50 dark:bg-fuchsia-950/30 rounded-lg">
                    <p className="text-xs text-foreground-secondary dark:text-pink-100/80 text-center">
                      <strong>Walk-ins welcome</strong> • All services are gender-neutral and confidential
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Policies */}
              <Card className="border-0 shadow-xl bg-white/95 dark:bg-fuchsia-950/90 backdrop-blur">
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-lg text-text-secondary dark:text-text-primary">Important Policies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs text-foreground-secondary dark:text-pink-100/70">
                  <div className="flex items-start space-x-2">
                    <span className="inline-block w-1.5 h-1.5 bg-text-primary rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Please arrive 15 minutes early for consultation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="inline-block w-1.5 h-1.5 bg-text-primary rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Cancellations must be made 4+ hours in advance</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="inline-block w-1.5 h-1.5 bg-text-primary rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Health conditions should be disclosed for optimal service</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact