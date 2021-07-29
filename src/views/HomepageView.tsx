import React from 'react';
import HomepageGradientSection from '../components/homepage/HomepageGradientSection';
import HomepageInfoSections from '../components/homepage/HomepageInfoSections';
import HomepageLandingPage from '../components/homepage/HomepageLandingPage';
// import supabase from '../utils/supabase';

const HomepageView = () => {
  // supabase.from('books').select('id,imageLinks').then((data) => {
  //   let b;
  //   let str = '';
  //   if (data && data.data) {
  //     for (b of data.data) {
  //       console.log(b);
  //       str += `curl -o ${b.id}.jpg "${b.imageLinks[0]}"\n`;
  //     }
  //     console.log(str);
  //   }
  // });

  return (
    <section className="mx-auto flex flex-col items-center gap-2 overflow-hidden">
      <HomepageLandingPage />
      <HomepageInfoSections />
      <HomepageGradientSection />
    </section>
  );
};

export default HomepageView;
