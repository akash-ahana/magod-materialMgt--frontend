import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import { toast } from "react-toastify";
import YesNoModal from "../../../../components/YesNoModal";

const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function UnitsMatAllotmentForm() {
  const nav = useNavigate();
  const location = useLocation();
  console.log("ncid = ", location.state.ncid);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const [formHeader, setFormHeader] = useState({});
  const [firstTable, setFirstTable] = useState([]);
  const [secondTable, setSecondTable] = useState([]);
  const [firstTableRow, setFirstTableRow] = useState([]);
  const [secondTableRow, setSecondTableRow] = useState([]);
  //const [firstTable, setFirstTable] = useState([]);

  const [show, setShow] = useState(false);
  const fetchData = async () => {
    //get formHeader data
    let url1 = endpoints.getRowByNCID + "?id=" + location.state.ncid;

    getRequest(url1, async (data) => {
      console.log("form header data = ", data);
      setFormHeader(data);
      //setAllData(data);

      let url2 = endpoints.getCustomerByCustCode + "?code=" + data.Cust_Code;
      //console.log(url2);
      getRequest(url2, async (data1) => {
        setFormHeader({ ...data, customer: data1.Cust_name });
      });

      //get first table data
      let url3 =
        endpoints.getMaterialAllotmentTable1 +
        "?MtrlCode=" +
        data.Mtrl_Code +
        "&CustCode=" +
        data.Cust_Code +
        "&shape=" +
        data.Shape +
        "&para1=" +
        data.Para1 +
        "&para2=" +
        data.Para2;
      getRequest(url3, async (data2) => {
        console.log("table data = ", data2);
        setFirstTable(data2);
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns1 = [
    {
      text: "Id",
      dataField: "MtrlStockID",
      hidden: true,
    },
    {
      text: "Locked",
      dataField: "Locked",
      editable: false,
      formatter: (celContent, row) => (
        <div className="checkbox">
          <lable>
            <input type="checkbox" checked={celContent === 0 ? false : true} />
          </lable>
        </div>
      ),
    },
    {
      text: "Stock Id",
      dataField: "MtrlStockID",
    },
    {
      text: "Para1",
      dataField: "DynamicPara1",
    },
    {
      text: "Para2",
      dataField: "DynamicPara2",
    },
    {
      text: "Location",
      dataField: "",
    },
  ];

  const columns2 = [
    {
      text: "Id",
      dataField: "MtrlStockID",
      hidden: true,
    },
    {
      text: "Stock Id",
      dataField: "MtrlStockID",
    },
    {
      text: "Para1",
      dataField: "DynamicPara1",
    },
    {
      text: "Para2",
      dataField: "DynamicPara2",
    },
    {
      text: "Selected",
      dataField: "",
    },
  ];
  const selectRow1 = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect) {
        setFirstTableRow([...firstTableRow, row]);
      } else {
        setFirstTableRow(
          firstTableRow.filter((obj) => {
            return obj.MtrlStockID !== row.MtrlStockID;
          })
        );
      }
    },
  };
  const selectRow2 = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect) {
        //setSecondTableRow([...secondTableRow, row]);
        setSecondTableRow(
          secondTable.filter((obj) => {
            return obj.MtrlStockID !== row.MtrlStockID;
          })
        );
      } else {
        setSecondTableRow(secondTableRow);
      }
    },
  };

  const allotMaterial = () => {
    setSecondTable(firstTableRow);
  };
  const CancelAllotMaterial = () => {
    setSecondTable(secondTableRow);
    //setSecondTable(firstTableRow.filter((obj)=>{
    //  obj.MtrlStockID !==
    //}));
  };

  let modalResponse = async (data) => {
    //await delay(500);
    //console.log("data = ", data);
    if (data === "yes") {
    }
  };

  const issueToProduction = () => {
    if (secondTable.length === 0) {
      toast.error("Please Select material before alloting");
    } else {
      setShow(true);
    }
    // nav(
    //   "/materialmanagement/shopfloorissue/service/units/shopfloormaterialissuevocher"
    // )
  };
  return (
    <>
      <YesNoModal
        show={show}
        setShow={setShow}
        message="Do you issue the selected material for production?"
        modalResponse={modalResponse}
      />

      <div>
        <h4 className="form-title">Material Allotment Form</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-6">
            <label className="">Task No</label>
            <input type="text" value={formHeader.TaskNo} disabled />
          </div>
          <div className="col-md-6">
            <label className="form-label">Customer</label>
            <input type="text" value={formHeader.customer} disabled />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div style={{ marginBottom: "9px" }}>
              <label className="">NC Program No</label>
              <input className="" value={formHeader.NCProgramNo} disabled />
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ marginBottom: "9px" }}>
              <label className="">Material Code</label>
              <input className="" value={formHeader.Mtrl_Code} disabled />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="">Priorty</label>
            <input className="" value={formHeader.Priority} disabled />
          </div>
          <div className="col-md-3">
            <label className="">Para 1</label>
            <input className="" value={formHeader.Para1} disabled />
          </div>

          <div className="col-md-3">
            <label className="">Machine</label>
            <input className="" value={formHeader.Machine} disabled />
          </div>
          <div className="col-md-3">
            <label className="">Quantity</label>
            <input className="" value={formHeader.Qty} disabled />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="">Status</label>
            <input className="" value={formHeader.PStatus} disabled />
          </div>
          <div className="col-md-3">
            <label className="">Para 2</label>
            <input className="" value={formHeader.Para2} disabled />
          </div>

          <div className="col-md-3">
            <label className="">Process</label>
            <input className="" value={formHeader.MProcess} disabled />
          </div>
          <div className="col-md-3">
            <label className="">Alloted</label>
            <input className="" value={formHeader.QtyAllotted} disabled />
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <label className="">Source</label>
            <input className="" value={formHeader.CustMtrl} disabled />
          </div>
          <div className="col-md-5">
            <button
              className="button-style "
              //   disabled={true}
              onClick={allotMaterial}
            >
              Allot Material
            </button>
            <button
              className="button-style "
              onClick={CancelAllotMaterial}
              //   disabled={true}
              //   onClick={addToStock}
            >
              Cancel Allot
            </button>
            <button
              className="button-style "
              //   disabled={true}
              onClick={issueToProduction}
            >
              Issue to Production
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-7">
            <div
              style={{
                height: "400px",
                overflowY: "scroll",
                marginTop: "10px",
              }}
            >
              <BootstrapTable
                keyField="MtrlStockID"
                columns={columns1}
                data={firstTable}
                striped
                hover
                condensed
                //pagination={paginationFactory()
                selectRow={selectRow1}
              ></BootstrapTable>
            </div>
          </div>
          <div className="col-md-5">
            <div
              style={{
                height: "400px",
                overflowY: "scroll",
                marginTop: "10px",
              }}
            >
              <BootstrapTable
                keyField="MtrlStockID"
                columns={columns2}
                data={secondTable}
                striped
                hover
                condensed
                //pagination={paginationFactory()
                selectRow={selectRow2}
              ></BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitsMatAllotmentForm;
