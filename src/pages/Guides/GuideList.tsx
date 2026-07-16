import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import GuideCard from '../../components/cards/GuideCard';
import Icon from '../../components/ui/Icon';
import { guides } from '../../data/mock';
import './Guides.css';

const serviceFilters = ['接机', '包车', '摄影', '美食', '翻译', '徒步', '购物', '自驾陪同'];
const genderFilters = ['女性地陪', '男性地陪', '情侣地陪'] as const;

export default function GuideList() {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('q') ?? '');
  const [activeServices, setActiveServices] = useState<string[]>([]);
  const [activeGender, setActiveGender] = useState<string | null>(null);
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [onlyVehicle, setOnlyVehicle] = useState(false);
  const [sortBy, setSortBy] = useState<'recommend' | 'rating' | 'price'>('recommend');

  const toggleService = (s: string) => {
    setActiveServices((prev) => (prev.includes(s) ? prev.filter((i) => i !== s) : [...prev, s]));
  };

  const filtered = useMemo(() => {
    let list = guides.filter((g) => {
      const matchKeyword =
        !keyword ||
        g.city.includes(keyword) ||
        g.country.includes(keyword) ||
        g.name.toLowerCase().includes(keyword.toLowerCase()) ||
        g.services.some((s) => s.includes(keyword));
      const matchService = activeServices.length === 0 || activeServices.every((s) => g.services.includes(s));
      const matchGender = !activeGender || g.gender === activeGender;
      const matchVerified = !onlyVerified || g.verified.identity;
      const matchVehicle = !onlyVehicle || g.hasVehicle;
      return matchKeyword && matchService && matchGender && matchVerified && matchVehicle;
    });

    list = [...list].sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price') return a.pricePerHour - b.pricePerHour;
      return b.orderCount - a.orderCount;
    });
    return list;
  }, [keyword, activeServices, activeGender, onlyVerified, onlyVehicle, sortBy]);

  return (
    <div className="page">
      <PageHeader
        eyebrow="Local Guide Marketplace"
        title="寻找当地地陪"
        description="按目的地、服务类型、语言与认证情况筛选，找到最适合你的当地向导。"
      />

      <div className="container">
        <div className="guide-search-bar">
          <div className="hero-search-field guide-keyword">
            <Icon name="search" size={16} />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="搜索城市 / 国家 / 姓名 / 服务，例如「东京摄影」"
            />
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)} className="guide-sort">
            <option value="recommend">智能推荐</option>
            <option value="rating">评分优先</option>
            <option value="price">价格从低到高</option>
          </select>
        </div>

        <div className="filter-row">
          <span className="filter-row-label">服务类型</span>
          {serviceFilters.map((s) => (
            <button
              key={s}
              className={`pill-tag filter-chip ${activeServices.includes(s) ? 'is-active' : ''}`}
              onClick={() => toggleService(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="filter-row">
          <span className="filter-row-label">地陪类型</span>
          {genderFilters.map((g) => (
            <button
              key={g}
              className={`pill-tag filter-chip ${activeGender === g ? 'is-active' : ''}`}
              onClick={() => setActiveGender(activeGender === g ? null : g)}
            >
              {g}
            </button>
          ))}
          <button
            className={`pill-tag filter-chip ${onlyVerified ? 'is-active' : ''}`}
            onClick={() => setOnlyVerified((v) => !v)}
          >
            <Icon name="verified" size={13} /> 仅看已认证
          </button>
          <button
            className={`pill-tag filter-chip ${onlyVehicle ? 'is-active' : ''}`}
            onClick={() => setOnlyVehicle((v) => !v)}
          >
            <Icon name="car" size={13} /> 有车
          </button>
        </div>

        <div className="guide-result-count text-soft">共找到 {filtered.length} 位地陪</div>

        <div className="grid-cards">
          {filtered.map((g) => <GuideCard key={g.id} guide={g} />)}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <Icon name="compass" size={32} />
            <p>没有找到符合条件的地陪，试试调整筛选条件吧。</p>
          </div>
        )}
      </div>
    </div>
  );
}
