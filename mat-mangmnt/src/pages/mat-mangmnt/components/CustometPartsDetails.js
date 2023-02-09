import React from 'react'
import Tables from "../../../components/Tables";
import { data1 } from './Data';
import "../../mat-mangmnt/menu/MatMenu.css";



function CustometPartsDetails() {

    const getHeadings = () => {
        return Object.keys(data1[0]);
      };
  return (
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
                  <p className="form-title-deco">
                    srl Details
                  </p>
                  
                  <label className="form-label" style={{ marginTop: "20px" }}>
                    Part ID
                  </label>
                  <select className="ip-select dropdown-field">
                    <option value="option 1">001</option>
                    <option value="option 1">002</option>
                    <option value="option 1">003</option>
                    <option value="option 1">004</option>
                  </select>
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
  )
}

export default CustometPartsDetails