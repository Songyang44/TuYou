import type { CSSProperties, ReactNode } from 'react';

interface CoverProps {
  seed: string;
  height?: number | string;
  radius?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

/** 用渐变色板占位真实图片，后续接入真实素材时直接替换该组件即可。 */
export default function Cover({ seed, height = 180, radius = 'var(--radius-lg)', children, style }: CoverProps) {
  return (
    <div
      className={`swatch-${seed}`}
      style={{
        position: 'relative',
        height,
        borderRadius: radius,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(20,24,16,0.35) 100%)',
        }}
      />
      {children && <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>{children}</div>}
    </div>
  );
}
