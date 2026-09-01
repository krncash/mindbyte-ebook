import React, { useState } from 'react';
import { Menu, X, BookOpen, MessageCircle } from 'lucide-react';
import { CONFIG, openWhatsAppOrder } from '../config';

interface NavbarProps {
  onOpenWhatsAppSimulator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppSimulator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: "What's Inside", href: '#chapters' },
    { label: 'Preview', href: '#preview' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 bg-[#0055FF] rounded-lg flex items-center justify-center shadow-sm shadow-blue-500/20 group-hover:bg-blue-600 transition-colors">
              <div className="w-3.5 h-3.5 bg-white rounded-xs"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-[#0A0A0A]">
              MindByte
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#0A0A0A] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-1 px-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-sm font-bold text-slate-900">{CONFIG.price}</span>
            <button
              id="nav-buy-button"
              onClick={() => openWhatsAppOrder()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium text-white bg-[#0A0A0A] hover:bg-slate-800 active:bg-black rounded-full shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Ebook</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:text-[#0A0A0A] hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-base font-bold text-slate-900 pl-3">{CONFIG.price}</span>
            <button
              id="mobile-menu-buy-button"
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppOrder();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-slate-800 rounded-full shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get the Ebook</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
