import React, { useState } from "react";
import icons from "./icons";
import MaterialTable, { Column } from "material-table";
import { Paper } from "@material-ui/core";

export default function BooksTable(props) {
  const data = [];

  return (
    <div className="table-wrap border styleTable">
      <MaterialTable
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
        }}
        icons={icons}
        options={{
          exportButton: true,
        }}
        columns={[
          { title: "From Address", field: "FromAddress" },
          { title: "To Address", field: "ToAddress" },
          { title: "Start Date", field: "startD" },
          { title: "Due Date", field: "endDate" },
          { title: "Amount Paid", field: "value" },
          { title: " Status", field: "status" },
        ]}
        data={[..."123466", data].map((data) => {
          return {
            FromAddress: "19,Jimo meji ijesha",
            ToAddress: "26 omilani ijeshatedo",
            startD: "12/19/2190",
            endDate: "12/2/9090",
            value: "₦2,350.00",
            status: <a className="pending-action-table-btn">Pending</a>,
          };
        })}
        title="All booking"
      />
    </div>
  );
}
