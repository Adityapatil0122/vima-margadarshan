import { Link } from 'react-router-dom'
import { Car, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react'

const comprehensiveCovers = ['अपघातात गाडीचे नुकसान', 'चोरी', 'आग, पूर, भूकंप', 'थर्ड-पार्टी नुकसान', 'चालकाचे वैयक्तिक अपघात कव्हर']
const riders = [
  { n: 'Zero Depreciation', d: 'नुकसान भरपाईत घसारा वजा होत नाही. नवीन गाड्यांसाठी उपयुक्त.' },
  { n: 'Roadside Assistance', d: 'रस्त्यात बंद पडल्यास टो, मेकॅनिक, इंधन पाठवण्याची सेवा.' },
  { n: 'Engine Protect', d: 'पाण्यात गेलेल्या किंवा तेलाशिवाय चाललेल्या इंजिनचे नुकसान.' },
  { n: 'NCB Protect', d: 'एक क्लेम केल्यावरही No Claim Bonus टिकवण्याची सुविधा.' },
]

export default function CarInsurance() {
  return (
    <>
      <section className="page-hero">
        <div className="orb w-80 h-80 right-0 top-0" style={{ background: 'rgba(0,232,122,0.07)', filter: 'blur(100px)' }} />
        <div className="section-wrap relative z-10">
          <div className="flex items-center gap-3 mb-4" style={{ animation: 'fadeUp 0.6s ease both' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(0,232,122,0.1)', border: '1px solid rgba(0,232,122,0.2)' }}>
              <Car size={22} style={{ color: '#00e87a' }} />
            </div>
            <span className="tag">कार इन्शुरन्स</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif Devanagari', serif", animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            कार विमा म्हणजे काय?
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: '#9bbaa6', animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            भारतात Third-Party विमा कायद्याने बंधनकारक आहे. Comprehensive विमा तुम्हाला आणि गाडीला दोन्हींना संरक्षण देतो.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap">
          <h2 className="section-title">कार विम्याचे दोन मुख्य प्रकार</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card hover-lift" style={{ background: 'rgba(234,179,8,0.04)', borderColor: 'rgba(234,179,8,0.15)' }}>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: '#facc15' }}>
                <AlertTriangle size={20} />थर्ड-पार्टी विमा
              </h3>
              <span className="tag mb-3 inline-block" style={{ background: 'rgba(234,179,8,0.1)', color: '#facc15', borderColor: 'rgba(234,179,8,0.2)' }}>⚖️ कायद्याने बंधनकारक</span>
              <p className="text-sm mb-4" style={{ color: '#9bbaa6', lineHeight: 1.8 }}>
                तुमच्या गाडीमुळे दुसऱ्याला दुखापत झाली/मालमत्तेचे नुकसान झाले — कंपनी त्यांना भरपाई देते.
              </p>
              <p className="text-xs font-semibold mb-1" style={{ color: '#4ade80' }}>✅ कव्हर: तृतीय पक्षाचे जीव व मालमत्ता</p>
              <p className="text-xs" style={{ color: '#9bbaa6' }}>❌ कव्हर नाही: स्वतःच्या गाडीचे नुकसान</p>
            </div>
            <div className="glass-card hover-lift" style={{ background: 'rgba(0,232,122,0.05)', borderColor: 'rgba(0,232,122,0.15)' }}>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: '#00e87a' }}>
                <CheckCircle size={20} />कॉम्प्रिहेन्सिव्ह विमा
              </h3>
              <span className="tag mb-3 inline-block">⭐ शिफारस केलेला</span>
              <p className="text-sm mb-4" style={{ color: '#9bbaa6', lineHeight: 1.8 }}>
                Third-Party + स्वतःच्या गाडीचे संरक्षण — दोन्ही एकत्र.
              </p>
              <ul className="check-list">
                {comprehensiveCovers.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'rgba(13,22,16,0.6)' }}>
        <div className="section-wrap">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="prose-mar">
              <h2 className="section-title">IDV म्हणजे काय?</h2>
              <p>IDV म्हणजे विमा कंपनी तुमच्या गाडीला किती किमतीची मानते. गाडी चोरीला गेली/Total Loss झाली तर IDV रक्कम मिळते.</p>
              <p><strong>IDV जास्त</strong> = प्रीमियम जास्त + क्लेम मोठा. <strong>IDV कमी</strong> = प्रीमियम कमी + क्लेम कमी. नवीन गाडीसाठी जास्त IDV फायद्याचे.</p>
              <div className="glass-card-jade mt-5">
                <p className="text-sm font-semibold mb-1" style={{ color: '#00e87a' }}>📌 उदाहरण</p>
                <p className="text-sm" style={{ color: '#9bbaa6' }}>गाडीची किंमत: ₹८ लाख | ५ वर्षांनंतर IDV: ≈ ₹४-५ लाख</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4" style={{ color: '#e8f5ee', fontSize: '1.1rem' }}>Add-on Riders</h3>
              <div className="space-y-3">
                {riders.map((r, i) => (
                  <div key={i} className="glass-card py-3 hover-lift">
                    <p className="font-semibold text-sm mb-1" style={{ color: '#00e87a' }}>{r.n}</p>
                    <p className="text-xs" style={{ color: '#9bbaa6' }}>{r.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap">
          <h2 className="section-title">विमा नूतनीकरण टिप्स</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: 'वेळेत नूतनीकरण करा', d: 'Expire झाल्यानंतर केल्यास गाडी निरीक्षण लागते आणि NCB जातो.' },
              { t: 'NCB जपा', d: 'दरवर्षी वाढतो — ५ वर्षांनंतर ५०% सवलत मिळू शकते.' },
              { t: 'Online Compare करा', d: 'PolicyBazaar, Coverfox इ. वर विविध कंपन्यांचे प्रीमियम compare करा.' },
            ].map((t, i) => (
              <div key={i} className="glass-card hover-lift">
                <h3 className="font-bold mb-2" style={{ color: '#e8f5ee' }}>{t.t}</h3>
                <p className="text-sm" style={{ color: '#9bbaa6' }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: 'rgba(7,13,9,0.8)', borderTop: '1px solid rgba(0,232,122,0.08)' }}>
        <div className="section-wrap text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#e8f5ee' }}>कार विम्याबद्दल प्रश्न आहेत?</h2>
          <p className="mb-7" style={{ color: '#9bbaa6' }}>WhatsApp वर बोला</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/919309009518?text=मला कार विम्याबद्दल माहिती हवी आहे." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp करा</a>
            <Link to="/contact" className="btn-glass">फॉर्म भरा <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
