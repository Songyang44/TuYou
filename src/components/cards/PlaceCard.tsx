import { Link } from 'react-router-dom';
import Cover from '../ui/Cover';
import './PlaceCard.css';

interface PlaceCardProps {
  to: string;
  cover: string;
  title: string;
  subtitle: string;
  meta?: string;
  badge?: string;
}

export default function PlaceCard({ to, cover, title, subtitle, meta, badge }: PlaceCardProps) {
  return (
    <Link to={to} className="place-card card-surface">
      <Cover seed={cover} height={140} radius="0">
        {badge && <span className="pill-tag place-card-badge">{badge}</span>}
      </Cover>
      <div className="place-card-body">
        <h3 className="place-card-title">{title}</h3>
        <p className="text-soft place-card-subtitle">{subtitle}</p>
        {meta && <span className="text-faint place-card-meta">{meta}</span>}
      </div>
    </Link>
  );
}
