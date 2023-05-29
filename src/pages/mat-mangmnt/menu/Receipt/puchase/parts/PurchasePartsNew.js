import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import CreateYesNoModal from "../../../../components/CreateYesNoModal";
import BootstrapTable from "react-bootstrap-table-next";
import Table from "react-bootstrap/Table";
import { formatDate } from "../../../../../../utils";

const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function PurchasePartsNew() {
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const currDate = new Date()
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");

  //initial disable
  const [boolVal1, setBoolVal1] = useState(true);
  //after clicking save button
  const [boolVal2, setBoolVal2] = useState(false);
  //after clicking add button
  const [boolVal3, setBoolVal3] = useState(true);
  //after clicking allot rv button
  const [boolVal4, setBoolVal4] = useState(false);

  const [partUniqueId, setPartUniqueId] = useState();
  const [partArray, setPartArray] = useState([]);

  const [partVal, setPartVal] = useState([]);
  const [inputPart, setInputPart] = useState({
    id: "",
    partId: "",
    unitWeight: "",
    qtyReceived: "",
    qtyAccepted: "",
    qtyRejected: "0",
  });

  //const [custDetailVal, setCustDetailVal] = useState("");
  const [calcWeightVal, setCalcWeightVal] = useState(0);

  //const currDateTime = new Date();
  let [custdata, setCustdata] = useState([]);
  let [mtrlDetails, setMtrlDetails] = useState([]);
  const [saveUpdateCount, setSaveUpdateCount] = useState(0);

  let [formHeader, setFormHeader] = useState({
    rvId: "",
    receiptDate: "", //formatDate(new Date(), 4), //currDate, //.split("/").reverse().join("-"),
    rvNo: "Draft",
    rvDate: "", //currDate, //.split("/").reverse().join("-"),
    status: "Created",
    customer: "0000",
    customerName: "",
    reference: "",
    weight: "0",
    calcWeight: "0",
    type: "Parts",
    address: "",
  });

  async function fetchCustData() {
    getRequest(endpoints.getCustomers, (data) => {
      setCustdata(data);

      const found = data.find((obj) => obj.Cust_Code == 0);
      //setCustDetailVal(found.Address);

      setFormHeader((preValue) => {
        //console.log(preValue)
        return {
          ...preValue,
          customerName: found.Cust_name,
          customer: found.Cust_Code,
          address: found.Address,
        };
      });
    });
    //console.log("data = ", custdata);

    //fetch part
    getRequest(endpoints.getCustBomList, (data) => {
      const foundPart = data.filter((obj) => obj.Cust_code == 0);
      setMtrlDetails(foundPart);
    });
  }

  useEffect(() => {
    fetchCustData();
    //setPartArray(partArray);
  }, []); //[inputPart]);

  /*  let changeCustomer = async (e) => {
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
    //fetchMtrlData();

    //const foundPart = mtrlDetails.filter((obj) => obj.Cust_code == value);
    //setMtrlDetails(foundPart);
    getRequest(endpoints.getCustBomList, (data) => {
      const foundPart = data.filter((obj) => obj.Cust_code == value);
      setMtrlDetails(foundPart);
    });
  };
*/
  const columns = [
    {
      text: "#",
      dataField: "id",
      hidden: true,
    },
    {
      text: "Part Id",
      dataField: "partId",
    },
    {
      text: "Unit Wt",
      dataField: "unitWeight",
    },
    {
      text: "Qty Received",
      dataField: "qtyReceived",
    },
    {
      text: "Qty Accepted",
      dataField: "qtyAccepted",
    },
    {
      text: "Qty Rejected",
      dataField: "qtyRejected",
    },
  ];

  const changePartHandle = (e) => {
    const { value, name } = e.target;
    setInputPart((preValue) => {
      //console.log(preValue)
      return {
        ...preValue,
        [name]: value,
      };
    });
    inputPart[name] = value;
    inputPart.custBomId = formHeader.customer;
    inputPart.rvId = formHeader.rvId;
    inputPart.qtyRejected = 0;
    inputPart.qtyUsed = 0;
    inputPart.qtyReturned = 0;
    inputPart.qtyIssued = 0;
    setInputPart(inputPart);

    //update blank row with respected to modified part textfield
    postRequest(endpoints.updatePartReceiptDetails, inputPart, (data) => {
      if (data.affectedRows !== 0) {
      } else {
        toast.error("Record Not Updated");
      }
    });

    const newArray = partArray.map((p) =>
      //p.id === "d28d67b2-6c32-4aae-a7b6-74dc985a3cff"
      p.id === partUniqueId
        ? {
            ...p,
            [name]: value,
          }
        : p
    );
    setPartArray(newArray);

    let totwt = 0;
    partArray.map((obj) => {
      totwt =
        parseFloat(totwt) +
        parseFloat(obj.unitWeight) * parseFloat(obj.qtyReceived);
      //console.log(newWeight);
    });
    setCalcWeightVal(parseFloat(totwt).toFixed(2));
  };

  //add new part
  let { partId, unitWeight, qtyReceived, qtyAccepted, qtyRejected } = inputPart;
  //let id = uuid();
  const addNewPart = (e) => {
    setBoolVal3(false);

    //clear all part fields
    inputPart.rvId = formHeader.rvId;
    inputPart.partId = "";
    inputPart.qtyAccepted = 0;
    inputPart.qtyReceived = 0;
    inputPart.qtyRejected = 0;
    inputPart.qtyUsed = 0;
    inputPart.qtyReturned = 0;
    inputPart.qtyIssued = 0;
    inputPart.unitWeight = 0;
    inputPart.custBomId = formHeader.customer;

    // console.log("partarray = ", partArray);

    //insert blank row in table
    postRequest(endpoints.insertPartReceiptDetails, inputPart, (data) => {
      if (data.affectedRows !== 0) {
        let id = data.insertId;
        inputPart.id = id;
        setPartArray([
          ...partArray,
          { id, partId, unitWeight, qtyReceived, qtyAccepted, qtyRejected },
        ]);
        //const newWeight = calcWeightVal + unitWeight * qtyReceived;
        //setCalcWeightVal(parseFloat(newWeight).toFixed(2));

        //let uniqueid = uuid();
        setPartUniqueId(id);
        let newRow = {
          id: id,
          partId: "",
          unitWeight: "",
          qtyReceived: "",
          qtyAccepted: "",
          qtyRejected: "",
        };
        //setPartArray(newRow);
        setPartArray([...partArray, newRow]);
        setInputPart(inputPart);
      } else {
        toast.error("Record Not Inserted");
      }
    });

    //console.log("after = ", partArray);
  };

  //delete part
  const handleDelete = () => {
    //minus calculated weight
    // console.log("partarray = ", partArray);
    console.log("id = ", inputPart.id);

    postRequest(endpoints.deletePartReceiptDetails, inputPart, (data) => {
      if (data.affectedRows !== 0) {
        const newArray = partArray.filter(
          (p) =>
            //p.id === "d28d67b2-6c32-4aae-a7b6-74dc985a3cff"
            p.id !== inputPart.id
        );
        setPartArray(newArray);
      }
    });

    //cal weight
    let totwt = 0;
    partArray.map((obj) => {
      totwt =
        parseFloat(totwt) +
        parseFloat(obj.unitWeight) * parseFloat(obj.qtyReceived);
      //console.log(newWeight);
    });
    setCalcWeightVal(parseFloat(totwt).toFixed(2));
  };

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect, rowIndex, e) => {
      setInputPart({
        id: row.id,
        partId: row.partId,
        unitWeight: row.unitWeight,
        qtyAccepted: row.qtyAccepted,
        qtyRejected: row.qtyRejected,
        qtyReceived: row.qtyReceived,
      });
    },
  };

  //input header change event
  const InputHeaderEvent = (e) => {
    const { value, name } = e.target;
    setFormHeader((preValue) => {
      //console.log(preValue)
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const insertHeaderFunction = () => {
    //to save data
    postRequest(
      endpoints.insertHeaderMaterialReceiptRegister,
      formHeader,
      (data) => {
        //console.log("data = ", data);
        if (data.affectedRows !== 0) {
          setFormHeader((preValue) => {
            return {
              ...preValue,
              rvId: data.insertId,
            };
          });
          setSaveUpdateCount(saveUpdateCount + 1);
          toast.success("Record Saved Successfully");
          //enable part section and other 2 buttons
          setBoolVal1(false);
        } else {
          toast.error("Record Not Inserted");
        }
      }
    );
  };

  const updateHeaderFunction = () => {
    //console.log("update formheader = ", formHeader);
    postRequest(
      endpoints.updateHeaderMaterialReceiptRegister,
      formHeader,
      (data) => {
        //console.log("data = ", data);
        if (data.affectedRows !== 0) {
          setSaveUpdateCount(saveUpdateCount + 1);
          toast.success("Record Updated Successfully");
          //enable part section and other 2 buttons
          setBoolVal1(false);
        } else {
          toast.error("Record Not Updated");
        }
      }
    );
  };

  const saveButtonState = async (e) => {
    e.preventDefault();
    if (formHeader.customer.length == 0) {
      toast.error("Please Select Customer");
    } else if (formHeader.reference.length == 0)
      toast.error("Please Enter Customer Document Material Reference");
    else {
      if (saveUpdateCount == 0) {
        formHeader.receiptDate = formatDate(new Date(), 4);
        formHeader.rvDate = currDate;
        setFormHeader(formHeader);
        await delay(500);

        insertHeaderFunction();
        setBoolVal2(true);
      } else {
        //to update data
        updateHeaderFunction();
      }
    }
  };

  const allotRVButtonState = (e) => {
    e.preventDefault();

    if (formHeader.weight == "0") {
      toast.error(
        "Enter the Customer Material Weight as per Customer Document"
      );
    } else {
      //show model form
      setShow(true);
    }
  };

  const allotRVYesButton = (data) => {
    //console.log("data = ", formHeader);
    setFormHeader(data);
    //console.log("formheader = ", formHeader);
    setBoolVal4(true);
    //console.log("formheader = ", formHeader);
    //formHeader = data;
    //formHeader.rvNo = data.rvNo;
    //setFormHeader(formHeader);

    /*setFormHeader((preValue) => {
      return {
        ...preValue,
        rvNo: data.rvNo,
      };
    });*/

    //console.log("formHeader = ", formHeader);
  };

  const deleteRVButtonState = () => {
    postRequest(
      endpoints.deleteHeaderMaterialReceiptRegisterAndDetails,
      formHeader,
      (data) => {
        if (data.affectedRows !== 0) {
          toast.success("Record is Deleted");
          nav("/materialmanagement/receipt/customerjobwork/parts/new", {
            replace: true,
          });
          window.location.reload();
        }
      }
    );
  };
  return (
    <div>
      <CreateYesNoModal
        show={show}
        setShow={setShow}
        formHeader={formHeader}
        allotRVYesButton={allotRVYesButton}
      />
      <div>
        <h4 className="title">Customer Parts Receipt Voucher</h4>

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
              //onChange={changeCustomer}
              disabled={boolVal1}
            >
              {custdata.map((customer, index) =>
                customer.Cust_Code == 0 ? (
                  <option key={index} value={customer.Cust_Code}>
                    {customer.Cust_name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
          <div className="col-md-4">
            <label className="">Weight</label>
            <input
              type="text"
              name="weight"
              value={formHeader.weight}
              onChange={InputHeaderEvent}
              disabled={boolVal4}
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
              onChange={InputHeaderEvent}
              disabled={boolVal2 & boolVal4}
            />
          </div>
          <div className="col-md-4">
            <label className="">Calculated Weight</label>
            <input
              type="text"
              name="calculatedWeight"
              value={calcWeightVal}
              readOnly
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-8 justify-content-center">
            <button
              className="button-style"
              style={{ width: "196px" }}
              onClick={saveButtonState}
              disabled={boolVal4}
            >
              Save
            </button>
            <button
              className="button-style"
              style={{ width: "196px" }}
              disabled={boolVal1}
              onClick={allotRVButtonState}
            >
              Allot RV No
            </button>
            <button
              className="button-style"
              style={{ width: "196px" }}
              disabled={boolVal1}
              onClick={deleteRVButtonState}
            >
              Delete RV
            </button>
            <button
              className="button-style "
              id="btnclose"
              type="submit"
              onClick={() => nav("/materialmanagement")}
            >
              Close
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
      </div>
      <div className="row">
        <div
          style={{ height: "330px", overflowY: "scroll" }}
          className="col-md-6 col-sm-12"
        >
          <BootstrapTable
            keyField="id"
            columns={columns}
            data={partArray}
            striped
            hover
            condensed
            selectRow={selectRow}
          ></BootstrapTable>
        </div>
        {/*<div className="col-md-6 col-sm-12">
           <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Part Id</th>
                <th>Unit Wt</th>
                <th>Qty Received</th>
                <th>Qty Accepted</th>
                <th>Qty Rejected</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {partArray.map((part, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{part.partId}</td>
                  <td>{part.unitWeight}</td>
                  <td>{part.qtyReceived}</td>
                  <td>{part.qtyAccepted}</td>
                  <td>{part.qtyRejected}</td>
                  <td>
                    <button
                      className="btn btn-danger form-control"
                      onClick={() => handleDelete(part.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> 
        </div>*/}
        <div className="col-md-6 col-sm-12">
          <div className="ip-box form-bg">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="ip-box form-bg">
                  <div className="row">
                    <div className="row justify-content-center mt-1 mb-2">
                      <button
                        className="button-style "
                        style={{ width: "120px" }}
                        onClick={addNewPart}
                        disabled={boolVal1 | boolVal4}
                      >
                        Add New
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Part ID</label>
                      </div>
                      <div className="col-md-8" style={{ marginTop: "8px" }}>
                        <select
                          className="ip-select dropdown-field"
                          name="partId"
                          value={inputPart.partId}
                          onChange={changePartHandle}
                          disabled={boolVal3 | boolVal4}
                        >
                          <option value="" disabled selected>
                            Select Part
                          </option>
                          {mtrlDetails.map((part, index) => (
                            <option key={index} value={part.PartId}>
                              {part.PartId}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Unit Wt</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          name="unitWeight"
                          value={inputPart.unitWeight}
                          onChange={changePartHandle}
                          //onKeyUp={changePartHandle1}
                          disabled={boolVal3 | boolVal4}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Qty Received</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          name="qtyReceived"
                          //value={tempVal}
                          value={inputPart.qtyReceived}
                          onChange={changePartHandle}
                          disabled={boolVal3 | boolVal4}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Qty Accepted</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          name="qtyAccepted"
                          value={inputPart.qtyAccepted}
                          onChange={changePartHandle}
                          disabled={boolVal3 | boolVal4}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Qty Rejected</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          name="qtyRejected"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <button
                className="button-style "
                style={{ width: "120px" }}
                disabled={boolVal3 | boolVal4}
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchasePartsNew;
