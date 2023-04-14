import { React, useState } from "react";

import EmployeeReport from "./EmployeeReport";
import MaintenanceReport from "./MaintenanceReport";
import TicketSalesReport from "./TicketSalesReport";

export default function Report() {
  var formType = <></>;
  const [value, setValue] = useState("");

  switch (value) {
    case "EmployeeReport":
      formType = <EmployeeReport />;
      break;
    case "MaintenanceReport":
      formType = <MaintenanceReport />;
      break;
    case "TicketSalesReport":
      formType = <TicketSalesReport />;
      break;
  }

  return (
    <div className="reportBody">
      <div className="rSelection">
        <h1>Please select a report.</h1>
        <div className="selectButtons">
          <button onClick={() => setValue("EmployeeReport")}>
            Employee Report
          </button>
          <button onClick={() => setValue("MaintenanceReport")}>
            Maintenance Report
          </button>
          <button onClick={() => setValue("TicketSalesReport")}>
            Ticket Sales Report
          </button>
        </div>
      </div>
      
      <div className="selectRender">{formType}</div>
    </div>
  );
}