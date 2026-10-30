import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import BasicCalculator from './components/BasicCalculator.jsx'
import BmiCalculator from './components/BmiCalculator.jsx'
import ElectricityCalculator from './components/ElectricityCalculator.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 py-8 sm:py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic" element={<BasicCalculator />} />
          <Route path="/bmi" element={<BmiCalculator />} />
          <Route path="/electricity" element={<ElectricityCalculator />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="py-6 text-center text-sm text-ink-400">
        © {new Date().getFullYear()} ChurrosDuo
      </footer>
    </div>
  )
}
