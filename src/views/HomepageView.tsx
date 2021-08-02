import React from 'react';
import { motion } from 'framer-motion';
import HomepageGradientSection from '../components/homepage/HomepageGradientSection';
import HomepageInfoSections from '../components/homepage/HomepageInfoSections';
import HomepageLandingPage from '../components/homepage/HomepageLandingPage';
import HomepageSliderSection from '../components/homepage/HomepageSliderSection';
import { PageExitAnimation } from '../components/App';

const HomepageView = () => {
  return (
    <motion.div exit={PageExitAnimation}>
      <section className="bg-white homepage-container-section mx-auto flex flex-col items-center gap-2 overflow-hidden">
        <HomepageLandingPage />
        <HomepageInfoSections />
        <HomepageSliderSection />
        <HomepageGradientSection />
      </section>
    </motion.div>
  );
};

export default HomepageView;
