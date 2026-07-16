import { NavLink } from 'react-router-dom';
import Icon from '../ui/Icon';
import { mobileTabNav } from '../../data/nav';
import './MobileTabBar.css';

export default function MobileTabBar() {
  return (
    <nav className="mobile-tab-bar">
      {mobileTabNav.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) => `mobile-tab-item ${isActive ? 'is-active' : ''}`}
        >
          <Icon name={item.icon} size={21} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
