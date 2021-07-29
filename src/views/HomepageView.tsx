import React from 'react';
import HomepageGradientSection from '../components/homepage/HomepageGradientSection';
import HomepageInfoSections from '../components/homepage/HomepageInfoSections';
import HomepageLandingPage from '../components/homepage/HomepageLandingPage';

const HomepageView = () => {
  return (
    <section className="mx-auto flex flex-col items-center gap-2 overflow-hidden">
      <HomepageLandingPage />
      <HomepageInfoSections />
      <HomepageGradientSection />
    </section>
  );
};

export default HomepageView;
