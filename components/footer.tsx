import { Instagram, Facebook, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-white py-12 lg:py-16 border-t">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logo/logo.png" alt="SMHD Interiors" className="h-12 w-auto mr-2" />
              <span className="text-2xl font-bold">
                SMHD<span className="text-[#C46B43]">INTERIOR</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-4">
              Crafting exceptional interiors that blend timeless elegance with modern functionality. Your vision, our
              expertise.
            </p>
            <div className="text-gray-600 text-sm space-y-3">
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#C46B43]" />
                Serving all over India
              </p>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-[#C46B43]" />
                <div>
                  <p className="leading-relaxed">
                    No. 32, Jb Estate, Vivekananda Nagar,<br />
                    Adhiparashakthi Nagar, Avadi,<br />
                    Chennai - 600054
                  </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=No.+32,+Jb+Estate,+Vivekananda+Nagar,+Adhiparashakthi+Nagar,+Chennai,+Avadi-600054"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-[#C46B43] text-white rounded-lg hover:bg-[#B25B33] transition-all duration-200 transform hover:scale-105"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </a>
                </div>
              </div>
              <p className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-[#C46B43]" />
                Mon - Sat: 9:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-gray-600 hover:text-[#C46B43] transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-[#C46B43] transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#living" className="text-gray-600 hover:text-[#C46B43] transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#C46B43] transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#footer" className="text-gray-600 hover:text-[#C46B43] transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-gray-800">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#C46B43]" />
                <a href="tel:+919940322694" className="hover:text-[#C46B43] transition-colors duration-200" title="Call us">
                  +91 99403 22694
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#C46B43]" />
                <a href="mailto:contact@smhdinterior.com" className="hover:text-[#C46B43] transition-colors duration-200">
                  contact@smhdinterior.com
                </a>
              </p>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3 text-gray-800">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/smhdinteriors.9940" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C46B43] hover:text-white transition-all duration-300"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/smhdinteriors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C46B43] hover:text-white transition-all duration-300"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/919940322694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C46B43] hover:text-white transition-all duration-300"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© 2025 SMHD Interiors. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-[#C46B43] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-[#C46B43] transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
