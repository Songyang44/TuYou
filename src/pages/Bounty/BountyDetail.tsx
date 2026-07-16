import { useParams, Link } from 'react-router-dom';
import Icon from '../../components/ui/Icon';
import Avatar from '../../components/ui/Avatar';
import SectionHeading from '../../components/ui/SectionHeading';
import { bounties, guides } from '../../data/mock';
import './BountyDetail.css';

export default function BountyDetail() {
  const { id } = useParams();
  const bounty = bounties.find((b) => b.id === id) ?? bounties[0];
  const applicants = guides.slice(0, 3);

  return (
    <div className="page container bounty-detail">
      <Link to="/bounty" className="text-faint bounty-detail-back">
        ← 返回悬赏列表
      </Link>

      <div className="bounty-detail-layout">
        <div className="bounty-detail-main">
          <span className="pill-tag">{bounty.category}</span>
          <h1 className="bounty-detail-title">{bounty.title}</h1>

          <div className="bounty-detail-meta">
            <span><Icon name="location" size={15} /> {bounty.city} · {bounty.country}</span>
            <span><Icon name="calendar" size={15} /> {bounty.date}</span>
            <span><Icon name="people" size={15} /> {bounty.people} 人</span>
          </div>

          <SectionHeading title="需求说明" />
          <ul className="bounty-detail-requirements">
            {bounty.requirements.map((r) => (
              <li key={r}><Icon name="verified" size={15} /> {r}</li>
            ))}
          </ul>

          <SectionHeading title={`已申请地陪（${applicants.length}）`} />
          <div className="applicant-list">
            {applicants.map((g) => (
              <Link to={`/guides/${g.id}`} key={g.id} className="applicant-item card-surface">
                <Avatar seed={g.avatar} name={g.name} size={44} />
                <div>
                  <div style={{ fontWeight: 700 }}>{g.name}</div>
                  <div className="text-faint" style={{ fontSize: 12.5 }}>{g.city} · ★ {g.rating}</div>
                </div>
                <span className="btn btn-outline" style={{ marginLeft: 'auto', padding: '6px 16px', fontSize: 12.5 }}>
                  查看资料
                </span>
              </Link>
            ))}
          </div>
        </div>

        <aside className="bounty-detail-side card-surface">
          <div className="text-faint" style={{ fontSize: 12.5 }}>悬赏预算</div>
          <div className="bounty-detail-budget">￥{bounty.budget}</div>
          <div className="text-faint" style={{ fontSize: 12.5, marginBottom: 18 }}>
            发布者：{bounty.publisher}
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginBottom: 10 }}>我要接单</button>
          <button className="btn btn-outline" style={{ width: '100%' }}>联系发布者</button>
        </aside>
      </div>
    </div>
  );
}
