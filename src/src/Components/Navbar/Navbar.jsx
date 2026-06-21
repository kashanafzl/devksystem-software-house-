import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, ChevronDown, Phone, Mail, MapPin, Clock,
  Search, ArrowRight, Star, Sparkles, Zap, Shield,
  Github, Linkedin, Twitter, Instagram, Youtube,
  Award, CheckCircle, Globe, Users
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const ctaRef = useRef(null);
  const topBarRef = useRef(null);
  const progressRef = useRef(null);

  const navLinks = [
    { 
      name: 'Home', 
      href: '#home',
      hasDropdown: false,
      icon: <Globe className="w-4 h-4" />
    },
    { 
      name: 'About', 
      href: '#about',
      hasDropdown: true,
      icon: <Users className="w-4 h-4" />,
      dropdownItems: [
        { name: 'Our Story', href: '#story', description: 'Learn about our journey & mission', icon: <Star className="w-4 h-4" /> },
        { name: 'Our Team', href: '#team', description: 'Meet our expert professionals', icon: <Users className="w-4 h-4" /> },
        { name: 'Careers', href: '#careers', description: 'Join our growing team', icon: <Award className="w-4 h-4" /> },
      ]
    },
    { 
      name: 'Services', 
      href: '#services',
      hasDropdown: true,
      icon: <Zap className="w-4 h-4" />,
      dropdownItems: [
        { name: 'Web Development', href: '#web', description: 'Custom websites & web apps', icon: <Globe className="w-4 h-4" /> },
        { name: 'AI & Machine Learning', href: '#ai', description: 'Intelligent automation solutions', icon: <Sparkles className="w-4 h-4" /> },
        { name: 'UI/UX Design', href: '#design', description: 'Beautiful user experiences', icon: <Star className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '#security', description: 'Protect your digital assets', icon: <Shield className="w-4 h-4" /> },
      ]
    },
    { 
      name: 'Portfolio', 
      href: '#portfolio',
      hasDropdown: false,
      icon: <Award className="w-4 h-4" />
    },
    { 
      name: 'Contact', 
      href: '#contact',
      hasDropdown: false,
      icon: <Phone className="w-4 h-4" />
    },
  ];

  // Scroll Progress & Effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / windowHeight) * 100;
      
      setIsScrolled(scrollY > 50);
      setScrollProgress(progress);

      // Active section detection
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline();

    // Top bar
    tl.fromTo(topBarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Navbar
    tl.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      "-=0.3"
    );

    // Logo
    tl.fromTo(logoRef.current,
      { scale: 0, rotation: -360, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );

    // Links
    tl.fromTo(linksRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // CTA
    tl.fromTo(ctaRef.current,
      { scale: 0, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );

    // Continuous logo float
    gsap.to(logoRef.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 2
    });
  }, []);

  // Dropdown Animation
  useEffect(() => {
    if (activeDropdown) {
      const dropdown = document.querySelector(`[data-dropdown="${activeDropdown}"]`);
      if (dropdown) {
        gsap.fromTo(dropdown,
          { opacity: 0, y: -20, scale: 0.95, rotateX: -10 },
          { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.4, ease: "power2.out" }
        );
      }
    }
  }, [activeDropdown]);

  // Mobile Menu Animation
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-menu-container',
        { opacity: 0, height: 0 },
        { opacity: 1, height: 'auto', duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo('.mobile-menu-item',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-white/5">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 transition-all duration-300 shadow-lg shadow-purple-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>


      {/* Main Navbar */}
      <nav
        ref={navRef}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 border-b border-white/10' 
            : 'bg-black border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo Section */}
            <div ref={logoRef} className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-3 group cursor-pointer">
                {/* Logo Box */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
                  <div className="relative w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-purple-500/30 group-hover:shadow-purple-500/50">
                    <span className="text-lg lg:text-xl font-black text-white">D</span>
                  </div>
                  <div className="absolute -inset-[3px] rounded-xl border-2 border-purple-500/30 animate-ping opacity-0 group-hover:opacity-100" />
                </div>
                
                {/* Logo Text */}
                <div className="hidden sm:block">
                  <h1 className="text-lg lg:text-xl font-black tracking-tight leading-none">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                      DEVK
                    </span>
                  </h1>
                  <div className="flex items-center gap-2">
                    <p className="text-[9px] lg:text-[10px] text-gray-500 tracking-[0.3em] font-medium uppercase">
                      Systems
                    </p>
                    <span className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
                    <p className="text-[9px] lg:text-[10px] text-gray-600 tracking-wide font-light italic">
                      Software House
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-0">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    ref={el => linksRef.current[index] = el}
                    onClick={(e) => {
                      if (link.hasDropdown) e.preventDefault();
                      setActiveLink(link.name);
                    }}
                    className={`relative flex items-center gap-2 px-4 py-2 text-[13px] font-medium transition-all group ${
                      activeLink === link.name
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {/* Icon */}
                    <span className={`transition-colors ${
                      activeLink === link.name ? 'text-purple-400' : 'text-gray-500 group-hover:text-purple-400'
                    }`}>
                      {link.icon}
                    </span>

                    {/* Text */}
                    <span className="relative">
                      {link.name}
                      {/* Active/Hover Underline */}
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${
                        activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </span>

                    {/* Dropdown Arrow */}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-all duration-300 ${
                        activeDropdown === link.name ? 'rotate-180 text-purple-400' : 'text-gray-500 group-hover:text-purple-400'
                      }`} />
                    )}

                    {/* Active Background Glow */}
                    {activeLink === link.name && (
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg" />
                    )}
                  </a>

                  {/* Mega Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <ul
                      data-dropdown={link.name}
                      className="absolute top-full left-0 mt-2 w-72 bg-black/98 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
                    >
                      {/* Dropdown Header */}
                      <li className="px-5 py-3 bg-gradient-to-r from-purple-900/50 via-black to-pink-900/50 border-b border-white/10">
                        <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                          {link.name}
                        </span>
                      </li>

                      {/* Dropdown Items */}
                      {link.dropdownItems.map((item, idx) => (
                        <li key={idx} className="group/item">
                          <a
                            href={item.href}
                            className="flex items-start gap-3 px-5 py-3 hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                          >
                            <span className="p-2 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg text-purple-400 group-hover/item:scale-110 transition-transform mt-0.5">
                              {item.icon}
                            </span>
                            <div className="flex-1">
                              <div className="text-sm font-medium group-hover/item:text-white transition-colors flex items-center gap-2">
                                {item.name}
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-all translate-x-0 group-hover/item:translate-x-1 text-purple-400" />
                              </div>
                              <div className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                                {item.description}
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}

                      {/* Dropdown Footer */}
                      <li className="px-5 py-3 bg-white/[0.02] border-t border-white/10">
                        <a
                          href={link.href}
                          className="flex items-center justify-between text-[11px] text-purple-400 hover:text-purple-300 transition-colors group"
                        >
                          <span>View All {link.name}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden lg:flex w-9 h-9 lg:w-10 lg:h-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </button>

              {/* CTA Button */}
              <div ref={ctaRef} className="hidden lg:block">
                <a
                  href="#contact"
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-semibold text-[13px] lg:text-sm group hover:shadow-2xl hover:shadow-purple-500/30 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                >
                  {/* Star Badge */}
                  <span className="absolute -top-1 -left-1 bg-yellow-400 rounded-full p-0.5 animate-bounce">
                    <Star className="w-3 h-3 text-black fill-black" />
                  </span>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-0 group-hover:opacity-50" />
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all active:scale-95"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-[18px]">
                  <span className={`absolute w-full h-[2px] bg-white transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 top-[8px]' : 'top-0'
                  }`} />
                  <span className={`absolute w-full h-[2px] bg-white top-[8px] transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`} />
                  <span className={`absolute w-full h-[2px] bg-white transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 top-[8px]' : 'top-4'
                  }`} />
                </div>
              </button>
            </div>
          </div>

          {/* Search Overlay */}
          {searchOpen && (
            <div className="hidden lg:block absolute top-full left-0 right-0 bg-black/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl animate-slideDown">
              <div className="max-w-3xl mx-auto px-6 py-5">
                <div className="flex items-center gap-4">
                  <Search className="w-6 h-6 text-purple-400" />
                  <input
                    type="text"
                    placeholder="Search for services, projects, articles..."
                    className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
                    autoFocus
                    onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {/* Quick Suggestions */}
                <div className="flex gap-2 mt-4">
                  {['Web Development', 'AI Solutions', 'UI/UX Design', 'Mobile Apps'].map((suggestion, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-purple-500/50 cursor-pointer transition-all">
                      {suggestion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          <div className={`lg:hidden mobile-menu-container overflow-hidden transition-all duration-500 ${
            isOpen ? 'pb-6' : 'h-0'
          }`}>
            <div className="border-t border-white/10 pt-4">
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <li key={index} className="mobile-menu-item">
                    <a
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-[15px] ${
                        activeLink === link.name
                          ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white border border-purple-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={activeLink === link.name ? 'text-purple-400' : 'text-gray-500'}>
                        {link.icon}
                      </span>
                      {link.name}
                      <ArrowRight className={`w-4 h-4 ml-auto transition-all ${
                        activeLink === link.name ? 'opacity-100 translate-x-1 text-purple-400' : 'opacity-0'
                      }`} />
                    </a>
                  </li>
                ))}
                
                {/* Mobile CTA */}
                <li className="mobile-menu-item pt-4 px-2">
                  <a
                    href="#contact"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/25 active:scale-95 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </li>
              </ul>

              {/* Mobile Contact Info */}
              <div className="mt-6 px-4 pt-4 border-t border-white/10">
                <ul className="space-y-3">
                  <li>
                    <a href="tel:+923001234567" className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors group">
                      <span className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/10 transition-all">
                        <Phone className="w-4 h-4" />
                      </span>
                      +92 3139614220
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@devksystems.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors group">
                      <span className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/10 transition-all">
                        <Mail className="w-4 h-4" />
                      </span>
                      kashanafzal2221@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="p-2 bg-white/5 rounded-lg">
                        <MapPin className="w-4 h-4" />
                      </span>
                      Kohat, Pakistan
                    </span>
                  </li>
                </ul>

                {/* Mobile Social */}
                {/* <ul className="flex gap-2 mt-4">
                  {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                    <li key={i}>
                      <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Global Styles */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes ping {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;