import React, { useState, useEffect } from "react";
import { dateToShort } from "../../../../../utils";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import BootstrapTable from "react-bootstrap-table-next";
import ReturnCancelIVModal from "../../../components/ReturnCancelIVModal";
import CreateDCYesNoModal from "../../../components/CreateDCYesNoModal";
import { useNavigate } from "react-router-dom";

const { getRequest, postRequest } = require("../../../../api/apiinstance");
const { endpoints } = require("../../../../api/constants");

function OutwordMaterialIssueVocher(props) {
  const [show, setShow] = useState(false);
  const [showCreateDC, setShowCreateDC] = useState(false);
  const nav = useNavigate();
  let [custdata, setCustdata] = useState({
    Address: "",
  });
  let [dcID, setdcID] = useState("");
  let [dcRegister, setdcRegister] = useState({});

  const [outData, setOutData] = useState([]);
  const [upData, setUpData] = useState();

  const location = useLocation();

  const [IVNOValue, setIVNOValue] = useState("");
  const [IVIDValue, setIVIDValue] = useState("");

  const handleShow = () => setShow(true);

  let [formHeader, setFormHeader] = useState({
    Iv_Id: "",
    IV_No: "",
    IV_Date: "",
    Cust_code: "",
    Customer: "",
    CustGSTNo: "",
    PkngDcNo: "",
    TotalWeight: "",
    TotalCalculatedWeight: "",
    Dc_ID: "",
    IVStatus: "",
  });

  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    if (!cell) return;
    return dateToShort(cell);
  }

  async function fetchData() {
    //header data
    let url =
      endpoints.getMaterialIssueRegisterRouterByIVID +
      "?id=" +
      location.state.selectData.Iv_Id;
    //console.log("url = ", url);
    getRequest(url, async (data) => {
      setIVNOValue(data.IV_No);
      setIVIDValue(data.Iv_Id);
      setdcID(data.Dc_ID);
      setFormHeader({
        Iv_Id: data.Iv_Id,
        IV_No: data.IV_No,
        IV_Date: data.IV_Date,
        Cust_code: data.Cust_code,
        Customer: data.Customer,
        CustGSTNo: data.CustGSTNo,
        PkngDcNo: data.PkngDcNo,
        TotalWeight: data.TotalWeight,
        TotalCalculatedWeight: data.TotalCalculatedWeight,
        Dc_ID: data.Dc_ID,
        IVStatus: data.IVStatus,
      });

      //get cust data
      let url2 = endpoints.getCustomerByCustCode + "?code=" + data.Cust_code;
      getRequest(url2, async (data) => {
        console.log("cust data = ", data);
        setCustdata(data);
      });
    });

    //grid data
    let url1 =
      endpoints.getmtrlIssueDetailsByIVID +
      "?id=" +
      location.state.selectData.Iv_Id;
    getRequest(url1, async (data) => {
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
      text: "Description",
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
      text: "Weight",
      dataField: "TotalWeight",
    },
    {
      text: "Total Weight",
      dataField: "TotalWeightCalculated",
    },
    {
      text: "Updated",
      dataField: "",
      formatter: (celContent, row) => (
        <div className="checkbox">
          <lable>
            <input type="checkbox" />
          </lable>
        </div>
      ),
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

  const getPop = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Current IV is cancelled and stock added to Material Stock",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "okay",
    });
  };
  let cancelIV = () => {
    //console.log(IVNOValue, " and ", IVIDValue);

    setShow(true);
  };

  let createDC = () => {
    setShowCreateDC(true);
  };
  let getDCID = async (data) => {
    console.log("get dc = ", data);
    setdcID(data);

    if (data !== "" && data !== 0 && data !== undefined) {
      //get data from dcregister
      let url3 = endpoints.getDCRegisterByID + "?id=" + data;
      getRequest(url3, async (data) => {
        //console.log("dc register data = ", data);
        setdcRegister(data);
      });

      //fetch again dcno
      let url4 =
        endpoints.getMaterialIssueRegisterRouterByIVID +
        "?id=" +
        location.state.selectData.Iv_Id;
      getRequest(url4, async (data) => {
        setFormHeader({
          ...formHeader,
          PkngDcNo: data.PkngDcNo,
        });
      });
    }
  };

  let printDC = () => {
    //console.log("First formheader = ", formHeader, " outdata = ", outData);
    if (dcID !== "" && dcID !== 0) {
      nav("/materialmanagement/return/customerjobwork/PrintMaterialDC", {
        //formHeader: formHeader,
        //outData: outData,
        state: {
          //id: data.RvID,
          formHeader: formHeader,
          outData: outData,
          custdata: custdata,
          dcRegister: dcRegister,
        },
      });
    } else {
      toast.error("DC Not Created");
    }
  };
  return (
    <div>
      <ReturnCancelIVModal
        show={show}
        setShow={setShow}
        IV_NO={IVNOValue}
        IV_ID={IVIDValue}
        type="sheets"
      />

      <CreateDCYesNoModal
        showCreateDC={showCreateDC}
        setShowCreateDC={setShowCreateDC}
        formHeader={formHeader}
        outData={outData}
        type="sheets"
        getDCID={getDCID}
      />
      <div>
        <h4 className="form-title">Outward Material Issue Vocher</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <label className="">IV No</label>
                <input
                  type="text"
                  name="IvId"
                  value={formHeader.IV_No}
                  disabled
                  onChange={InputHeaderEvent}
                />
              </div>
              <div className="col-md-3">
                <label className="">IV Date</label>
                <input
                  type="text"
                  name="IVDate"
                  value={statusFormatter(formHeader.IV_Date)}
                  disabled
                />
              </div>
              <div className="col-md-3">
                <label className=""></label>
                <input
                  type="text"
                  name="status"
                  value={formHeader.IVStatus}
                  disabled
                />
              </div>
              <div className="col-md-3">
                <button className="button-style ms-1" onClick={saveButtonState}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <label className="">Customer</label>
                <input
                  type="text"
                  name="Customer"
                  value={formHeader.Customer}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="">GST No</label>
                <input
                  type="text"
                  name="reference"
                  value={formHeader.CustGSTNo}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label className="">DC No / Ph No</label>
                <input
                  type="text"
                  name="PkngDcNo"
                  value={formHeader.PkngDcNo}
                  onChange={InputHeaderEvent}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="">Weight</label>
                <input
                  type="text"
                  name="TotalWeight"
                  value={formHeader.TotalWeight}
                  onChange={InputHeaderEvent}
                />
              </div>
              <div className="col-md-6">
                <label className="">Calculated Weight</label>
                <input
                  type="text"
                  name="Type"
                  value={formHeader.TotalCalculatedWeight}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <label className="form-label"></label>
            <textarea
              style={{ height: "110px" }}
              className="form-control"
              rowSpane="3"
              value={custdata.Address}
              readOnly
            ></textarea>
          </div>
          <div className="col-md-3">
            <div>
              <button className="button-style" onClick={cancelIV}>
                Cancel IV
              </button>
            </div>
            <div>
              <button className="button-style" onClick={createDC}>
                Create DC
              </button>
            </div>
            <div>
              <button className="button-style" onClick={printDC}>
                Print DC
              </button>
            </div>
          </div>
        </div>

        {/* <div className="col-md-4">
            <button className="button-style" onClick={cancelIV}>
              Cancel IV
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label className="">GST No</label>
            <input type="text" name="reference" disabled />
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
            <label className="">Calculate Weight</label>
            <input
              type="text"
              name="Type"
              value={formHeader.TotalCalculatedWeight}
              disabled
            />
          </div>
          <div className="col-md-4">
            <button className="button-style" onClick={printDC}>
              Print DC
            </button>
          </div>
        </div> */}
      </div>
      <br></br>
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
        </div>
      </div>
    </div>
  );
}

export default OutwordMaterialIssueVocher;
