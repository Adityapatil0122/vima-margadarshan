import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  { id: 1, title: 'हेल्थ विमा वयाच्या ३० वर्षीच का काढावा?', excerpt: 'वय कमी असताना प्रीमियम कमी असतो, Waiting Period लवकर संपतो. जेवढ्या लवकर काढाल, तेवढा फायदा.', category: 'हेल्थ विमा', date: 'जानेवारी १५, २०२५', readTime: '५ मिनिटे', accent: '#ef4444' },
  { id: 2, title: 'टर्म विमा vs LIC Jeevan Anand — कोण बरे?', excerpt: 'टर्म विमा कमी खर्चात कुटुंबाचे जास्त संरक्षण करतो. दोन्हींची तुलना सोप्या भाषेत.', category: 'टर्म विमा', date: 'जानेवारी ०५, २०२५', readTime: '७ मिनिटे', accent: '#60a5fa' },
  { id: 3, title: 'Zero Depreciation कार विमा घ्यावा का?', excerpt: 'नवीन गाडी असल्यास Zero Dep फायद्याचे. क्लेमवेळी घसारा वजा न होता पूर्ण रक्कम मिळते.', category: 'कार विमा', date: 'डिसेंबर २८, २०२४', readTime: '४ मिनिटे', accent: '#00e87a' },
  { id: 4, title: 'Cashless क्लेम कसा करावा? — पायरी पायरी', excerpt: 'TPA संपर्क, Pre-authorization, डिस्चार्ज वेळी काय करावे — सगळं सोप्या शब्दांत.', category: 'हेल्थ विमा', date: 'डिसेंबर १५, २०२४', readTime: '६ मिनिटे', accent: '#a78bfa' },
]

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="orb w-72 h-72 right-0 top-10" style={{ background: 'rgba(0,232,122,0.07)', filter: 'blur(100px)' }} />
        <div className="section-wrap relative z-10">
          <span className="tag mb-4 inline-block" style={{ animation: 'fadeUp 0.6s ease both' }}>📖 ब्लॉग</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif Devanagari', serif", animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            विमा ज्ञान — सोप्या मराठीत
          </h1>
          <p className="text-xl max-w-xl" style={{ color: '#9bbaa6', animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            हेल्थ, टर्म आणि कार विम्यावरील उपयुक्त लेख
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap">
          {/* Featured */}
          <div className="glass-card mb-10 hover-lift" style={{ background: 'rgba(0,232,122,0.04)', borderColor: 'rgba(0,232,122,0.12)' }}>
            <div className="flex flex-wrap items-start gap-4">
              <div className="flex-1">
                <span className="tag mb-3 inline-block">⭐ वैशिष्ट्यपूर्ण</span>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#e8f5ee' }}>
                  {posts[0].title}
                </h3>
                <p className="mb-4" style={{ color: '#9bbaa6', lineHeight: 1.8 }}>{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 mb-5" style={{ color: '#5a7a64', fontSize: '0.75rem' }}>
                  <span className="flex items-center gap-1"><Calendar size={12} />{posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{posts[0].readTime}</span>
                </div>
                <button className="btn-jade">
                  संपूर्ण लेख वाचा <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <h2 className="section-title mb-8">सर्व लेख</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <article key={post.id} className="glass-card hover-lift flex flex-col group" style={{ animationDelay: `${i * 0.08}s` }}>
                <div
                  className="inline-flex text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{ background: `${post.accent}18`, color: post.accent, border: `1px solid ${post.accent}30` }}
                >
                  {post.category}
                </div>
                <h3 className="text-base font-bold mb-2 flex-1 transition-colors duration-200 group-hover:text-jade-400"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#e8f5ee' }}>
                  {post.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: '#9bbaa6', lineHeight: 1.7 }}>{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3" style={{ color: '#5a7a64', fontSize: '0.7rem' }}>
                    <span className="flex items-center gap-1"><Calendar size={10} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
                  </div>
                  <button className="text-xs font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                    style={{ color: '#00e87a' }}>
                    वाचा <ArrowRight size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="glass-card-jade mt-14 max-w-lg mx-auto text-center p-10">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#e8f5ee' }}>नवीन लेख मिळवायचे आहेत?</h3>
            <p className="text-sm mb-6" style={{ color: '#9bbaa6' }}>WhatsApp ग्रुप जॉईन करा — नवीन लेख, टिप्स अपडेट मिळवा.</p>
            <a href="https://wa.me/919309009518?text=मला विमा मार्गदर्शनचे नवीन लेख हवे आहेत." target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex">
              WhatsApp ग्रुप जॉईन करा
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
