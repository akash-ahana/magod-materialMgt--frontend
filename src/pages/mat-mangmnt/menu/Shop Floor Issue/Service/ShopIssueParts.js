import React from "react";
import MaterialAllotmentForm from "./PartsComponents/MaterialAllotmentForm";
import MaterialAllotmentTable from "./PartsComponents/MaterialAllotmentTable";
import ProductionMaterialIssueParts from "./PartsComponents/ProductionMaterialIssueParts";
import ReleaseToProduction from "./PartsComponents/ReleaseToProduction";
import ShopFloorMaterialAllotment from "./PartsComponents/ShopFlorMatAllotment/ShopFloorMaterialAllotment";

function ShopIssueParts() {
  return (
    <div>
      {/* <MaterialAllotmentForm />
      <MaterialAllotmentTable />
      <ReleaseToProduction /> */}

      {/* <ProductionMaterialIssueParts /> */}
      <ShopFloorMaterialAllotment />
    </div>
  );
}

export default ShopIssueParts;
