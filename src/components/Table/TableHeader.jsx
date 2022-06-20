import Th from "./Th";

/**
 * @param {{ columnNames: string[]; }} props - sorted by their position in the row
 */
function TableHeader(props) {
  const th = <Th columnNames={props.columnNames} />;

  return <div className="table-header">{th}</div>;
}

export default TableHeader;
