import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GPOBanner from './components/GPOBanner'
import Products from './components/Products'
import ServiceArea from './components/ServiceArea'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <GPOBanner />
      <Products />
      <ServiceArea />
      <Contact />
    </div>
  )
}
