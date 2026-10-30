# ChurrosDuo

Smart little tools for everyday student life. React + Vite + Tailwind CSS + React Router.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build: `npm run build`, then `npm run preview`.

## Structure

- `src/utils/calculations.js`: all calculation logic (no UI)
- `src/components/`: one component per calculator, plus Navbar and shared UI
- `src/pages/Home.jsx`: landing page
- `src/services/api.js`: placeholder client for the future Java Spring Boot API
  (set `VITE_API_BASE_URL` in a `.env` file; default is `http://localhost:8080/api`)

Calculations currently run locally. To switch to the backend later, call the functions in
`api.js` from the calculator components instead of `utils/calculations.js`.
