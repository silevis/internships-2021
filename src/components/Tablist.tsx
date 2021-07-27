import { FC, useState } from 'react';
import { ITab } from '../interfaces/ITab.interface';

interface ITablistProps {
  tabs: ITab[],
  defaultTab: number
}

const Tablist: FC<ITablistProps> = ({ tabs, defaultTab }) => {
  const [currTabID, setCurrTabID] = useState(defaultTab);

  const tabChangeHandler = (newTabId: number) => {
    setCurrTabID(newTabId);
  }

  const tabTitleElements = [];
  for (let i = 0; i < tabs.length; i++) {
    tabTitleElements.push(
      <button
        type="button"
        className="flex-initial p-4 cursor-pointer auto-rows-min border-r border-gray-300"
        onClick={() => tabChangeHandler(i)}
      >
        {tabs[i].title}
      </button>
);
  }

  // todo: set the height of the tablist to the maximum height of a tab content
  return (
    <div
      className="grid grid-rows-2 grid-cols-1 shadow-md border border-gray-400"
      style={{ gridTemplateRows: 'min-content auto' }}
    >
      <div className="flex border-b border-gray-300">
        {tabTitleElements}
      </div>
      <div className="p-1 md:p-4">
        {tabs[currTabID].content}
      </div>
    </div>
  );
};

export default Tablist;
