import React, { useEffect, useState } from "react";
import { formatDate } from "../../../../../../utils";
const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function SheetsNew() {
  const currDate = new Date()
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");

  const [formHeader, setFormHeader] = useState({
    rvId: "",
    receiptDate: formatDate(new Date(), 4), //currDate, //.split("/").reverse().join("-"),
    rvNo: "Draft",
    rvDate: currDate, //.split("/").reverse().join("-"),
    status: "Created",
    customer: "",
    customerName: "",
    reference: "",
    weight: "0",
    calcWeight: "0",
    type: "Parts",
    address: "",
  });
  let [custdata, setCustdata] = useState([]);
  let [mtrlDetails, setMtrlDetails] = useState([]);
  let [locationData, setLocationData] = useState([]);
  let [para1Label, setPara1Label] = useState("Para 1");
  let [para2Label, setPara2Label] = useState("Para 2");
  let [para3Label, setPara3Label] = useState("Para 3");

  async function fetchData() {
    getRequest(endpoints.getCustomers, (data) => {
      setCustdata(data);
    });
    getRequest(endpoints.getMaterialLocationList, (data) => {
      setLocationData(data);
    });
    getRequest(endpoints.getMtrlData, (data) => {
      setMtrlDetails(data);
    });
    //console.log("data = ", custdata);
  }

  useEffect(() => {
    fetchData();
    //setPartArray(partArray);
  }, []); //[inputPart]);

  let changeCustomer = async (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    const found = custdata.find((obj) => obj.Cust_Code === value);
    //setCustDetailVal(found.Address);

    setFormHeader((preValue) => {
      //console.log(preValue)
      return {
        ...preValue,
        [name]: value,
        customerName: found.Cust_name,
        customer: found.Cust_Code,
        address: found.Address,
      };
    });

    // getRequest(endpoints.getCustBomList, (data) => {
    //   const foundPart = data.filter((obj) => obj.Cust_code == value);
    //   setMtrlDetails(foundPart);
    // });
  };
  let changeMtrl = async (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    //console.log("value = ", value);
    mtrlDetails.map((material) => {
      if (material.Mtrl_Code === value) {
        if (material.Shape === "Block") {
          setPara1Label("Length");
          setPara2Label("Width");
          setPara3Label("Height");
        } else if (material.Shape === "Plate") {
          setPara1Label("Length");
          setPara2Label("Width");
          setPara3Label("");
        } else if (material.Shape === "Sheet") {
          setPara1Label("Width");
          setPara2Label("Length");
          setPara3Label("");
        } else if (material.Shape === "Tiles") {
          setPara1Label("");
          setPara2Label("");
          setPara3Label("");
        } else if (material.Shape.includes("Tube")) {
          setPara1Label("Length");
          setPara2Label("");
          setPara3Label("");
        }
      }
    });
  };

  /* const getHeadings = () => {
    return Object.keys(data3[0]);
  };*/

  /*const getPop = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "okay",
    });
  };*/
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
              value={formHeader.receiptDate}
              readOnly
            />
          </div>
          <div className="col-md-3">
            <label className="">RV No</label>
            <input type="text" name="rvNo" value={formHeader.rvNo} readOnly />
          </div>
          <div className="col-md-3">
            <label className="">RV Date</label>
            <input
              type="text"
              name="rvDate"
              value={formHeader.rvDate}
              readOnly
            />
          </div>
          <div className="col-md-3">
            <label className="">status</label>
            <input
              type="text"
              name="status"
              value={formHeader.status}
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
              onChange={changeCustomer}
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
          <div className="col-md-4">
            <label className="">Weight</label>
            <input
              type="text"
              name="weight"
              required
              value={formHeader.weight}
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
              value={formHeader.reference}
              // onChange={InputHeaderEvent}
            />
          </div>
          <div className="col-md-4">
            <label className="">Calculated Weight</label>
            <input
              type="text"
              name="calculatedWeight"
              // value={calcWeightVal}
              readOnly
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-8 justify-content-center">
            <button className="button-style" style={{ width: "196px" }}>
              Save
            </button>
            <button
              className="button-style"
              style={{ width: "196px" }}
              //onClick={getPop}
            >
              Allot RV No
            </button>
            <button className="button-style" style={{ width: "196px" }}>
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
          <div className="col-md-6 col-sm-12">
            <div
              className="table-data"
              style={{ height: "480px", overflowY: "scroll" }}
            >
              {/* <Tables theadData={getHeadings()} tbodyData={data3} /> */}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="ip-box form-bg">
              <div className="row justify-content-center mt-2">
                <button className="button-style " style={{ width: "260px" }}>
                  Add Serial
                </button>
              </div>
              <div className="row justify-content-center mt-2">
                <button className="button-style " style={{ width: "120px" }}>
                  Add to stock
                </button>
                <button className="button-style " style={{ width: "130px" }}>
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
                          onChange={changeMtrl}
                        >
                          <option value="" disabled selected>
                            Select Material
                          </option>
                          {mtrlDetails.map((material, index) =>
                            (material.Shape !== "Units") &
                            (material.Shape !== "Cylinder") &
                            (material.Shape !== null) &
                            (material.Mtrl_Code !== "") ? (
                              <option key={index} value={material.Mtrl_Code}>
                                {material.Mtrl_Code}
                              </option>
                            ) : (
                              ""
                            )
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <label className="">{para1Label}</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="">{para2Label}</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="">{para3Label}</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                    </div>
                    <div className="col-md-12 ">
                      <p className="form-title-deco">Quantity Details</p>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Received</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" />
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
                          <input className="in-field" />
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
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Weight</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Location</label>
                        </div>
                        <div className="col-md-6" style={{ marginTop: "8px" }}>
                          <select className="ip-select dropdown-field">
                            <option value="" disabled selected>
                              Select Location
                            </option>
                            {locationData.map((location, index) => (
                              <option key={index} value={location.LocationNo}>
                                {location.LocationNo}
                              </option>
                            ))}

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
                <button className="button-style " style={{ width: "120px" }}>
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

export default SheetsNew;
