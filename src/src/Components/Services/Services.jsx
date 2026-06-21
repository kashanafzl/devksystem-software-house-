// src/components/sections/Services.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, Star, Sparkles, Zap, Shield, CheckCircle,
  Code2, Brain, Palette, Rocket, Terminal, Globe,
  Users, Award, Clock, ChevronRight, TrendingUp,
  Cloud, Smartphone, Database, Layout, Monitor,
  BarChart3, Lock, FileCode, Server, Cpu,
  MessageCircle, Send, Target, Eye, Heart,
  Coffee, Gift, Crown, Diamond, Flame, Wrench,
  Lightbulb, Puzzle, Workflow, Blocks
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Services Data
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and scalability.',
      features: [
        'React/Next.js Development',
        'Node.js & Python Backend',
        'Database Design & Optimization',
        'RESTful API Development',
        'Cloud Deployment (AWS/GCP)',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      iconBg: 'bg-blue-500/20',
      price: 'From $5,000',
      badge: 'Popular',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate processes, provide valuable insights, and enhance decision-making capabilities.',
      features: [
        'Custom AI Solutions',
        'Chatbot Development',
        'Data Analytics & Visualization',
        'Computer Vision Applications',
        'Natural Language Processing',
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python', 'Scikit-learn', 'LangChain'],
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      iconBg: 'bg-purple-500/20',
      price: 'From $8,000',
      badge: 'Trending',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Stunning, user-centered designs that enhance engagement, improve usability, and drive conversions.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Interactive Design',
        'Design Systems',
        'Usability Testing',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Framer'],
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      iconBg: 'bg-orange-500/20',
      price: 'From $3,000',
      badge: 'Creative',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Solutions',
        'App Store Optimization',
        'Maintenance & Support',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
      gradient: 'from-green-600 to-teal-600',
      bgGradient: 'from-green-500/10 to-teal-500/10',
      iconBg: 'bg-green-500/20',
      price: 'From $6,000',
      badge: 'Mobile',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions to optimize your application performance and reliability.',
      features: [
        'AWS/Azure/GCP Setup',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Serverless Architecture',
        'Cloud Migration',
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
      gradient: 'from-sky-600 to-blue-600',
      bgGradient: 'from-sky-500/10 to-blue-500/10',
      iconBg: 'bg-sky-500/20',
      price: 'From $4,000',
      badge: 'Scalable',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions, monitoring, and compliance services.',
      features: [
        'Security Audits',
        'Penetration Testing',
        '24/7 Monitoring',
        'Compliance Management',
        'Incident Response',
      ],
      technologies: ['SIEM', 'IDS/IPS', 'Firewall', 'Encryption', 'Blockchain', 'Zero Trust'],
      gradient: 'from-red-600 to-rose-600',
      bgGradient: 'from-red-500/10 to-rose-500/10',
      iconBg: 'bg-red-500/20',
      price: 'From $4,500',
      badge: 'Secure',
    },
  ];

  // Process Steps
  const process = [
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Discovery', desc: 'Understanding your needs' },
    { icon: <Puzzle className="w-6 h-6" />, title: 'Planning', desc: 'Strategic roadmap' },
    { icon: <Code2 className="w-6 h-6" />, title: 'Development', desc: 'Agile execution' },
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Testing', desc: 'Quality assurance' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Launch', desc: 'Deployment & support' },
  ];

  useEffect(() => {
    // Section Title Animation
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
      }
    });

    titleTl.fromTo(titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    titleTl.fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    // Cards Stagger Animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(card,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: index % 2 === 0 ? -5 : 5,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );

      // Hover 3D Effect
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Process Timeline Animation
    const processItems = processRef.current?.children;
    if (processItems) {
      gsap.fromTo(processItems,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // CTA Animation
    gsap.fromTo(ctaRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/3 rounded-full blur-[200px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Wrench className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Our Services</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>

          {/* Title */}
          <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-white">What We </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              Offer
            </span>
          </h2>

          {/* Description */}
          <p ref={descRef} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to transform your business and drive growth with cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              {/* Card Body */}
              <div className="relative h-full bg-[#111] border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${service.gradient} text-white`}>
                    {service.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-5 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 bg-white/5 rounded-lg text-gray-400 border border-white/5 hover:border-purple-500/30 hover:text-white transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{service.price}</span>
                  <button className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Process</span>
            </h3>
            <p className="text-gray-400">How we bring your ideas to life</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hidden lg:block" />
            
            <div ref={processRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="relative text-center group">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-xs font-bold z-10">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-purple-600/40 group-hover:to-pink-600/40 transition-all duration-300 border border-white/10">
                    <div className="text-purple-400 group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div ref={ctaRef}>
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/30 via-black to-pink-900/30 border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Ready to Start?</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-4">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can help you achieve your goals with our expertise.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                
                <button className="group border-2 border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat With Us
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white/10">
                {[
                  { icon: <Award className="w-5 h-5" />, text: 'Award Winning' },
                  { icon: <Shield className="w-5 h-5" />, text: '100% Secure' },
                  { icon: <Clock className="w-5 h-5" />, text: '24/7 Support' },
                  { icon: <Heart className="w-5 h-5" />, text: '98% Satisfaction' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400">
                    <span className="text-purple-400">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;