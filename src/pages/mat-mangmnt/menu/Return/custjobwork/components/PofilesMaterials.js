import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import CreateDCModal from "../../../../components/CreateDCModal";

function PofilesMaterials() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <CreateDCModal show={show} setShow={setShow} />

      <div>
        <button
          className="button-style"
          style={{ width: "200px" }}
          onClick={handleShow}
        >
          Create Return Vocher
        </button>
      </div>
      <div className="row-md-12 table-data">
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
                <th>Rv No</th>
                <th>CustDocument</th>
                <th>Material Code</th>
                <th>Weight</th>
                <th>Length</th>
                <th>Scrap</th>
                <th>Scrap Weight</th>
                <th>Instock</th>
                <th>Issue</th>
              </tr>
            </thead>

            <tbody className="tablebody">
              <tr>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>asdfghj</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="mat-reci">
        <div className="ip-box">
          <div className="row">
            <div className="col-md-6 table-data">
              <div style={{ height: "400px", overflowY: "scroll" }}>
                <Table bordered>
                  <thead style={{ textAlign: "center" }}>
                    <tr>
                      <th>MtrlStockID</th>
                      <th>Issue</th>
                      <th>Weight</th>
                      <th>ScrapWeight</th>
                      <th>RVNo</th>
                      <th>UpDated</th>
                    </tr>
                  </thead>

                  <tbody className="tablebody">
                    <tr>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="col-md-6 table-data">
              <div style={{ height: "400px", overflowY: "scroll" }}>
                <Table bordered>
                  <thead style={{ textAlign: "center" }}>
                    <tr>
                      <th>MtrlStockID</th>
                      <th>MtrlCode</th>
                      <th>DynamicPara1</th>
                      <th>DynamicPara1</th>
                      <th>Weight</th>
                      <th>Scrap</th>
                    </tr>
                  </thead>

                  <tbody className="tablebody">
                    <tr>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>asdfghj</td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PofilesMaterials;
