import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import type { Bounty } from '../../types';
import './BountyCard.css';

const statusColor: Record<Bounty['status'], string> = {
  招募中: 'var(--color-forest)',
  已成交: 'var(--color-sky-deep)',
  已结束: 'var(--color-ink-faint)',
};

export default function BountyCard({ bounty }: { bounty: Bounty }) {
  return (
    <Link to={`/bounty/${bounty.id}`} className="bounty-card card-surface">
      <div className="bounty-card-top">
        <span className="pill-tag">{bounty.category}</span>
        <span className="bounty-status" style={{ color: statusColor[bounty.status] }}>
          ● {bounty.status}
        </span>
      </div>
      <h3 className="bounty-card-title">{bounty.title}</h3>
      <div className="bounty-card-meta text-soft">
        <span><Icon name="location" size={13} /> {bounty.city}·{bounty.country}</span>
        <span><Icon name="calendar" size={13} /> {bounty.date}</span>
        <span><Icon name="people" size={13} /> {bounty.people}人</span>
      </div>
      <div className="bounty-card-tags">
        {bounty.requirements.map((r) => (
          <span key={r} className="pill-tag">{r}</span>
        ))}
      </div>
      <div className="bounty-card-footer">
        <span className="bounty-card-budget">￥{bounty.budget}</span>
        <span className="text-faint">{bounty.applicants} 人已申请</span>
      </div>
    </Link>
  );
}
