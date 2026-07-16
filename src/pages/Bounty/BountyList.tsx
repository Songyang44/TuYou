import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import BountyCard from '../../components/cards/BountyCard';
import Icon from '../../components/ui/Icon';
import { bounties } from '../../data/mock';
import '../Guides/Guides.css';

const categories = ['全部', '包车', '摄影', '翻译', '陪玩', '徒步', '露营', '商务接待', '接机', '自由定制'];

export default function BountyList() {
  const [category, setCategory] = useState('全部');

  const filtered = useMemo(
    () => (category === '全部' ? bounties : bounties.filter((b) => b.category === category)),
    [category],
  );

  return (
    <div className="page">
      <PageHeader
        eyebrow="Travel Bounty"
        title="旅行悬赏广场"
        description="发布你的定制需求，让附近的地陪主动申请接单；也可以直接浏览悬赏，主动申请你擅长的任务。"
        action={<Link to="/bounty/publish" className="btn btn-sunset">发布悬赏</Link>}
      />

      <div className="container">
        <div className="filter-row">
          {categories.map((c) => (
            <button
              key={c}
              className={`pill-tag filter-chip ${category === c ? 'is-active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="guide-result-count text-soft">共 {filtered.length} 条悬赏</div>

        <div className="grid-cards grid-cards-2">
          {filtered.map((b) => <BountyCard key={b.id} bounty={b} />)}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <Icon name="flag" size={32} />
            <p>该分类下暂无悬赏，换个分类看看吧。</p>
          </div>
        )}
      </div>
    </div>
  );
}
