import { React, useState } from "react";

import MaintenanceReport from "./MaintenanceReport";
import PopularityReport from "./PopularityReport";
import ZoneReport from "./ZoneReport";

export default function Report() {
  var formType = <></>;
  const [value, setValue] = useState("");

  switch (value) {
    case "MaintenanceReport":
      formType = <MaintenanceReport />;
      break;
    case "PopularityReport":
      formType = <PopularityReport />;
      break;
    case "ZoneReport":
      formType = <ZoneReport />;
      break;
  }

  return (
    <div className="reportBody">
      <div className="selection">
        <h1>Please select a report.</h1>
        <div className="selectButtons">
          <button onClick={() => setValue("MaintenanceReport")}>
            Maintenance Report
          </button>
          <button onClick={() => setValue("PopularityReport")}>
            Ride Popularity Report
          </button>
          <button onClick={() => setValue("ZoneReport")}>
            Zone Report
          </button>
        </div>
      </div>
      
      <div className="selectRender">{formType}</div>
    </div>
  );
}