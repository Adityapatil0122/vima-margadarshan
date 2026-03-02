import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import HealthInsurance from './pages/HealthInsurance'
import TermInsurance from './pages/TermInsurance'
import CarInsurance from './pages/CarInsurance'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Contact from './pages/Contact'
import Calculator from './pages/Calculator'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/"                  element={<Home />} />
            <Route path="/health-insurance"  element={<HealthInsurance />} />
            <Route path="/term-insurance"    element={<TermInsurance />} />
            <Route path="/car-insurance"     element={<CarInsurance />} />
            <Route path="/blog"              element={<Blog />} />
            <Route path="/faq"               element={<FAQ />} />
            <Route path="/about"             element={<About />} />
            <Route path="/contact"           element={<Contact />} />
            <Route path="/calculator"        element={<Calculator />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
