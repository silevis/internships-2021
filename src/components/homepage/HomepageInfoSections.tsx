import React from 'react';
import HomepageSection from './HomepageSection';

const HomepageInfoSections = () => {
    const bgStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/homepage-dotted-line.svg)`,
    };

    return (
      <div className="lg:container flex flex-col gap-24 w-full" style={bgStyle}>
        <HomepageSection
          title="Who are we?"
          content="We are a group of enthusiasts who love books! Have you ever had a problem, when you couldn&apos;t get your hands
          on a rare book?
          Or maybe you just don&apos;t feel like going the public library? That&apos;s when our site comes into play!
          Simply by making an account you can get access to tons of great books. Just look if we have what interests you
          in stock and borrow it!"
          rightAligned={false}
        />
        <HomepageSection
          title="How does it work?"
          content="It&apos;s simple. You make an account, look for the book of your choice and borrow it! Then you get to keep it for
          a month,
          when the time passes you will need to return it."
          rightAligned
        />
        <HomepageSection
          title="How does it work?"
          content="It&apos;s simple. You make an account, look for the book of your choice and borrow it! Then you get to keep it for
          a month, when the time passes you will need to return it."
          rightAligned={false}
        />
      </div>
    );
};

export default HomepageInfoSections;
