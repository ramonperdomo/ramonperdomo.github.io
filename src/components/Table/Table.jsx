import { useContext } from "react";

import { WidthContext } from "App";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

/**
 * @param {{ comments?: string[]; columnNames: string[]; rowsOfValues: string[][]; }} props
 *  - both columnNames and rowsOfValues sorted by their position in their row
 */
function Table(props) {
  const widthLevel = useContext(WidthContext);
  const isMobile = widthLevel <= 3;

  const tableHeader = <TableHeader columnNames={props.columnNames} />;

  const tableBody = (
    <TableBody
      columnNames={props.columnNames}
      rowsOfValues={props.rowsOfValues}
    />
  );

  const comments = props.comments?.map((comment, idx) => (
    <small key={idx}>{comment}</small>
  ));

  return (
    <div className="table">
      {isMobile ? comments : null}

      {tableHeader}

      {tableBody}

      {!isMobile ? comments : null}
    </div>
  );
}

export default Table;
