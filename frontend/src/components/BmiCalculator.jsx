import { useState } from 'react'
import { calculateBmi } from '../utils/calculations.js'
import { CalculatorCard, Field, NumberInput, Select, PrimaryButton, ErrorMessage, ResultBox } from './ui.jsx'

const heightUnits = [
  { value: 'cm', label: 'Centimetres (cm)' },
  { value: 'm', label: 'Metres (m)' },
]
const weightUnits = [
  { value: 'kg', label: 'Kilograms (kg)' },
  { value: 'lbs', label: 'Pounds (lbs)' },
]

const categoryStyle = {
  Underweight: 'bg-sky-100 text-sky-800',
  Normal: 'bg-green-100 text-green-800',
  Overweight: 'bg-amber-100 text-amber-800',
  Obese: 'bg-red-100 text-red-800',
}

export default function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [heightUnit, setHeightUnit] = useState('cm')
  const [weight, setWeight] = useState('')
  const [weightUnit, setWeightUnit] = useState('kg')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const res = calculateBmi(height, heightUnit, weight, weightUnit)
    if (res.error) {
      setError(res.error)
      setResult(null)
    } else {
      setError('')
      setResult(res)
    }
  }

  return (
    <CalculatorCard title="BMI calculator" description="Check your body mass index from your height and weight.">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Height" id="height">
            <NumberInput id="height" value={height} onChange={setHeight} placeholder={heightUnit === 'cm' ? '170' : '1.70'} />
          </Field>
          <Field label="Height unit" id="heightUnit">
            <Select id="heightUnit" value={heightUnit} onChange={setHeightUnit} options={heightUnits} />
          </Field>
          <Field label="Weight" id="weight">
            <NumberInput id="weight" value={weight} onChange={setWeight} placeholder={weightUnit === 'kg' ? '65' : '143'} />
          </Field>
          <Field label="Weight unit" id="weightUnit">
            <Select id="weightUnit" value={weightUnit} onChange={setWeightUnit} options={weightUnits} />
          </Field>
        </div>
        <PrimaryButton>Calculate</PrimaryButton>
      </form>
      <ErrorMessage>{error}</ErrorMessage>
      {result && (
        <ResultBox>
          <p className="text-sm font-bold text-ink-600">Your BMI</p>
          <p className="text-4xl font-black text-churro-600">{result.bmi.toFixed(2)}</p>
          <span className={`mt-2 inline-block rounded-full px-4 py-1 text-sm font-extrabold ${categoryStyle[result.category]}`}>
            {result.category}
          </span>
        </ResultBox>
      )}
    </CalculatorCard>
  )
}
