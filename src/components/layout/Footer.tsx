import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/5c20975a-b428-4aa0-9d78-93b4b9969e22.png" 
                alt="TPPC Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold text-primary">The Print Palace Consult</h3>
                <p className="text-sm text-muted-foreground">This is us making colour beautiful</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              "If you can imagine it, we can print it!" - Your trusted partner for all printing needs in Ghana and beyond.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming the print industry in sub-Saharan Africa with the highest standard of quality and service.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-smooth group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-smooth group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-smooth group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-smooth group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="https://wa.me/233244470246" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-smooth group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-smooth">Products</Link></li>
              <li><Link to="/guidelines" className="text-muted-foreground hover:text-primary transition-smooth">Get Guided</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-smooth">Get Quote</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-smooth">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+233244470246" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  +233 244 470 246
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 powered by <a href="http://thenovus.solutions/" target="_blank" rel="noopener noreferrer" className="hover:underline">thenovus.solutions.</a>
            </p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;