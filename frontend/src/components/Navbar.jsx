import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/basic', label: 'Basic' },
  { to: '/bmi', label: 'BMI' },
  { to: '/electricity', label: 'Electricity' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-cream-200 bg-cream-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link to="/" className="flex items-center gap-2 rounded-xl">
          <Logo />
          <span className="text-xl font-black tracking-tight">ChurrosDuo</span>
        </Link>
        <ul className="-mx-1 flex gap-1 overflow-x-auto">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `block whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    isActive ? 'bg-churro-600 text-white' : 'text-ink-600 hover:bg-cream-200'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
