import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminLayout, Layout } from './layout';
import {
  Rsvp,
  Home,
  Travel,
  Registry,
  Confirmation,
  AdminHome,
  RSVPs,
  MealOptions
} from './pages';

export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="travel" element={<Travel />} />
        <Route path="registry" element={<Registry />} />
        <Route path="rsvp" element={<Rsvp />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="rsvps" element={<RSVPs />} />
        <Route path="meal-options" element={<MealOptions />} />
      </Route>
    </Routes>
  </Router>
);