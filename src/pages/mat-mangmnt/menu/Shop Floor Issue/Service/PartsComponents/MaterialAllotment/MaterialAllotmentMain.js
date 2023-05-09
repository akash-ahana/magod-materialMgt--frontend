import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import { toast } from "react-toastify";
import { formatDate } from "../../../../../../../utils";

const {
  getRequest,
  postRequest,
} = require("../../../../../../api/apiinstance");
const { endpoints } = require("../../../../../../api/constants");

function MaterialAllotmentMain() {
  const location = useLocation();
  const nav = useNavigate();
  console.log("ncid = ", location.state.ncid);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const [formHeader, setFormHeader] = useState({});
  const [firstTable, setFirstTable] = useState([]);
  const [secondTable, setSecondTable] = useState([]);
  const [custBOMIdArray, setCustBOMIdArray] = useState([]);
  const [custBOMId, setCustBOMId] = useState([]);
  const [row2, setRow2] = useState({});
  const [issuenowval, setissuenowval] = useState("");
  const [issueidval, setissueidval] = useState("");
  const [btnVisibility, setBtnVisibility] = useState(false);

  const fetchData = async () => {
    //get formHeader data
    let url1 = endpoints.getRowByNCID + "?id=" + location.state.ncid;

    getRequest(url1, async (data) => {
      //console.log("form header data = ", data);
      setFormHeader(data);
      //setAllData(data);

      let url2 = endpoints.getCustomerByCustCode + "?code=" + data.Cust_Code;
      //console.log(url2);
      getRequest(url2, async (data1) => {
        setFormHeader({ ...data, customer: data1.Cust_name });
      });
    });

    delay(1000);
    console.log("form header fetchdata = ", formHeader);
    //get first table data
    let url3 =
      endpoints.getShopFloorAllotmentPartFirstTable +
      "?id=" +
      location.state.ncid;
    getRequest(url3, async (data) => {
      //setFirstTable(data);
      //console.log("first table data = ", data);
      let tempArray = [];
      for (let i = 0; i < data.length; i++) {
        //console.log("bom id = ", data[i].CustBOM_Id);
        tempArray.push(data[i].CustBOM_Id);

        //find QtyAvailable
        let url5 =
          endpoints.getShopFloorAllotmentPartFirstTableQtyAvl +
          "?id=" +
          data[i].CustBOM_Id;
        getRequest(url5, async (data2) => {
          data[i].QtyAvailable = data2[0]["QtyAvialable"];
          data[i].issueNow = 0;
        });
      }
      await delay(2000);
      setFirstTable(data);
      console.log("first table data = ", data);

      //console.log("");
      //setCustBOMIdArray(tempArray);

      //console.log("custbom ids = ", tempArray);
      if (tempArray.length !== 0) {
        //fetch data in second table
        let url4 =
          endpoints.getShopFloorAllotmentPartSecondTableIds +
          "?bomids=" +
          tempArray;
        getRequest(url4, async (data) => {
          for (let i = 0; i < data.length; i++) {
            data[i].issueNow = 0;
          }
          //setFirstTable(data);
          console.log("Second table data = ", data);
          setSecondTable(data);
        });
      }
    });
    //await delay(2000);
    //custbom ids array
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    //if (firstTable.issueNow != 0) {
    setFirstTable(firstTable);
    setSecondTable(secondTable);
    // }
    console.log("use state call");
  }, [firstTable, secondTable]);

  let issuenowchange = (e) => {
    setissuenowval(e.target.value);
    //console.log("change = ", e.target.value);
  };

  let issuenowonblur = async () => {
    //console.log("on blur : ", issuenowval, " calc = ", formHeader);
    if (issuenowval > formHeader.Qty - formHeader.QtyAllotted) {
      toast.error("Cannot Allot more material than Prgrammed Quantity");
      setBtnVisibility(true);
    } else {
      setBtnVisibility(false);
      let setQtyAvailable = issuenowval;
      //***** First Examaine the Max Set Quantity THAT can be issued
      for (const key in firstTable) {
        if (
          Math.floor(
            parseInt(firstTable[key].QtyAvailable) /
              parseInt(firstTable[key].QtyPerAssy)
          ) < parseInt(setQtyAvailable)
        ) {
          setQtyAvailable = Math.floor(
            parseInt(firstTable[key].QtyAvailable) /
              parseInt(firstTable[key].QtyPerAssy)
          );
        }
        //setQtyAvailable = 20;
      }
      // console.log(
      //   "issueval = ",
      //   issuenowval + " setqtyavl = ",
      //   setQtyAvailable
      // );
      if (issuenowval > setQtyAvailable) {
        toast.error(
          "Sets Required : " +
            issuenowval +
            " Sets Available : " +
            setQtyAvailable
        );
      } else {
        firstTable.map(async (obj1) => {
          obj1.issueNow = obj1.QtyPerAssy * setQtyAvailable;
          let flag = 0;
          secondTable.map((obj2) => {
            if (obj1.CustBOM_Id === obj2.CustBOM_Id && flag == 0) {
              obj2.issueNow = obj1.issueNow;
              flag = flag + 1;
            }
          });
        });

        //await delay(1000);
        console.log("new first table = ", firstTable);
        console.log("new second table = ", secondTable);
        setFirstTable(firstTable);
        setSecondTable(secondTable);
      }
    }
  };
  const columns1 = [
    {
      text: "Id",
      dataField: "id",
      hidden: true,
    },
    {
      text: "Part Id",
      dataField: "PartId",
    },
    {
      text: "Qty / Assembly",
      dataField: "QtyPerAssy",
    },
    {
      text: "Required",
      dataField: "QtyRequired",
    },
    {
      text: "Alrady used",
      dataField: "",
    },
    {
      text: "Total used",
      dataField: "",
    },
    {
      text: "Rejected",
      dataField: "QtyRejected",
    },
    {
      text: "Available",
      dataField: "QtyAvailable",
    },
    {
      text: "Issue Now",
      dataField: "issueNow",
    },
  ];
  // Process the returned date in the formatter
  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    //return dateToShort(cell);
    return formatDate(new Date(cell), 3);
  }

  const columns2 = [
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
      text: "RV Date",
      dataField: "RV_Date",
      formatter: statusFormatter,
    },
    {
      text: "Received",
      dataField: "QtyReceived",
    },
    {
      text: "Accepted",
      dataField: "QtyAccepted",
    },
    {
      text: "Issued",
      dataField: "QtyIssued",
    },
    {
      text: "Issue Now",
      dataField: "issueNow",
    },
  ];
  const selectRow1 = {
    mode: "radio",
    clickToSelect: true,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect, rowIndex, e) => {
      setCustBOMId(row.CustBOM_Id);
    },
  };

  const selectRow2 = {
    mode: "radio",
    clickToSelect: true,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect, rowIndex, e) => {
      setRow2(row);
    },
  };

  const rowStyle2 = (row, rowIndex) => {
    const style = {};
    if (row.CustBOM_Id === custBOMId) {
      style.backgroundColor = "#C0F59F";
    }
    return style;
  };

  const CreatePartsIssueVoucher = async () => {
    //get running no and assign to RvNo
    let yyyy = formatDate(new Date(), 6).toString();
    const url =
      endpoints.getRunningNo +
      "?SrlType=ShopFloor_PartIssueVoucher&Period=" +
      yyyy;
    //console.log(url);
    getRequest(url, async (data) => {
      data.map((obj) => {
        let newNo = parseInt(obj.Running_No) + 1;
        console.log("newno = ", newNo);

        //insert into shopfloorpartissueregister
        let header1 = {
          IV_No: newNo,
          Issue_date: formatDate(new Date(), 2),
          NC_ProgramNo: formHeader.NCProgramNo,
          QtyIssued: issuenowval,
          QtyReturned: 0,
          QtyUsed: 0,
          Ncid: formHeader.Ncid,
        };
        postRequest(
          endpoints.insertShopfloorPartIssueRegister,
          header1,
          async (data) => {
            if (data.affectedRows !== 0) {
              //toast.success("Record Inserted Successfully");
              await delay(100);
              setissueidval(data.insertId);
              console.log("data insert id = ", data.insertId);
              //insert into shopfloorBOMIssueDetails
              for (let i = 0; i < secondTable.length; i++) {
                if (secondTable[i].issueNow > 0) {
                  //console.log("NR = ", secondTable[i]);
                  let header3 = {
                    IV_ID: data.insertId,
                    RV_Id: secondTable[i].RVId,
                    PartReceipt_DetailsID: secondTable[i].Id,
                    QtyIssued: secondTable[i].issueNow,
                    QtyReturned: 0,
                    QtyUsed: 0,
                  };
                  postRequest(
                    endpoints.insertShopfloorBOMIssueDetails,
                    header3,
                    async (data) => {
                      if (data.affectedRows !== 0) {
                        //toast.success("Record Inserted Successfully");
                      } else {
                        //toast.error("Record Not Updated");
                      }
                    }
                  );
                }
                //update mtrl part receipt details
                // let header4 = {
                //   Id: secondTable[i].Id,
                //   Qty: secondTable[i].issueNow,
                // };
                // postRequest(
                //   endpoints.updateQtyIssuedPartReceiptDetails1,
                //   header4,
                //   (data) => {
                //     if (data.affectedRows !== 0) {
                //       toast.success("Record updated Successfully");
                //     } else {
                //       toast.error("Record Not Updated");
                //     }
                //   }
                // );

                let header5 = {
                  Id: secondTable[i].Id,
                  Qty: secondTable[i].issueNow,
                };
                postRequest(
                  endpoints.updateQtyIssuedPartReceiptDetails2,
                  header5,
                  async (data) => {
                    if (data.affectedRows !== 0) {
                      //toast.success("Record updated Successfully");
                    } else {
                      //toast.error("Record Not Updated");
                    }
                  }
                );
              }
            } else {
              //toast.error("Record Not Updated");
            }

            //update nc programs
            let header2 = {
              Id: formHeader.Ncid,
              Qty: issuenowval,
            };
            postRequest(
              endpoints.updateQtyAllotedncprograms1,
              header2,
              async (data) => {
                if (data.affectedRows !== 0) {
                  //toast.success("Record updated Successfully");
                } else {
                  //toast.error("Record Not Updated");
                }
              }
            );

            //update running no
            const inputData = {
              SrlType: "ShopFloor_PartIssueVoucher",
              Period: formatDate(new Date(), 6),
              RunningNo: newNo,
            };
            postRequest(endpoints.updateRunningNo, inputData, (data) => {});

            console.log("Return id = ", issueidval);
            //return data.insertId;
          }
        );
      });
    });

    //let IssueID = 47272;

    //return 10;
  };
  const releaseProduction = async () => {
    CreatePartsIssueVoucher();
    await delay(5000);
    console.log("return val = ", issueidval);
    nav(
      "/materialmanagement/shopfloorissue/ivlistservice/issued/shopmatissuevocher",
      {
        state: { issueIDVal: issueidval },
      }
    );
  };
  return (
    <div>
      <div>
        <h4 className="form-title">Material Allotment Form</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-4">
            <label className="">Task No</label>
            <input type="text" value={formHeader.TaskNo} disabled />
          </div>
          <div className="col-md-6">
            <label className="form-label">Customer</label>
            <input type="text" value={formHeader.customer} disabled />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
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
          <div className="col-md-4">
            <label className="">Priorty</label>
            <input className="" value={formHeader.Priority} disabled />
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
          <div className="col-md-4">
            <label className="">Status</label>
            <input className="" value={formHeader.PStatus} disabled />
          </div>

          <div className="col-md-3">
            <label className="">Process</label>
            <input className="" value={formHeader.Operation} disabled />
          </div>
          <div className="col-md-3">
            <label className="">Alloted</label>
            <input className="" value={formHeader.QtyAllotted} disabled />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label className="">Source</label>
            <input className="" value="Customer" disabled />
          </div>

          <div className="col-md-3"></div>
          <div className="col-md-3">
            <label className="">Issue Now</label>
            <input
              type="text"
              onChange={issuenowchange}
              value={issuenowval}
              onBlur={issuenowonblur}
            />
          </div>
        </div>
      </div>

      <div style={{ height: "250px", overflowY: "scroll", marginTop: "10px" }}>
        <BootstrapTable
          keyField="id"
          columns={columns1}
          data={firstTable}
          striped
          hover
          condensed
          //pagination={paginationFactory()
          selectRow={selectRow1}
        ></BootstrapTable>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 justify-content-center">
          <button
            className="button-style"
            style={{ width: "196px" }}
            disabled={btnVisibility}
            onClick={releaseProduction}
          >
            Release To Production
          </button>
        </div>
        <div className="col-md-7">
          <div style={{ height: "300px", overflowY: "scroll" }}>
            <BootstrapTable
              keyField="Id"
              columns={columns2}
              data={secondTable}
              striped
              hover
              condensed
              rowStyle={rowStyle2}
              //pagination={paginationFactory()}
              selectRow={selectRow2}
            ></BootstrapTable>
          </div>
        </div>

        <div className="col-md-5">
          <div className="ip-box form-bg">
            <div className="row">
              <div className="col-md-3 ">
                <label className="">RV No</label>
              </div>
              <div className="col-md-8 ">
                <input
                  className="in-field"
                  type="text"
                  value={row2.RV_No}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ">
                <label className="">Part ID</label>
              </div>
              <div className="col-md-8" style={{ marginTop: "8px" }}>
                <input
                  className="in-field"
                  type="text"
                  value={row2.PartId}
                  disabled
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
                  // disabled="true"
                  value={row2.QtyReceived}
                  disabled
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
                  value={row2.QtyAccepted}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ">
                <label className="">Qty Issued</label>
              </div>
              <div className="col-md-8 ">
                <input
                  className="in-field"
                  type="text"
                  value={row2.QtyIssued}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ">
                <label className="">Issue Now</label>
              </div>
              <div className="col-md-8 ">
                <input className="in-field" type="text" disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialAllotmentMain;
