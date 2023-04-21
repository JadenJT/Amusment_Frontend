import { React, useState } from "react";

import EmployeeReport from "./EmployeeReport";
import MaintenanceReport from "./MaintenanceReport";
import TicketSalesReport from "./TicketSalesReport";
import IncidentReport from "./IncidentReport";

export default function Report() {
    var formType = <></>;
    const [value, setValue] = useState("");

    switch (value) {
        case "EmployeeReport":
            formType = <EmployeeReport />;
            break;
        case "IncidentReport":
            formType = <IncidentReport />;
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
                <select className="selectButtons">
                    <option>
                        Choose a report
                    </option>
                    <option onClick={() => setValue("EmployeeReport")}>
                        Employee Report
                    </option>
                    <option onClick={() => setValue("IncidentReport")}>
                        Incident Report
                    </option>
                    <option onClick={() => setValue("MaintenanceReport")}>
                        Maintenance Report
                    </option>
                    <option onClick={() => setValue("TicketSalesReport")}>
                        Ticket Sales Report
                    </option>
                </select>
            </div>

            <div className="selectRender">{formType}</div>
        </div>
    );
}