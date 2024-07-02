interface TableRowProps {
  tableHeader: string;
  details: string | JSX.Element;
}

const TableRow: React.FC<TableRowProps> = ({ tableHeader, details }) => {
  return (
    <tr>
      <th
        className="border px-3 py-1 text-left"
        dangerouslySetInnerHTML={{ __html: tableHeader }}
      />
      <td className="border px-3 py-1">{details}</td>
    </tr>
  );
};

export default TableRow;
