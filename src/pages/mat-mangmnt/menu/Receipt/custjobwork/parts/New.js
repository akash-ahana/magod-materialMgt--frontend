import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data1 } from "../../../../components/Data";
import Tables from "../../../../../../components/Tables";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { listCustomers } from "../../../../actions/customerAction";
import { custBomList } from "../../../../actions/custBomAction";
import {
  materialHeaderRegisterAction,
  materialHeaderRegisterUpdateAction,
} from "../../../../actions/materialReceiptAction";

function New() {
  const [custDetailVal, setCustDetailVal] = useState("");
  const [calcWeightVal, setCalcWeightVal] = useState(0);
  const [saveUpdateCount, setSaveUpdateCount] = useState(0);

  const [partArray, setPartArray] = useState([]);
  const [partVal, setPartVal] = useState([]);
  const [inputPart, setInputPart] = useState({
    id: "",
    partId: "",
    unitWeight: "",
    qtyReceived: "",
    qtyAccepted: "",
    qtyRejected: "",
  });

  const currDate = new Date()
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");

  const [formHeader, setFormHeader] = useState({
    rvId: "",
    receiptDate: currDate, //.split("/").reverse().join("-"),
    rvNo: "Draft",
    rvDate: currDate, //.split("/").reverse().join("-"),
    status: "Created",
    customer: "",
    customerName: "",
    reference: "",
    weight: "0",
    calcWeight: "0",
    type: "Parts",
  });

  const dispatch = useDispatch();
  const customerList = useSelector((state) => state.customerList);
  const { loading1, error1, customers } = customerList;

  const partList = useSelector((state) => state.custoBom);
  const { loading2, error2, parts } = partList;

  const materialRegister = useSelector(
    (state) => state.materialReceiptHeaderRegisterInfo
  );
  const { loading3, error3, registerInfo } = materialRegister;

  const materialRegisterUpdate = useSelector(
    (state) => state.materialReceiptHeaderRegisterUpdateInfo
  );
  const { loading4, error4, registerUpdateInfo } = materialRegisterUpdate;

  useEffect(() => {
    dispatch(listCustomers());
    dispatch(custBomList());
    if (registerInfo && saveUpdateCount === 1) {
      toast.success("Record Saved Successfully");
      setFormHeader((preValue) => {
        return {
          ...preValue,
          rvId: registerInfo.insertId,
        };
      });
    } else if (registerUpdateInfo && registerUpdateInfo.affectedRows != 0) {
      toast.success("Record Updated Successfully");
    }
  }, [dispatch, registerInfo, registerUpdateInfo]);

  //sort customers
  customers.sort((a, b) => a.Cust_name.localeCompare(b.Cust_name));

  const changeCustomer = (e) => {
    const { value, name } = e.target;
    //const value = e.target.value;
    const found = customers.find((obj) => obj.Cust_Code === value);
    setCustDetailVal(found.Address);

    const foundPart = parts.filter((obj) => obj.Cust_code == value);
    setPartVal(foundPart);

    //update formHeader field
    setFormHeader((preValue) => {
      //console.log(preValue);
      return {
        ...preValue,
        [name]: value,
        customerName: found.Cust_name,
        customer: found.Cust_Code,
      };
    });
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

  const saveButtonState = (e) => {
    e.preventDefault();
    if (formHeader.customer.length == 0) {
      toast.error("Please Select Customer");
    } else if (formHeader.reference.length == 0)
      toast.error("Please Enter Customer Document Material Reference");
    else {
      if (saveUpdateCount == 0) {
        dispatch(materialHeaderRegisterAction(formHeader));
        //toast.warning("save = ", saveUpdateCount);
        setSaveUpdateCount(saveUpdateCount + 1);
      } else {
        dispatch(materialHeaderRegisterUpdateAction(formHeader));
        setSaveUpdateCount(saveUpdateCount + 1);
        //toast.warning("update = ", saveUpdateCount);
        //console.log(formHeader);
      }
    }
    //if(formHeader.weight.localeCompare("0") == 0)
    //    toast.error("Please Enter Customer Document Material Reference")
    //setBoolVal1(true);
    //setBoolVal2(false);
  };

  //for change textbox on time of add new part
  const changePartHandle = (e) => {
    console.log("change part");
    setInputPart({ ...inputPart, [e.target.name]: [e.target.value] });
  };

  //add new part
  let { partId, unitWeight, qtyReceived, qtyAccepted, qtyRejected } = inputPart;
  let id = uuid();
  const addNewPart = () => {
    setPartArray([
      ...partArray,
      { id, partId, unitWeight, qtyReceived, qtyAccepted, qtyRejected },
    ]);
    const newWeight = calcWeightVal + unitWeight * qtyReceived;
    setCalcWeightVal(newWeight);
  };

  //delete part
  const handleDelete = (id) => {
    //console.log("ID = ", id);
    //let afterDeleting = [...partArray];
    //afterDeleting.splice(id, 1);
    //setPartArray(afterDeleting);

    //minus calculated weight
    const deletePart = partArray.filter((obj) => obj.id === id);
    const newWeight =
      calcWeightVal - deletePart.unitWeight * deletePart.qtyReceived;
    setCalcWeightVal(newWeight);

    let afterDeleting = partArray.filter((obj) => {
      return obj.id !== id;
    });
    setPartArray(afterDeleting);
  };

  const getHeadings = () => {
    return Object.keys(data1[0]);
  };
  return (
    <div>
      <>
        <div>
          <h4 className="form-title">Customer Parts Receipt Voucher</h4>
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
                <option value="">Select Customer</option>
                {customers.map((customer, index) => (
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
                value={formHeader.weight}
                onChange={InputHeaderEvent}
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
              />
            </div>
            <div className="col-md-4">
              <label className="">Caluclated Weight</label>
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
              >
                Save
              </button>
              <button className="button-style" style={{ width: "196px" }}>
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
                value={custDetailVal}
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            {/* <div
              className="table-data"
              style={{ height: "480px", overflowY: "scroll" }}
            >
               <Tables theadData={getHeadings()} tbodyData={data1} />
            </div> */}
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
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="ip-box form-bg">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="ip-box form-bg">
                    <div className="row">
                      <div className="row">
                        <div className="col-md-12 ">
                          <label className="">Part ID</label>
                        </div>
                        <div className="col-md-12" style={{ marginTop: "8px" }}>
                          <select
                            className="ip-select dropdown-field"
                            name="partId"
                            value={inputPart.partId}
                            onChange={changePartHandle}
                          >
                            {partVal.map((part, index) => (
                              <option key={index} value={part.PartId}>
                                {part.PartId}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 ">
                          <label className="">Unit Weight</label>
                          <input
                            className="in-field"
                            name="unitWeight"
                            value={inputPart.unitWeight}
                            onChange={changePartHandle}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 ">
                          <label className="">Qty Received</label>
                          <input
                            className="in-field"
                            name="qtyReceived"
                            value={inputPart.qtyReceived}
                            onChange={changePartHandle}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 ">
                          <label className="">Qty Accepted</label>
                          <input
                            className="in-field"
                            name="qtyAccepted"
                            value={inputPart.qtyAccepted}
                            onChange={changePartHandle}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 ">
                          <label className="">Qty Rejected</label>
                          <input
                            className="in-field"
                            name="qtyRejected"
                            readOnly
                          />
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
                  onClick={addNewPart}
                >
                  Add New
                </button>
              </div>

              {/* <div className="row justify-content-center mt-2">
                 <button className="button-style " style={{ width: "120px" }}>
                  Delete
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default New;
