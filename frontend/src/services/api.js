// API service for the future Java Spring Boot backend.
// Not used yet: the calculators currently run locally via src/utils/calculations.js.
// When the backend is ready, import these functions in the calculator components
// in place of the local calculation functions.

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!response.ok) {
    const message = await response.text().catch(() => '')
    throw new Error(message || `Request failed with status ${response.status}`)
  }
  return response.json()
}

const post = (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) })

// Expected Spring Boot endpoints (adjust to match your controllers):
export const calculateBasicApi = (a, b, operator) => post('/calculator/basic', { a, b, operator })

export const calculateBmiApi = (height, heightUnit, weight, weightUnit) =>
  post('/calculator/bmi', { height, heightUnit, weight, weightUnit })

export const calculateElectricityApi = (kwh) => post('/calculator/electricity', { kwh })
