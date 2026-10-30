import { useState } from 'react'
import { calculateBasic } from '../utils/calculations.js'
import { CalculatorCard, Field, NumberInput, Select, PrimaryButton, ErrorMessage, ResultBox } from './ui.jsx'

const operators = [
  { value: '+', label: '+  Add' },
  { value: '-', label: '−  Subtract' },
  { value: '*', label: '×  Multiply' },
  { value: '/', label: '÷  Divide' },
]

export default function BasicCalculator() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [op, setOp] = useState('+')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const res = calculateBasic(a, b, op)
    if (res.error) {
      setError(res.error)
      setResult(null)
    } else {
      setError('')
      setResult(res.value)
    }
  }

  return (
    <CalculatorCard title="Basic calculator" description="Add, subtract, multiply or divide two numbers.">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Field label="First number" id="a">
          <NumberInput id="a" value={a} onChange={setA} placeholder="e.g. 12" />
        </Field>
        <Field label="Operator" id="op">
          <Select id="op" value={op} onChange={setOp} options={operators} />
        </Field>
        <Field label="Second number" id="b">
          <NumberInput id="b" value={b} onChange={setB} placeholder="e.g. 4" />
        </Field>
        <PrimaryButton>Calculate</PrimaryButton>
      </form>
      <ErrorMessage>{error}</ErrorMessage>
      {result !== null && (
        <ResultBox>
          <p className="text-sm font-bold text-ink-600">Result</p>
          <p className="text-4xl font-black text-churro-600">{result.toFixed(2)}</p>
        </ResultBox>
      )}
    </CalculatorCard>
  )
}
