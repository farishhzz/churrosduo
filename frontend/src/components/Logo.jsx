export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#FBEBD0" />
      <g strokeWidth="9" strokeLinecap="round">
        <line x1="22" y1="44" x2="34" y2="18" stroke="#C2630F" />
        <line x1="36" y1="46" x2="48" y2="20" stroke="#F7B267" />
      </g>
    </svg>
  )
}
