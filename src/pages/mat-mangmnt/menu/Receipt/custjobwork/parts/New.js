// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { listCustomers } from "../../../../actions/customerAction";
// import { custBomList } from "../../../../actions/custBomAction";
// import { v4 as uuid } from "uuid";
// import { materialHeaderRegisterAction } from "../../../../actions/materialReceiptAction";
// import { toast } from "react-toastify";
// import Tables from "../../../../../../components/Tables";
// import { data1 } from "../../../../components/Data";

// export const New = () => {
//   const getHeadings = () => {
//     return Object.keys(data1[0]);
//   };

//   return (
//     <div className="row">
//       <div className="col-md-6 col-sm-12">
//         <div
//           className="table-data"
//           style={{ height: "480px", overflowY: "scroll" }}
//         >
//           <Tables theadData={getHeadings()} tbodyData={data1} />
//         </div>
//       </div>
//       <div className="col-md-6 col-sm-12">
//         <div className="ip-box form-bg">
//           <div className="row justify-content-center mt-2">
//             <button className="button-style " style={{ width: "120px" }}>
//               Add New
//             </button>
//           </div>
//           <div className="row">
//             <div className="col-md-12 col-sm-12">
//               <div className="ip-box form-bg">
//                 <div className="row">
//                   <div className="row">
//                     <div className="col-md-12 ">
//                       <p className="form-title-deco">srl Details</p>
//                       <label>Part ID</label>
//                       <input className="in-field" />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-12 ">
//                       <label className="">Unit Weight</label>
//                       <input className="in-field" />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-12 ">
//                       <label className="">Qty Received</label>
//                       <input className="in-field" />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-12 ">
//                       <label className="">Qty Accepted</label>
//                       <input className="in-field" />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-12 ">
//                       <label className="">Qty Rejected</label>
//                       <input className="in-field" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row justify-content-center mt-2">
//             <button className="button-style " style={{ width: "120px" }}>
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { data1 } from "../../../../components/Data";
import Tables from "../../../../../../components/Tables";



function New() {

  const getHeadings = () => {
    return Object.keys(data1[0]);
  };
  return <div>
    <>
    <div>

      <h4 className="form-title">Customer Parts Receipt Voucher</h4>
      <hr className="horizontal-line" />

      <div className="row">
          
          <div className="col-md-3">
            <label className="">Receipt Date</label>
            <input type="text" />
          </div>
          <div className="col-md-3">
            <label className="">RV No</label>
            <input type="text" />
          </div>
          <div className="col-md-3">
            <label className="">RV Date</label>
            <input type="text" />
          </div>
          <div className="col-md-3">
            <label className="">status</label>
            <input type="text" />
          </div>
          
        </div>
      <div className="row">

        <div className="col-md-8">
            <label className="form-label">Customer</label>
            <select className="ip-select">
              <option value="option 1"> A A Industries</option>
              <option value="option 1">Test Industries</option>
              <option value="option 1">Ahana Systems and solutions</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="">Weight</label>
            <input type="text" />
          </div>
          </div>
          <div className="row">

        <div className="col-md-8">
        <label className="">Reference</label>
            <input type="text" />
          </div>
          <div className="col-md-4">
            <label className="">Caluclated Weight</label>
            <input type="text" />
          </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-8 justify-content-center">
          <button className="button-style" style={{ width: "196px" }}>
            Save
          </button>
          <button className="button-style" style={{ width: "196px" }}  >
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
  </div>;
}

export default New;
