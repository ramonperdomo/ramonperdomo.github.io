/**
 * @param {{ columnName: string; value: string; width: string; }} props
 */
function Td(props) {
  return (
    <div className="td" style={{ width: props.width }}>
      <span>{props.columnName}</span>
      <span>{props.value}</span>
    </div>
  );
}

export default Td;
