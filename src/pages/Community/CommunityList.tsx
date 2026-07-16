import { useMemo, useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import PostCard from '../../components/cards/PostCard';
import Icon from '../../components/ui/Icon';
import { posts } from '../../data/mock';
import './Community.css';

const types = ['全部', '游记', '攻略', '提问', '分享'] as const;
const hotTags = ['东京', '北海道', '冰岛', '新西兰', '签证', '摄影', '巴黎', '徒步'];

export default function CommunityList() {
  const [type, setType] = useState<(typeof types)[number]>('全部');
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      posts.filter((p) => (type === '全部' || p.type === type) && (!tag || p.tags.includes(tag))),
    [type, tag],
  );

  return (
    <div className="page">
      <PageHeader
        eyebrow="Community"
        title="旅行社区"
        description="分享游记与攻略，向达人提问，收藏靠谱的旅行经验。"
        action={<button className="btn btn-primary">＋ 发布内容</button>}
      />

      <div className="container">
        <div className="filter-row">
          {types.map((t) => (
            <button key={t} className={`pill-tag filter-chip ${type === t ? 'is-active' : ''}`} onClick={() => setType(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="filter-row">
          <span className="filter-row-label">热门话题</span>
          {hotTags.map((t) => (
            <button
              key={t}
              className={`pill-tag filter-chip ${tag === t ? 'is-active' : ''}`}
              onClick={() => setTag(tag === t ? null : t)}
            >
              #{t}
            </button>
          ))}
        </div>

        <div className="community-masonry">
          {filtered.map((p) => <PostCard key={p.id} post={p} />)}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <Icon name="layers" size={32} />
            <p>暂无相关内容，换个话题看看吧。</p>
          </div>
        )}
      </div>
    </div>
  );
}
