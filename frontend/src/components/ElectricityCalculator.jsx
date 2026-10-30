import { useState } from 'react'
import { calculateElectricity } from '../utils/calculations.js'
import { CalculatorCard, Field, NumberInput, PrimaryButton, ErrorMessage, ResultBox } from './ui.jsx'

export default function ElectricityCalculator() {
  const [kwh, setKwh] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const res = calculateElectricity(kwh)
    if (res.error) {
      setError(res.error)
      setResult(null)
    } else {
      setError('')
      setResult(res)
    }
  }

  return (
    <CalculatorCard
      title="Electricity bill estimator"
      description="Estimate your monthly bill from your usage in kWh."
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Field label="Electricity usage (kWh)" id="kwh">
          <NumberInput id="kwh" value={kwh} onChange={setKwh} placeholder="e.g. 250" />
        </Field>
        <PrimaryButton>Calculate</PrimaryButton>
      </form>
      <ErrorMessage>{error}</ErrorMessage>
      {result && (
        <>
          <ResultBox>
            <p className="text-sm font-bold text-ink-600">Estimated bill</p>
            <p className="text-4xl font-black text-churro-600">RM {result.total.toFixed(2)}</p>
          </ResultBox>
          {result.breakdown.length > 0 && (
            <ul className="divide-y divide-cream-200 rounded-2xl border border-cream-200 text-sm">
              {result.breakdown.map((row) => (
                <li key={row.label} className="flex items-center justify-between gap-3 px-4 py-3">
                  <span>
                    <span className="font-bold">{row.label}</span>
                    <span className="block text-ink-400">
                      {row.units} kWh × RM{row.rate.toFixed(2)}
                    </span>
                  </span>
                  <span className="font-extrabold">RM {row.cost.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      <p className="text-xs text-ink-400">
        Rates: RM1.20/unit for the first 100, RM2.00/unit for the next 100, RM3.00/unit after that.
      </p>
    </CalculatorCard>
  )
}
