import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data1 } from "../../../../components/Data";
import Tables from "../../../../../../components/Tables";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { listCustomers } from "../../../../actions/customerAction";
import { custBomList } from "../../../../actions/custBomAction";
import { materialHeaderRegisterAction } from "../../../../actions/materialReceiptAction";

function New() {
  const [custDetailVal, setCustDetailVal] = useState("");
  const [calcWeightVal, setCalcWeightVal] = useState(0);

  const currDate = new Date()
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");

  const [formHeader, setFormHeader] = useState({
    receiptDate: currDate.split("/").reverse().join("-"),
    rvNo: "Draft",
    rvDate: currDate.split("/").reverse().join("-"),
    status: "Created",
    customer: "",
    customerName: "",
    reference: "",
    weight: "0",
    calcWeight: "0",
  });

  const dispatch = useDispatch();
  const customerList = useSelector((state) => state.customerList);
  const { loading1, error1, customers } = customerList;

  const partList = useSelector((state) => state.custoBom);
  const { loading2, error2, parts } = partList;

  const materialRegister = useSelector(
    (state) => state.materialReceiptHeaderRegisterInfo
  );
  const { loading, error, registerInfo } = materialRegister;

  useEffect(() => {
    dispatch(listCustomers());
    dispatch(custBomList());
    if (registerInfo !== "") {
      toast.success(registerInfo);
    }
  }, [dispatch, registerInfo]);

  //sort customers
  customers.sort((a, b) => a.Cust_name.localeCompare(b.Cust_name));

  const changeCustomer = (e) => {
    const { value, name } = e.target;
    //const value = e.target.value;
    const found = customers.find((obj) => obj.Cust_Code === value);
    setCustDetailVal(found.Address);

    /*const foundPart = parts.filter(obj => obj.Cust_code == value)
    setPartVal(foundPart)
    
    //update formHeader field
    setFormHeader((preValue)=>{
        //console.log(preValue);
        return{
            ...preValue,
            [name] : value,
            "customerName":found.Cust_name
        }
    })*/
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
    if (formHeader.customer.length == 0) toast.error("Please Select Customer");
    else if (formHeader.reference.length == 0)
      toast.error("Please Enter Customer Document Material Reference");
    else {
      dispatch(materialHeaderRegisterAction(formHeader));
    }
    //if(formHeader.weight.localeCompare("0") == 0)
    //    toast.error("Please Enter Customer Document Material Reference")
    //setBoolVal1(true);
    //setBoolVal2(false);
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
              <input type="text" name="rvNo" value="Draft" readOnly />
            </div>
            <div className="col-md-3">
              <label className="">RV Date</label>
              <input type="text" name="rvDate" value={currDate} readOnly />
            </div>
            <div className="col-md-3">
              <label className="">status</label>
              <input type="text" name="status" value="Created" readOnly />
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
                  <option value={customer.Cust_Code}>
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
            <div
              className="table-data"
              style={{ height: "480px", overflowY: "scroll" }}
            >
              <Tables theadData={getHeadings()} tbodyData={data1} />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="ip-box form-bg">
              <div className="row justify-content-center mt-2">
                <button className="button-style " style={{ width: "120px" }}>
                  Add New
                </button>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="ip-box form-bg">
                    <div className="row">
                      <div className="row">
                        <div className="col-md-12 ">
                          <p className="form-title-deco">srl Details</p>
                          <label>Part ID</label>
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 ">
                          <label className="">Unit Weight</label>
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 ">
                          <label className="">Qty Received</label>
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 ">
                          <label className="">Qty Accepted</label>
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 ">
                          <label className="">Qty Rejected</label>
                          <input className="in-field" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2">
                <button className="button-style " style={{ width: "120px" }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default New;
