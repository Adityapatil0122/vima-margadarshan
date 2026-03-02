import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Simple calculator logic
const calculatePremium = (age: number, sumAssured: number, familySize: number, cityTier: string) => {
  // Base rates
  let baseRate = 300
  if (age >= 31 && age <= 45) baseRate = 500
  if (age >= 46 && age <= 60) baseRate = 800
  if (age >= 61) baseRate = 1200
  
  // Calculate premium
  const basePremium = (sumAssured / 100000) * baseRate
  const familyMultiplier = 1 + (familySize - 1) * 0.5
  const cityMultiplier = cityTier === 'tier1' ? 1.2 : cityTier === 'tier2' ? 1.1 : 1.0
  
  const finalPremium = basePremium * familyMultiplier * cityMultiplier
  
  return {
    annual: Math.round(finalPremium),
    monthly: Math.round(finalPremium / 12)
  }
}

export default function Calculator() {
  const [formData, setFormData] = useState({
    age: 30,
    sumAssured: 500000,
    familySize: 1,
    cityTier: 'tier2'
  })
  
  const [result, setResult] = useState<{annual: number, monthly: number} | null>(null)
  
  const handleCalculate = () => {
    const calc = calculatePremium(
      formData.age,
      formData.sumAssured,
      formData.familySize,
      formData.cityTier
    )
    setResult(calc)
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-jade-500/5 to-transparent" />
        
        <div className="section-wrap relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-jade-500 to-jade-600 shadow-lg shadow-jade-500/30">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="tag">विमा कॅकयुलटर</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'var(--text-primary)' }}>
              सवःी विमा रकक <span className="text-jade-gradient">कॅकयुलटरा</span>
            </h1>
            
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
             आपलया गरजनसार योगय विमा कवह नवा आणि अंदाजे प्रीमयम कढ
            </p>
          </div>
          
          {/* Calculator Card */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card gradient-border">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Input Form */}
                <div>
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                    <svg className="w-6 h-6 text-jade-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    वमा कॅकयुलटर
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Age Input */}
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                       वय (वरषे)
                      </label>
                      <div className="relative">
                        <input
                          type="range"
                          min="18"
                          max="70"
                          value={formData.age}
                          onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                          <span>18</span>
                          <span className="font-bold text-jade-500">{formData.age}</span>
                          <span>70</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Sum Assured */}
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                        समअयोरड (₹)
                      </label>
                      <select
                        value={formData.sumAssured}
                        onChange={(e) => setFormData({...formData, sumAssured: parseInt(e.target.value)})}
                        className="form-input w-full"
                      >
                        <option value={300000}>₹3 लख</option>
                        <option value={500000}>₹5 लाख</option>
                        <option value={1000000}>₹10 लाख</option>
                        <option value={1500000}>₹15 लख</option>
                        <option value={2000000}>₹20 लाख</option>
                        <option value={2500000}>₹25 लाख</option>
                        <option value={3000000}>₹30 लाख</option>
                        <option value={5000000}>₹50 लख</option>
                        <option value={10000000}>₹1 कोटी</option>
                      </select>
                    </div>
                    
                    {/* Family Size */}
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                        कुटुंबतील सदस्य संख्या
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {[1,2,3,4].map(num => (
                          <button
                            key={num}
                            onClick={() => setFormData({...formData, familySize: num})}
                            className={`py-3 rounded-xl font-semibold transition-all ${
                              formData.familySize === num 
                                ? 'bg-jade-500 text-white shadow-lg' 
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                          >
                            {num} {num === 4 ? '+' : ''}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* City Tier */}
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                       शहराचा प्रकार
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'tier1', label: 'Tier 1 (मुंबई/दलली)' },
                          { value: 'tier2', label: 'Tier 2 (पुणे/नागपूर)' },
                          { value: 'tier3', label: 'Tier 3 (इतर)' }
                        ].map(tier => (
                          <button
                            key={tier.value}
                            onClick={() => setFormData({...formData, cityTier: tier.value})}
                            className={`py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                              formData.cityTier === tier.value 
                                ? 'bg-jade-500 text-white shadow-lg' 
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                          >
                            {tier.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={handleCalculate}
                      className="btn-jade w-full py-4 text-lg"
                    >
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      प्रीमय कॅकयुलटरा
                    </button>
                  </div>
                </div>
                
                {/* Results */}
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <svg className="w-5 h-5 text-jade-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    अंदाजे प्रीमियम
                  </h3>
                  
                  {result ? (
                    <div className="space-y-5">
                      <div className="glass-card bg-jade-faint border border-jade-500/20">
                        <div className="flex justify-between items-center mb-3">
                          <span style={{ color: 'var(--text-secondary)' }}>वरक प्रीमियम</span>
                          <span className="text-2xl font-bold" style={{ color: 'var(--jade)' }}>
                            ₹{result.annual.toLocaleString('en-IN')}/-
                          </span>
                        </div>
                        <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          महन्याचे: ₹{result.monthly.toLocaleString('en-IN')}/-
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <Link to="/health-insurance" className="btn-glass w-full justify-center py-3">
                          हेल्थ विमा जाणून घया
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center" style={{ color: 'var(--text-muted)' }}>
                        <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <p>कॅकयुलटर करणयाठी वरीलफॉरमभरा</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20" style={{ background: 'var(--bg-surface)' }}>
        <div className="section-wrap">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              आमचे कॅकयुलटर वैष्ट्ये
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              अचूक गणना आणि तजजञला याचा समावश            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center group hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-jade-500/20 to-jade-600/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-jade-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>अचूकगणना</h3>
              <p style={{ color: 'var(--text-secondary)' }}>दर्जादार अलगोरदम वापरून सटीक प्रीमयमगणना</p>
            </div>
            
            <div className="glass-card text-center group hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-jade-500/20 to-jade-600/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-jade-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>कुटुंबवकलप</h3>
              <p style={{ color: 'var(--text-secondary)' }}>एकच पॉसीत संपूरण कुटुंबसी कव्हा</p>
            </div>
            
            <div className="glass-card text-center group hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-jade-500/20 to-jade-600/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-jade-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>समरटफीचर्स</h3>
              <p style={{ color: 'var(--text-secondary)' }}>आपलया गरजेनुसारत्जञलला आणि शफसी</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}