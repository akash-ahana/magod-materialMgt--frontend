import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import CreateDCModal from "../../../../components/CreateDCModal";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function PofilesMaterials(props) {
  const [show, setShow] = useState(false);
  let [firstTable, setFirstTable] = useState([]);
  let [secondTable, setSecondTable] = useState([]);
  let [thirdTable, setThirdTable] = useState([]);

  let [firstTableSingleRow, setFirstTableSingleRow] = useState({});

  let [allData, setAllData] = useState([]);

  let [propsValue, setPropsValue] = useState(props.custCode);

  const handleShow = () => setShow(true);

  const fetchData = () => {
    //console.log("props = ", props);
    if (props && props.custCode.length !== 0) {
      let url1 =
        endpoints.profileMaterialFirst + "?Cust_Code=" + props.custCode;
      getRequest(url1, (data) => {
        data.forEach((item, i) => {
          item.id = i + 1;
          item.Issue = false;
        });
        setFirstTable(data);
      });

      //fetch second table data
      let url2 =
        endpoints.profileMaterialSecond + "?Cust_Code=" + props.custCode;
      getRequest(url2, (data) => {
        setAllData(data);
      });
    }
  };

  useEffect(() => {
    //setPropsValue(props.custCode);
    fetchData();
    //console.log("S props value = ", propsValue);
  }, [props.custCode]);

  const columnsFirst = [
    {
      text: "#",
      dataField: "id",
      hidden: true,
    },
    {
      text: "RV No",
      dataField: "RV_No",
      editable: false,
    },
    {
      text: "Cust Document",
      dataField: "Cust_Docu_No",
      editable: false,
    },
    {
      text: "Mtrl code",
      dataField: "Mtrl_Code",
      editable: false,
    },
    {
      text: "Width",
      dataField: "DynamicPara1",
      editable: false,
    },
    {
      text: "Length",
      dataField: "DynamicPara2",
      editable: false,
    },
    {
      text: "Scrap",
      dataField: "Scrap",
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
      text: "Weight",
      dataField: "Weight",
      editable: false,
    },
    {
      text: "Scrap Weight",
      dataField: "ScrapWeight",
      editable: false,
    },
    {
      text: "In Stock",
      dataField: "InStock",
      editable: false,
    },
    {
      text: "Issue",
      dataField: "Issue",
      type: "bool",
      //editable: true,
      editor: {
        type: Type.CHECKBOX,
        value: "true:false",
      },
      formatter: (celContent, row) => (
        <div className="checkbox">
          <lable>
            <input
              type="checkbox"
              onChange={firstTableCheckoxChange(row)}
              checked={celContent === true ? true : false}
            />
          </lable>
        </div>
      ),
    },
  ];

  const columnsSecond = [
    {
      text: "#",
      dataField: "id",
      hidden: true,
    },
    {
      text: "MtrlStockID",
      dataField: "MtrlStockID",
      editable: false,
    },
    {
      text: "Issue",
      dataField: "Issue",
      type: "bool",
      editor: {
        type: Type.CHECKBOX,
        value: "true:false",
      },
      formatter: (celContent, row) => (
        <div className="checkbox">
          <lable>
            <input
              type="checkbox"
              checked={celContent === true ? true : false}
            />
          </lable>
        </div>
      ),
    },
    {
      text: "Weight",
      dataField: "Weight",
      editable: false,
    },
    {
      text: "ScrapWeight",
      dataField: "ScrapWeight",
      editable: false,
    },
    {
      text: "RVId",
      dataField: "RVId",
      editable: false,
    },
  ];
  const columnsThird = [
    {
      text: "#",
      dataField: "id",
      hidden: true,
    },
    {
      text: "MtrlStockID",
      dataField: "MtrlStockID",
      editable: false,
    },
    {
      text: "Mtrl_Code",
      dataField: "Mtrl_Code",
      editable: false,
    },
    {
      text: "DynamicPara1",
      dataField: "DynamicPara1",
      editable: false,
    },
    {
      text: "DynamicPara2",
      dataField: "DynamicPara2",
      editable: false,
    },
    {
      text: "Weight",
      dataField: "Weight",
      editable: false,
    },
  ];
  let firstTableCheckoxChange = (row) => {
    //console.log("row = ", row);
    console.log("third table : ", thirdTable);
    if (row.Issue === true) {
      var flag = 0;
      if (thirdTable.length !== 0) {
        thirdTable.map((ele) => {
          if (ele.MtrlStockID === row.MtrlStockID) {
            flag = 1;
          }
        });
      }
      if (flag == 0) {
        const newArray = allData.filter((obj) => {
          return (
            obj.RV_No === row.RV_No &&
            obj.Mtrl_Code === row.Mtrl_Code &&
            obj.DynamicPara1 === row.DynamicPara1 &&
            obj.DynamicPara2 === row.DynamicPara2
          );
        });
        thirdTable.push(newArray[0]);
        setThirdTable(thirdTable);
      }
      //const newArray = allData.filter((obj) => {
      // if (thirdTable.length !== 0) {
      //   thirdTable.map((ele) => {
      //     if (ele.MtrlStockID !== obj.MtrlStockID) {
      //       return (
      //         obj.RV_No === row.RV_No &&
      //         obj.Mtrl_Code === row.Mtrl_Code &&
      //         obj.DynamicPara1 === row.DynamicPara1 &&
      //         obj.DynamicPara2 === row.DynamicPara2
      //       );
      //     }
      //   });
      // } else {
      //   return (
      //     obj.RV_No === row.RV_No &&
      //     obj.Mtrl_Code === row.Mtrl_Code &&
      //     obj.DynamicPara1 === row.DynamicPara1 &&
      //     obj.DynamicPara2 === row.DynamicPara2
      //   );
      // }
      //});
      //setSecondTable(newArray);
      //thirdTable.push(newArray[0]);
      //setThirdTable(thirdTable);
    } else {
      console.log(" OFF ");
      const newArray = thirdTable.filter((obj) => {
        return (
          obj.RV_No !== row.RV_No &&
          obj.Mtrl_Code !== row.Mtrl_Code &&
          obj.DynamicPara1 !== row.DynamicPara1 &&
          obj.DynamicPara2 !== row.DynamicPara2
        );
      });
      setThirdTable(thirdTable);
    }
  };
  const selectRowFirst = {
    mode: "radio",
    clickToSelect: true,
    clickToEdit: true,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect, rowIndex, e) => {
      setFirstTableSingleRow(row);
      const newArray = allData.filter((obj) => {
        return (
          obj.RV_No === row.RV_No &&
          obj.Mtrl_Code === row.Mtrl_Code &&
          obj.DynamicPara1 === row.DynamicPara1 &&
          obj.DynamicPara2 === row.DynamicPara2
        );
        // if (row.InStock === 1) {
        //   return (
        //     obj.RV_No === row.RV_No &&
        //     obj.Mtrl_Code === row.Mtrl_Code &&
        //     obj.DynamicPara1 === row.DynamicPara1 &&
        //     obj.DynamicPara2 === row.DynamicPara2 &&
        //     obj.Weight === row.Weight
        //   );
        // } else {
        //   return (
        //     obj.RV_No === row.RV_No &&
        //     obj.Mtrl_Code === row.Mtrl_Code &&
        //     obj.DynamicPara1 === row.DynamicPara1 &&
        //     obj.DynamicPara2 === row.DynamicPara2
        //   );
        // }
      });
      setSecondTable(newArray);
    },
  };

  const cellEditFirstTable = (row, columns, rowIndex, columnIndex) => {
    //console.log("Row = ", row);
    // if (row.Issue === true) {
    //   const newArray = allData.filter((obj) => {
    //     return (
    //       obj.RV_No === row.RV_No &&
    //       obj.Mtrl_Code === row.Mtrl_Code &&
    //       obj.DynamicPara1 === row.DynamicPara1 &&
    //       obj.DynamicPara2 === row.DynamicPara2
    //     );
    //   });
    //   //setSecondTable(newArray);
    //   thirdTable.push(newArray);
    //   setThirdTable(thirdTable);
    //   console.log("thord table = ", thirdTable);
    // } else {
    //   const newArray = thirdTable.filter((obj) => {
    //     return (
    //       obj.RV_No !== row.RV_No &&
    //       obj.Mtrl_Code !== row.Mtrl_Code &&
    //       obj.DynamicPara1 !== row.DynamicPara1 &&
    //       obj.DynamicPara2 !== row.DynamicPara2
    //     );
    //   });
    //   setThirdTable(thirdTable);
    // }
  };
  const beforeSaveCellFirst = (oldValue, newValue) => {
    console.log(
      "old = ",
      oldValue,
      " new = ",
      newValue,
      " row = ",
      firstTableSingleRow
    );
    // if (newValue === true) {
    //   const newArray = allData.filter((obj) => {
    //     return (
    //       obj.RV_No === firstTableSingleRow.RV_No &&
    //       obj.Mtrl_Code === firstTableSingleRow.Mtrl_Code &&
    //       obj.DynamicPara1 === firstTableSingleRow.DynamicPara1 &&
    //       obj.DynamicPara2 === firstTableSingleRow.DynamicPara2
    //     );
    //   });
    //   setSecondTable(newArray);
    //   setThirdTable(thirdTable.push(newArray));
    // } else {
    // }
  };
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
          <BootstrapTable
            keyField="id"
            columns={columnsFirst}
            data={firstTable}
            striped
            hover
            condensed
            selectRow={selectRowFirst}
            cellEdit={cellEditFactory({
              mode: "click",
              blurToSave: true,
              onStartEdit: cellEditFirstTable,
            })}
          ></BootstrapTable>
        </div>
      </div>
      <div className="mat-reci mt-3">
        <div className="ip-box">
          <div className="row">
            <div className="col-md-6 table-data">
              <div style={{ height: "400px", overflowY: "scroll" }}>
                <BootstrapTable
                  keyField="id"
                  columns={columnsSecond}
                  data={secondTable}
                  striped
                  hover
                  condensed
                  //selectRow={selectRowSecond}
                  cellEdit={cellEditFactory({
                    mode: "click",
                    blurToSave: true,
                  })}
                ></BootstrapTable>
              </div>
            </div>
            <div className="col-md-6 table-data">
              <div style={{ height: "400px", overflowY: "scroll" }}>
                <BootstrapTable
                  keyField="MtrlStockID"
                  columns={columnsThird}
                  data={thirdTable}
                  striped
                  hover
                  condensed
                ></BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PofilesMaterials;
