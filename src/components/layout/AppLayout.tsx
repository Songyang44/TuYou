import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopNav from './TopNav';
import SideNav from './SideNav';
import MobileTabBar from './MobileTabBar';
import './AppLayout.css';

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app-shell">
      <TopNav onMenuClick={() => setMobileOpen(true)} />
      <div className="app-body">
        <SideNav
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((c) => !c)}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />
        <main className="app-content" key={location.pathname}>
          <Outlet />
        </main>
      </div>
      <MobileTabBar />
    </div>
  );
}
