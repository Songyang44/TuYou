import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';
import QuickNav from '../../components/layout/QuickNav';
import Icon from '../../components/ui/Icon';
import Avatar from '../../components/ui/Avatar';
import Rating from '../../components/ui/Rating';
import GuideCard from '../../components/cards/GuideCard';
import BountyCard from '../../components/cards/BountyCard';
import PostCard from '../../components/cards/PostCard';
import PlaceCard from '../../components/cards/PlaceCard';
import { guides, bounties, posts, countries, currentUser } from '../../data/mock';
import './Home.css';

const quickSections = [
  { id: 'guides', label: '地陪推荐' },
  { id: 'bounty', label: '旅行悬赏' },
  { id: 'community', label: '社区精选' },
  { id: 'attractions', label: '官方景点' },
  { id: 'join', label: '加入途游' },
];

export default function Home() {
  return (
    <div className="home">
      <Hero />

      <div className="container home-body">
        <div className="home-main">
          <section id="guides" className="section">
            <SectionHeading
              eyebrow="Local Guide Marketplace"
              title="附近的地陪，随时预约"
              description="来自世界各地的自由职业者、留学生与本地达人，提供接机、包车、摄影、翻译、美食带路等服务。"
              action={<Link to="/guides" className="btn btn-outline">查看全部地陪</Link>}
            />
            <div className="grid-cards">
              {guides.slice(0, 3).map((g) => <GuideCard key={g.id} guide={g} />)}
            </div>
          </section>

          <section id="bounty" className="section">
            <SectionHeading
              eyebrow="Travel Bounty"
              title="发布你的旅行悬赏"
              description="不想用现成套餐？发布你的定制需求，让附近地陪主动接单。"
              action={<Link to="/bounty/publish" className="btn btn-sunset">发布悬赏</Link>}
            />
            <div className="grid-cards grid-cards-2">
              {bounties.slice(0, 4).map((b) => <BountyCard key={b.id} bounty={b} />)}
            </div>
          </section>

          <section id="community" className="section">
            <SectionHeading
              eyebrow="Community"
              title="旅行社区，游记与攻略"
              description="像小红书一样分享你的旅行故事，向达人提问，收藏靠谱攻略。"
              action={<Link to="/community" className="btn btn-outline">进入社区</Link>}
            />
            <div className="grid-cards grid-cards-2">
              {posts.map((p) => <PostCard key={p.id} post={p} />)}
            </div>
          </section>

          <section id="attractions" className="section">
            <SectionHeading
              eyebrow="Official Travel Wiki"
              title="官方旅行百科"
              description="从国家到城市再到景点，整理开放时间、门票、最佳季节与拍照点。"
              action={<Link to="/attractions" className="btn btn-outline">浏览景点百科</Link>}
            />
            <div className="grid-cards grid-cards-3">
              {countries.map((c) => (
                <PlaceCard
                  key={c.id}
                  to={`/attractions/${c.id}`}
                  cover={c.cover}
                  title={`${c.flagEmoji} ${c.name}`}
                  subtitle={c.description}
                  meta={`${c.cityCount} 个城市`}
                />
              ))}
            </div>
          </section>

          <section id="join" className="section">
            <JoinBanner />
          </section>
        </div>

        <QuickNav sections={quickSections} />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-scenery" aria-hidden="true">
        <svg viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fdf6e3" />
              <stop offset="55%" stopColor="#f3ead2" />
              <stop offset="100%" stopColor="#eef0df" />
            </linearGradient>
            <linearGradient id="hillBack" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b7c9ab" />
              <stop offset="100%" stopColor="#8bab6f" />
            </linearGradient>
            <linearGradient id="hillFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4c7440" />
              <stop offset="100%" stopColor="#2f5233" />
            </linearGradient>
          </defs>
          <rect width="1440" height="640" fill="url(#sky)" />
          <circle cx="1180" cy="150" r="120" fill="#f3c67c" opacity="0.55" />
          <path d="M0 380 Q 220 300 460 360 T 900 340 T 1440 380 V 640 H 0 Z" fill="url(#hillBack)" opacity="0.75" />
          <path d="M0 460 Q 260 380 560 440 T 1080 420 T 1440 460 V 640 H 0 Z" fill="url(#hillFront)" />
        </svg>
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">Connect Travelers with Local People.</div>
          <h1 className="hero-title">
            不想跟旅行团，
            <br />
            找一个当地人带你玩一天。
          </h1>
          <p className="hero-desc">
            途游 TúYóu 连接全球旅行者与本地地陪 —— 接机、包车、摄影、翻译、美食带路，
            像 Airbnb 一样发现值得信赖的当地朋友。
          </p>

          <form
            className="hero-search"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="hero-search-field">
              <Icon name="location" size={16} />
              <input placeholder="目的地，例如 东京 / 京都" />
            </div>
            <div className="hero-search-divider" />
            <div className="hero-search-field">
              <Icon name="filter" size={16} />
              <input placeholder="服务类型，例如 摄影 / 包车" />
            </div>
            <button className="btn btn-primary hero-search-btn" type="submit">
              <Icon name="search" size={16} /> 搜索地陪
            </button>
          </form>

          <div className="hero-stats">
            <div><strong>12,600+</strong><span>认证地陪</span></div>
            <div><strong>86</strong><span>覆盖国家</span></div>
            <div><strong>4.9</strong><span>平均评分</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-float hero-card-1 card-surface">
            <div className="hero-card-head">
              <Avatar seed="sunrise" name="James" size={44} />
              <div>
                <div style={{ fontWeight: 700 }}>James · 东京</div>
                <Rating value={4.98} count={326} />
              </div>
            </div>
            <div className="hero-card-tags">
              <span className="pill-tag">摄影</span>
              <span className="pill-tag">接机</span>
              <span className="pill-tag">美食</span>
            </div>
          </div>

          <div className="hero-card-float hero-card-2 card-surface">
            <div className="text-soft" style={{ fontSize: 12.5 }}>本周悬赏</div>
            <div style={{ fontWeight: 700, margin: '4px 0' }}>寻找京都摄影地陪</div>
            <div className="hero-card-budget">￥800</div>
          </div>

          <div className="hero-card-float hero-card-3">
            <span className="pill-tag" style={{ background: 'rgba(255,255,255,0.85)', border: 'none' }}>
              {currentUser.avatar && '👋'} 欢迎回来，{currentUser.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function JoinBanner() {
  return (
    <div className="join-banner">
      <div className="join-banner-copy">
        <h2>把空闲时间，变成收入</h2>
        <p className="text-soft">
          留学生、自由职业者、本地居民都可以申请成为地陪，展示你的语言、摄影或驾驶技能，
          利用碎片时间接单赚取收入。
        </p>
        <Link to="/profile?tab=become-guide" className="btn btn-primary">立即申请成为地陪</Link>
      </div>
      <div className="join-banner-visual" aria-hidden="true">
        <Icon name="bolt" size={64} />
      </div>
    </div>
  );
}
