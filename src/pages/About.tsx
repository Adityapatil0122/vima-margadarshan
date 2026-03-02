import { Shield, Users, BookOpen, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { icon: Shield,   t: 'विश्वासार्हता', d: 'IRDAI मार्गदर्शक तत्त्वांनुसार अचूक माहिती.' },
  { icon: BookOpen, t: 'सुलभता',        d: 'जटिल संकल्पना सोप्या मराठी भाषेत.' },
  { icon: Users,    t: 'निःपक्षपातीपणा', d: 'कोणत्याही कंपनीचा पक्ष न घेता तटस्थ माहिती.' },
  { icon: Award,    t: 'गुणवत्ता',       d: 'तज्ञांकडून तपासलेली माहिती.' },
]

const team = [
  { n: 'अनुराग देशपांडे', r: 'संस्थापक & विमा सल्लागार', e: '१२ वर्षे अनुभव' },
  { n: 'प्रिया जोशी',    r: 'लेखन संपादक',               e: 'मराठी वित्त लेखिका' },
  { n: 'विकास पाटील',    r: 'क्लेम तज्ञ',               e: '८ वर्षे IRDAI अनुभव' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="orb w-64 h-64 right-0 top-10" style={{ background: 'rgba(0,232,122,0.07)', filter: 'blur(80px)' }} />
        <div className="section-wrap relative z-10">
          <span className="tag mb-4 inline-block" style={{ animation: 'fadeUp 0.6s ease both' }}>🙋 आमच्याविषयी</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif Devanagari', serif", animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            आमची ओळख
          </h1>
          <p className="text-xl max-w-xl" style={{ color: '#9bbaa6', animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            महाराष्ट्रातील सामान्य माणसासाठी, त्याच्याच भाषेत.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose-mar">
              <h2 className="section-title">आमचे ध्येय</h2>
              <p>भारतात विमा क्षेत्र वाढत आहे, पण माहितीचा अभाव आणि भाषेचा अडथळा अनेकांना योग्य विमा घेण्यापासून थांबवतो.</p>
              <p><strong>विमा मार्गदर्शन</strong> हे पोर्टल त्याच उद्देशाने — हेल्थ, टर्म आणि कार विम्याची संपूर्ण माहिती सोप्या मराठीत, विनामूल्य.</p>
              <p>आम्ही कोणत्याही विमा कंपनीचे प्रतिनिधी नाही. आम्ही फक्त माहिती देतो — निर्णय घेणे तुमचे काम.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="glass-card hover-lift text-center py-6">
                  <v.icon className="mx-auto mb-3" size={26} style={{ color: '#00e87a' }} />
                  <h3 className="font-bold mb-1 text-sm" style={{ color: '#e8f5ee' }}>{v.t}</h3>
                  <p className="text-xs" style={{ color: '#9bbaa6' }}>{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'rgba(13,22,16,0.6)' }}>
        <div className="section-wrap">
          <h2 className="section-title text-center mb-10">आमची टीम</h2>
          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {team.map((m, i) => (
              <div key={i} className="glass-card hover-lift text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(0,232,122,0.1)', border: '1px solid rgba(0,232,122,0.2)' }}>
                  <span className="text-xl font-bold" style={{ color: '#00e87a' }}>{m.n[0]}</span>
                </div>
                <h3 className="font-bold text-sm" style={{ color: '#e8f5ee' }}>{m.n}</h3>
                <p className="text-xs mt-1" style={{ color: '#9bbaa6' }}>{m.r}</p>
                <span className="tag mt-2 inline-block text-xs">{m.e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'rgba(7,13,9,0.8)', borderTop: '1px solid rgba(0,232,122,0.08)' }}>
        <div className="section-wrap text-center">
          <h2 className="text-2xl font-bold mb-5" style={{ color: '#e8f5ee' }}>आमच्याशी संपर्क साधा</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-jade">संपर्क फॉर्म</Link>
            <a href="https://wa.me/919309009518" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp करा</a>
          </div>
        </div>
      </section>
    </>
  )
}
