import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Icon from '../../components/ui/Icon';
import './BountyPublish.css';

const categories = ['包车', '摄影', '翻译', '陪玩', '徒步', '露营', '商务接待', '接机', '自由定制'];

export default function BountyPublish() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: '',
    category: categories[0],
    city: '',
    date: '',
    people: 1,
    budget: '',
    requirement: '',
  });

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  if (submitted) {
    return (
      <div className="page container">
        <div className="publish-success card-surface">
          <div className="publish-success-icon"><Icon name="verified" size={30} /></div>
          <h2>悬赏发布成功</h2>
          <p className="text-soft">附近符合条件的地陪将会收到通知，你可以在「我的订单」中查看接单情况。</p>
          <div className="publish-success-actions">
            <Link to="/bounty" className="btn btn-outline">返回悬赏广场</Link>
            <Link to="/profile" className="btn btn-primary">查看我的悬赏</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <PageHeader eyebrow="Travel Bounty" title="发布旅行悬赏" description="描述你的定制需求，附近地陪会主动申请接单。" />
      <div className="container">
        <form
          className="publish-form card-surface"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label className="form-field">
            <span>悬赏标题</span>
            <input
              required
              value={form.title}
              onChange={(e) => update('title', e.target.value)}
              placeholder="例如：寻找一位京都摄影地陪"
            />
          </label>

          <div className="form-row">
            <label className="form-field">
              <span>服务分类</span>
              <select value={form.category} onChange={(e) => update('category', e.target.value)}>
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="form-field">
              <span>目的地城市</span>
              <input
                required
                value={form.city}
                onChange={(e) => update('city', e.target.value)}
                placeholder="例如：京都"
              />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>期望日期</span>
              <input type="date" required value={form.date} onChange={(e) => update('date', e.target.value)} />
            </label>
            <label className="form-field">
              <span>出行人数</span>
              <input
                type="number"
                min={1}
                value={form.people}
                onChange={(e) => update('people', Number(e.target.value))}
              />
            </label>
          </div>

          <label className="form-field">
            <span>预算（￥）</span>
            <input
              type="number"
              required
              min={0}
              value={form.budget}
              onChange={(e) => update('budget', e.target.value)}
              placeholder="例如：800"
            />
          </label>

          <label className="form-field">
            <span>具体要求</span>
            <textarea
              rows={4}
              value={form.requirement}
              onChange={(e) => update('requirement', e.target.value)}
              placeholder="例如：会摄影，有车最好，懂中文"
            />
          </label>

          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            发布悬赏
          </button>
        </form>
      </div>
    </div>
  );
}
