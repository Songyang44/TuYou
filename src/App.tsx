import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home/Home';
import GuideList from './pages/Guides/GuideList';
import GuideDetail from './pages/Guides/GuideDetail';
import BountyList from './pages/Bounty/BountyList';
import BountyDetail from './pages/Bounty/BountyDetail';
import BountyPublish from './pages/Bounty/BountyPublish';
import CommunityList from './pages/Community/CommunityList';
import PostDetail from './pages/Community/PostDetail';
import AttractionsHome from './pages/Attractions/AttractionsHome';
import CityPage from './pages/Attractions/CityPage';
import SpotDetail from './pages/Attractions/SpotDetail';
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="guides" element={<GuideList />} />
          <Route path="guides/:id" element={<GuideDetail />} />

          <Route path="bounty" element={<BountyList />} />
          <Route path="bounty/publish" element={<BountyPublish />} />
          <Route path="bounty/:id" element={<BountyDetail />} />

          <Route path="community" element={<CommunityList />} />
          <Route path="community/:id" element={<PostDetail />} />

          <Route path="attractions" element={<AttractionsHome />} />
          <Route path="attractions/:countryId" element={<CityPage />} />
          <Route path="attractions/:countryId/:cityId" element={<CityPage />} />
          <Route path="attractions/:countryId/:cityId/:spotId" element={<SpotDetail />} />

          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
