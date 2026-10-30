import { Link } from 'react-router-dom'

const fieldClass =
  'w-full rounded-2xl border border-cream-200 bg-white px-4 py-3 text-base font-semibold text-ink-900 placeholder:text-ink-400 focus:border-churro-500'

export function CalculatorCard({ title, description, children }) {
  return (
    <section className="mx-auto max-w-lg">
      <Link to="/" className="mb-4 inline-block rounded-lg text-sm font-bold text-churro-600 hover:underline">
        ← Back to home
      </Link>
      <div className="rounded-3xl border border-cream-200 bg-white p-6 shadow-soft sm:p-8">
        <h1 className="text-2xl font-black sm:text-3xl">{title}</h1>
        <p className="mt-1 text-ink-600">{description}</p>
        <div className="mt-6 space-y-4">{children}</div>
      </div>
    </section>
  )
}

export function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-ink-600">
        {label}
      </label>
      {children}
    </div>
  )
}

export function NumberInput({ id, value, onChange, placeholder }) {
  return (
    <input
      id={id}
      type="number"
      inputMode="decimal"
      step="any"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={fieldClass}
    />
  )
}

export function Select({ id, value, onChange, options }) {
  return (
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={fieldClass}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}

export function PrimaryButton({ children, ...props }) {
  return (
    <button
      type="submit"
      className="w-full rounded-2xl bg-churro-600 px-5 py-3 text-base font-extrabold text-white transition-colors hover:bg-churro-700"
      {...props}
    >
      {children}
    </button>
  )
}

export function ErrorMessage({ children }) {
  if (!children) return null
  return (
    <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
      {children}
    </p>
  )
}

export function ResultBox({ children }) {
  return (
    <div aria-live="polite" className="rounded-2xl bg-cream-100 px-5 py-4 text-center">
      {children}
    </div>
  )
}
