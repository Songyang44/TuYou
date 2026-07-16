import { Link, useParams } from 'react-router-dom';
import Cover from '../../components/ui/Cover';
import Icon from '../../components/ui/Icon';
import { countries, cities, spots } from '../../data/mock';
import './SpotDetail.css';

const infoItems: { key: keyof typeof spots[number]; label: string; icon: 'calendar' | 'bolt' | 'star' | 'hiking' }[] = [
  { key: 'openHours', label: '开放时间', icon: 'calendar' },
  { key: 'ticket', label: '门票', icon: 'bolt' },
  { key: 'bestSeason', label: '最佳季节', icon: 'star' },
  { key: 'suggestedDuration', label: '建议游玩时长', icon: 'hiking' },
];

export default function SpotDetail() {
  const { countryId, cityId, spotId } = useParams();
  const country = countries.find((c) => c.id === countryId) ?? countries[0];
  const city = cities.find((c) => c.id === cityId) ?? cities[0];
  const spot = spots.find((s) => s.id === spotId) ?? spots[0];

  return (
    <div className="page container spot-detail">
      <Link to={`/attractions/${country.id}/${city.id}`} className="text-faint" style={{ display: 'inline-block', margin: '24px 0 16px' }}>
        ← 返回 {city.name} 景点列表
      </Link>

      <Cover seed={spot.cover} height={300} radius="var(--radius-lg)" />

      <div className="spot-detail-body">
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          {country.flagEmoji} {country.name} · {city.name}
        </div>
        <h1 className="spot-detail-title">{spot.name}</h1>
        <div className="spot-detail-rating">★ {spot.rating} <span className="text-faint">推荐指数</span></div>

        <p className="text-soft spot-detail-desc">{spot.description}</p>

        <div className="spot-info-grid">
          {infoItems.map((item) => (
            <div key={item.key} className="spot-info-item card-surface">
              <Icon name={item.icon} size={18} />
              <div>
                <div className="text-faint" style={{ fontSize: 12 }}>{item.label}</div>
                <div style={{ fontWeight: 700 }}>{spot[item.key]}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="spot-detail-extra">
          <div className="spot-extra-tag"><Icon name="user" size={14} /> 适合儿童</div>
          <div className="spot-extra-tag"><Icon name="user" size={14} /> 适合老人</div>
          <div className="spot-extra-tag"><Icon name="camera" size={14} /> 最佳拍照地点</div>
        </div>

        <Link to="/guides" className="btn btn-primary" style={{ marginTop: 24 }}>
          找一位熟悉这里的地陪
        </Link>
      </div>
    </div>
  );
}
