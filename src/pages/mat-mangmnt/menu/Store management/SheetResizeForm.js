import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import BootstrapTable from "react-bootstrap-table-next";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const { getRequest, postRequest } = require("../../../api/apiinstance");
const { endpoints } = require("../../../api/constants");

function SheetResizeForm() {
  const nav = useNavigate();
  let [custdata, setCustdata] = useState([]);
  let [tabledata, setTabledata] = useState([]);
  let [selectedTableRows, setSelectedTableRows] = useState([]);

  async function fetchData() {
    getRequest(endpoints.getCustomers, async (data) => {
      console.log("cust data = ", custdata);
      setCustdata(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      text: "Mtrl Stock",
      dataField: "MtrlStockID",
    },
    {
      text: "Mtrl Code",
      dataField: "Mtrl_Code",
    },
    {
      text: "Shape",
      dataField: "Shape",
    },
    {
      text: "Length",
      dataField: "DynamicPara1",
    },
    {
      text: "Width",
      dataField: "DynamicPara2",
    },
    {
      text: "Weight",
      dataField: "Weight",
    },
  ];

  const changeCustomer = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    let url1 = endpoints.getResizeMtrlStockList + "?code=" + value;

    getRequest(url1, (data) => {
      setTabledata(data);
      //console.log("api call = ", data);
    });
  };

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#98A8F8",
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect) {
        setSelectedTableRows([...selectedTableRows, row]);
      } else {
        setSelectedTableRows(
          selectedTableRows.filter((obj) => {
            return obj.MtrlStockID !== row.MtrlStockID;
          })
        );
      }
    },
  };
  return (
    <div>
      {" "}
      <h4 className="title">Sheet Resize Form</h4>
      <div className="row">
        <div className="col-md-8">
          <label className="form-label">Customer</label>
          <select
            className="ip-select"
            name="customer"
            onChange={changeCustomer}
            // disabled={boolVal1}
          >
            <option value="" disabled selected>
              Select Customer
            </option>
            {custdata.map((customer, index) => (
              <option key={index} value={customer.Cust_Code}>
                {customer.Cust_name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <button
            className="button-style"
            onClick={
              () =>
                nav(
                  "/materialmanagement/shoopfloorreturns/pendinglist/resizeandreturn/materialsplitter",
                  {
                    state: {
                      secondTableRow: selectedTableRows,
                      type: "storeresize",
                    },
                  }
                )
              // nav(
              //   "/MaterialManagement/StoreManagement/ResizeSheets/MaterialResizeAndSplittingForm"
              // )
            }
          >
            Resize
          </button>
        </div>
        <div className="col-md-2">
          <button
            className="button-style "
            id="btnclose"
            type="submit"
            onClick={() => nav("/materialmanagement")}
          >
            Close
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div style={{ height: "300px", overflowY: "scroll" }}>
          <BootstrapTable
            keyField="MtrlStockID"
            columns={columns}
            data={tabledata}
            striped
            hover
            condensed
            selectRow={selectRow}
            headerClasses="header-class"
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
                <th>Mtrl Stock</th>
                <th>Mtrl Code</th>
                <th>Shape</th>
                <th>Length</th>
                <th>Width</th>
                <th>Weight</th>
              </tr>
            </thead>

            <tbody className="tablebody">
              <tr
              // onClick={() => selectedRowFn(item, key)}
              // className={
              //   key === selectedRow?.index ? "selcted-row-clr" : ""
              // }
              >
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
              </tr>
            </tbody>
          </Table> */}
        </div>
      </div>
    </div>
  );
}

export default SheetResizeForm;
