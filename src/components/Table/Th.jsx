import Td from "./Td";

/**
 * @param {{ columnNames: string[] }} props - sorted by their position in the row
 */
function Th(props) {
  const width = `calc(100% / ${props.columnNames.length})`;

  const tds = props.columnNames.map((columnName, idx) => (
    <Td columnName={columnName} value="" width={width} key={idx} />
  ));

  return <div className="th">{tds}</div>;
}

export default Th;
