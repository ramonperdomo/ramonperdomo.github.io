import { useContext } from "react";
import { WidthContext } from "App";

import Td from "./Td";

/**
 * @param {{ columnNames: string[]; values: string[] }} props - sorted by their position in the row
 */
function Tr(props) {
  const widthLevel = useContext(WidthContext);
  const isMobile = widthLevel <= 3;

  const width = isMobile ? undefined : `calc(100% / ${props.values.length})`;

  const tds = props.values.map((value, idx) => (
    <Td
      columnName={props.columnNames[idx] + ": "}
      value={value}
      width={width}
      key={idx}
    />
  ));

  if (isMobile) {
    tds.shift();
  }

  return (
    <div className="tr">
      {isMobile ? (
        <h3>
          <strong>{props.columnNames[0]}:</strong> {props.values[0]}
        </h3>
      ) : null}

      {tds}
    </div>
  );
}

export default Tr;
