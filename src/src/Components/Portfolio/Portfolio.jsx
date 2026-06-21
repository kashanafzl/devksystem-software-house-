// src/components/sections/Portfolio.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ✅ Real Images Import
import project1 from '../../Assets/img/10.png';
import project2 from '../../Assets/img/2.png';
import project3 from '../../Assets/img/3.png';
import project4 from '../../Assets/img/4.png';
import project5 from '../../Assets/img/5.png';
import project6 from '../../Assets/img/6.png';
import project7 from '../../Assets/img/7.png';
import project8 from '../../Assets/img/9.png';
import project9 from '../../Assets/img/dashboard.png';

import { 
  ArrowRight, Star, Sparkles, Zap,
  Code2, Brain, Palette, Rocket, Globe,
  Users, Award, Clock, ChevronRight,
  Cloud, Smartphone, Layout, Monitor,
  BarChart3, Lock, FileCode, Server,
  ExternalLink, Play, Eye, Heart,
  Search, X, FolderOpen, Tag, Briefcase,
  CheckCircle, TrendingUp, Database, Shield
} from 'lucide-react';

// Custom SVG Icons
const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef([]);
  const modalRef = useRef(null);
  const statsRef = useRef(null);
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // All projects images array
  const projectImages = [
    project1, project2, project3, 
    project4, project5, project6,
    project7, project8, project9
  ];

  const categories = [
    { name: 'All', icon: <FolderOpen className="w-4 h-4" />, count: 9 },
    { name: 'Web', icon: <Globe className="w-4 h-4" />, count: 4 },
    { name: 'Mobile', icon: <Smartphone className="w-4 h-4" />, count: 2 },
    { name: 'AI/ML', icon: <Brain className="w-4 h-4" />, count: 2 },
    { name: 'Design', icon: <Palette className="w-4 h-4" />, count: 1 },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web',
      description: 'Full-stack e-commerce solution with AI-powered recommendations and real-time analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      gradient: 'from-blue-600 to-cyan-600',
      stats: { users: '10K+', revenue: '$2M+', rating: '4.9' },
      featured: true,
      image: project1,
    },
    {
      id: 2,
      title: 'AI Chatbot Platform',
      category: 'AI/ML',
      description: 'Intelligent chatbot with NLP for customer support automation and lead generation.',
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'Docker', 'GCP'],
      gradient: 'from-purple-600 to-pink-600',
      stats: { queries: '1M+', accuracy: '95%', clients: '50+' },
      featured: true,
      image: project2,
    },
    {
      id: 3,
      title: 'Banking Mobile App',
      category: 'Mobile',
      description: 'Secure mobile banking with biometric authentication and real-time transaction monitoring.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'],
      gradient: 'from-green-600 to-teal-600',
      stats: { downloads: '500K+', rating: '4.8', transactions: '$10M+' },
      featured: false,
      image: project3,
    },
    {
      id: 4,
      title: 'Healthcare Dashboard',
      category: 'Web',
      description: 'Real-time healthcare analytics with patient monitoring and appointment scheduling system.',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'Chart.js', 'AWS'],
      gradient: 'from-red-600 to-rose-600',
      stats: { patients: '100K+', uptime: '99.9%', hospitals: '20+' },
      featured: false,
      image: project4,
    },
    {
      id: 5,
      title: 'SaaS Management Tool',
      category: 'Web',
      description: 'All-in-one platform for team collaboration, project tracking, and resource management.',
      technologies: ['React', 'GraphQL', 'MongoDB', 'Docker', 'Azure'],
      gradient: 'from-orange-600 to-yellow-600',
      stats: { teams: '5K+', projects: '50K+', efficiency: '+200%' },
      featured: false,
      image: project5,
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'Mobile',
      description: 'Cross-platform fitness app with AI workout recommendations and progress tracking.',
      technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Google Fit'],
      gradient: 'from-pink-600 to-rose-600',
      stats: { users: '200K+', workouts: '1M+', rating: '4.7' },
      featured: false,
      image: project6,
    },
    {
      id: 7,
      title: 'AI Image Generator',
      category: 'AI/ML',
      description: 'Advanced AI image generation platform using stable diffusion and custom trained models.',
      technologies: ['Python', 'PyTorch', 'Stable Diffusion', 'FastAPI', 'GCP'],
      gradient: 'from-violet-600 to-purple-600',
      stats: { images: '5M+', users: '100K+', models: '50+' },
      featured: true,
      image: project7,
    },
    {
      id: 8,
      title: 'Design System Library',
      category: 'Design',
      description: 'Comprehensive UI component library with 200+ customizable and accessible components.',
      technologies: ['Figma', 'Storybook', 'React', 'TypeScript', 'Tailwind'],
      gradient: 'from-cyan-600 to-blue-600',
      stats: { components: '200+', downloads: '50K+', stars: '2K+' },
      featured: false,
      image: project8,
    },
    {
      id: 9,
      title: 'Real Estate Platform',
      category: 'Web',
      description: 'Modern marketplace with virtual tours, AI property valuation, and agent dashboard.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox', 'AWS'],
      gradient: 'from-teal-600 to-green-600',
      stats: { listings: '10K+', agents: '500+', sales: '$50M+' },
      featured: false,
      image: project9,
    },
  ];

  const statsData = [
    { icon: <FolderOpen className="w-6 h-6" />, value: '150+', label: 'Projects Done' },
    { icon: <Users className="w-6 h-6" />, value: '80+', label: 'Happy Clients' },
    { icon: <Award className="w-6 h-6" />, value: '15+', label: 'Awards Won' },
    { icon: <Globe className="w-6 h-6" />, value: '30+', label: 'Countries' },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      if (modalRef.current) {
        gsap.fromTo(modalRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
        );
      }
    }, 100);
  };

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0, scale: 0.9, y: 30,
        duration: 0.3, ease: "power2.in",
        onComplete: () => {
          setIsModalOpen(false);
          setSelectedProject(null);
          document.body.style.overflow = 'auto';
        }
      });
    } else {
      setIsModalOpen(false);
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }
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

    const filterChildren = filterRef.current?.children;
    if (filterChildren) {
      gsap.fromTo(filterChildren,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power3.out" },
      );
    }

    projectsRef.current.forEach((project, index) => {
      if (!project) return;
      gsap.fromTo(project,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.7, delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: project, start: 'top 90%' },
        }
      );
    });

    const statsChildren = statsRef.current?.children;
    if (statsChildren) {
      gsap.fromTo(statsChildren,
        { y: 50, opacity: 0, scale: 0.5 },
        { 
          y: 0, opacity: 1, scale: 1, 
          duration: 0.6, stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
        }
      );
    }
  }, [activeFilter]);

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Our Portfolio</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>

          <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              Projects
            </span>
          </h2>
          <p ref={descRef} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing our best work across various technologies and industries
          </p>
        </div>

        {/* Filters */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(cat.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeFilter === cat.name
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50'
              }`}
            >
              {cat.icon}
              {cat.name}
              <span className={`text-xs ml-1 ${activeFilter === cat.name ? 'text-white/70' : 'text-gray-600'}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectsRef.current[index] = el}
              className="group relative cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 h-full">
                {/* ✅ REAL IMAGE AREA */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity`} />
                  
                  {/* Hover Overlay with Buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 hover:scale-110 transition-all">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 hover:scale-110 transition-all">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="flex items-center gap-1 bg-yellow-400 text-black text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
                        <Star className="w-3 h-3 fill-black" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-white/5 rounded-md text-gray-400 border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 bg-purple-500/10 rounded-md text-purple-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm font-bold text-white">{value}</div>
                        <div className="text-[10px] text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <FolderOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* Stats */}
        <div ref={statsRef} className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-all duration-300" />
              <div className="relative p-6 text-center">
                <div className="inline-flex p-3 bg-purple-500/10 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 border-2 border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          onClick={closeModal}
        >
          <div 
            ref={modalRef} 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111] border border-white/10 rounded-3xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden rounded-t-3xl">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-50`} />
            </div>

            {/* Modal Content */}
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${selectedProject.gradient} text-white`}>
                  {selectedProject.category}
                </span>
                {selectedProject.featured && (
                  <span className="flex items-center gap-1 bg-yellow-400 text-black text-xs font-bold px-2.5 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-black" />
                    Featured Project
                  </span>
                )}
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black mb-4">{selectedProject.title}</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-300 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-purple-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(selectedProject.stats).map(([key, value], i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105">
                  <ExternalLink className="w-5 h-5" />
                  Live Preview
                </button>
                <button className="flex items-center gap-2 border-2 border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all hover:border-purple-500/50">
                  <GithubIcon />
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;