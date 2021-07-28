import React, { FC } from 'react';

interface IHomepageSectionProps {
    title: string;
    content: string;
    rightAligned: boolean;
}

const HomepageSection: FC<IHomepageSectionProps> = ({ title, content, rightAligned = false }) => {
  return (
    <div className="flex">
      <div className={`${rightAligned ? 'self-end' : 'self-start'} bg-gray-100 text-2xl shadow p-4 justify-self-start w-3/5`}>
        <div className="flex flex-col">

          <span className="text-3xl font-bold mb-4">{title}</span>
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomepageSection;
