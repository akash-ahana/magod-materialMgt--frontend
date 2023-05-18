import React, { Fragment, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PrintMaterialDCTable from "./PrintDailyReportReceiptTable";
import { useLocation } from "react-router-dom";
import PrintReportStockListTable from "./PrintReportFullStockListTable";

function PrintReportStockList() {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const location = useLocation();
  console.log(
    "customerDetails = ",
    location.state.customerDetails,
    " tabledata = ",
    location.state.tableData,
    " qty = ",
    location.state.totqty1,
    " weight = ",
    location.state.totalweight1
  );

  const [scrapData, setscrapData] = useState(
    location.state.tableData.filter((item, index) => {
      return item.Scrap !== 0;
    })
  );
  const [tblData, settblData] = useState(
    location.state.tableData.filter((item, index) => {
      return item.Scrap === 0;
    })
  );

  return (
    <Fragment>
      <PDFViewer width="1200" height="600" filename="somename.pdf">
        <PrintReportStockListTable
          totQty1={location.state.totqty1}
          totWeight1={location.state.totalweight1}
          totQty2={location.state.totqty2}
          totWeight2={location.state.totalweight2}
          tableData={tblData}
          scrapData={scrapData}
          scrapFlag={scrapData.length}
          customerDetails={location.state.customerDetails}
        />
      </PDFViewer>
    </Fragment>
  );
}

export default PrintReportStockList;
