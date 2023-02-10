import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "../../../MatMenu.css"
import { data2 } from "../../../../components/Data";



const isFirstColumn = (params) => {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
};

 export default function DraftRVList(){
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [date, setDate] = useState();

  const [rowData, setRowData] = useState();

  const [columnDefs, setColumnDefs] = useState([
    { field: 'Rv No', minWidth: 180 },
    { field: 'RV date',minWidth: 150 },
    { field: 'Customer', minWidth: 150 },
    { field: 'Cust Docu No' },
    
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
      headerCheckboxSelection: isFirstColumn,
      checkboxSelection: isFirstColumn,
    };
  }, []);

  // const onGridReady = useCallback((params) => {
  //   fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  //     .then((resp) => resp.json())
  //     .then((data) => setRowData(data));
  // }, []);

  const onQuickFilterChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('quickFilter').value
    );
  }, []); 

  const getHeadings = () => {
    return Object.keys(data2[0]);
  };

  return (
<>
<h4 className="form-title">Customer Parts Receipt Voucher</h4>
      <hr className="horizontal-line" />
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <div
          className="table-data"
          style={{ height: "480px", overflowY: "scroll" }}
        >
          <div style={containerStyle}>
      <div className="example-wrapper">
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            // theadData={getHeadings()}
            //  tbodyData={data2} 
            defaultColDef={defaultColDef}
            suppressRowClickSelection={true}
            rowSelection={'multiple'}
            
          ></AgGridReact>
        </div>
      </div>
    </div>
        </div>
        </div>

        <div className="col-md-6 col-sm-12">
        <div className="ip-box form-bg">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="ip-box form-bg">
                <div className="row">
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">Receipt Date</label>
                    </div>
                    <div className="col-md-8 ">
                      <input
                        className="in-field"
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">RV No</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label className="">RV Date</label>
                    </div>
                    <div className="col-md-8 ">
                      <input
                        className="in-field"
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">Cust code</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">Customer</label>
                    </div>
                    <div className="col-md-8" style={{ marginTop: "8px" }}>
                      <select className="ip-select dropdown-field">
                        <option value="option 1">001</option>
                        <option value="option 1">002</option>
                        <option value="option 1">003</option>
                        <option value="option 1">004</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3">
                      <label className="">Cust Docu No</label>
                    </div>

                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">Total Weight</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label className="">Caluclatd weight</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">RV status</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <button className="button-style " style={{ width: "120px" }}>
              Open
            </button>
          </div>
        </div>
      </div>


        </div>

    
    </>
  );
};