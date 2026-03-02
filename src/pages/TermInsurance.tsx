import { Link } from 'react-router-dom'
import { FileText, CheckCircle, ArrowRight, TrendingDown } from 'lucide-react'

const benefits = ['कमी प्रीमियममध्ये जास्त कव्हर (₹५०० मासिक = ₹१ कोटी)', 'कुटुंबाला एकरकमी (Lump Sum) रक्कम', 'Income Tax कलम 80C अंतर्गत करसवलत', 'मृत्यूनंतर कर्ज फेडण्यास मदत', 'Add-on Rider जोडण्याचा पर्याय']
const steps = [
  { t: 'गरज ओळखा', d: 'उत्पन्न, कर्जे, आणि कुटुंबाच्या खर्चाचा विचार करा.' },
  { t: 'Sum Assured ठरवा', d: 'वार्षिक उत्पन्नाच्या १०-१५ पट कव्हर पुरेसे मानले जाते.' },
  { t: 'पॉलिसी कालावधी निवडा', d: '२५-३५ वर्षांचा कालावधी — रिटायरमेंटपर्यंत कव्हर.' },
  { t: 'CSR तपासा', d: 'IRDAI डेटानुसार ९८%+ CSR असलेल्या कंपनीची निवड करा.' },
]

export default function TermInsurance() {
  return (
    <>
      <section className="page-hero">
        <div className="orb w-80 h-80 right-0 top-0" style={{ background: 'rgba(59,130,246,0.07)', filter: 'blur(100px)' }} />
        <div className="section-wrap relative z-10">
          <div className="flex items-center gap-3 mb-4" style={{ animation: 'fadeUp 0.6s ease both' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <FileText size={22} style={{ color: '#60a5fa' }} />
            </div>
            <span className="tag">टर्म इन्शुरन्स</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif Devanagari', serif", animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            टर्म विमा म्हणजे काय?
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: '#9bbaa6', animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            तुमच्या अनुपस्थितीतही कुटुंबाचे स्वप्न अबाधित राहावे — सर्वात स्वस्त आणि उपयुक्त विमा प्रकार.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="prose-mar">
              <h2 className="section-title">टर्म विमा कसा काम करतो?</h2>
              <p>टर्म विमा सर्वात साधा जीवन विमा प्रकार. तुम्ही ठराविक कालावधीसाठी पॉलिसी घेता. त्या कालावधीत निधन झाल्यास कंपनी Sum Assured देते.</p>
              <p><strong>लक्षात ठेवा:</strong> पॉलिसी संपेपर्यंत जिवंत राहिल्यास पैसे परत मिळत नाहीत (ROP पर्याय वेगळा). म्हणूनच प्रीमियम खूप कमी असतो.</p>
              <p><strong>उदाहरण:</strong> ३० वर्षांच्या व्यक्तीला ₹१ कोटींचा टर्म विमा महिन्याला फक्त ₹५००-७०० मध्ये मिळू शकतो.</p>
            </div>
            <div className="glass-card-jade h-fit">
              <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#00e87a' }}>
                <CheckCircle size={18} />टर्म विम्याचे फायदे
              </h3>
              <ul className="check-list">
                {benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16" style={{ background: 'rgba(13,22,16,0.6)' }}>
        <div className="section-wrap">
          <h2 className="section-title">टर्म विमा vs एंडॉवमेंट विमा</h2>
          <div className="overflow-x-auto">
            <table className="table-dark">
              <thead>
                <tr>
                  <th>मुद्दा</th>
                  <th>टर्म विमा</th>
                  <th>एंडॉवमेंट विमा</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['प्रीमियम', 'खूप कमी ✅', 'जास्त'],
                  ['Sum Assured', 'जास्त (₹१ कोटी+) ✅', 'कमी'],
                  ['मॅच्युरिटी बेनिफिट', 'नाही (ROP सोडून)', 'आहे'],
                  ['गुंतवणूक घटक', 'नाही', 'आहे'],
                  ['कुटुंब संरक्षण', 'उत्कृष्ट ✅', 'कमी'],
                ].map(([l, t, e], i) => (
                  <tr key={i}>
                    <td style={{ color: '#e8f5ee', fontWeight: 600 }}>{l}</td>
                    <td style={{ color: '#4ade80' }}>{t}</td>
                    <td>{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="section-wrap">
          <h2 className="section-title">टर्म विमा कसा निवडाल?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="glass-card hover-lift text-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(0,232,122,0.1)', border: '1px solid rgba(0,232,122,0.2)' }}>
                  <span className="text-sm font-bold" style={{ color: '#00e87a' }}>{i + 1}</span>
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: '#e8f5ee' }}>{s.t}</h3>
                <p className="text-xs" style={{ color: '#9bbaa6' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'rgba(13,22,16,0.6)' }}>
        <div className="section-wrap">
          <div className="glass-card-jade max-w-2xl mx-auto">
            <TrendingDown size={26} style={{ color: '#00e87a', marginBottom: '0.75rem' }} />
            <h3 className="text-xl font-bold mb-3" style={{ color: '#e8f5ee' }}>Claim Settlement Ratio (CSR) म्हणजे काय?</h3>
            <p className="text-sm" style={{ color: '#9bbaa6', lineHeight: 1.9 }}>
              CSR म्हणजे कंपनीने किती टक्के क्लेम मंजूर केले. ९८% CSR = १०० पैकी ९८ क्लेम दिले.
              IRDAI दरवर्षी हे प्रकाशित करते — नेहमी ९५%+ CSR असलेल्या कंपन्यांकडे बघा.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: 'rgba(7,13,9,0.8)', borderTop: '1px solid rgba(0,232,122,0.08)' }}>
        <div className="section-wrap text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#e8f5ee' }}>टर्म विम्याबद्दल अधिक जाणून घ्यायचे?</h2>
          <p className="mb-7" style={{ color: '#9bbaa6' }}>मोफत मार्गदर्शन मिळवा</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/919309009518?text=मला टर्म विम्याबद्दल माहिती हवी आहे." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp करा</a>
            <Link to="/contact" className="btn-glass">फॉर्म भरा <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
