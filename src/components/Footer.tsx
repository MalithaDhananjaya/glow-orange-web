
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">TechSolutions</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for innovative IT solutions. We help businesses grow through technology.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 hover:bg-primary rounded-full p-2 cursor-pointer transition-colors">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 hover:bg-primary rounded-full p-2 cursor-pointer transition-colors">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 hover:bg-primary rounded-full p-2 cursor-pointer transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 hover:bg-primary rounded-full p-2 cursor-pointer transition-colors">
                <Instagram className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-gray-300">
              <div>Web Development</div>
              <div>Mobile Apps</div>
              <div>Cloud Solutions</div>
              <div>Cybersecurity</div>
              <div>Data Analytics</div>
              <div>IT Consulting</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">info@techsolutions.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-gray-300">
                  123 Tech Street<br />
                  Silicon Valley, CA 94000
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 TechSolutions. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
