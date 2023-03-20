import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import LocationLisModal from "./LocationLisModal";

function LocationList(props) {
  const [open, setOpen] = useState();
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <LocationLisModal open={open} setOpen={setOpen} />
      <h4 className="form-title">Material Storage Location Manager</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-7">
          <div style={{ height: "200px", overflowY: "scroll" }}>
            <Table bordered>
              <thead
                style={{
                  textAlign: "center",
                  position: "sticky",
                  top: "-1px",
                }}
              >
                <tr>
                  <th>Location No</th>
                  <th>Storage Type</th>
                  <th>Capacity</th>
                  <th>Capacity Utilized</th>
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
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-md-5">
          <div className="ip-box form-bg">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="ip-box form-bg">
                  <div className="row">
                    <div className="row">
                      <div className="col-md-4 ">
                        <label className="">Location No/Name</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          name="unitWeight"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 ">
                        <label className="">Storage Type</label>
                      </div>
                      <div className="col-md-8" style={{ marginTop: "8px" }}>
                        <select
                          className="ip-select dropdown-field"
                          name="partId"
                        >
                          {/* {mtrlDetails.map((part, index) => (
                            <option key={index} value={part.PartId}>
                              {part.PartId}
                            </option>
                          ))} */}
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 ">
                        <label className="">Storage Capacity</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          name="qtyReceived"
                          //value={tempVal}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <button className="button-style " style={{ width: "120px" }}>
                Add
              </button>
              <button className="button-style " style={{ width: "120px" }}>
                Delete
              </button>
              <button
                className="button-style "
                style={{ width: "120px", marginBottom: "20PX" }}
                onClick={handleOpen}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationList;
