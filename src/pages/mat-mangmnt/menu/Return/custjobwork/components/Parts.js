import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import CreateDCModal from "../../../../components/CreateDCModal";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function Parts(props) {
  let [firstTable, setFirstTable] = useState([]);
  let [secondTable, setSecondTable] = useState([]);
  let [thirdTable, setThirdTable] = useState([]);

  let [allData, setAllData] = useState([]);

  const fetchData = () => {
    //console.log("props = ", props);
    if (props && props.custCode.length !== 0) {
      let url1 = endpoints.partFirst + "?Cust_Code=" + props.custCode;
      getRequest(url1, (data) => {
        // data.forEach((item, i) => {
        //   item.id = i + 1;
        //   item.Issue = false;
        // });
        setFirstTable(data);
      });

      //fetch second table data
      let url2 = endpoints.partSecond + "?Cust_Code=" + props.custCode;
      getRequest(url2, (data) => {
        setAllData(data);
        setSecondTable(data);
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
      text: "RV No",
      dataField: "RV_No",
      //hidden: true,
    },
    {
      text: "Select",
      dataField: "RV_No",
      editable: false,
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
  return (
    <>
      <div className="row">
        <div className="col-md-2 col-sm-12">
          {" "}
          <div className="row-md-12 table-data">
            <div style={{ height: "400px", overflowY: "scroll" }}>
              <BootstrapTable
                keyField="Rv_No"
                columns={columnsFirst}
                data={firstTable}
                striped
                hover
                condensed
                //</div>selectRow={selectRowFirst}
              ></BootstrapTable>

              {/* <Table bordered>
                <thead
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr>
                    <th>Rv No</th>
                    <th>Select</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr>
                    <td>asdfghj</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </Table> */}
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
                //</div>selectRow={selectRowFirst}
              ></BootstrapTable>
              {/* <Table bordered>
                <thead
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr>
                    <th>Select</th>
                    <th>PartID</th>
                    <th>ReceiveID</th>
                    <th>Rejected</th>
                    <th>Issued</th>
                    <th>Used</th>
                    <th>Returned</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </Table> */}
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
              <Table bordered>
                <thead
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr>
                    <th>Rv No</th>
                    <th>CustDocument</th>
                    <th>Material Code</th>
                    <th>Weight</th>
                    <th>Length</th>
                    <th>Scrap</th>
                    <th>Scrap Weight</th>
                    <th>Instock</th>
                    <th>Issue</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Parts;
