import React, { useState, useEffect } from "react";
import { data5 } from "../../../components/Data";
import Tables from "../../../../../components/Tables";
import Swal from "sweetalert2";
import FormModal from "../../../components/FormModal";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import ReturnCancelIVModal from "../../../components/ReturnCancelIVModal";
import CreateDCYesNoModal from "../../../components/CreateDCYesNoModal";
import { dateToShort } from "../../../../../utils";
import BootstrapTable from "react-bootstrap-table-next";

const { getRequest, postRequest } = require("../../../../api/apiinstance");
const { endpoints } = require("../../../../api/constants");

function OutwordPartIssueVocher(props) {
  const [show, setShow] = useState(false);
  const [showCreateDC, setShowCreateDC] = useState(false);

  const [outData, setOutData] = useState([]);
  const [upData, setUpData] = useState();

  const location = useLocation();

  const [IVNOValue, setIVNOValue] = useState("");
  const [IVIDValue, setIVIDValue] = useState("");

  let [formHeader, setFormHeader] = useState({
    Iv_Id: "",
    IV_No: "",
    IV_Date: "",
    Cust_code: "",
    Customer: "",
    CustCSTNo: "",
    CustGSTNo: "",
    PkngDcNo: "",
    TotalWeight: "",
    TotalCalculatedWeight: "",
  });

  async function fetchData() {
    //header data
    let url =
      endpoints.getMaterialIssueRegisterRouterByIVID +
      "?id=" +
      location.state.selectData.Iv_Id;
    //console.log("url = ", url);
    getRequest(url, (data) => {
      setIVNOValue(data.IV_No);
      setIVIDValue(data.Iv_Id);
      setFormHeader({
        Iv_Id: data.Iv_Id,
        IV_No: data.IV_No,
        IV_Date: data.IV_Date,
        Cust_code: data.Cust_code,
        CustCSTNo: data.CustCSTNo,
        Customer: data.Customer,
        CustGSTNo: data.CustGSTNo,
        PkngDcNo: data.PkngDcNo,
        TotalWeight: data.TotalWeight,
        TotalCalculatedWeight: data.TotalCalculatedWeight,
      });
    });

    //grid data
    let url1 =
      endpoints.getmtrlPartIssueDetailsByIVID +
      "?id=" +
      location.state.selectData.Iv_Id;
    getRequest(url1, (data) => {
      console.log("out data = ", data);
      setOutData(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []); //[inputPart]);

  const columns = [
    {
      text: "Srl",
      dataField: "Srl",
    },
    {
      text: "PartId / Part Name",
      dataField: "PartId",
    },
    {
      text: "Qty Returned",
      dataField: "QtyReturned",
    },
    {
      text: "Unit Weight",
      dataField: "UnitWt",
    },
    {
      text: "Total Weight",
      dataField: "TotalWeight",
    },
    {
      text: "Remarks",
      dataField: "Remarks",
    },
  ];

  const InputHeaderEvent = (e) => {
    const { name, value } = e.target;
    setFormHeader({ ...formHeader, [name]: value });
  };

  const saveButtonState = (e) => {
    e.preventDefault();
    if (formHeader.PkngDcNo.length == 0) {
      toast.error("Please Select PkngDcNo");
    } else if (formHeader.TotalWeight.length == 0)
      toast.error("Please Enter TotalWeight");
    else {
      postRequest(endpoints.updateDCWeight, formHeader, (data) => {
        //console.log("data = ", data);
        if (data.affectedRows !== 0) {
          toast.success("Record Updated Successfully");
        } else {
          toast.error("Record Not Updated");
        }
      });
    }
  };
  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    if (!cell) return;
    return dateToShort(cell);
  }
  let cancelIV = () => {
    //console.log(IVNOValue, " and ", IVIDValue);
    setShow(true);
  };

  let createDC = () => {
    setShowCreateDC(true);
  };

  return (
    <div>
      <ReturnCancelIVModal
        show={show}
        setShow={setShow}
        IV_NO={IVNOValue}
        IV_ID={IVIDValue}
        type="parts"
        outData={outData}
      />

      <CreateDCYesNoModal
        showCreateDC={showCreateDC}
        setShowCreateDC={setShowCreateDC}
        formHeader={formHeader}
        outData={outData}
        type="parts"
      />

      <div>
        <h4 className="form-title">Outward Material Issue Vocher</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-4">
            <label className="">IV No</label>
            <input
              type="text"
              name="IvId"
              value={formHeader.IV_No}
              disabled
              onChange={InputHeaderEvent}
            />
          </div>
          <div className="col-md-4">
            <label className="">Date</label>
            <input
              type="text"
              name="IVDate"
              value={statusFormatter(formHeader.IV_Date)}
              disabled
            />
          </div>
          <div className="col-md-4">
            <button className="button-style" onClick={saveButtonState}>
              Save
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label className="form-label">Customer</label>
            <input
              type="text"
              name="Customer"
              value={formHeader.Customer}
              disabled
            />
          </div>
          <div className="col-md-4">
            <button className="button-style" onClick={cancelIV}>
              Cancel IV
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label className="">CST No</label>
            <input
              type="text"
              name="CSTNo"
              value={formHeader.CustCSTNo}
              disabled
            />
          </div>
          <div className="col-md-4">
            <label className="">DC No / Ph No</label>
            <input
              type="text"
              name="PkngDcNo"
              value={formHeader.PkngDcNo}
              onChange={InputHeaderEvent}
            />
          </div>
          <div className="col-md-4">
            <button className="button-style" onClick={createDC}>
              Create DC
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label className="">Weight</label>
            <input
              type="text"
              name="TotalWeight"
              value={formHeader.TotalWeight}
              onChange={InputHeaderEvent}
            />
          </div>

          <div className="col-md-4">
            <label className="">Calculated Weight</label>
            <input
              type="text"
              name="Type"
              value={formHeader.TotalCalculatedWeight}
              disabled
            />
          </div>
          <div className="col-md-4">
            <button className="button-style">Print DC</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div style={{ height: "420px", overflowY: "scroll" }}>
            <BootstrapTable
              keyField="IV_No"
              //keyField="id"
              columns={columns}
              data={outData}
              striped
              hover
              condensed
              //pagination={paginationFactory()}
              //selectRow={selectRow}
            ></BootstrapTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutwordPartIssueVocher;
