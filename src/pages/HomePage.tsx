import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedNews from '../components/home/FeaturedNews';
import TeamHighlights from '../components/home/TeamHighlights';
import ClubStats from '../components/home/ClubStats';
import CallToAction from '../components/home/CallToAction';
import FeaturedProjects from '../components/home/FeaturedProjects';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedNews />
      <TeamHighlights />
      <ClubStats />
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
};

export default HomePage;