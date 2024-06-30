import TableRow from './table-row';

interface TableProps {
  data: Array<{ tableHeader: string; details: string }>;
  caption?: string;
  tHeadFirstTitle: string;
  tHeadSecondTitle: string;
}

const Table: React.FC<TableProps> = ({
  data,
  caption,
  tHeadFirstTitle,
  tHeadSecondTitle,
}) => {
  return (
    <table className="w-full border-collapse">
      {caption && (
        <caption className="mt-4 caption-bottom text-xs">{caption}</caption>
      )}
      <thead>
        <tr>
          <th className="border px-3 py-1 text-left">{tHeadFirstTitle}</th>
          <th className="border px-3 py-1 text-left">{tHeadSecondTitle}</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {data.map((row, index) => (
          <TableRow
            key={index}
            tableHeader={row.tableHeader}
            details={row.details}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
