import React, { useState, useEffect } from "react";
import { OutwordMaterial } from "../../../components/Data";
import Tables from "../../../../../components/Tables";
import { dateToShort } from "../../../../../utils";
import Swal from "sweetalert2";
import CreateDCModal from "../../../components/CreateDCModal";
import FormModal from "../../../components/FormModal";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import BootstrapTable from "react-bootstrap-table-next";

const { getRequest, postRequest } = require("../../../../api/apiinstance");
const { endpoints } = require("../../../../api/constants");

function OutwordMaterialIssueVocher(props) {
  const [show, setShow] = useState(false);
  const [outData, setOutData] = useState([]);
  const [upData, setUpData] = useState();
  const location = useLocation();

  const handleShow = () => setShow(true);

  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    if (!cell) return;
    return dateToShort(cell);
  }

  async function fetchOutwordData() {
    getRequest(endpoints.getOutwordMaterialVocher, (data) => {
      setOutData(data);
    });
  }

  useEffect(() => {
    fetchOutwordData();
  }, []); //[inputPart]);

  const columns = [
    {
      text: "Srl",
      dataField: "Srl",
    },
    {
      text: "MtrlDescription",
      dataField: "MtrlDescription",
    },
    {
      text: "Material",
      dataField: "Material",
    },
    {
      text: "Qty",
      dataField: "Qty",
    },
    {
      text: "TotalWeightCalculated",
      dataField: "TotalWeightCalculated",
    },
    {
      text: "Wieght",
      dataField: "TotalWeight",
    },
  ];

  const getHeadings = () => {
    return Object.keys(outData[0]);
  };

  let [formHeader, setFormHeader] = useState({
    IvId: location.state.selectData.IV_No,
    PkngDcNo: "",
    TotalWeight: "",
  });
  const InputHeaderEvent = (e) => {
    const { name, value } = e.target;
    setFormHeader({ ...formHeader, [name]: value });
  };

  const updateOutwordFunction = () => {
    console.log("update formheader = ", formHeader);
    postRequest(endpoints.updateOutwordMaterialVocher, formHeader, (data) => {
      console.log("data = ", data);
      if (data.affectedRows !== 0) {
        toast.success("Record Updated Successfully");
      } else {
        toast.error("Record Not Updated");
      }
    });
  };

  const saveButtonState = (e) => {
    e.preventDefault();
    if (formHeader.PkngDcNo.length == 0) {
      toast.error("Please Select PkngDcNo");
    } else if (formHeader.TotalWeight.length == 0)
      toast.error("Please Enter TotalWeight");
    else {
      updateOutwordFunction();
    }
  };

  const getPop = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Current IV is cancelled and stock added to Material Stock",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "okay",
    });
  };
  return (
    <div>
      <FormModal show={show} setShow={setShow} />

      <div>
        <h4 className="form-title">Outword Material Issue Vocher</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-4">
            <label className="">IV No</label>
            <input
              type="text"
              name="IvId"
              value={location.state.selectData.IV_No}
              readOnly
              onChange={InputHeaderEvent}
            />
          </div>
          <div className="col-md-4">
            <label className="">IV Date</label>
            <input
              type="text"
              name="IVDate"
              value={statusFormatter(location.state.selectData.IV_Date)}
              readOnly
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
            <label className="">Customer</label>
            <input
              type="text"
              name="Customer"
              value={location.state.selectData.Customer}
              readOnly
            />
          </div>
          {/* <div className="col-md-8">
              <label className="form-label">Customer</label>
              <select
                className="ip-select"
                name="customer"
                // onChange={changeCustomer}
              >
               
              </select>
            </div> */}

          <div className="col-md-4">
            <button className="button-style" onClick={getPop}>
              Cancel IV
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label className="">GST No</label>
            <input
              type="text"
              name="reference"
              // value={formHeader.reference}
              // onChange={InputHeaderEvent}
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
            <button className="button-style" onClick={handleShow}>
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
            <label className="">Calculate Weight</label>
            <input
              type="text"
              name="Type"
              value={location.state.selectData.TotalWeight}
              readOnly
            />
          </div>
          <div className="col-md-4">
            <button className="button-style">Print DC</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div
            style={{ height: "420px", overflowY: "scroll" }}
            //className="col-md-12 col-sm-12"
          >
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
          {/* {outData.length>0 &&  <Tables theadData={getHeadings()} tbodyData={outData} /> }                   */}
        </div>
      </div>
    </div>
  );
}

export default OutwordMaterialIssueVocher;
