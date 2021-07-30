import React from 'react';
import HomepageGradientSection from '../components/homepage/HomepageGradientSection';
import HomepageInfoSections from '../components/homepage/HomepageInfoSections';
import HomepageLandingPage from '../components/homepage/HomepageLandingPage';
import HomepageSliderSection from '../components/homepage/HomepageSliderSection';

const HomepageView = () => {
  return (
    <section className="homepage-container-section mx-auto flex flex-col items-center gap-2 overflow-hidden">
      <HomepageLandingPage />
      <HomepageInfoSections />
      <HomepageSliderSection />
      <HomepageGradientSection />
    </section>
  );
};

export default HomepageView;
