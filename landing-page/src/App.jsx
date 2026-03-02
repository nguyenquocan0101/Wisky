import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  User, 
  GraduationCap,
  Award,
  Users,
  Code,
  Target,
  Globe,
  Clock,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  MapPin,
  Mail,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';
import heroImg from './assets/hero.png';
import logoImg from './assets/logo.png';
import headerRightImg from './assets/header_right.png';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.avif';
import pillarEdu from './assets/pillar_edu.png';
import pillarTrain from './assets/pillar_train.png';
import pillarStaff from './assets/pillar_staff.png';
import pillarTech from './assets/pillar_tech.png';

const backgrounds = [bg1, bg2];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const contactRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        setShowFloatingBtn(rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`${isScrolled ? 'scrolled' : 'transparent'} main-header`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src={logoImg} alt="Wisky Logo" style={{ height: '55px', objectFit: 'contain' }} />
            <span style={{ fontWeight: 800, fontSize: '1.8rem', letterSpacing: '1px', color: 'var(--primary-color)' }}>WISKY</span>
          </a>

          <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className={mobileMenuOpen ? 'mobile-nav open' : 'nav-links'}>
            <a href="#about" style={{ fontSize: '1.1rem', fontWeight: 600 }}>About Us</a>
            <a href="#pillars" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Core Pillars</a>
            <a href="#values" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Values</a>
            <a href="#contact" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Contact</a>
          </nav>


          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none' }}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {backgrounds.map((bg, idx) => (
          <motion.div
            key={idx}
            className="hero-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: bgIndex === idx ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bg})`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -1
            }}
          />
        ))}
        <div className="container hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>WISKY – TECHNOLOGY SOLUTION</span>
            <h1>A Decade of Excellence: Bridging Talent and Technology</h1>
            <p>2016 - 2026. Empowering the business community through integrated solutions in Education, HR, and Technology.</p>
            <div className="hero-btns">
              <a 
                ref={contactRef}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cp@wisky.vn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="triangle triangle-tl" style={{ top: '-20px', left: '-20px' }}></div>
            <img src={heroImg} alt="WISKY Vision" />
            <div className="triangle triangle-br" style={{ bottom: '-20px', right: '-20px' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section - Redesigned */}
      <section className="vision-mission-redesign" id="about">
        <div className="container">
          <motion.div 
            className="vision-content-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ width: '100%', textAlign: 'center' }}
          >
            {/* <div className="label-head" style={{ justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 <span></span> OUR FOUNDATION
              </div>
            </div> */}
            <h2>Designing the <span>Digital Future</span> with Purpose.</h2>
            <p className="vision-desc">
              We don't just build software; we engineer pathways for global transformation. 
              Our core values drive every pixel we place and every line of code we deploy.
            </p>

            <div className="vision-cards-new">
              {/* Mission Card - Light */}
              <div className="vision-card light">
                {/* <div className="card-top">
                  <span className="card-dash"></span>
                  <span className="card-label">OUR MISSION</span>
                </div> */}
                <h3 className="card-title">
                  Strategic<br />
                  <span>Partnership.</span>
                </h3>
                <div className="card-description">
                  <p>To accompany and support the business community in the journey of effectively developing both short-term and long-term goals.</p>
                </div>
              </div>

              {/* Vision Card - Dark */}
              <div className="vision-card dark">
                {/* <div className="card-top">
                  <span className="card-dash"></span>
                  <span className="card-label">OUR VISION</span>
                </div> */}
                <h3 className="card-title">
                  Digital<br />
                  <span>Leadership.</span>
                </h3>
                <div className="card-description">
                  <p>To become a leading provider of comprehensive technology solutions across the country and the region.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <section className="pillars-redesign" id="pillars">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.8rem', marginBottom: '15px' }}>Core Business Pillars</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Strategic areas driving excellence across regions.</p>
          </div>
          <div className="pillars-grid">
            {[
              { 
                img: pillarEdu,
                title: 'Education', 
                desc: 'Providing world-class academic programs and educational consultancy to build robust intellectual frameworks for the next generation.' 
              },
              { 
                img: pillarTrain,
                title: 'Professional Training & Certification', 
                desc: 'Standardized corporate training and professional certification programs designed to transform talent into industry-ready experts.' 
              },
              { 
                img: pillarStaff,
                title: 'High-Quality Staffing & Strategic BPO Solutions', 
                desc: 'Providing elite talent acquisition and comprehensive BPO services to reduce overhead, optimize efficiency, and drive scalable business growth.'
              },
              { 
                img: pillarTech,
                title: 'Software Development & Operations', 
                desc: 'End-to-end software engineering and digital infrastructure management tailored to drive business digital transformation.' 
              }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                className="pillar-card"
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <div className="pillar-bg" style={{ backgroundImage: `url(${p.img})` }}></div>
                <div className="pillar-overlay">
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Together, Succeeding Together Section */}
      <section className="values-section-new" id="values">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Growing Together, Succeeding Together</h2>
          </div>
          <div className="values-grid">
            {[
              { title: '10+ Years of Heritage', desc: 'Proven reliability and professional integrity since 2016.' },
              { title: 'Comprehensive Solutions', desc: 'An integrated ecosystem of Education, HR, and Technology.' },
              { title: 'Strategic Support', desc: 'Dedicated to helping partners achieve their milestones through every stage of growth.' },
              { title: 'Regional Reach', desc: 'Leading technology provider across the nation and the surrounding region.' }
            ].map((v, i) => (
              <motion.div 
                key={i} 
                className="value-item" 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <div className="value-header">
                  <div className="value-icon-box">
                    <Check size={14} strokeWidth={4} color="white" />
                  </div>
                  <h3>{v.title}</h3>
                </div>
                <div className="value-content">
                  <p>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={logoImg} alt="Wisky Logo" style={{ height: '45px', filter: 'brightness(0) invert(1)', objectFit: 'contain' }} />
              </div>
              <p style={{ opacity: 0.9, fontWeight: 600 }}>WISKY – TECHNOLOGY SOLUTION</p>
              <p style={{ opacity: 0.8, maxWidth: '300px', fontSize: '0.9rem', marginTop: '5px' }}>10 Years of Innovation and Partnership.</p>
              <div style={{ marginTop: '20px', fontSize: '0.85rem', opacity: 0.7 }}>
                <p style={{ marginBottom: '5px' }}>Address: Student Cultural House of VNU-HCMC No. 1 Luu Huu Phuoc, Dong Hoa, Di An, Ho Chi Minh City</p>
                <p style={{ marginBottom: '5px' }}>Email: cp@wisky.vn</p>
              </div>
            </div>
            <div className="footer-col">
              <h4>Our Solutions</h4>
              <ul>
                <li>Education</li>
                <li>Professional Training</li>
                <li>Manpower Supply</li>
                <li>Software Development</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>About Us</li>
                <li>Mission & Vision</li>
                <li>Strategic Pillars</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
             <p>Built with for Wisky. © 2026 All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=cp@wisky.vn" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`floating-contact ${showFloatingBtn ? 'visible' : ''}`}
        aria-label="Email Us"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}

export default App;
