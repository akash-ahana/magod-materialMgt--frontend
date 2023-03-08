import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import { formatDate } from "../../../../utils";
import { useLocation } from "react-router-dom";

const { getRequest, postRequest } = require("../../../api/apiinstance");
const { endpoints } = require("../../../api/constants");

function OpenButtonOpenSheetUnit() {
  const location = useLocation();

  //initial disable all
  const [boolVal, setBoolVal] = useState(true);

  //alter enable add and remove stock
  const [boolVal2, setBoolVal2] = useState(true);

  const [mtrlArray, setMtrlArray] = useState([]);
  const [para1Label, setPara1Label] = useState("");
  const [para2Label, setPara2Label] = useState("");
  const [para3Label, setPara3Label] = useState("");

  const [formHeader, setFormHeader] = useState({
    RvID: "",
    ReceiptDate: "",
    RV_No: "",
    RV_Date: "",
    RVStatus: "",
    Cust_Code: "",
    Customer: "",
    CustDocuNo: "",
    TotalWeight: "",
    TotalCalculatedWeight: "",
    Type: "",
    address: "",
  });

  async function fetchData() {
    const url =
      endpoints.getByTypeMaterialReceiptRegisterByRvID +
      "?id=" +
      location.state.id;
    getRequest(url, (data) => {
      //console.log("data = ", data);
      data.ReceiptDate = formatDate(new Date(data.ReceiptDate), 4);
      data.RV_Date = formatDate(new Date(data.RV_Date), 3);
      setFormHeader(data);

      //get customer details for address
      getRequest(endpoints.getCustomers, (data1) => {
        const found = data1.find((obj) => obj.Cust_Code === data.Cust_Code);
        data.address = found.Address;
        setFormHeader(data);
      });
      //get material details
      const url1 =
        endpoints.getMtrlReceiptDetailsByRvID + "?id=" + location.state.id;
      getRequest(url1, (data2) => {
        console.log("data2  = ", data2);
        setMtrlArray(data2);

        //find shape of material
        for (let i = 0; i < data2.length; i++) {
          const url2 =
            endpoints.getRowByMtrlCode + "?code=" + data2[i].Mtrl_Code;
          getRequest(url2, (data3) => {
            if (data3.Shape === "Block") {
              setPara1Label("Length");
              setPara2Label("Width");
              setPara3Label("Height");
            } else if (data3.Shape === "Plate") {
              setPara1Label("Length");
              setPara2Label("Width");
              setPara3Label("");
            } else if (data3.Shape === "Sheet") {
              setPara1Label("Width");
              setPara2Label("Length");
              setPara3Label("");
            } else if (data3.Shape === "Tiles") {
              setPara1Label("");
              setPara2Label("");
              setPara3Label("");
            } else if (data3.Shape.includes("Tube")) {
              setPara1Label("Length");
              setPara2Label("");
              setPara3Label("");
            } else if (data3.Shape.includes("Units")) {
              setPara1Label("Qty(Nos)");
              setPara2Label("");
              setPara3Label("");
            }
          });
        }

        //setFormHeader(formHeader);
        //console.log(data2);
      });
    });
    //console.log("data = ", formHeader);
  }

  useEffect(() => {
    fetchData();
    //formHeader.ReceiptDate = formatDate(new Date(), 4);
  }, []);

  const addToStock = () => {
    setBoolVal2(true);
  };

  const removeStock = () => {
    setBoolVal2(false);
  };

  const columns = [
    {
      text: "#",
      dataField: "id",
      hidden: true,
    },
    {
      text: "Srl",
      dataField: "Srl",
    },
    {
      text: "Mtrl Code",
      dataField: "Mtrl_Code",
    },
    {
      text: para1Label,
      dataField: "DynamicPara1",
    },
    {
      text: para2Label,
      dataField: "DynamicPara2",
    },
    {
      text: para3Label,
      dataField: "DynamicPara3",
    },
    {
      text: "Qty",
      dataField: "Qty",
    },
    {
      text: "Inspected",
      dataField: "inspected",
      formatter: (celContent, row) => (
        <div className="checkbox">
          <lable>
            <input
              type="checkbox"
              checked={row.Inspected == 1 ? true : false}
            />
          </lable>
        </div>
      ),
    },
    {
      text: "Location No",
      dataField: "locationNo",
    },
    {
      text: "Updated",
      dataField: "updated",
      formatter: (celContent, row) => (
        <div className="checkbox">
          <lable>
            <input type="checkbox" checked={row.UpDated == 1 ? true : false} />
          </lable>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div>
        <h4 className="form-title">Material Receipt Voucher</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-3">
            <label className="">Receipt Date</label>
            <input
              type="text"
              name="receiptDate"
              value={formHeader.ReceiptDate}
              readOnly
            />
          </div>
          <div className="col-md-3">
            <label className="">RV No</label>
            <input type="text" name="rvNo" value={formHeader.RV_No} readOnly />
          </div>
          <div className="col-md-3">
            <label className="">RV Date</label>
            <input
              type="text"
              name="rvDate"
              value={formHeader.RV_Date}
              readOnly
            />
            {/* value={currDate} */}
          </div>
          <div className="col-md-3">
            <label className="">status</label>
            <input
              type="text"
              name="status"
              value={formHeader.RVStatus}
              readOnly
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label className="form-label">Customer</label>
            <select
              className="ip-select"
              name="customer"
              disabled={boolVal}
              // onChange={changeCustomer}
            >
              <option value={formHeader.Cust_Code} disabled selected>
                {formHeader.Customer}
              </option>

              {/* {customers.map((customer, index) => (
                  <option value={customer.Cust_Code}>
                    {customer.Cust_name}
                  </option>
                ))} */}
            </select>
          </div>
          <div className="col-md-4">
            <label className="">Weight</label>
            <input
              type="text"
              name="weight"
              required
              value={formHeader.TotalWeight}
              disabled={boolVal}
              // onChange={InputHeaderEvent}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label className="">Reference</label>
            <input
              type="text"
              name="reference"
              value={formHeader.CustDocuNo}
              disabled={boolVal}
              // onChange={InputHeaderEvent}
            />
          </div>
          <div className="col-md-4">
            <label className="">Calculated Weight</label>
            <input
              type="text"
              name="calculatedWeight"
              value={formHeader.TotalCalculatedWeight}
              readOnly
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-8 justify-content-center">
            <button
              className="button-style"
              style={{ width: "196px" }}
              disabled={boolVal}
            >
              Save
            </button>

            <button
              className="button-style"
              style={{ width: "196px" }}
              disabled={boolVal}
            >
              Allot RV No
            </button>
            <button
              className="button-style"
              style={{ width: "196px" }}
              disabled={boolVal}
            >
              Delete RV
            </button>
          </div>
          <div className="col-md-4">
            <label className="form-label"></label>
            <textarea
              style={{ height: "110px" }}
              className="form-control"
              value={formHeader.address}
              readOnly
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div
            style={{ height: "330px", overflowY: "scroll" }}
            className="col-md-6 col-sm-12"
          >
            <BootstrapTable
              keyField="Id"
              columns={columns}
              data={mtrlArray}
              striped
              hover
              condensed
              //selectRow={selectRow}
            ></BootstrapTable>
          </div>
          {/* <div className="col-md-6 col-sm-12">
           <div
              className="table-data"
              style={{ height: "480px", overflowY: "scroll" }}
            >
              <Tables theadData={getHeadings()} tbodyData={data3} />
            </div> 
          </div> */}
          <div className="col-md-6 col-sm-12">
            <div className="ip-box form-bg">
              <div className="row justify-content-center mt-2">
                <button
                  className="button-style "
                  style={{ width: "260px" }}
                  disabled={boolVal}
                >
                  Add Serial
                </button>
              </div>
              <div className="row justify-content-center mt-2">
                <button
                  className="button-style "
                  style={{ width: "120px" }}
                  disabled={boolVal2}
                  onClick={addToStock}
                >
                  Add to stock
                </button>
                <button
                  className="button-style "
                  style={{ width: "130px" }}
                  disabled={!boolVal2}
                  onClick={removeStock}
                >
                  Remove stock
                </button>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="ip-box form-bg">
                    <div className="row">
                      <p className="form-title-deco">Serial Details</p>

                      <div className="col-md-3 ">
                        <label className="">Part ID</label>
                      </div>
                      <div className="col-md-6" style={{ marginTop: "8px" }}>
                        <select
                          className="ip-select dropdown-field"
                          disabled={boolVal}
                        >
                          {/* <option value="option 1">001</option>
                          <option value="option 1">002</option>
                          <option value="option 1">003</option>
                          <option value="option 1">004</option> */}
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Para 1</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" disabled={boolVal} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Para 2</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" disabled={boolVal} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Para 3</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" disabled={boolVal} />
                      </div>
                    </div>
                    <div className="col-md-12 ">
                      <p className="form-title-deco">Quantity Details</p>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Received</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" disabled={boolVal} />
                        </div>
                        <div className="col-md-4">
                          <div
                            className="col-md-12 mt-2"
                            style={{ display: "flex", gap: "5px" }}
                          >
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              disabled={boolVal}
                            />
                             <label className="">Inspected</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Accepted</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" disabled={boolVal} />
                        </div>
                        <div className="col-md-4">
                          <div
                            className="col-md-12 mt-2"
                            style={{ display: "flex", gap: "5px" }}
                          >
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              disabled={boolVal}
                            />
                             <label className="">Updated</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Wt Caluclated 2</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" disabled={boolVal} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Weight</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" disabled={boolVal} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Location</label>
                        </div>
                        <div className="col-md-6" style={{ marginTop: "8px" }}>
                          <select
                            className="ip-select dropdown-field"
                            disabled={boolVal}
                          >
                            {/* <option value="option 1">001</option>
                            <option value="option 1">002</option>
                            <option value="option 1">003</option>
                            <option value="option 1">004</option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2">
                <button
                  className="button-style "
                  style={{ width: "120px" }}
                  disabled={boolVal}
                >
                  Delete Serial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenButtonOpenSheetUnit;
