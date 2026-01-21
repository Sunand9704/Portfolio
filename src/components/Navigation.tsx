import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#live-projects', label: 'Work' },
    // { href: '#live-projects', label: 'Live' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${isScrolled ? 'bg-background/90 shadow-lg' : 'bg-background/70'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-xs rounded-lg group-hover:bg-primary transition-colors">
            T
          </div>
          <span className="text-lg font-semibold tracking-tighter text-white group-hover:text-primary transition-colors duration-300 font-display uppercase">
            Triozen.Tech
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-white/5 border border-white/10 text-white rounded-full hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center px-5 py-3 bg-primary text-black rounded-full font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
