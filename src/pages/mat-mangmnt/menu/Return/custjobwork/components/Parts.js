import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import CreateDCModal from "../../../../components/CreateDCModal";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { all } from "proxy-addr";

const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function Parts(props) {
  let [firstTable, setFirstTable] = useState([]);
  let [secondTable, setSecondTable] = useState([]);
  let [thirdTable, setThirdTable] = useState([]);

  let [selectedSecond, setSelectedSecond] = useState({ selected: [] });

  let [allData, setAllData] = useState([]);

  const fetchData = () => {
    //console.log("props = ", props);
    if (props && props.custCode.length !== 0) {
      let url1 = endpoints.partFirst + "?Cust_Code=" + props.custCode;
      getRequest(url1, (data) => {
        setFirstTable(data);

        //fetch second table data
        let url2 = endpoints.partSecond + "?Cust_Code=" + props.custCode;
        getRequest(url2, (data1) => {
          let newData = data1.filter((obj, index) => {
            return obj.RVId === Object.values(data)[0].RvID;
          });
          setAllData(data1);
          setSecondTable(newData);
        });
      });
    }
  };

  useEffect(() => {
    //setPropsValue(props.custCode);
    fetchData();
    //console.log("S props value = ", propsValue);
  }, [props.custCode]);

  const columnsFirst = [
    {
      text: "RvID",
      dataField: "RvID",
      hidden: true,
    },
    {
      text: "RV No",
      dataField: "RV_No",
      //hidden: true,
    },
  ];
  const columnsSecond = [
    {
      text: "Id",
      dataField: "Id",
      hidden: true,
    },
    {
      text: "PartId",
      dataField: "PartId",
    },
    {
      text: "Received",
      dataField: "QtyReceived",
    },
    {
      text: "Rejected",
      dataField: "QtyRejected",
    },
    {
      text: "Issued",
      dataField: "QtyIssued",
    },
    {
      text: "Used",
      dataField: "QtyUsed",
    },
    {
      text: "Returned",
      dataField: "QtyReturned",
    },
  ];
  const columnsThird = [
    {
      text: "Id",
      dataField: "Id",
      hidden: true,
    },
    {
      text: "PartId",
      dataField: "PartIdNew",
    },
    {
      text: "Return",
      dataField: "QtyReturnedNew",
    },
    {
      text: "Remarks",
      dataField: "Remarks",
    },
  ];

  const selectRowFirst = {
    mode: "checkbox",
    clickToSelect: true,
    //selected: selectRowSecond.selected,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect) => {
      //console.log("Row = ", row);
      //console.log("isselect = ", isSelect);

      if (isSelect) {
        //update second table data
        let newData = allData.filter((obj, index) => {
          return obj.RVId === row.RvID;
        });
        setSecondTable(newData);

        //console.log("All data  =", allData);
        //prepare third table
        newData.forEach((item, i) => {
          //set second table default checkbox selection
          setSelectedSecond({
            selected: [...selectedSecond.selected, item.Id],
          });
          //console.log(" selectedSecond = ", selectedSecond);
          if (
            item.QtyReceived -
              item.QtyRejected -
              item.QtyReturned -
              item.QtyUsed >
            0
          ) {
            item.PartIdNew = item.partId + "/**Ref: " + row.CustDocuNo;
            if (item.QtyRejected > 0) {
              if (
                item.QtyReceived - item.QtyReturned - item.QtyUsed >
                item.QtyRejected
              ) {
                item.QtyReturnedNew = item.QtyRejected;
              } else {
                item.QtyReturnedNew =
                  item.QtyReceived -
                  item.QtyRejected -
                  item.QtyReturned -
                  item.QtyUsed;
              }
              item.Remarks = "Rejected";
            } else {
              item.QtyReturnedNew =
                item.QtyReceived -
                item.QtyRejected -
                item.QtyReturned -
                item.QtyUsed;
              item.Remarks = "Returned Unused";
            }
          }
        });
        //concat to prev to new
        thirdTable.push.apply(thirdTable, newData);
        setThirdTable(thirdTable);
      } else {
        let newData = thirdTable.filter((obj, index) => {
          return obj.RVId !== row.RvID;
        });
        //console.log("second table = ", secondTable);
        //console.log("before = ", selectedSecond);
        //remove check selection in second table
        secondTable.forEach((item, i) => {
          setSelectedSecond({
            selected: selectedSecond.selected.filter((ele) => {
              return ele !== item.Id;
            }),
          });
        });

        setThirdTable(newData);
      }
    },
  };

  const selectRowSecond = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#8A92F0",
    selected: selectedSecond.selected,
    onSelect: (row, isSelect) => {
      if (isSelect) {
        let newData = allData.filter((obj, index) => {
          return obj.RVId === row.RVId;
        });

        //prepare third table
        newData.forEach((item, i) => {
          //set check in second table
          setSelectedSecond({
            selected: [...selectedSecond.selected, item.Id],
          });
          if (
            item.QtyReceived -
              item.QtyRejected -
              item.QtyReturned -
              item.QtyUsed >
            0
          ) {
            item.PartIdNew = item.partId + "/**Ref: " + row.CustDocuNo;
            if (item.QtyRejected > 0) {
              if (
                item.QtyReceived - item.QtyReturned - item.QtyUsed >
                item.QtyRejected
              ) {
                item.QtyReturnedNew = item.QtyRejected;
              } else {
                item.QtyReturnedNew =
                  item.QtyReceived -
                  item.QtyRejected -
                  item.QtyReturned -
                  item.QtyUsed;
              }
              item.Remarks = "Rejected";
            } else {
              item.QtyReturnedNew =
                item.QtyReceived -
                item.QtyRejected -
                item.QtyReturned -
                item.QtyUsed;
              item.Remarks = "Returned Unused";
            }
          }
        });
        console.log("new data = ", newData);
        //concat to prev to new
        thirdTable.push.apply(thirdTable, newData);
        setThirdTable(thirdTable);
      } else {
        console.log("third table = ", thirdTable);
        console.log("row = ", row);
        let newData = thirdTable.filter((obj, index) => {
          return obj.RVId !== row.RVId;
        });
        secondTable.forEach((item, i) => {
          setSelectedSecond({
            selected: selectedSecond.selected.filter((ele) => {
              return ele !== item.Id;
            }),
          });
        });

        setThirdTable(newData);
      }
    },
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2 col-sm-12">
          {" "}
          <div className="row-md-12 table-data">
            <div style={{ height: "400px", overflowY: "scroll" }}>
              <BootstrapTable
                keyField="RvID"
                columns={columnsFirst}
                data={firstTable}
                striped
                hover
                condensed
                selectRow={selectRowFirst}
              ></BootstrapTable>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row-md-12 table-data">
            <div style={{ height: "400px", overflowY: "scroll" }}>
              <BootstrapTable
                keyField="Id"
                columns={columnsSecond}
                data={secondTable}
                striped
                hover
                condensed
                selectRow={selectRowSecond}
                //</div>selectRow={selectRowFirst}
              ></BootstrapTable>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="row">
            <div className="col-md-4">
              <label className="">RV_No</label>
              <input type="text" name="rvNo" />
            </div>
            <div className="col-md-7">
              <label className="">Customer Ref</label>
              <input type="text" name="customerRef" />
            </div>
          </div>
          <div>
            <button className="button-style" style={{ width: "200px" }}>
              Create Return Vocher
            </button>
          </div>
          <div>
            <div style={{ height: "400px", overflowY: "scroll" }}>
              <BootstrapTable
                keyField="Id"
                columns={columnsThird}
                data={thirdTable}
                striped
                hover
                condensed
                //selectRow={selectRowSecond}
              ></BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Parts;
