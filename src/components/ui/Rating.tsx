interface RatingProps {
  value: number;
  count?: number;
  size?: 'sm' | 'md';
}

export default function Rating({ value, count, size = 'sm' }: RatingProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: size === 'sm' ? 13 : 15,
        fontWeight: 700,
        color: 'var(--color-ink)',
      }}
    >
      <span style={{ color: 'var(--color-sunset)' }}>★</span>
      {value.toFixed(2)}
      {typeof count === 'number' && (
        <span style={{ fontWeight: 500, color: 'var(--color-ink-faint)' }}>({count})</span>
      )}
    </span>
  );
}
