import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

interface FAQItem { q: string; a: string; category: string }

const faqs: FAQItem[] = [
  { category: 'सामान्य', q: 'विमा म्हणजे नक्की काय?', a: 'विमा म्हणजे तुम्ही आणि विमा कंपनी यांच्यातील करार. तुम्ही प्रीमियम भराल, एखाद्या अडचणीत कंपनी आर्थिक मदत करेल.' },
  { category: 'सामान्य', q: 'विमा कोणाकडून घ्यावा?', a: 'IRDAI नोंदणीकृत कंपनी किंवा दलालाकडून घ्या. Claim Settlement Ratio ९५%+ असलेल्या कंपन्यांना प्राधान्य द्या.' },
  { category: 'सामान्य', q: 'प्रीमियम म्हणजे काय?', a: 'प्रीमियम म्हणजे विमा कंपनीला द्यायची नियमित रक्कम. हे वय, आरोग्य, आणि Sum Insured यावर ठरते.' },
  { category: 'सामान्य', q: 'Sum Insured आणि Sum Assured मध्ये फरक काय?', a: 'Sum Insured हेल्थ/कार विम्यात वापरतात. Sum Assured जीवन विम्यात — मृत्यूनंतर मिळणारी रक्कम.' },
  { category: 'हेल्थ विमा', q: 'कोणत्या वयात हेल्थ विमा घ्यावा?', a: '२५-३० वयात काढल्यास प्रीमियम कमी आणि Waiting Period लवकर पूर्ण होतो. जेवढे लवकर तेवढे चांगले.' },
  { category: 'हेल्थ विमा', q: 'Pre-existing Disease ला कव्हर मिळते का?', a: 'बहुतेक पॉलिसींमध्ये ३-४ वर्षांचा Waiting Period असतो. त्यानंतर Pre-existing आजारांनाही कव्हर मिळते.' },
  { category: 'हेल्थ विमा', q: 'Cashless आणि Reimbursement मध्ये काय फरक?', a: 'Cashless: नेटवर्क रुग्णालयात कंपनी थेट पैसे देते. Reimbursement: तुम्ही आधी भराल, नंतर परत मिळेल.' },
  { category: 'हेल्थ विमा', q: 'हेल्थ विम्याचा प्रीमियम किती असतो?', a: '३० वर्षांच्या व्यक्तीसाठी ₹५ लाख कव्हरसाठी साधारण ₹४,०००-८,००० वार्षिक प्रीमियम.' },
  { category: 'टर्म विमा', q: 'टर्म विमा घेण्याची योग्य वेळ कोणती?', a: 'कमावणे सुरू केल्याबरोबर किंवा लग्न/मूल झाल्यावर लगेच घ्यावा. लवकर घेतल्यास प्रीमियम कमी असतो.' },
  { category: 'टर्म विमा', q: 'किती Sum Assured असावे?', a: 'वार्षिक उत्पन्नाच्या १०-१५ पट + सर्व कर्जे. उदा. उत्पन्न ₹५ लाख + गृहकर्ज ₹३० लाख = ₹१ कोटी+.' },
  { category: 'टर्म विमा', q: 'टर्म विमा रद्द केला तर पैसे परत मिळतात का?', a: 'साधारण टर्म विम्यात नाही. Return of Premium (ROP) पर्याय निवडला तर कालावधी संपल्यावर परत मिळतो.' },
  { category: 'कार विमा', q: 'Third-Party आणि Comprehensive मध्ये काय फरक?', a: 'Third-Party: फक्त दुसऱ्याला झालेल्या नुकसानाची भरपाई. Comprehensive: स्वतःची गाडी + दुसऱ्याचेही कव्हर.' },
  { category: 'कार विमा', q: 'No Claim Bonus म्हणजे काय?', a: 'क्लेम न केल्यास पुढील वर्षी प्रीमियमवर सवलत. दरवर्षी वाढते — ५ वर्षांनंतर ५०% पर्यंत सवलत.' },
  { category: 'कार विमा', q: 'Zero Depreciation Add-on कधी घ्यावा?', a: 'गाडी ५ वर्षांपेक्षा नवीन असल्यास फायद्याचे. क्लेमवेळी घसारा वजा न होता पूर्ण रक्कम मिळते.' },
]

const categories = ['सर्व', 'सामान्य', 'हेल्थ विमा', 'टर्म विमा', 'कार विमा']

function FAQItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        background: open ? 'rgba(0,232,122,0.05)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${open ? 'rgba(0,232,122,0.2)' : 'rgba(255,255,255,0.06)'}`,
        animation: `fadeUp 0.5s ${index * 0.04}s ease both`,
        opacity: 0,
        animationFillMode: 'forwards',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex items-start justify-between gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-sm md:text-base leading-relaxed" style={{ color: '#e8f5ee' }}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 mt-0.5 transition-all duration-300"
          style={{ color: '#00e87a', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-0">
          <div className="h-px mb-4" style={{ background: 'rgba(0,232,122,0.1)' }} />
          <p className="text-sm leading-relaxed" style={{ color: '#9bbaa6' }}>{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('सर्व')
  const filtered = activeCategory === 'सर्व' ? faqs : faqs.filter(f => f.category === activeCategory)

  return (
    <>
      <section className="page-hero">
        <div className="orb w-80 h-80 right-0 top-0" style={{ background: 'rgba(0,232,122,0.07)', filter: 'blur(100px)' }} />
        <div className="section-wrap relative z-10">
          <span className="tag mb-4 inline-block" style={{ animation: 'fadeUp 0.6s ease both' }}>❓ प्रश्नोत्तरे</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif Devanagari', serif", animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            वारंवार विचारले जाणारे प्रश्न
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#9bbaa6', animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            विम्याबद्दलचे सर्वात सामान्य प्रश्न आणि त्यांची सोपी उत्तरे.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: activeCategory === cat ? 'linear-gradient(135deg, #00e87a, #00c45f)' : 'rgba(255,255,255,0.04)',
                  color: activeCategory === cat ? '#030604' : '#9bbaa6',
                  border: `1px solid ${activeCategory === cat ? 'transparent' : 'rgba(255,255,255,0.07)'}`,
                  boxShadow: activeCategory === cat ? '0 0 15px rgba(0,232,122,0.25)' : 'none',
                  fontWeight: activeCategory === cat ? '700' : '500',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="max-w-3xl space-y-3">
            {filtered.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-2xl p-8 max-w-xl"
            style={{ background: 'rgba(0,232,122,0.04)', border: '1px solid rgba(0,232,122,0.12)' }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: '#e8f5ee' }}>तुमचा प्रश्न यादीत नाही?</h3>
            <p className="text-sm mb-5" style={{ color: '#9bbaa6' }}>
              आमच्याशी WhatsApp वर संपर्क करा — मोफत उत्तर मिळवा.
            </p>
            <a
              href="https://wa.me/919309009518?text=माझा प्रश्न आहे: "
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              प्रश्न विचारा
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
