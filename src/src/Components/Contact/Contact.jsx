// src/components/sections/Contact.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, Star, Sparkles, Zap,
  Phone, Mail, MapPin, Clock, Globe,
  Send, MessageCircle, MessageSquare,
  CheckCircle, AlertCircle, Loader,
  Users, Award, Heart, ThumbsUp,
  ChevronRight, ChevronDown, ExternalLink,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Custom SVG Icons
const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);
  const socialRef = useRef(null);
  const faqRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState('idle');
  const [activeFaq, setActiveFaq] = useState(null);

  // ✅ YOUR Contact Info
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone / WhatsApp',
      details: ['+92 313 9614220'],
      gradient: 'from-green-600 to-emerald-600',
      action: 'https://wa.me/923139614220',
      badge: 'WhatsApp',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['kashanafzal2221@gmail.com'],
      gradient: 'from-blue-600 to-cyan-600',
      action: 'mailto:kashanafzal2221@gmail.com',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: ['Kohat, Pakistan', 'Serving Worldwide'],
      gradient: 'from-purple-600 to-pink-600',
      action: '#map',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 9 AM - 6 PM', 'Sunday: Closed'],
      gradient: 'from-orange-600 to-yellow-600',
      action: null,
    },
  ];

  const services = [
    'Web Development',
    'AI & Machine Learning',
    'UI/UX Design',
    'Mobile Apps',
    'Cloud Solutions',
    'Cybersecurity',
    'Digital Marketing',
    'Other',
  ];

  const faqs = [
    {
      question: 'What is the typical project timeline?',
      answer: 'Project timelines vary based on complexity. A typical website takes 4-8 weeks, while complex applications may take 3-6 months.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer 24/7 support and maintenance packages to ensure your application runs smoothly.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use cutting-edge technologies including React, Next.js, Node.js, Python, TensorFlow, AWS, and more.',
    },
    {
      question: 'How much does a project cost?',
      answer: 'Project costs vary based on scope. We provide free consultations and detailed quotes. Projects range from $3,000 to $50,000+.',
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We integrate seamlessly with your team, providing additional expertise and resources.',
    },
  ];

  // ✅ YOUR Social Links
  const socialLinks = [
    { 
      icon: GithubIcon, 
      href: 'https://github.com/kashanafzl', 
      label: 'GitHub', 
      color: 'hover:text-gray-300',
      bg: 'hover:bg-gray-500/10',
    },
    { 
      icon: LinkedinIcon, 
      href: 'https://www.linkedin.com/in/kashan-afzal', 
      label: 'LinkedIn', 
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-500/10',
    },
    { 
      icon: WhatsAppIcon, 
      href: 'https://wa.me/923139614220', 
      label: 'WhatsApp', 
      color: 'hover:text-green-400',
      bg: 'hover:bg-green-500/10',
    },
    { 
      icon: TwitterIcon, 
      href: '#', 
      label: 'Twitter', 
      color: 'hover:text-sky-400',
      bg: 'hover:bg-sky-500/10',
    },
    { 
      icon: InstagramIcon, 
      href: '#', 
      label: 'Instagram', 
      color: 'hover:text-pink-500',
      bg: 'hover:bg-pink-500/10',
    },
    { 
      icon: YoutubeIcon, 
      href: '#', 
      label: 'YouTube', 
      color: 'hover:text-red-500',
      bg: 'hover:bg-red-500/10',
    },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  useEffect(() => {
    const titleTl = gsap.timeline({
      scrollTrigger: { trigger: titleRef.current, start: 'top 85%' }
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

    gsap.fromTo(formRef.current,
      { y: 80, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)",
        scrollTrigger: { trigger: formRef.current, start: 'top 85%' },
      }
    );

    const infoChildren = infoRef.current?.children;
    if (infoChildren) {
      gsap.fromTo(infoChildren,
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)",
          scrollTrigger: { trigger: infoRef.current, start: 'top 85%' },
        }
      );
    }

    const socialChildren = socialRef.current?.children;
    if (socialChildren) {
      gsap.fromTo(socialChildren,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: socialRef.current, start: 'top 90%' },
        }
      );
    }

    const faqChildren = faqRef.current?.children;
    if (faqChildren) {
      gsap.fromTo(faqChildren,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: faqRef.current, start: 'top 85%' },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/3 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Get In Touch</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>

          <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              Work Together
            </span>
          </h2>
          <p ref={descRef} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Form */}
          <div ref={formRef} className="lg:col-span-3">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-purple-400" />
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      placeholder="+92 313 9614220"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Service Interested In</label>
                    <select name="service" value={formData.service} onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all cursor-pointer">
                      <option value="" className="bg-black">Select a service</option>
                      {services.map((service, i) => (
                        <option key={i} value={service} className="bg-black">{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5"
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all resize-none" />
                </div>

                <button type="submit" disabled={formStatus === 'loading' || formStatus === 'success'}
                  className={`w-full relative overflow-hidden rounded-xl py-4 font-bold text-lg transition-all ${
                    formStatus === 'success' ? 'bg-green-600' : formStatus === 'error' ? 'bg-red-600' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/25'
                  }`}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {formStatus === 'loading' && <Loader className="w-5 h-5 animate-spin" />}
                    {formStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                    {formStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                    {formStatus === 'idle' && <><Send className="w-5 h-5" /> Send Message</>}
                    {formStatus === 'loading' && 'Sending...'}
                    {formStatus === 'success' && 'Message Sent Successfully!'}
                    {formStatus === 'error' && 'Error Sending Message'}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* ✅ YOUR Contact Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.action || '#'} target={info.action?.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                className={`block group ${!info.action && 'cursor-default'}`}>
                <div className="relative bg-[#111] border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition-all">
                  {info.badge && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                      {info.badge}
                    </span>
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-400 text-sm">{detail}</p>
                      ))}
                    </div>
                    {info.action && <ChevronRight className="w-5 h-5 text-gray-600 ml-auto group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />}
                  </div>
                </div>
              </a>
            ))}

            {/* ✅ YOUR Social Links */}
            <div ref={socialRef} className="bg-[#111] border border-white/10 rounded-2xl p-5">
              <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} ${social.bg} hover:border-purple-500/50 transition-all`}
                    title={social.label}>
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-5 text-center">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h4 className="font-bold mb-1">Quick Response</h4>
              <p className="text-sm text-gray-400">We respond within 2 hours</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-2">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Questions</span>
            </h3>
            <p className="text-gray-400">Quick answers to common questions</p>
          </div>

          <div ref={faqRef} className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-all">
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-all flex-shrink-0 ${activeFaq === index ? 'rotate-180 text-purple-400' : ''}`} />
                </button>
                <div data-faq={index} className={`overflow-hidden transition-all ${activeFaq === index ? 'opacity-100' : 'h-0 opacity-0'}`}>
                  <div className="px-5 pb-5 text-gray-400 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Map - Kohat */}
        <div ref={mapRef} className="relative overflow-hidden rounded-3xl border border-white/10 h-64 lg:h-80 bg-[#111] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h4 className="text-xl font-bold mb-1">📍 Our Location</h4>
            <p className="text-gray-400 text-lg">Kohat, Pakistan</p>
            <p className="text-sm text-gray-500 mt-2">Serving clients worldwide 🌍</p>
          </div>
          <div className="absolute top-4 left-4 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-400">
            <Globe className="w-3 h-3 inline mr-1" /> Global Delivery
          </div>
          <div className="absolute bottom-4 right-4 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-400">
            <Users className="w-3 h-3 inline mr-1" /> 5+ Team Members
          </div>
        </div>
      </div>

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

export default Contact;