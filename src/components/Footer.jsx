import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-4 relative">
      {/* Rainbow decorations */}
      <div className="absolute bottom-16 left-0 w-32 h-32">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-0 w-32 h-16 border-b-8 border-l-8 rounded-bl-full border-red-500"></div>
          <div className="absolute bottom-0 left-4 w-24 h-12 border-b-8 border-l-8 rounded-bl-full border-orange-400"></div>
          <div className="absolute bottom-0 left-8 w-16 h-8 border-b-8 border-l-8 rounded-bl-full border-yellow-400"></div>
          <div className="absolute bottom-0 left-12 w-8 h-4 border-b-8 border-l-8 rounded-bl-full border-green-400"></div>
        </div>
      </div>

      <div className="absolute bottom-16 right-0 w-32 h-32">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 right-0 w-32 h-16 border-b-8 border-r-8 rounded-br-full border-red-500"></div>
          <div className="absolute bottom-0 right-4 w-24 h-12 border-b-8 border-r-8 rounded-br-full border-orange-400"></div>
          <div className="absolute bottom-0 right-8 w-16 h-8 border-b-8 border-r-8 rounded-br-full border-yellow-400"></div>
          <div className="absolute bottom-0 right-12 w-8 h-4 border-b-8 border-r-8 rounded-br-full border-green-400"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4 uppercase">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Who We Are
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm">The #1 Family-Centered Ed-Tech Provider in India</p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4 uppercase">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@example.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 7654321234</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>New Assignment</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-4xl mx-auto px-4 mt-8 pt-4 border-t text-xs text-gray-500 flex flex-col md:flex-row justify-between">
        <p>Copyright © 2025 UNREAL | All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
