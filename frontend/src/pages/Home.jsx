import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

const BasicIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" {...stroke}>
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <path d="M8 8h8M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" />
  </svg>
)
const BmiIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" {...stroke}>
    <path d="M4 20h16M7 20V10a5 5 0 0 1 10 0v10" />
    <path d="M12 10l2-2" />
  </svg>
)
const BoltIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" {...stroke}>
    <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />
  </svg>
)

const tools = [
  {
    to: '/basic',
    title: 'Basic calculator',
    text: 'Add, subtract, multiply and divide with results rounded to 2 decimal places.',
    cta: 'Open calculator',
    Icon: BasicIcon,
  },
  {
    to: '/bmi',
    title: 'BMI calculator',
    text: 'Enter height and weight in the units you prefer and see your BMI category.',
    cta: 'Check my BMI',
    Icon: BmiIcon,
  },
  {
    to: '/electricity',
    title: 'Electricity bill estimator',
    text: 'Turn your monthly kWh usage into an estimated bill in RM.',
    cta: 'Estimate my bill',
    Icon: BoltIcon,
  },
]

export default function Home() {
  return (
    <div>
      <section className="py-6 text-center sm:py-12">
        <div className="mb-4 flex justify-center">
          <Logo size={64} />
        </div>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">ChurrosDuo</h1>
        <p className="mx-auto mt-3 max-w-md text-lg text-ink-600 sm:text-xl">
          Smart little tools for everyday student life.
        </p>
      </section>

      <section className="mt-6 grid gap-5 sm:mt-10 md:grid-cols-3" aria-label="Calculators">
        {tools.map(({ to, title, text, cta, Icon }) => (
          <article
            key={to}
            className="flex flex-col rounded-3xl border border-cream-200 bg-white p-6 shadow-soft"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-200 text-churro-600">
              <Icon />
            </div>
            <h2 className="text-xl font-extrabold">{title}</h2>
            <p className="mt-2 flex-1 text-ink-600">{text}</p>
            <Link
              to={to}
              className="mt-6 rounded-2xl bg-churro-600 px-5 py-3 text-center font-extrabold text-white transition-colors hover:bg-churro-700"
            >
              {cta}
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}
