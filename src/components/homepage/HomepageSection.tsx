import React, { FC } from 'react';
import './HomepageSection.css';

interface IHomepageSectionProps {
    title: string;
    content: string;
    rightAligned: boolean;
}

const HomepageSection: FC<IHomepageSectionProps> = ({ title, content, rightAligned = false }) => {
  return (
    <div className={`flex justify-between m-4 md:m-0 ${rightAligned ? 'md:mr-12 flex-row-reverse' : 'md:ml-12'}`}>
      <div className={`homepage-textbox w-full lg:w-3/5 ${rightAligned ? 'self-end' : 'self-start'} 
      bg-white text-2xl shadow-md p-4 justify-self-start`}
      >
        <div className="h-full flex flex-col">
          <span className="text-3xl font-bold mb-4">{title}</span>
          <p className="text-justify">
            {content}
          </p>
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/bubbles.svg`}
        alt="Bubbles"
        className={`w-1/4 hidden md:block relative select-none
        ${rightAligned ? '-left-6 homepage-bubble' : '-right-12'}`}
      />
    </div>
  );
};

export default HomepageSection;
