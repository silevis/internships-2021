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
      tableRows.push(<tr><td className="text-right p-2">{items[i].key}</td><td className="p-2">{items[i].value}</td></tr>);
  }
  return (
    <table className="border-collapse">
      <tr><th>Parametr</th><th>Wartosc</th></tr>
      {tableRows}
    </table>
  );
};

export default SpecificationTable;
