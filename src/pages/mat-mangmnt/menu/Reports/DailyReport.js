import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import BootstrapTable from "react-bootstrap-table-next";
import { useNavigate } from "react-router-dom";

const { getRequest, postRequest } = require("../../../api/apiinstance");
const { endpoints } = require("../../../api/constants");

function DailyReport() {
  const nav = useNavigate();
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const [firstTab, setFirstTab] = useState([]);
  const [secondTab, setSecondTab] = useState([]);
  const [thirdTab, setThirdTab] = useState([]);
  const [fourthTab, setFourthTab] = useState([]);

  const [dateVal, setDateVal] = useState("1988-01-01");
  const [totqty, settotqty] = useState(0);
  const [totalweight, settotalweight] = useState(0);
  const InputEvent = (e) => {
    const { name, value } = e.target;
    console.log("value = ", value);
    setDateVal(value);
  };

  const loadData = () => {
    //first tab
    const url1 = endpoints.getDailyReportMaterialReceipt1 + "?date=" + dateVal;
    getRequest(url1, (data) => {
      for (let i = 0; i < data.length; i++) {
        data[i].id = i + 1;
      }
      //setFirstTab(data);
      console.log("first tab1 ");
    });
    const url2 = endpoints.getDailyReportMaterialReceipt2 + "?date=" + dateVal;
    getRequest(url2, async (data) => {
      for (let i = 0; i < data.length; i++) {
        data[i].id = i + 1;
      }
      setFirstTab(data);
      console.log("first tab2 = ", data);

      let tweight = 0;
      let tqty = 0;
      for (let i = 0; i < data.length; i++) {
        tweight = tweight + data[i].totalWeight;
        tqty = tqty + parseInt(data[i].qty);
      }
      await delay(2000);
      settotalweight(tweight);
      settotqty(tqty);
    });

    //second tab
    const url3 = endpoints.getDailyReportMaterialDispatch + "?date=" + dateVal;
    getRequest(url3, (data) => {
      for (let i = 0; i < data.length; i++) {
        data[i].id = i + 1;
      }
      setSecondTab(data);
      console.log("second tab = ", data);
    });

    //third tab -sales
    const url4 = endpoints.getDailyReportMaterialSales + "?date=" + dateVal;
    getRequest(url4, (data) => {
      for (let i = 0; i < data.length; i++) {
        data[i].id = i + 1;
      }
      setThirdTab(data);
      console.log("third tab = ", data);
    });

    //fourth tab-purchase
    const url5 = endpoints.getDailyReportMaterialPurchase + "?date=" + dateVal;
    getRequest(url5, (data) => {
      for (let i = 0; i < data.length; i++) {
        data[i].id = i + 1;
      }
      setFourthTab(data);
      console.log("fourth tab = ", data);
    });
  };

  const columns1 = [
    {
      text: "id",
      dataField: "id",
      hidden: true,
    },
    {
      text: "RV_No",
      dataField: "RV_No",
    },
    {
      text: "Customer",
      dataField: "Customer",
    },
    {
      text: "CustDocuNo",
      dataField: "CustDocuNo",
    },
    {
      text: "Type",
      dataField: "Type",
    },
    {
      text: "Receipt Details",
      dataField: "",
      headerStyle: { whiteSpace: "nowrap" },
    },
    {
      text: "Quantity",
      dataField: "qty",
    },
    {
      text: "Weight Calculated",
      dataField: "totalweightcalculated",
      headerStyle: { whiteSpace: "nowrap" },
    },
    {
      text: "Actual Weight",
      dataField: "totalWeight",
      headerStyle: { whiteSpace: "nowrap" },
    },
  ];

  const columns2 = [
    {
      text: "id",
      dataField: "id",
      hidden: true,
    },
    {
      text: "Type",
      dataField: "DC_InvType",
    },
    {
      text: "Inv_No",
      dataField: "Inv_No",
    },
    {
      text: "Customer",
      dataField: "Cust_Name",
    },
    {
      text: "Mtrl",
      dataField: "Mtrl",
    },
    {
      text: "Material",
      dataField: "Material",
    },
    {
      text: "SrlWt",
      dataField: "SrlWt",
    },
  ];

  const columns3 = [
    {
      text: "id",
      dataField: "id",
      hidden: true,
    },
    {
      text: "Inv_No",
      dataField: "Inv_No",
    },
    {
      text: "Type",
      dataField: "DC_InvType",
    },
    {
      text: "Customer",
      dataField: "Cust_Name",
    },
    {
      text: "Material",
      dataField: "Material",
    },
    {
      text: "Weight",
      dataField: "SrlWt",
    },
  ];

  const columns4 = [
    {
      text: "id",
      dataField: "id",
      hidden: true,
    },
    {
      text: "RV_No",
      dataField: "RV_No",
    },
    {
      text: "CustDocuNo",
      dataField: "CustDocuNo",
    },
    {
      text: "Material",
      dataField: "Material",
    },
    {
      text: "Calculated Weight",
      dataField: "TotalWeightCalculated",
      headerStyle: { whiteSpace: "nowrap" },
    },
    {
      text: "Actual Weight",
      dataField: "TotalWeight",
      headerStyle: { whiteSpace: "nowrap" },
    },
    {
      text: "Quantity",
      dataField: "qty",
    },
  ];
  const printReceipt = async () => {
    //await delay(2000);

    nav("/MaterialManagement/Reports/PrintDailyReportReceipt", {
      state: {
        tableData: firstTab,
        date: dateVal,
        totalweight: totalweight,
        totqty: totqty,
      },
    });
  };
  const printInvoice = async () => {
    //first find out the unique type
    var invType = [...new Set(secondTab.map((item) => item.DC_InvType))];
    invType = invType.sort();
    //console.log("type = ", invType.sort());

    //calculate material purchase details
    var fullTable = [];
    for (let i = 0; i < invType.length; i++) {
      let tot = 0;
      var tempdata = [];
      for (let j = 0; j < secondTab.length; j++) {
        if (invType[i] === secondTab[j].DC_InvType) {
          tempdata.push(secondTab[j]);
          tot = tot + parseFloat(secondTab[j].SrlWt);
        }
      }
      let obj = {
        material: invType[i],
        totwt: tot,
        data: tempdata,
      };
      fullTable.push(obj);
    }
    await delay(300);
    console.log("fullTable = ", fullTable);

    nav("/MaterialManagement/Reports/PrintDailyReportInvoice", {
      state: {
        tableData: fullTable,
        date: dateVal,
      },
    });
  };
  return (
    <div>
      {" "}
      <h4 className="title">Raw Material Daily Report</h4>
      <div className="row">
        <div className="col-md-2">
          <label className="form-label">Select Month</label>
          <input type="date" name="date" onChange={InputEvent} />
        </div>
        <div className="col-md-10">
          <button className="button-style" onClick={loadData}>
            Load Data
          </button>
          <button className="button-style">Save Data</button>
          <button className="button-style" style={{width:"200px"}} onClick={printReceipt}>
            Print Receipt Report
          </button>
          <button className="button-style" style={{width:"200px"}} onClick={printInvoice}>
            Print Invoice Dispatch
          </button>
          <button
            className="button-style "
            onClick={() => nav("/MaterialManagement")}
          >
            Close
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Tabs id="controlled-tab-example" className="mb-3 mt-3 tab_font">
            <Tab eventKey="mat_rece" title="Material Receipt">
              {/* <DailyReportMaterialReceipt tableData={firstTab} /> */}
              <div style={{ height: "250px", overflowY: "scroll" }}>
                <BootstrapTable
                  keyField="id"
                  columns={columns1}
                  data={firstTab}
                  striped
                  hover
                  condensed
                  //selectRow={selectRow1}
                  headerClasses="header-class"
                ></BootstrapTable>
              </div>
            </Tab>

            <Tab eventKey="mat_dis" title="Material Dispatch">
              {/* <DailyReportMaterialDispatch tableData={secondTab} /> */}
              <div style={{ height: "250px", overflowY: "scroll" }}>
                <BootstrapTable
                  keyField="id"
                  columns={columns2}
                  data={secondTab}
                  striped
                  hover
                  condensed
                  //selectRow={selectRow1}
                  headerClasses="header-class"
                ></BootstrapTable>
              </div>
            </Tab>

            <Tab eventKey="mat_sale" title="Material Sales">
              {/* <DailyReportMaterialSales tableData={thirdTab} /> */}
              <div style={{ height: "250px", overflowY: "scroll" }}>
                <BootstrapTable
                  keyField="id"
                  columns={columns3}
                  data={thirdTab}
                  striped
                  hover
                  condensed
                  //selectRow={selectRow1}
                  headerClasses="header-class"
                ></BootstrapTable>
              </div>
            </Tab>

            <Tab eventKey="mat_pur" title="Material Purchase">
              {/* <DailyReportMaterialPurchase tableData={fourthTab} /> */}
              <div style={{ height: "250px", overflowY: "scroll" }}>
                <BootstrapTable
                  keyField="id"
                  columns={columns4}
                  data={fourthTab}
                  striped
                  hover
                  condensed
                  //selectRow={selectRow1}
                  headerClasses="header-class"
                ></BootstrapTable>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default DailyReport;
