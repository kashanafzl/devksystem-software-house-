// src/components/sections/Hero.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, Play, Star, Sparkles, Zap, Shield,
  Code2, Brain, Palette, Rocket, Terminal, Globe,
  Users, Award, Clock, CheckCircle, ChevronDown,
  Github, Linkedin, Twitter, Instagram, Youtube,
  MessageCircle, TrendingUp, Target, FileCode,
  Cloud, Smartphone, Database, Layout, Monitor,
  Coffee, Heart, Send, MessageSquare, BarChart3,
  Briefcase, BookOpen, Crown, Diamond, Flame
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const floatingRefs = useRef([]);
  const glowRefs = useRef([]);
  const badgeRef = useRef(null);

  // Typing text data
  const typingTexts = [
    "Software House",
    "IT Solutions",
    "Web Development",
    "AI & Machine Learning",
    "UI/UX Design",
    "Mobile Apps",
  ];

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = ['147, 51, 234', '236, 72, 153', '59, 130, 246'][Math.floor(Math.random() * 3)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse interaction
        const dx = this.x - (mousePos.x * canvas.width / 2 + canvas.width / 2);
        const dy = this.y - (mousePos.y * canvas.height / 2 + canvas.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          this.x += dx * force * 0.02;
          this.y += dy * force * 0.02;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, ${this.opacity * 0.5})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.save();
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos]);

  // Main GSAP Animations
  useEffect(() => {
    const masterTl = gsap.timeline();

    // Badge
    masterTl.fromTo(badgeRef.current,
      { y: -30, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
    );

    // Title
    masterTl.fromTo(titleRef.current,
      { y: 100, opacity: 0, rotateX: -90 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.5, ease: "power4.out" },
      "-=0.3"
    );

    // Subtitle
    masterTl.fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.8"
    );

    // Description
    masterTl.fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // CTA Buttons
    const ctaChildren = ctaRef.current?.children;
    if (ctaChildren) {
      masterTl.fromTo(ctaChildren,
        { scale: 0, opacity: 0, rotation: -10 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, stagger: 0.15, ease: "elastic.out(1, 0.5)" },
        "-=0.3"
      );
    }

    // Stats
    const statsChildren = statsRef.current?.children;
    if (statsChildren) {
      masterTl.fromTo(statsChildren,
        { y: 100, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.5"
      );
    }

    // Floating icons animation
    floatingRefs.current.forEach((icon, i) => {
      if (!icon) return;
      
      gsap.fromTo(icon,
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 0.6, scale: 1, rotation: 0, duration: 1, delay: 1.5 + i * 0.2, ease: "back.out(1.7)" }
      );

      gsap.to(icon, {
        y: -30,
        x: Math.random() * 20 - 10,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.3,
      });

      gsap.to(icon, {
        rotation: 360,
        duration: 20 + i * 3,
        repeat: -1,
        ease: "none",
      });
    });

    // Glow orbs parallax
    glowRefs.current.forEach((orb, i) => {
      if (!orb) return;
      gsap.to(orb, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 100 + i * 50,
        scale: 1.2 + i * 0.1,
        opacity: 0.3 + i * 0.1,
      });
    });

    // Scroll indicator
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // Mouse parallax on title
  useEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        x: mousePos.x * -15,
        y: mousePos.y * -10,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, [mousePos]);

  // Stats data with icons
  const statsData = [
    { icon: <Briefcase className="w-6 h-6" />, value: '150+', label: 'Projects Done', gradient: 'from-purple-500 to-pink-500', iconBg: 'bg-purple-500/20' },
    { icon: <Users className="w-6 h-6" />, value: '50+', label: 'Team Experts', gradient: 'from-blue-500 to-cyan-500', iconBg: 'bg-blue-500/20' },
    { icon: <Globe className="w-6 h-6" />, value: '30+', label: 'Countries', gradient: 'from-green-500 to-teal-500', iconBg: 'bg-green-500/20' },
    { icon: <Award className="w-6 h-6" />, value: '98%', label: 'Success Rate', gradient: 'from-yellow-500 to-orange-500', iconBg: 'bg-yellow-500/20' },
  ];

  // Floating tech icons
  const floatingIcons = [
    { icon: <Code2 className="w-6 h-6 md:w-8 md:h-8" />, x: '8%', y: '25%', color: 'text-purple-400' },
    { icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />, x: '85%', y: '20%', color: 'text-pink-400' },
    { icon: <Database className="w-6 h-6 md:w-8 md:h-8" />, x: '12%', y: '70%', color: 'text-blue-400' },
    { icon: <Cloud className="w-6 h-6 md:w-8 md:h-8" />, x: '82%', y: '65%', color: 'text-cyan-400' },
    { icon: <Layout className="w-6 h-6 md:w-8 md:h-8" />, x: '50%', y: '10%', color: 'text-green-400' },
    { icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />, x: '48%', y: '75%', color: 'text-orange-400' },
    { icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />, x: '25%', y: '50%', color: 'text-red-400' },
    { icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, x: '72%', y: '45%', color: 'text-yellow-400' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Animated Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div ref={el => glowRefs.current[0] = el} className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div ref={el => glowRefs.current[1] = el} className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse" />
        <div ref={el => glowRefs.current[2] = el} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          zIndex: 2
        }}
      />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          ref={el => floatingRefs.current[i] = el}
          className={`absolute hidden md:block ${item.color} opacity-30`}
          style={{ left: item.x, top: item.y, zIndex: 3 }}
        >
          {item.icon}
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        
        {/* Top Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-full px-5 py-2.5 mb-8 animate-float">
          <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Leading Software House & IT Solutions</span>
          <Star className="w-4 h-4 text-yellow-400 animate-spin-slow" />
        </div>

        {/* Main Title */}
        <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
          <span className="block text-white">We Build</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
            Digital Future
          </span>
        </h1>

        {/* Subtitle with Typing Effect */}
        <div ref={subtitleRef} className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <span className="text-gray-400">Your Trusted</span>
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {typingTexts[currentText]}
          </span>
          <span className="inline-block w-[2px] h-8 bg-purple-400 animate-pulse" />
        </div>

        {/* Description */}
        <p ref={descRef} className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transforming ideas into powerful digital solutions. From web development to AI integration, 
          we deliver excellence that drives your business forward with cutting-edge technology.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center mb-16">
          {/* Primary CTA */}
          <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-base lg:text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10 flex items-center gap-3">
              <Rocket className="w-5 h-5 group-hover:rotate-12 group-hover:-translate-y-0.5 transition-all" />
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group relative border-2 border-white/20 px-8 py-4 rounded-full font-bold text-base lg:text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3 hover:border-purple-500/50"
          >
            <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
            Watch Showreel
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full font-bold text-base lg:text-lg transition-all flex items-center gap-3 hover:text-purple-400"
          >
            <MessageSquare className="w-5 h-5" />
            Get In Touch
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-500 group-hover:w-3/4 transition-all duration-300" />
          </a>
        </div>

        {/* Trusted By */}
        <div className="mb-12">
          <p className="text-gray-500 text-sm mb-4 flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            {[Globe, Cloud, Database, Layout, Smartphone, Monitor].map((Icon, i) => (
              <Icon key={i} className="w-8 h-8 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {statsData.map((stat, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-300" />
              <div className="relative p-5 lg:p-6 text-center">
                <div className={`inline-flex p-3 rounded-xl ${stat.iconBg} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Avatars */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="flex -space-x-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div className="text-left ml-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs text-gray-400">Trusted by 150+ clients</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full animate-bounce" />
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">Scroll</div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-bl-xl"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              {/* <X className="w-5 h-5" /> */}
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <Play className="w-20 h-20 text-white/50" />
              <p className="text-white/50 text-lg absolute bottom-6">Showreel Video</p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;