interface AvatarProps {
  seed: string;
  name?: string;
  size?: number;
}

export default function Avatar({ seed, name, size = 44 }: AvatarProps) {
  const initial = name?.trim()?.[0] ?? '·';
  return (
    <div
      className={`scrim-avatar swatch-${seed}`}
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.92)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: size * 0.38,
        boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.35)',
      }}
    >
      {initial}
    </div>
  );
}
