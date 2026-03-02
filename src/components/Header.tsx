import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/',                 label: 'मुखयपृषठ' },
  { to: '/health-insurance', label: 'हेल्थ विमा' },
  { to: '/term-insurance',   label: 'टर्म वमा' },
  { to: '/car-insurance',    label: 'कार वमा' },
  { to: '/calculator',       label: 'कॅकयुलटर' },
  { to: '/blog',             label: 'बल' },
  { to: '/faq',              label: 'प्रशनोत्तरे' },
  { to: '/about',            label: 'आमचयाविषयी' },
  { to: '/contact',          label: 'संपरक' },
]

const WaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

// Premium Theme Toggle Button
function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-xl flex items-center justify-center group overflow-hidden"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
          : 'linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.06) 100%)',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: isDark 
            ? 'radial-gradient(circle at center, rgba(255,200,50,0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(100,100,200,0.15) 0%, transparent 70%)',
        }}
      />
      
      {/* Sun Icon */}
      <div
        className="absolute transition-all duration-500 ease-out"
        style={{
          transform: isDark ? 'rotate(-90deg) scale(0)' : 'rotate(0deg) scale(1)',
          opacity: isDark ? 0 : 1,
        }}
      >
        <Sun 
          size={20} 
          className="transition-all duration-300"
          style={{ 
            color: '#f59e0b',
            filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))',
          }}
        />
      </div>
      
      {/* Moon Icon */}
      <div
        className="absolute transition-all duration-500 ease-out"
        style={{
          transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
          opacity: isDark ? 1 : 0,
        }}
      >
        <Moon 
          size={20}
          className="transition-all duration-300" 
          style={{ 
            color: '#a5b4fc',
            filter: 'drop-shadow(0 0 8px rgba(165, 180, 252, 0.5))',
          }}
        />
      </div>

      {/* Animated stars for dark mode */}
      {isDark && (
        <>
          <span className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '8px', right: '10px', opacity: 0.6 }} />
          <span className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ bottom: '10px', left: '8px', opacity: 0.4, animationDelay: '0.5s' }} />
        </>
      )}
    </button>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { isDark } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}
      style={{
        boxShadow: scrolled 
          ? isDark 
            ? '0 4px 30px rgba(0,0,0,0.5)' 
            : '0 4px 30px rgba(0,0,0,0.08)'
          : 'none'
      }}
    >
      <div className="section-wrap">
        <div className="flex items-center justify-between h-18 py-2">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
              style={{
                background: 'linear-gradient(135deg, #00e87a, #009a4c)',
                boxShadow: '0 0 20px rgba(0,232,122,0.4)'
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7L12 2z" fill="rgba(255,255,255,0.15)" stroke="white"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <span
                className="text-base font-bold leading-tight block transition-all duration-300"
                style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'var(--text-primary)' }}
              >
                विमा मार्गदर्शन
              </span>
              <span className="text-[10px] leading-none block" style={{ color: 'var(--jade)', opacity: 0.9 }}>
                सोप्या मराठीत
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-sm ${pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919309009518?text=नमस्कार, मला विम्याविषयी माहिती हवी आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex btn-whatsapp text-sm py-2.5 px-5"
            >
              <WaIcon /> WhatsApp करा
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2.5 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'var(--glass-bg)', 
                border: '1px solid var(--border-glass)', 
                color: 'var(--text-primary)' 
              }}
              aria-label="मेनू"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  size={20} 
                  className="absolute transition-all duration-300"
                  style={{ 
                    transform: open ? 'rotate(180deg) scale(0)' : 'rotate(0deg) scale(1)',
                    opacity: open ? 0 : 1 
                  }}
                />
                <X 
                  size={20} 
                  className="absolute transition-all duration-300"
                  style={{ 
                    transform: open ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0)',
                    opacity: open ? 1 : 0 
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500 ease-out"
        style={{
          maxHeight: open ? '500px' : '0px',
          opacity: open ? 1 : 0,
          background: isDark ? 'rgba(7,13,9,0.97)' : 'rgba(255,255,255,0.97)',
          borderBottom: open ? `1px solid var(--border-jade)` : 'none',
          backdropFilter: 'blur(30px)',
        }}
      >
        <nav className="section-wrap py-4 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-base px-4 py-3 ${pathname === link.to ? 'active' : ''}`}
              style={{ 
                animation: open ? `fadeUp 0.4s ${i * 0.05}s ease both` : 'none'
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919309009518?text=नमस्कार, मला विम्याविषयी माहिती हवी आहे."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-3 justify-center"
            style={{ animation: open ? 'fadeUp 0.4s 0.4s ease both' : 'none' }}
          >
            <WaIcon /> WhatsApp करा
          </a>
        </nav>
      </div>
    </header>
  )
}
