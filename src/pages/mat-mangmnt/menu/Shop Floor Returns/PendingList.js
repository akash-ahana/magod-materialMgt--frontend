import React, { useState } from "react";
import SideComponent from "./ReturnComponents/SideComponent";
import Table from "react-bootstrap/Table";
import LocationModel from "./ReturnComponents/LocationModel";
import ResizeModal from "./ReturnComponents/ResizeModal";
import { useNavigate } from "react-router-dom";

function PendingList(props) {
  const nav = useNavigate();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  return (
    <>
      <LocationModel show={show} setShow={setShow} />
      <ResizeModal open1={open1} setOpen1={setOpen1} />
      <h4 className="form-title">Shop Floor Material Issue List</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-3">
          <h4 className="form-title">Shop Floor Material Return Form</h4>
          <button className="button-style ">custname</button>
        </div>
        <div className="col-md-2">
          <button className="button-style mt-0" onClick={handleShow}>
            Return As Scrap
          </button>
          <button className="button-style" onClick={handleOpen1}>
            Return To Stock
          </button>
        </div>
        <div className="col-md-2">
          <button
            className="button-style mt-0"
            onClick={() =>
              nav(
                "/materialmanagement/shoopfloorreturns/pendinglist/resizeandreturn/materialsplitter"
              )
            }
          >
            Resize and Return
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-2">
          <SideComponent />
        </div>
        <div className="col-md-6">
          <div style={{ height: "400px", overflowY: "scroll" }}>
            <Table bordered>
              <thead
                style={{
                  textAlign: "center",
                  position: "sticky",
                  top: "-1px",
                }}
              >
                <tr>
                  <th>Custoemr</th>
                  <th>IV No</th>
                  <th>IV Date</th>
                  <th>Program No</th>
                  <th>Mtrl Code</th>
                  <th>Issued</th>
                  <th>Returned</th>
                  <th>Used</th>
                  <th>Remarks</th>
                </tr>
              </thead>

              <tbody className="tablebody">
                <tr
                // onClick={() => selectedRowFn(item, key)}
                // className={
                //   key === selectedRow?.index ? "selcted-row-clr" : ""
                // }
                >
                  <td>asdfghj</td>
                  <td>asdfghj</td>
                  <td>asdfghj</td>
                  <td>asdfghj</td>
                  <td>asdfghj</td>
                  <td>asdfghj</td>
                  <td>asdfghj</td>
                  <td>asdfghj</td>
                  <td>asdfghj</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-md-4">
          <div style={{ height: "400px", overflowY: "scroll" }}>
            <Table bordered>
              <thead
                style={{
                  textAlign: "center",
                  position: "sticky",
                  top: "-1px",
                }}
              >
                <tr>
                  <th>ShapeMtrlID</th>
                  <th>Used</th>
                  <th>Rejected</th>
                  <th>Balance Length</th>
                  <th>Balance Width</th>
                </tr>
              </thead>

              <tbody className="tablebody">
                <tr
                // onClick={() => selectedRowFn(item, key)}
                // className={
                //   key === selectedRow?.index ? "selcted-row-clr" : ""
                // }
                >
                  <td>asdfghj</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    {" "}
                    <input type="checkbox" />
                  </td>
                  <td>asdfghj</td>
                  <td>asdfghj</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingList;
