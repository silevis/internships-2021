import React, { FC } from 'react';

interface ISpecsTableProps {
  items: ISpecsItem[]
}

interface ISpecsItem {
  key: string
  value: string
}

const SpecificationTable: FC<ISpecsTableProps> = ({ items }) => {
  const tableRows = [];
  for (let i = 0; i < items.length; i++) {
      tableRows.push(
        <div className="flex flex-wrap flex-col md:flex-row justify-between border-b">
          <div className="max-w-1/2 md:text-right p-2 mr-10 text-gray-500">{items[i].key}</div>
          <div className="max-w-1/2 p-2">{items[i].value}</div>
        </div>
);
  }
  return (
    <div>
      {tableRows}
    </div>
  );
};

export default SpecificationTable;
