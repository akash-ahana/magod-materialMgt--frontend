import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
import { formatDate } from "../../../../../../utils";
import BootstrapTable from "react-bootstrap-table-next";
import { useNavigate } from "react-router-dom";
import OkModal from "../../../../components/OkModal";
import { toast } from "react-toastify";
import ShopFloorAcceptReturnPartsYesNoModal from "../../../../components/ShopFloorAcceptReturnPartsYesNoModal";

const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function ProductionMatIssueParts() {
  const nav = useNavigate();
  const location = useLocation();

  const [tableData, setTableData] = useState([]);
  const [rowData, setRowData] = useState({});
  const [show, setShow] = useState(false);
  const [showYN, setShowYN] = useState(false);

  const [modalMessage, setModalMessage] = useState(
    "By cancelling this Issue Voucher the material stock will revert to Receipt Voucher. Continue?"
  );

  let [formHeader, setFormHeader] = useState({
    AssyName: "",
    CustMtrl: "",
    Cust_Code: "",
    Cust_name: "",
    IV_No: "",
    IssueID: "",
    Issue_date: "",
    Machine: "",
    Mtrl_Code: "",
    NCProgramNo: "",
    NC_ProgramNo: "",
    NcId: "",
    Operation: "",
    QtyIssued: "",
    QtyReturned: "",
    QtyUsed: "",
    Remarks: "",
    Status: "",
    TaskNo: "",
  });

  const fetchData = async () => {
    let url =
      endpoints.getProductionMaterialIssueParts +
      "?id=" +
      location.state.issueIDVal;
    getRequest(url, async (data) => {
      console.log("data = ", data);
      //get cust name
      let url1 = endpoints.getCustomerByCustCode + "?code=" + data.Cust_Code;
      getRequest(url1, async (cdata) => {
        setFormHeader({
          AssyName: data.AssyName,
          CustMtrl: data.CustMtrl,
          Cust_Code: data.Cust_Code,
          Cust_name: cdata.Cust_name,
          IV_No: data.IV_No,
          IssueID: data.IssueID,
          Issue_date: formatDate(new Date(data.Issue_date), 3), //data.Issue_date,
          Machine: data.Machine,
          Mtrl_Code: data.Mtrl_Code,
          NCProgramNo: data.NCProgramNo,
          NC_ProgramNo: data.NC_ProgramNo,
          NcId: data.NcId,
          Operation: data.Operation,
          QtyIssued: data.QtyIssued,
          QtyReturned: data.QtyReturned,
          QtyUsed: data.QtyUsed,
          Remarks: data.Remarks,
          Status: data.Status,
          TaskNo: data.TaskNo,
        });
      });
    });
    //get table data
    let url2 =
      endpoints.getProductionMaterialIssuePartsTable +
      "?id=" +
      location.state.issueIDVal;
    getRequest(url2, (data) => {
      console.log("table data = ", data);
      setTableData(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      text: "Id",
      dataField: "Id",
      hidden: true,
    },
    {
      text: "RV No",
      dataField: "RV_No",
    },
    {
      text: "Part ID",
      dataField: "PartId",
    },
    {
      text: "Issued",
      dataField: "QtyIssued",
    },
    {
      text: "Used",
      dataField: "QtyUsed",
    },
    {
      text: "Returned",
      dataField: "QtyReturned",
    },
  ];

  const cancelButton = () => {
    setShow(true);
    for (let i = 0; i < tableData.length; i++) {
      let update1 = {
        Id: tableData[i].PartReceipt_DetailsID,
        Qty: tableData[i].QtyIssued,
      };
      //update QtyIssue mtrlpartreceiptdetails
      postRequest(
        endpoints.updateQtyIssuedPartReceiptDetails,
        update1,
        (data) => {
          console.log("update1");
        }
      );

      //shopfloorbomissuedetails set qtyreturn = qtyissue
      let update2 = {
        Id: tableData[i].Id,
      };
      postRequest(
        endpoints.updateQtyReturnedShopfloorBOMIssueDetails,
        update2,
        (data) => {
          console.log("update2");
        }
      );
    }

    //update ncprogram qtyalloated
    let update3 = {
      Id: formHeader.NcId,
      Qty: formHeader.QtyIssued,
    };
    postRequest(endpoints.updateQtyAllotedncprograms, update3, (data) => {
      console.log("update3");
    });

    //update shopfloorpartissueregiser stats closed
    let update4 = {
      Id: formHeader.IssueID,
      status: "Cancelled",
    };
    postRequest(
      endpoints.updateStatusShopfloorPartIssueRegister,
      update4,
      (data) => {
        console.log("update4");
      }
    );
  };

  const acceptReturn = () => {
    let flag = 0;
    for (let i = 0; i < tableData.length; i++) {
      if (
        tableData[i].QtyIssued !==
        tableData[i].QtyUsed + tableData[i].QtyReturned
      ) {
        flag = 1;
      }
    }
    if (flag == 1) {
      toast.error(
        "Cannot Accept Partial Return, Use Issued Quantity before returning"
      );
    } else {
      setShowYN(true);
    }
  };
  const printButton = () => {
    nav(
      "/materialmanagement/shopfloorissue/ivlistservice/PrintIVListServicePart",
      {
        state: {
          formHeader: formHeader,
          tableData: tableData,
        },
      }
    );
  };
  return (
    <div>
      <ShopFloorAcceptReturnPartsYesNoModal
        showYN={showYN}
        setShowYN={setShowYN}
        formHeader={formHeader}
        tableData={tableData}
      />
      <OkModal show={show} setShow={setShow} modalMessage={modalMessage} />
      <h4 className="form-title">Production Material Issue :Parts</h4>
      <hr className="horizontal-line" />
      <div className="table_top_style">
        <div className="row">
          <div className="col-md-3">
            <label className="form-label">Issue Vr No</label>
            <input className="" value={formHeader.IV_No} disabled />
          </div>
          <div className="col-md-3">
            <label className="form-label">Assembly Name</label>
            <input className="" value={formHeader.AssyName} disabled />
          </div>
          <div className="col-md-3">
            <label className="form-label">Alloted</label>
            <input className="" value={formHeader.QtyIssued} disabled />
          </div>
          <div className="col-md-3">
            <button className="button-style" onClick={printButton}>
              Print
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="form-label">Vr Date</label>
            <input className="" value={formHeader.Issue_date} disabled />
          </div>
          <div className="col-md-3">
            <label className="form-label">Operation</label>
            <input className="" value={formHeader.Operation} disabled />
          </div>
          <div className="col-md-3">
            <label className="form-label">Returned</label>
            <input className="" value={formHeader.QtyReturned} disabled />
          </div>
          <div className="col-md-3">
            <button
              className="button-style "
              onClick={cancelButton}
              disabled={formHeader.Status === "Closed" ? true : false}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="form-label">Program No</label>
            <input className="" value={formHeader.NCProgramNo} disabled />
          </div>
          <div className="col-md-6">
            <label className="form-label">Material</label>
            <input className="" value={formHeader.Mtrl_Code} disabled />
          </div>

          <div className="col-md-3">
            <button
              className="button-style "
              onClick={acceptReturn}
              disabled={formHeader.Status === "Closed" ? true : false}
            >
              Accept Return
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <label className="form-label">Customer</label>
            <input className="" value={formHeader.Cust_name} disabled />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{ height: "400px", overflowY: "scroll", marginTop: "30px" }}
        >
          <BootstrapTable
            keyField="Id"
            columns={columns}
            data={tableData}
            striped
            hover
            condensed
            //pagination={paginationFactory()}
            //selectRow={selectRow}
          ></BootstrapTable>
        </div>
      </div>
    </div>
  );
}

export default ProductionMatIssueParts;
