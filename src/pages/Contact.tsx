import { useState } from 'react'
import { CheckCircle, AlertCircle, MessageCircle, MapPin } from 'lucide-react'

interface FormData { name: string; email: string; phone: string; insuranceType: string; pincode: string; message: string }
interface FormErrors { name?: string; email?: string; phone?: string; insuranceType?: string; pincode?: string }

const insuranceTypes = ['हेल्थ विमा', 'टर्म विमा', 'कार विमा', 'इतर / सामान्य प्रश्न']

function validate(d: FormData): FormErrors {
  const e: FormErrors = {}
  if (!d.name.trim() || d.name.trim().length < 2) e.name = 'कृपया पूर्ण नाव द्या.'
  if (!d.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'वैध ईमेल द्या.'
  if (!d.phone.match(/^[6-9]\d{9}$/)) e.phone = '१०-अंकी मोबाईल नंबर द्या.'
  if (!d.insuranceType) e.insuranceType = 'विम्याचा प्रकार निवडा.'
  if (!d.pincode.match(/^\d{6}$/)) e.pincode = '६-अंकी पिनकोड द्या.'
  return e
}

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return (
    <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: '#f87171' }}>
      <AlertCircle size={11} />{msg}
    </p>
  )
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', insuranceType: '', pincode: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit() {
    const newErrors = validate(form)
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1200)
  }

  return (
    <>
      <section className="page-hero">
        <div className="orb w-64 h-64 right-0 top-0" style={{ background: 'rgba(0,232,122,0.08)', filter: 'blur(80px)' }} />
        <div className="section-wrap relative z-10">
          <span className="tag mb-4 inline-block" style={{ animation: 'fadeUp 0.6s ease both' }}>📞 संपर्क</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif Devanagari', serif", animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            आमच्याशी संपर्क करा
          </h1>
          <p className="text-lg max-w-lg" style={{ color: '#9bbaa6', animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
            विम्याबद्दल प्रश्न असतील तर फॉर्म भरा किंवा WhatsApp वर संदेश पाठवा — मोफत.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Info sidebar */}
            <div className="space-y-6">
              <a
                href="https://wa.me/919309009518"
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <WaIcon /> WhatsApp वर संदेश पाठवा
              </a>

              <div className="glass-card space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle size={18} style={{ color: '#00e87a', marginTop: '2px' }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#e8f5ee' }}>WhatsApp</p>
                    <p className="text-xs mt-0.5" style={{ color: '#9bbaa6' }}>+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} style={{ color: '#00e87a', marginTop: '2px' }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#e8f5ee' }}>कार्यालय</p>
                    <p className="text-xs mt-0.5" style={{ color: '#9bbaa6' }}>पुणे, महाराष्ट्र</p>
                  </div>
                </div>
              </div>

              <div className="glass-card-jade">
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#00e87a' }}>उपलब्धता</h3>
                <div className="space-y-2 text-xs" style={{ color: '#9bbaa6' }}>
                  <div className="flex justify-between"><span>सोम – शुक्र</span><span>सकाळी ९ – संध्या ७</span></div>
                  <div className="flex justify-between"><span>शनिवार</span><span>सकाळी १० – दुपारी २</span></div>
                  <div className="flex justify-between"><span>रविवार</span><span style={{ color: '#5a7a64' }}>बंद</span></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="glass-card text-center py-14">
                  <div style={{ animation: 'fadeUp 0.5s ease both' }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'rgba(0,232,122,0.1)', border: '1px solid rgba(0,232,122,0.2)' }}>
                      <CheckCircle size={32} style={{ color: '#00e87a' }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#e8f5ee' }}>
                      धन्यवाद! फॉर्म यशस्वीरित्या सबमिट झाला.
                    </h3>
                    <p className="text-sm mb-6" style={{ color: '#9bbaa6' }}>
                      आम्ही लवकरच WhatsApp किंवा ईमेलद्वारे संपर्क करू. (साधारण १ कार्यदिवस)
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', insuranceType: '', pincode: '', message: '' }) }}
                      className="btn-glass"
                    >
                      नवीन फॉर्म भरा
                    </button>
                  </div>
                </div>
              ) : (
                <div className="glass-card">
                  <h2 className="text-xl font-bold mb-7" style={{ color: '#e8f5ee' }}>माहिती फॉर्म</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: '#9bbaa6' }}>
                        पूर्ण नाव <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <input name="name" type="text" value={form.name} onChange={handleChange}
                        placeholder="उदा. रमेश पाटील"
                        className="form-input"
                        style={errors.name ? { borderColor: 'rgba(248,113,113,0.5)' } : {}} />
                      <FieldError msg={errors.name} />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: '#9bbaa6' }}>
                        मोबाईल नंबर <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="१०-अंकी नंबर" maxLength={10}
                        className="form-input"
                        style={errors.phone ? { borderColor: 'rgba(248,113,113,0.5)' } : {}} />
                      <FieldError msg={errors.phone} />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: '#9bbaa6' }}>
                        ईमेल पत्ता <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="yourname@email.com"
                        className="form-input"
                        style={errors.email ? { borderColor: 'rgba(248,113,113,0.5)' } : {}} />
                      <FieldError msg={errors.email} />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: '#9bbaa6' }}>
                        पिनकोड <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <input name="pincode" type="text" value={form.pincode} onChange={handleChange}
                        placeholder="411001" maxLength={6}
                        className="form-input"
                        style={errors.pincode ? { borderColor: 'rgba(248,113,113,0.5)' } : {}} />
                      <FieldError msg={errors.pincode} />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold mb-2" style={{ color: '#9bbaa6' }}>
                        विम्याचा प्रकार <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <select name="insuranceType" value={form.insuranceType} onChange={handleChange}
                        className="form-input"
                        style={errors.insuranceType ? { borderColor: 'rgba(248,113,113,0.5)' } : {}}>
                        <option value="">विम्याचा प्रकार निवडा...</option>
                        {insuranceTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <FieldError msg={errors.insuranceType} />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold mb-2" style={{ color: '#9bbaa6' }}>
                        प्रश्न / संदेश (ऐच्छिक)
                      </label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        rows={4} placeholder="तुमचा प्रश्न येथे लिहा..."
                        className="form-input resize-none" />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start">
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="btn-jade"
                      style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          सबमिट होत आहे...
                        </>
                      ) : 'फॉर्म सबमिट करा'}
                    </button>
                    <p className="text-xs self-center" style={{ color: '#5a7a64' }}>
                      * आवश्यक माहिती. तुमची माहिती सुरक्षित आहे.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
