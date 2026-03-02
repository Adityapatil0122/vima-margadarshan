import { Link } from 'react-router-dom'
import { ExternalLink, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const quickLinks = [
  { to: '/health-insurance', label: 'हेल्थ विमा' },
  { to: '/term-insurance',   label: 'टर्म विमा' },
  { to: '/car-insurance',    label: 'कार विमा' },
  { to: '/blog',             label: 'ब्लॉग' },
  { to: '/faq',              label: 'प्रश्नोत्तरे' },
  { to: '/about',            label: 'आमच्याविषयी' },
  { to: '/contact',          label: 'संपर्क' },
]

const externalLinks = [
  { href: 'https://www.irdai.gov.in', label: 'IRDAI' },
  { href: 'https://www.hdfcergo.com', label: 'HDFC ERGO' },
  { href: 'https://www.tataaig.com',  label: 'Tata AIG' },
]

const WaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function Footer() {
  const { isDark } = useTheme()
  
  return (
    <footer 
      className="transition-colors duration-500"
      style={{ 
        background: isDark ? 'var(--bg-base)' : 'var(--bg-elevated)', 
        borderTop: '1px solid var(--border-jade)' 
      }}
    >
      <div className="section-wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  background: 'linear-gradient(135deg, var(--jade), var(--jade-dim))', 
                  boxShadow: '0 0 20px var(--jade-glow)' 
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="2.2">
                  <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7L12 2z" fill="rgba(255,255,255,0.15)" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span 
                className="font-bold text-lg"
                style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'var(--text-primary)' }}
              >
                विमा मार्गदर्शन
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              हेल्थ, टर्म आणि कार विम्याची सोपी, विश्वासार्ह माहिती मराठीत — तुमचे निर्णय सुज्ञ करण्यासाठी.
            </p>
            <div 
              className="glass-card p-4 text-xs"
              style={{ background: 'var(--jade-faint)', borderColor: 'var(--border-jade)' }}
            >
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                ⚠️ केवळ शैक्षणिक माहितीसाठी. विमा खरेदीपूर्वी नोंदणीकृत सल्लागाराशी संपर्क करा.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6" style={{ color: 'var(--jade)' }}>त्वरित दुवे</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150"
                      style={{ background: 'var(--jade)', opacity: 0.5 }}
                    />
                    <span className="group-hover:text-[var(--jade)] transition-colors duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External + Contact */}
          <div>
            <h3 className="text-sm font-bold mb-6" style={{ color: 'var(--jade)' }}>महत्त्वाचे दुवे</h3>
            <ul className="space-y-3 mb-8">
              {externalLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-2 group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:text-[var(--jade)] transition-colors duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919309009518"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5 px-5 inline-flex"
            >
              <WaIcon /> WhatsApp वर संदेश पाठवा
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="jade-line" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} विमा मार्गदर्शन. 
            <span className="flex items-center gap-1">
              <Heart size={12} fill="var(--jade)" style={{ color: 'var(--jade)' }} className="animate-pulse" />
              सर्व हक्क राखीव.
            </span>
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
            IRDAI मार्गदर्शक तत्त्वांनुसार | केवळ माहितीसाठी
          </p>
        </div>
      </div>
    </footer>
  )
}
