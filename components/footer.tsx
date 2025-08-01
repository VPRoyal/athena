import Link from "next/link";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Brand */}
          <div className="space-y-4 grow-2 md:grow-0 shrink">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-serif font-bold text-xl text-text-secondary">
                Athena
              </span>
            </div>
            <p className="text-sm">
              Where Serenity Meets Wellness. Experience premium spa therapies and holistic healing in Jaipur's most tranquil sanctuary.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-fb hover:text-fb/80"
              >
                <Icon icon="logos:facebook" className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-insta hover:text-insta/80"
              >
                <Icon icon="skill-icons:instagram" className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-twitter hover:text-twitter/80"
              >
                <Icon icon="logos:twitter" className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Spa Therapies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About Athena
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Memberships
                </Link>
              </li>
            </ul>
          </div>

          {/* Spa Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-text-secondary">
              Spa Therapies
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Swedish & Deep Tissue Massage</span>
              </li>
              <li>
                <span className="text-gray-400">Aromatherapy & Balinese</span>
              </li>
              <li>
                <span className="text-gray-400">Hot Stone Therapy</span>
              </li>
              <li>
                <span className="text-gray-400">Thai Traditional Massage</span>
              </li>
              <li>
                <span className="text-gray-400">Couple Spa Experiences</span>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-text-secondary">
              Contact Info
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  F-143, Azad Marg, Bagdiya Bhawan, C-Scheme, Jaipur
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">0141-4564860 | +91-9660099463</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">bookings@athenabodybar.com</span>
              </div>
            </div>

            {/* <div className="space-y-2">
              <h4 className="font-medium text-text-secondary">Wellness Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="border-foreground text-foreground"
                />
                <Button className="bg-foreground text-background hover:bg-text-secondary">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Athena Body Bar & Spa Pvt. Ltd. All rights reserved. | Open Daily: 9 AM - 9 PM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;