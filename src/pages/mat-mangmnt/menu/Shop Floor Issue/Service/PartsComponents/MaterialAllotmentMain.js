import React from "react";
import MaterialAllotmentForm from "../UnitsComponents/UnitMaterialAllotmentForm";
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
