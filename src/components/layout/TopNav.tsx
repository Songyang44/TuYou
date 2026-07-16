import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Icon from '../ui/Icon';
import Avatar from '../ui/Avatar';
import { currentUser } from '../../data/mock';
import './TopNav.css';

interface TopNavProps {
  onMenuClick: () => void;
}

export default function TopNav({ onMenuClick }: TopNavProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/guides?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <button className="icon-btn mobile-only" onClick={onMenuClick} aria-label="打开菜单">
          <Icon name="menu" />
        </button>

        <Link to="/" className="brand">
          <span className="brand-mark">途</span>
          <span className="brand-name">
            TúYóu <span className="brand-name-sub">途游</span>
          </span>
        </Link>

        <form className="top-search desktop-only" onSubmit={submitSearch}>
          <Icon name="search" size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索城市、地陪或体验，例如「京都摄影」"
          />
        </form>

        <div className="top-nav-actions">
          <Link to="/profile?tab=become-guide" className="btn btn-outline desktop-only top-nav-cta">
            成为地陪
          </Link>
          <Link to="/messages" className="icon-btn" aria-label="消息">
            <Icon name="bell" />
            <span className="dot" />
          </Link>
          <Link to="/profile" className="icon-btn avatar-btn" aria-label="我的">
            <Avatar seed={currentUser.avatar} name={currentUser.name} size={32} />
          </Link>
        </div>
      </div>
    </header>
  );
}
