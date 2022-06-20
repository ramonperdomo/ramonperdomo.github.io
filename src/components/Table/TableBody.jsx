import Tr from "./Tr";

/**
 * @param {{ columnNames: string[]; rowsOfValues: string[][]; }} props
 */
function TableBody(props) {
  const trs = props.rowsOfValues.map((values, idx) => {
    if (props.columnNames.length !== values.length) {
      return <span>Error loading row</span>;
    }

    return <Tr columnNames={props.columnNames} values={values} key={idx} />;
  });

  return <div className="table-body">{trs}</div>;
}

export default TableBody;
