"use client";
import React from "react";
import Button from "../ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-text-primary to-text-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Book Your Spa Experience - Your Wellness Journey Awaits
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Ready to escape into tranquillity? Book your personalized spa
          consultation today and discover holistic wellness at Athena's serene
          sanctuary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Call & Consult</h3>
            <p className="text-white/90">+91-141-4564860 | +91-9660099463</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Visit Our Sanctuary</h3>
            <p className="text-white/90">
              F-143, Azad Marg, Bagdiya Bhawan, C-Scheme, Jaipur
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Online Booking</h3>
            <p className="text-white/90">
              AthenabodyBar.com | WhatsApp Support
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-foreground hover:text-background px-8 py-3"
            onClick={() => window.open("tel:+911414564860", "_blank")}
          >
            Call Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            onClick={() => window.open("https://wa.me/919660099463", "_blank")}
          >
            WhatsApp Booking
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
