
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Brain,
  ArrowRight
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-xl border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-brand-primary/20">
                <Brain className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Codable<span className="text-brand-primary">HR</span></span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              <Link to="/" className={`text-sm font-bold uppercase tracking-widest transition-colors ${pathname === '/' ? 'text-brand-primary' : 'text-gray-300 hover:text-white'}`}>Home</Link>
              <Link to="/services" className={`text-sm font-bold uppercase tracking-widest transition-colors ${pathname === '/services' ? 'text-brand-primary' : 'text-gray-300 hover:text-white'}`}>AI Services</Link>
              <Link to="/book" className="bg-brand-primary hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-primary/20 flex items-center space-x-2">
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 text-white"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-brand-dark z-[60] transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full p-8 pt-24 space-y-8">
          <Link to="/" className="text-4xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" className="text-4xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>AI Services</Link>
          <div className="pt-8 border-t border-white/10">
            <Link 
              to="/book" 
              className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-xl shadow-xl flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Strategy Call
            </Link>
          </div>
          <div className="mt-auto space-y-4 text-gray-400">
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-brand-primary" />
              <span>info@CodableHR.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-brand-primary" />
              <span>(647) 542-6760</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                  <Brain className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold">Codable<span className="text-brand-primary">HR</span></span>
              </Link>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Niche AI-powered HR tools delivering exceptional results supervised by human experts. 
                The future of HR is here, and it's programmable.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-brand-primary">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">AI Services</Link></li>
                <li><Link to="/book" className="hover:text-white transition-colors">Book a Call</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-brand-primary">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>#305 - 111 Lawton Blvd, Toronto, ON</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>(647) 542-6760</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-brand-primary w-5 h-5 shrink-0" />
                  <span>info@CodableHR.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-brand-primary">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Stay updated with the latest in AI HR.</p>
              <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-brand-primary transition-colors"
                />
                <button type="submit" className="bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} CodableHR. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
