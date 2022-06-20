import { useEffect, useState } from "react";

import Header from "components/Header";
import Table from "components/Table/Table";

import AsteroidsAPI from "services/asteroids";

function Asteroids() {
  const [asteroidsData, setAsteroidsData] = useState({
    columnNames: [],
    rowsOfValues: [],
  });

  useEffect(() => {
    AsteroidsAPI.list()
      .then((response) => {
        const columnNames = [
          "Fullname",
          "Close-approach Body",
          "Primary Designation",
          "Orbit ID",
          "Time of Close-Approach",
          "Nominal Approach Distance*",
        ];

        const rowsOfValues = response.data.data.map((values) => {
          return [
            values[12],
            values[10],
            values[0],
            values[1],
            values[3],
            values[4],
          ];
        });

        setAsteroidsData({ columnNames, rowsOfValues });
      })
      .catch(() => {
        setAsteroidsData({ columnNames: [], rowsOfValues: [] });
      });
  }, []);

  const comments = ["(*) distance in au units (1 au = 1,496e+8 km)"];

  return (
    <div className="container mb-3">
      <Header />

      <h2 className="mb-3">Here go some fancy asteroids data</h2>

      <Table
        comments={comments}
        columnNames={asteroidsData.columnNames}
        rowsOfValues={asteroidsData.rowsOfValues}
      ></Table>
    </div>
  );
}

export default Asteroids;
