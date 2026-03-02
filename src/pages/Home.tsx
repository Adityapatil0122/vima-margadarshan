import { Link } from 'react-router-dom'
import { Heart, FileText, Car, ArrowRight, CheckCircle, Star, TrendingUp, Users, BookOpen, Shield, Sparkles } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const features = [
  {
    icon: Heart,
    color: 'rgba(239,68,68,0.1)',
    iconColor: '#ef4444',
    borderColor: 'rgba(239,68,68,0.15)',
    gradientFrom: '#ef4444',
    gradientTo: '#dc2626',
    title: 'हेल्थ विमा',
    desc: 'आजारपण, रुग्णालय आणि उपचारांसाठी आर्थिक संरक्षण मिळवा.',
    to: '/health-insurance',
    delay: '0s',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop&auto=format',
  },
  {
    icon: FileText,
    color: 'rgba(59,130,246,0.1)',
    iconColor: '#60a5fa',
    borderColor: 'rgba(59,130,246,0.15)',
    gradientFrom: '#3b82f6',
    gradientTo: '#2563eb',
    title: 'टर्म विमा',
    desc: 'कमी प्रीमियममध्ये जास्त कव्हर — कुटुंबाचे भवितव्य सुरक्षित.',
    to: '/term-insurance',
    delay: '0.1s',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&auto=format',
  },
  {
    icon: Car,
    color: 'rgba(0,232,122,0.08)',
    iconColor: '#00e87a',
    borderColor: 'rgba(0,232,122,0.15)',
    gradientFrom: '#00e87a',
    gradientTo: '#00c45f',
    title: 'कार विमा',
    desc: 'अपघात, चोरी आणि नुकसानीपासून तुमची गाडी सुरक्षित ठेवा.',
    to: '/car-insurance',
    delay: '0.2s',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&auto=format',
  },
]

const stats = [
  { icon: Users, value: '५०,०००+', label: 'विश्वासू वाचक' },
  { icon: BookOpen, value: '१००+', label: 'मराठी लेख' },
  { icon: TrendingUp, value: '९८%', label: 'समाधानी वाचक' },
]

const whyUs = [
  'सोप्या मराठीत स्पष्टीकरण',
  'कोणताही विक्री दबाव नाही',
  'IRDAI मार्गदर्शक तत्त्वांनुसार',
  'निःपक्षपाती, तटस्थ माहिती',
]

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

// Floating decorative shapes
const FloatingShapes = () => (
  <>
    <div 
      className="orb w-[500px] h-[500px] -left-48 top-1/4"
      style={{ 
        background: 'radial-gradient(circle, rgba(0,232,122,0.15) 0%, rgba(0,232,122,0.05) 40%, transparent 70%)',
        animationDuration: '12s' 
      }} 
    />
    <div 
      className="orb w-80 h-80 right-0 top-20"
      style={{ 
        background: 'radial-gradient(circle, rgba(0,154,76,0.1) 0%, transparent 60%)',
        animationDuration: '15s', 
        animationDelay: '3s' 
      }} 
    />
    <div 
      className="orb w-64 h-64 right-1/4 bottom-1/4"
      style={{ 
        background: 'radial-gradient(circle, rgba(0,232,122,0.08) 0%, transparent 60%)',
        animationDuration: '10s', 
        animationDelay: '5s' 
      }} 
    />
    <div 
      className="absolute w-72 h-72 left-1/2 top-1/3 -translate-x-1/2 opacity-20 pointer-events-none"
      style={{ 
        background: 'linear-gradient(135deg, rgba(0,232,122,0.3), rgba(0,154,76,0.2))',
        animation: 'morphBlob 8s ease-in-out infinite',
        filter: 'blur(40px)',
        borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
      }} 
    />
  </>
)

export default function Home() {
  const { isDark } = useTheme()
  
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-grid"
        style={{ paddingTop: '6rem', paddingBottom: '5rem' }}
      >
        <FloatingShapes />

        <div className="section-wrap relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div
                className="tag mb-6 inline-flex gap-2"
                style={{ animation: 'fadeUp 0.7s ease both' }}
              >
                <Shield size={14} className="animate-pulse" />
                महाराष्ट्रातील विश्वासू विमा माहिती केंद्र
              </div>

              <h1
                className="mb-6"
                style={{
                  fontFamily: "'Noto Serif Devanagari', serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                  lineHeight: 1.2,
                  color: 'var(--text-primary)',
                  animation: 'fadeUp 0.7s 0.1s ease both',
                  opacity: 0,
                  animationFillMode: 'forwards',
                }}
              >
                विमा समजून घ्या,{' '}
                <span className="text-jade-gradient relative">
                  योग्य निर्णय घ्या
                  <Sparkles 
                    size={24} 
                    className="absolute -right-8 top-0 animate-pulse"
                    style={{ color: 'var(--jade)' }}
                  />
                </span>
              </h1>

              <p
                className="text-lg mb-10 max-w-xl"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                  animation: 'fadeUp 0.7s 0.2s ease both',
                  opacity: 0,
                  animationFillMode: 'forwards',
                }}
              >
                हेल्थ, टर्म आणि कार विम्याची संपूर्ण माहिती सोप्या मराठीत —
                कोणताही विक्री दबाव न येता, पूर्णपणे मोफत.
              </p>

              <div
                className="flex flex-wrap gap-4"
                style={{ animation: 'fadeUp 0.7s 0.3s ease both', opacity: 0, animationFillMode: 'forwards' }}
              >
                <Link to="/health-insurance" className="btn-jade group">
                  <span>विमा जाणून घ्या</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link to="/contact" className="btn-glass group">
                  <span>मोफत मार्गदर्शन</span>
                </Link>
              </div>
            </div>

            {/* Right - Hero Image with Premium Frame */}
            <div 
              className="relative hidden lg:block"
              style={{ animation: 'fadeUp 0.7s 0.4s ease both', opacity: 0, animationFillMode: 'forwards' }}
            >
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl opacity-60" style={{ background: 'linear-gradient(135deg, var(--jade-glow), transparent, var(--jade-faint))', filter: 'blur(20px)' }} />
              
              {/* Main image container */}
              <div className="relative image-premium rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop&auto=format&q=80"
                  alt="परिवार सुरक्षा"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div 
                  className="absolute bottom-6 left-6 glass-card px-4 py-3 flex items-center gap-3"
                  style={{ animation: 'floatGentle 4s ease-in-out infinite' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--jade), var(--jade-dim))' }}>
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>५०,०००+</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>विश्वासू ग्राहक</p>
                  </div>
                </div>
              </div>

              {/* Floating decorative element */}
              <div 
                className="absolute -right-8 top-1/4 w-20 h-20 rounded-2xl rotate-12"
                style={{ 
                  background: 'linear-gradient(135deg, var(--jade), var(--jade-dim))',
                  opacity: 0.8,
                  animation: 'float 6s ease-in-out infinite',
                  boxShadow: '0 10px 40px var(--jade-glow)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          background: isDark 
            ? 'linear-gradient(135deg, rgba(0,232,122,0.06) 0%, rgba(0,154,76,0.03) 100%)' 
            : 'linear-gradient(135deg, rgba(0,154,76,0.04) 0%, rgba(0,232,122,0.02) 100%)',
          borderTop: '1px solid var(--border-jade)', 
          borderBottom: '1px solid var(--border-jade)' 
        }}
      >
        <div className="section-wrap py-10">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div 
                key={i} 
                className="text-center group cursor-default relative"
                style={{ animation: `fadeUp 0.6s ${i * 0.1}s ease both` }}
              >
                <div className="relative inline-block mb-3">
                  <s.icon
                    size={24}
                    className="mx-auto transition-all duration-400 group-hover:scale-125"
                    style={{ color: 'var(--jade)' }}
                  />
                  <div 
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-400"
                    style={{ background: 'var(--jade-glow)' }}
                  />
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold mb-1 transition-all duration-300 group-hover:scale-105"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'var(--text-primary)' }}
                >
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INSURANCE CARDS ─────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
        <div className="section-wrap">
          <div className="text-center mb-16">
            <span className="tag mb-4 inline-block">विमा प्रकार</span>
            <h2 className="section-title text-3xl md:text-4xl mb-4">कोणता विमा समजून घ्यायचा?</h2>
            <p className="section-subtitle mx-auto max-w-lg">तुमच्या गरजेनुसार खालीलपैकी एक निवडा</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Link
                key={i}
                to={f.to}
                className="glass-card group flex flex-col hover-lift gradient-border"
                style={{ animation: `fadeUp 0.7s ${i * 0.15}s ease both` }}
              >
                {/* Card Image */}
                <div className="relative -mx-[1.75rem] -mt-[1.75rem] mb-6 overflow-hidden rounded-t-[1.5rem]">
                  <img 
                    src={f.image}
                    alt={f.title}
                    className="w-full h-48 object-cover transition-all duration-600 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-400"
                    style={{ 
                      background: `linear-gradient(to top, ${isDark ? 'rgba(7,13,9,0.9)' : 'rgba(255,255,255,0.8)'} 0%, transparent 60%)` 
                    }}
                  />
                  {/* Icon badge */}
                  <div 
                    className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${f.gradientFrom}, ${f.gradientTo})`,
                      boxShadow: `0 8px 30px ${f.color}`
                    }}
                  >
                    <f.icon size={26} className="text-white" />
                  </div>
                </div>

                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-200"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'var(--text-primary)' }}
                >
                  {f.title}
                </h3>
                <p className="text-sm flex-1 mb-6" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                  {f.desc}
                </p>

                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-4"
                  style={{ color: f.iconColor }}
                >
                  अधिक वाचा <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS PORTAL ─────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-50 pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'var(--jade-faint)', right: '-10%', top: '10%' }}
          />
        </div>

        <div className="section-wrap">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag mb-5 inline-block">आमचे ध्येय</span>
              <h2 className="section-title text-3xl md:text-4xl mb-6">हे पोर्टल का वेगळे आहे?</h2>
              <p className="mb-8" style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
                अनेक वेळा विमा माहिती इंग्रजीत किंवा क्लिष्ट भाषेत असते.
                आमचे ध्येय — प्रत्येक मराठी माणसाला विमा सहज समजावा.
              </p>
              <ul className="check-list space-y-2 mb-10">
                {whyUs.map((item, i) => (
                  <li key={i} style={{ animation: `slideInRight 0.5s ${i * 0.1}s ease both` }}>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-jade group">
                <span>आमच्याविषयी जाणून घ्या</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Testimonial glass card */}
            <div 
              className="glass-card relative"
              style={{ 
                background: isDark ? 'rgba(0,232,122,0.04)' : 'rgba(0,154,76,0.03)', 
                borderColor: 'var(--border-jade)' 
              }}
            >
              <div 
                className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, var(--jade), var(--jade-dim))',
                  boxShadow: '0 8px 30px var(--jade-glow)'
                }}
              >
                <span className="text-2xl text-white font-bold">"</span>
              </div>

              <div className="flex items-center gap-1.5 mb-6 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--jade)" style={{ color: 'var(--jade)' }} className="animate-pulse" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-8" style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
                "विमा म्हणजे गुंतागुंत वाटायचे — पण या साइटवर एका तासात सगळं समजलं.
                आता माझ्या कुटुंबासाठी योग्य टर्म विमा घेतला."
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--jade-faint), transparent)', 
                    border: '2px solid var(--border-jade)' 
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format"
                    alt="रमेश जाधव"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>रमेश जाधव</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>पुणे, महाराष्ट्र</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREMIUM FEATURES SECTION ───────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
        <div className="absolute inset-0 bg-grid opacity-50" />
        
        <div className="section-wrap relative z-10">
          <div className="text-center mb-16">
            <span className="tag mb-4 inline-block">वैशिष्ट्ये</span>
            <h2 className="section-title text-3xl md:text-4xl mb-4">आमच्या सेवेची वैशिष्ट्ये</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'सुरक्षित माहिती', desc: 'IRDAI मार्गदर्शक तत्त्वांनुसार' },
              { icon: Users, title: 'तज्ञ सल्ला', desc: 'व्यावसायिक मार्गदर्शन' },
              { icon: BookOpen, title: 'सोपी भाषा', desc: 'मराठीत स्पष्टीकरण' },
              { icon: TrendingUp, title: 'अद्ययावत', desc: 'नवीनतम माहिती आणि तंत्रज्ञान' },
            ].map((item, i) => (
              <div 
                key={i}
                className="glass-card text-center group hover-lift"
                style={{ animation: `fadeUp 0.6s ${i * 0.1}s ease both` }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-6"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--jade-faint), transparent)',
                    border: '1px solid var(--border-jade)'
                  }}
                >
                  <item.icon size={28} style={{ color: 'var(--jade)' }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: isDark ? 'linear-gradient(135deg, #0a110c 0%, #0d1610 50%, #0a110c 100%)' : 'linear-gradient(135deg, #f0f4f1 0%, #ffffff 50%, #f5f7f6 100%)' }}
      >
        <div 
          className="orb w-[600px] h-[600px] -left-48 top-0" 
          style={{ background: 'radial-gradient(circle, var(--jade-glow), transparent 60%)', filter: 'blur(100px)' }} 
        />
        <div 
          className="orb w-80 h-80 right-0 bottom-0" 
          style={{ background: 'radial-gradient(circle, rgba(0,154,76,0.1), transparent 60%)', filter: 'blur(80px)' }} 
        />

        <div className="section-wrap relative z-10 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'var(--text-primary)' }}
          >
            अजूनही प्रश्न आहेत?
          </h2>
          <p className="text-lg mb-12 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
            WhatsApp वर संपर्क करा — मोफत, बिना दबावाचे मार्गदर्शन मिळवा.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <a
              href="https://wa.me/919309009518?text=नमस्कार, मला विम्याविषयी माहिती हवी आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base py-4 px-8"
            >
              <WaIcon /> WhatsApp वर विचारा
            </a>
            <Link to="/faq" className="btn-glass text-base py-4 px-8">
              वारंवार प्रश्न पाहा
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
