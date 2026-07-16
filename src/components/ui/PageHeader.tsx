import type { ReactNode } from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="container page-header-inner">
        <div>
          {eyebrow && <div className="eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div>}
          <h1 className="page-header-title">{title}</h1>
          {description && <p className="text-soft page-header-desc">{description}</p>}
        </div>
        {action}
      </div>
    </div>
  );
}
