import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Cover from '../../components/ui/Cover';
import Avatar from '../../components/ui/Avatar';
import Rating from '../../components/ui/Rating';
import Icon from '../../components/ui/Icon';
import SectionHeading from '../../components/ui/SectionHeading';
import QuickNav from '../../components/layout/QuickNav';
import { guides, reviews } from '../../data/mock';
import './GuideDetail.css';

const verifiedLabels: Record<string, string> = {
  identity: '实名认证',
  phone: '手机号认证',
  passport: '护照认证',
  license: '驾照认证',
  vehicle: '车辆认证',
  guideCert: '导游证',
};

const quickSections = [
  { id: 'intro', label: '简介' },
  { id: 'services', label: '服务与价格' },
  { id: 'reviews', label: '评价' },
  { id: 'booking', label: '预约日历' },
];

export default function GuideDetail() {
  const { id } = useParams();
  const guide = guides.find((g) => g.id === id) ?? guides[0];
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState('');
  const [favorited, setFavorited] = useState(false);

  const total = guide.pricePerHour * 4;

  return (
    <div className="page">
      <div className="container guide-detail-gallery">
        <Cover seed={guide.photos[0] ?? guide.cover} height={320} radius="var(--radius-lg)">
          <div className="guide-detail-gallery-actions">
            <button className="icon-btn" style={{ background: 'rgba(255,255,255,0.85)' }} onClick={() => setFavorited((f) => !f)}>
              <Icon name="heart" size={17} strokeWidth={favorited ? 0 : 1.7} />
            </button>
            <button className="icon-btn" style={{ background: 'rgba(255,255,255,0.85)' }}>
              <Icon name="share" size={17} />
            </button>
          </div>
        </Cover>
        <div className="guide-detail-thumbs">
          {guide.photos.map((p, i) => (
            <Cover key={i} seed={p} height={98} radius="var(--radius-md)" />
          ))}
        </div>
      </div>

      <div className="container guide-detail-body">
        <div className="guide-detail-main">
          <div id="intro">
            <div className="guide-detail-head">
              <Avatar seed={guide.avatar} name={guide.name} size={64} />
              <div>
                <h1 className="guide-detail-name">{guide.name}</h1>
                <div className="text-soft guide-detail-loc">
                  <Icon name="location" size={14} /> {guide.city} · {guide.country}
                  <span className="dot-sep" />
                  {guide.profession}
                </div>
                <div className="guide-detail-stat-row">
                  <Rating value={guide.rating} count={guide.reviewCount} size="md" />
                  <span className="text-faint">完成 {guide.orderCount} 单</span>
                  <span className="text-faint">响应率 {guide.responseRate}%</span>
                </div>
              </div>
            </div>

            <p className="guide-detail-bio">{guide.bio}</p>

            <div className="guide-detail-tags">
              {guide.tags.map((t) => <span key={t} className="pill-tag">{t}</span>)}
              {guide.languages.map((l) => (
                <span key={l} className="pill-tag"><Icon name="language" size={13} /> {l}</span>
              ))}
            </div>

            <div className="verify-grid">
              {Object.entries(guide.verified).map(([key, val]) => (
                <div key={key} className={`verify-item ${val ? 'is-verified' : ''}`}>
                  <Icon name="verified" size={15} />
                  {verifiedLabels[key]}
                </div>
              ))}
            </div>
          </div>

          <section id="services" className="section">
            <SectionHeading title="服务内容与收费标准" />
            <div className="service-list">
              {guide.services.map((s) => (
                <div key={s} className="service-item card-surface">
                  <span>{s}</span>
                  <span className="text-faint">￥{guide.pricePerHour}/小时起</span>
                </div>
              ))}
            </div>
          </section>

          <section id="reviews" className="section">
            <SectionHeading title="游客评价" description={`综合评分 ${guide.rating} · 共 ${guide.reviewCount} 条评价`} />
            <div className="review-list">
              {reviews.map((r) => (
                <div key={r.id} className="review-item card-surface">
                  <div className="review-item-head">
                    <Avatar seed={r.avatar} name={r.author} size={36} />
                    <div>
                      <div style={{ fontWeight: 700 }}>{r.author}</div>
                      <Rating value={r.rating} />
                    </div>
                    <span className="text-faint" style={{ marginLeft: 'auto' }}>{r.date}</span>
                  </div>
                  <p className="text-soft">{r.content}</p>
                  <div className="guide-card-tags">
                    {r.tags.map((t) => <span key={t} className="pill-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="booking" className="section">
            <SectionHeading title="预约日历" description="选择日期后可查看该地陪的空闲时段" />
            <div className="calendar-mock card-surface">
              {Array.from({ length: 28 }).map((_, i) => (
                <button
                  key={i}
                  className={`calendar-day ${[3, 4, 10, 11, 17, 18, 24, 25].includes(i) ? 'is-busy' : ''} ${date === String(i) ? 'is-selected' : ''}`}
                  disabled={[3, 4, 10, 11, 17, 18, 24, 25].includes(i)}
                  onClick={() => setDate(String(i))}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </section>
        </div>

        <QuickNav sections={quickSections} />
      </div>

      <div className="booking-bar card-surface">
        <div className="container booking-bar-inner">
          <div>
            <div className="booking-bar-price">￥{guide.pricePerHour}<span className="text-faint">/小时</span></div>
            <div className="text-faint" style={{ fontSize: 12 }}>已选 {people} 人 {date && `· ${Number(date) + 1} 日`}</div>
          </div>
          <div className="booking-bar-people">
            <button onClick={() => setPeople((p) => Math.max(1, p - 1))}>-</button>
            <span>{people}</span>
            <button onClick={() => setPeople((p) => p + 1)}>+</button>
          </div>
          <div className="booking-bar-total text-soft">预估总价 ￥{total * people}</div>
          <Link to="/messages" className="btn btn-outline">立即聊天</Link>
          <button className="btn btn-primary">立即预约</button>
        </div>
      </div>
    </div>
  );
}
