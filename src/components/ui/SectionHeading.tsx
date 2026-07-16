import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  id?: string;
}

export default function SectionHeading({ eyebrow, title, description, action, id }: SectionHeadingProps) {
  return (
    <div
      id={id}
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 24,
        marginBottom: 28,
        scrollMarginTop: 'calc(var(--nav-top-height) + 16px)',
        flexWrap: 'wrap',
      }}
    >
      <div>
        {eyebrow && <div className="eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div>}
        <h2 style={{ fontSize: 30 }}>{title}</h2>
        {description && (
          <p className="text-soft" style={{ marginTop: 10, maxWidth: 560 }}>
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
