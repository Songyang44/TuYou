import { Link } from 'react-router-dom';
import Cover from '../ui/Cover';
import Avatar from '../ui/Avatar';
import Rating from '../ui/Rating';
import Icon from '../ui/Icon';
import type { Guide } from '../../types';
import './GuideCard.css';

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link to={`/guides/${guide.id}`} className="guide-card card-surface">
      <Cover seed={guide.cover} height={168} radius="0">
        <div className="guide-card-cover-row">
          <span className="pill-tag guide-card-price">￥{guide.pricePerHour}/小时</span>
          {guide.verified.identity && (
            <span className="guide-card-verified">
              <Icon name="verified" size={13} /> 已认证
            </span>
          )}
        </div>
      </Cover>
      <div className="guide-card-body">
        <div className="guide-card-head">
          <Avatar seed={guide.avatar} name={guide.name} size={40} />
          <div className="guide-card-title">
            <div className="guide-card-name">{guide.name}</div>
            <div className="text-faint guide-card-loc">
              <Icon name="location" size={13} /> {guide.city} · {guide.country}
            </div>
          </div>
        </div>
        <p className="guide-card-bio text-soft">{guide.bio}</p>
        <div className="guide-card-tags">
          {guide.services.slice(0, 3).map((s) => (
            <span key={s} className="pill-tag">{s}</span>
          ))}
        </div>
        <div className="guide-card-footer">
          <Rating value={guide.rating} count={guide.reviewCount} />
          <span className="text-faint">已完成 {guide.orderCount} 单</span>
        </div>
      </div>
    </Link>
  );
}
