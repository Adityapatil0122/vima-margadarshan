import { Link } from 'react-router-dom'
import { Heart, CheckCircle, AlertCircle, ArrowRight, HelpCircle } from 'lucide-react'

const coverageItems = ['रुग्णालयात भरती खर्च', 'शस्त्रक्रिया खर्च', 'ICU / अतिदक्षता खर्च', 'डॉक्टर व औषधांचे शुल्क', 'प्री/पोस्ट हॉस्पिटलायझेशन', 'दिवसा उपचार (Daycare)', 'रोड अँब्युलन्स', 'आयुर्वेद / होमिओपॅथी (काही पॉलिसींमध्ये)']
const notCovered = ['आधीपासून असलेले आजार (Waiting Period नंतर)', 'कॉस्मेटिक शस्त्रक्रिया', 'नशेमुळे दुखापती', 'युद्ध / दंगलीत नुकसान', 'दात व डोळ्यांचे उपचार (काही पॉलिसींमध्ये)']

const types = [
  { title: 'इंडिविज्युअल हेल्थ विमा', desc: 'फक्त एका व्यक्तीसाठी. स्वतंत्र Sum Insured असतो.', best: 'तरुण अविवाहित व्यक्ती' },
  { title: 'फॅमिली फ्लोटर विमा', desc: 'संपूर्ण कुटुंबाला एकाच पॉलिसीत कव्हर.', best: 'विवाहित जोडपे व मुले' },
  { title: 'सिनियर सिटिझन विमा', desc: '६०+ वयाच्या व्यक्तींसाठी विशेष पॉलिसी.', best: 'आई-वडील / आजी-आजोबा' },
  { title: 'क्रिटिकल इलनेस विमा', desc: 'कॅन्सर, हार्ट अटॅक, स्ट्रोक — एकरकमी भरपाई.', best: 'उच्च जोखीम असलेल्या व्यक्ती' },
]

const faqs = [
  { q: 'Cashless आणि Reimbursement म्हणजे काय?', a: 'Cashless मध्ये रुग्णालय थेट कंपनीकडून पैसे घेते. Reimbursement मध्ये तुम्ही आधी भरता, नंतर परत मिळते.' },
  { q: 'Waiting Period म्हणजे काय?', a: 'पॉलिसी सुरू झाल्यावर ३०-९० दिवसांसाठी काही आजारांसाठी क्लेम करता येत नाही.' },
  { q: 'No Claim Bonus म्हणजे काय?', a: 'क्लेम न केल्यास पुढील वर्षी Sum Insured वाढतो किंवा प्रीमियम कमी होतो.' },
]

export default function HealthInsurance() {
  return (
    <>
      <section className="page-hero">
        <div className="orb w-80 h-80 right-0 top-0" style={{ background: 'rgba(239,68,68,0.06)', filter: 'blur(100px)' }} />
        <div className="section-wrap relative z-10">
          <div className="flex items-center gap-3 mb-4" style={{ animation: 'fadeUp 0.6s ease both' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <Heart size={22} style={{ color: '#ef4444' }} />
            </div>
            <span className="tag">हेल्थ इन्शुरन्स</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif Devanagari', serif", animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            हेल्थ विमा म्हणजे काय?
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: '#9bbaa6', animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            आजारपणाच्या वेळी आर्थिक संकट येऊ नये म्हणून हेल्थ विमा — रुग्णालय, औषधे, शस्त्रक्रिया सगळ्याचे संरक्षण.
          </p>
        </div>
      </section>

      {/* Explainer */}
      <section className="py-16">
        <div className="section-wrap">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="prose-mar">
              <h2 className="section-title">हेल्थ विमा कसा काम करतो?</h2>
              <p>हेल्थ विमा हा तुमच्या आणि विमा कंपनीमधील करार असतो. तुम्ही दरवर्षी प्रीमियम भराल, आणि आजारी पडल्यास कंपनी बिल भरते.</p>
              <p><strong>Sum Insured</strong> म्हणजे एका वर्षात जास्तीत जास्त किती रक्कम मिळेल ते. ₹५ लाखाचा विमा = वर्षात ₹५ लाखांपर्यंत कव्हर.</p>
              <p><strong>प्रीमियम</strong> तुमचे वय, आरोग्य, Sum Insured यावर ठरते. तरुण वयात विमा काढल्यास प्रीमियम खूपच कमी असतो.</p>
            </div>
            <div className="space-y-4">
              <div className="glass-card" style={{ background: 'rgba(34,197,94,0.05)', borderColor: 'rgba(34,197,94,0.15)' }}>
                <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#4ade80' }}>
                  <CheckCircle size={18} />काय कव्हर होते?
                </h3>
                <ul className="check-list">
                  {coverageItems.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="glass-card" style={{ background: 'rgba(239,68,68,0.05)', borderColor: 'rgba(239,68,68,0.15)' }}>
                <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#f87171' }}>
                  <AlertCircle size={18} />काय कव्हर होत नाही?
                </h3>
                <ul className="space-y-1.5">
                  {notCovered.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#9bbaa6' }}>
                      <span style={{ color: '#f87171' }}>✕</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16" style={{ background: 'rgba(13,22,16,0.6)' }}>
        <div className="section-wrap">
          <h2 className="section-title">हेल्थ विम्याचे प्रकार</h2>
          <p className="section-subtitle">तुमच्या परिस्थितीनुसार निवडा</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {types.map((t, i) => (
              <div key={i} className="glass-card hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#e8f5ee' }}>{t.title}</h3>
                <p className="text-sm mb-3" style={{ color: '#9bbaa6' }}>{t.desc}</p>
                <span className="tag">🎯 {t.best}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16">
        <div className="section-wrap">
          <h2 className="section-title">हेल्थ विमा घेताना लक्षात ठेवा</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '०१', t: 'वय लहान असताना विमा काढा', d: 'तरुण वयात प्रीमियम कमी असतो आणि Waiting Period लवकर संपतो.' },
              { n: '०२', t: 'Cashless हॉस्पिटल तपासा', d: 'तुमच्या शहरातील Cashless Network मध्ये कोणती रुग्णालये आहेत ते आधीच तपासा.' },
              { n: '०३', t: 'Co-payment तपासा', d: 'काही पॉलिसींमध्ये तुम्हाला काही टक्के खर्च स्वतः करावा लागतो — हेच Co-payment.' },
            ].map((tip, i) => (
              <div key={i} className="glass-card hover-lift">
                <span className="text-4xl font-bold" style={{ color: 'rgba(0,232,122,0.15)', fontFamily: "'Noto Serif Devanagari', serif" }}>{tip.n}</span>
                <h3 className="font-bold mt-3 mb-2" style={{ color: '#e8f5ee' }}>{tip.t}</h3>
                <p className="text-sm" style={{ color: '#9bbaa6' }}>{tip.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: 'rgba(13,22,16,0.6)' }}>
        <div className="section-wrap">
          <h2 className="section-title">वारंवार विचारले जाणारे प्रश्न</h2>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((f, i) => (
              <div key={i} className="glass-card">
                <h4 className="font-bold mb-2 flex items-start gap-2 text-sm" style={{ color: '#e8f5ee' }}>
                  <HelpCircle size={16} style={{ color: '#00e87a', marginTop: '2px', flexShrink: 0 }} />{f.q}
                </h4>
                <p className="text-sm pl-6" style={{ color: '#9bbaa6' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: 'rgba(7,13,9,0.8)', borderTop: '1px solid rgba(0,232,122,0.08)' }}>
        <div className="section-wrap text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#e8f5ee' }}>हेल्थ विम्याबद्दल प्रश्न आहे?</h2>
          <p className="mb-7" style={{ color: '#9bbaa6' }}>मोफत WhatsApp सल्लामसलत करा</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/919309009518?text=मला हेल्थ विम्याबद्दल माहिती हवी आहे." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp करा</a>
            <Link to="/contact" className="btn-glass">फॉर्म भरा <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
