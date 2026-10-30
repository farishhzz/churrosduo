// Pure calculation logic. No React, no DOM. Easy to test and to swap for the API later.

export const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100

/* ---------- Basic calculator ---------- */
export function calculateBasic(a, b, operator) {
  const x = Number(a)
  const y = Number(b)
  if (a === '' || b === '' || Number.isNaN(x) || Number.isNaN(y)) {
    return { error: 'Enter both numbers.' }
  }
  switch (operator) {
    case '+': return { value: round2(x + y) }
    case '-': return { value: round2(x - y) }
    case '*': return { value: round2(x * y) }
    case '/':
      if (y === 0) return { error: 'Cannot divide by zero.' }
      return { value: round2(x / y) }
    default:
      return { error: 'Choose an operator.' }
  }
}

/* ---------- BMI calculator ---------- */
export function bmiCategory(bmi) {
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 25) return 'Normal'
  if (bmi < 30) return 'Overweight'
  return 'Obese'
}

export function calculateBmi(height, heightUnit, weight, weightUnit) {
  const h = Number(height)
  const w = Number(weight)
  if (height === '' || weight === '' || Number.isNaN(h) || Number.isNaN(w)) {
    return { error: 'Enter your height and weight.' }
  }
  if (h <= 0 || w <= 0) return { error: 'Height and weight must be greater than zero.' }

  const metres = heightUnit === 'cm' ? h / 100 : h
  const kg = weightUnit === 'lbs' ? w * 0.45359237 : w

  if (metres < 0.5 || metres > 2.8) {
    return { error: 'Height looks out of range. Check the value and unit.' }
  }
  if (kg < 2 || kg > 500) {
    return { error: 'Weight looks out of range. Check the value and unit.' }
  }

  const bmi = kg / (metres * metres)
  return { bmi: round2(bmi), category: bmiCategory(bmi) }
}

/* ---------- Electricity bill estimator ---------- */
export const ELECTRICITY_TIERS = [
  { label: 'First 100 units', units: 100, rate: 1.2 },
  { label: 'Next 100 units', units: 100, rate: 2.0 },
  { label: 'Remaining units', units: Infinity, rate: 3.0 },
]

export function calculateElectricity(kwh) {
  const usage = Number(kwh)
  if (kwh === '' || Number.isNaN(usage)) return { error: 'Enter your usage in kWh.' }
  if (usage < 0) return { error: 'Usage cannot be negative.' }

  let remaining = usage
  let total = 0
  const breakdown = []
  for (const tier of ELECTRICITY_TIERS) {
    const used = Math.min(remaining, tier.units)
    if (used > 0) {
      const cost = used * tier.rate
      breakdown.push({ label: tier.label, units: round2(used), rate: tier.rate, cost: round2(cost) })
      total += cost
      remaining -= used
    }
  }
  return { total: round2(total), breakdown }
}
