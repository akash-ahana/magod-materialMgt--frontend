import React from "react";
import MaterialAllotmentForm from "./MaterialAllotmentForm";
import MaterialAllotmentTable from "./MaterialAllotmentTable";
import ReleaseToProduction from "./ReleaseToProduction";

function MaterialAllotmentMain() {
  return (
    <div>
      <MaterialAllotmentForm />
      <MaterialAllotmentTable />
      <ReleaseToProduction />
    </div>
  );
}

export default MaterialAllotmentMain;
