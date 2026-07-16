import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import Icon from '../../components/ui/Icon';
import GuideCard from '../../components/cards/GuideCard';
import { currentUser, orders, guides, reviews } from '../../data/mock';
import type { IconName } from '../../components/ui/Icon';
import './Profile.css';

const tabs: { key: string; label: string; icon: IconName }[] = [
  { key: 'orders', label: '我的订单', icon: 'calendar' },
  { key: 'favorites', label: '我的收藏', icon: 'heart' },
  { key: 'reviews', label: '我的评价', icon: 'star' },
  { key: 'wallet', label: '我的钱包', icon: 'wallet' },
  { key: 'become-guide', label: '成为地陪', icon: 'compass' },
];

const orderStatusColor: Record<string, string> = {
  待付款: 'var(--color-coral)',
  已付款: 'var(--color-sky-deep)',
  待确认: 'var(--color-sunset)',
  服务中: 'var(--color-forest)',
  已完成: 'var(--color-ink-faint)',
  售后: 'var(--color-coral)',
};

export default function Profile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [applied, setApplied] = useState(false);
  const activeTab = searchParams.get('tab') ?? 'orders';

  const setTab = (key: string) => setSearchParams({ tab: key });

  return (
    <div className="page container profile-page">
      <div className="profile-summary card-surface">
        <Avatar seed={currentUser.avatar} name={currentUser.name} size={72} />
        <div className="profile-summary-info">
          <div className="profile-summary-name">
            {currentUser.name}
            {currentUser.verified && <Icon name="verified" size={16} />}
          </div>
          <div className="pill-tag">{currentUser.level}</div>
        </div>
        <div className="profile-summary-stats">
          <div><strong>￥{currentUser.balance}</strong><span>钱包余额</span></div>
          <div><strong>{currentUser.coupons}</strong><span>优惠券</span></div>
          <div><strong>{currentUser.favorites}</strong><span>收藏</span></div>
        </div>
      </div>

      <div className="profile-layout">
        <nav className="profile-tabs">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`profile-tab-item ${activeTab === t.key ? 'is-active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              <Icon name={t.icon} size={17} /> {t.label}
            </button>
          ))}
        </nav>

        <div className="profile-content">
          {activeTab === 'orders' && (
            <div className="order-list">
              {orders.map((o) => (
                <div key={o.id} className="order-item card-surface">
                  <div>
                    <div style={{ fontWeight: 700 }}>{o.service}</div>
                    <div className="text-faint" style={{ fontSize: 12.5, marginTop: 4 }}>
                      地陪：{o.guideName} · {o.date}
                    </div>
                  </div>
                  <div className="order-item-right">
                    <span className="order-status" style={{ color: orderStatusColor[o.status] }}>
                      ● {o.status}
                    </span>
                    <span style={{ fontWeight: 700 }}>￥{o.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="grid-cards grid-cards-2">
              {guides.slice(0, 4).map((g) => <GuideCard key={g.id} guide={g} />)}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="order-list">
              {reviews.map((r) => (
                <div key={r.id} className="order-item card-surface" style={{ alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>★ {r.rating} · {r.date}</div>
                    <p className="text-soft" style={{ marginTop: 6 }}>{r.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'wallet' && (
            <div className="wallet-panel card-surface">
              <div className="text-faint">账户余额</div>
              <div className="wallet-balance">￥{currentUser.balance}</div>
              <div className="wallet-actions">
                <button className="btn btn-primary">提现</button>
                <button className="btn btn-outline">充值</button>
              </div>
              <div className="wallet-history">
                <div className="wallet-history-item"><span>订单退款 #o2</span><span className="text-soft">+￥120</span></div>
                <div className="wallet-history-item"><span>预约摄影服务</span><span className="text-soft">-￥1,200</span></div>
                <div className="wallet-history-item"><span>新用户礼金</span><span className="text-soft">+￥50</span></div>
              </div>
            </div>
          )}

          {activeTab === 'become-guide' && (
            <div className="become-guide-panel card-surface">
              {applied ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <Icon name="verified" size={32} />
                  <h3 style={{ margin: '12px 0 8px' }}>申请已提交</h3>
                  <p className="text-soft">我们会在 1-3 个工作日内完成审核，请留意消息通知。</p>
                </div>
              ) : (
                <>
                  <h3 style={{ marginBottom: 6 }}>申请成为地陪</h3>
                  <p className="text-soft" style={{ marginBottom: 20 }}>
                    留学生、自由职业者、本地居民均可申请，展示你的语言、摄影或驾驶技能，利用空闲时间赚取收入。
                  </p>
                  <form
                    className="become-guide-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setApplied(true);
                    }}
                  >
                    <label className="form-field">
                      <span>所在城市</span>
                      <input required placeholder="例如：东京" />
                    </label>
                    <label className="form-field">
                      <span>擅长服务</span>
                      <input required placeholder="例如：摄影、包车、翻译" />
                    </label>
                    <label className="form-field">
                      <span>自我介绍</span>
                      <textarea rows={4} placeholder="介绍一下你的经验与特色" />
                    </label>
                    <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                      提交申请
                    </button>
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
