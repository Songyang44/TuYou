import { NavLink } from 'react-router-dom';
import Icon from '../ui/Icon';
import { primaryNav } from '../../data/nav';
import './SideNav.css';

interface SideNavProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export default function SideNav({ collapsed, onToggleCollapse, mobileOpen, onCloseMobile }: SideNavProps) {
  return (
    <>
      <div className={`side-nav-backdrop ${mobileOpen ? 'is-open' : ''}`} onClick={onCloseMobile} />
      <aside className={`side-nav ${collapsed ? 'is-collapsed' : ''} ${mobileOpen ? 'is-open' : ''}`}>
        <div className="side-nav-mobile-head mobile-only">
          <span className="brand-name">模块导航</span>
          <button className="icon-btn" onClick={onCloseMobile} aria-label="关闭菜单">
            <Icon name="close" />
          </button>
        </div>

        <nav className="side-nav-list">
          {primaryNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onCloseMobile}
              className={({ isActive }) => `side-nav-item ${isActive ? 'is-active' : ''}`}
              end={item.path === '/'}
            >
              <span className="side-nav-icon">
                <Icon name={item.icon} />
              </span>
              <span className="side-nav-text">
                <span className="side-nav-label">{item.label}</span>
                <span className="side-nav-desc">{item.description}</span>
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="side-nav-footer">
          <NavLink to="/bounty/publish" className="side-nav-cta" onClick={onCloseMobile}>
            <Icon name="plus" size={17} />
            <span className="side-nav-text">发布悬赏</span>
          </NavLink>
          <button className="collapse-btn desktop-only" onClick={onToggleCollapse} aria-label="收起侧边栏">
            <Icon name={collapsed ? 'chevronRight' : 'menu'} size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}
