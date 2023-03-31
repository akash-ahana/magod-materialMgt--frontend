import React, { Fragment, useState } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import PrintMaterialDCTable from "./PrintMaterialDCTable";
import { useLocation } from "react-router-dom";
import PrintPartsDCTable from "./PrintPartsDCTable";

const { getRequest, postRequest } = require("../../../api/apiinstance");
const { endpoints } = require("../../../api/constants");

function PrintPartsDC() {
  const location = useLocation();
  console.log(
    "Second formheader = ",
    location.state.formHeader,
    " outdata = ",
    location.state.outData,
    " custdata = ",
    location.state.custdata
  );

  return (
    <Fragment>
      <PDFViewer width="1200" height="600" filename="somename.pdf">
        <PrintPartsDCTable
          //data={data}
          //selectedWeek={selectedWeek}
          //newData={newData}
          formHeader={location.state.formHeader}
          outData={location.state.outData}
          custdata={location.state.custdata}
          dcRegister={location.state.dcRegister}
        />
      </PDFViewer>
    </Fragment>
  );
}

export default PrintPartsDC;
