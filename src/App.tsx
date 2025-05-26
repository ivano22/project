import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import NewsPage from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="get-involved" element={<GetInvolvedPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;