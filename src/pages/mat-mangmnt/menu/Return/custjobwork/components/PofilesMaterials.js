import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import CreateDCModal from "../../../../components/CreateDCModal";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { formatDate } from "../../../../../../utils";

const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function PofilesMaterials(props) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const [show, setShow] = useState(false);
  let [firstTable, setFirstTable] = useState([]);
  let [secondTable, setSecondTable] = useState([]);
  let [thirdTable, setThirdTable] = useState([]);

  let [selectedSecond, setSelectedSecond] = useState({ selected: [] });

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
    /*    {
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
    },*/
  ];

  const columnsSecond = [
    /*{
      text: "#",
      dataField: "id",
      hidden: true,
    },*/
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
  const selectRowFirst = {
    mode: "checkbox",
    clickToSelect: true,
    selectColumnPosition: "right",
    bgColor: "#8A92F0",
    onSelect: (row, isSelect) => {
      if (isSelect) {
        //console.log("first table = ",firstTable)
        //console.log("second table = ",secondTable)

        setFirstTableSingleRow(row);
        const newArray = allData.filter((obj) => {
          return (
            obj.RV_No === row.RV_No &&
            obj.Mtrl_Code === row.Mtrl_Code &&
            obj.DynamicPara1 === row.DynamicPara1 &&
            obj.DynamicPara2 === row.DynamicPara2
          );
        });

        let arr = [];
        //mark checkbox of second table
        newArray.forEach(async (item, i) => {
          arr = [...arr, item.MtrlStockID];
        });
        setSelectedSecond({
          selected: arr,
        });
        //console.log("new array = ", newArray);
        //console.log("selected = ", selectedSecond);
        setSecondTable(newArray);
        thirdTable.push.apply(thirdTable, newArray);
        setThirdTable(thirdTable);
      } else {
        console.log("selected = ", selectedSecond);
        //console.log("third table = ", thirdTable);
        let newData = thirdTable.filter((obj, index) => {
          return (
            obj.RV_No !== row.RV_No ||
            obj.Mtrl_Code !== row.Mtrl_Code ||
            obj.DynamicPara1 !== row.DynamicPara1 ||
            obj.DynamicPara2 !== row.DynamicPara2
          );
        });

        setSelectedSecond({
          selected: [],
        });

        setThirdTable(newData);
      }
    },
  };
  const selectRowSecond = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#8A92F0",
    selected: selectedSecond.selected,
    onSelect: (row, isSelect) => {
      if (isSelect) {
        setFirstTableSingleRow(row);
        //console.log("third table = ", thirdTable);
        //console.log("row = ", row);

        const newArray = allData.filter((obj) => {
          return obj.MtrlStockID === row.MtrlStockID;
        });

        let arr = [];
        //mark checkbox of second table
        newArray.forEach(async (item, i) => {
          arr = [...selectedSecond.selected, item.MtrlStockID];
        });
        setSelectedSecond({
          selected: arr,
        });
        //console.log("new array = ", newArray);
        //console.log("selected = ", selectedSecond);
        //setSecondTable(newArray);
        thirdTable.push.apply(thirdTable, newArray);
        setThirdTable(thirdTable);
      } else {
        //console.log("third table = ", thirdTable);
        //console.log("row = ", row);
        let newData = thirdTable.filter((obj, index) => {
          return obj.MtrlStockID !== row.MtrlStockID;
        });

        //secondTable.forEach((item, i) => {
        setSelectedSecond({
          selected: selectedSecond.selected.filter((ele) => {
            return ele !== row.MtrlStockID;
          }),
        });
        //});

        // setSelectedSecond({
        //   selected: [],
        // });

        setThirdTable(newData);
      }
    },
  };
  let createReturnVoucher = async () => {
    if (thirdTable.length === 0) {
      toast.error("Select Material to return");
    } else {
      //get running no and assign to RvNo
      let yyyy = formatDate(new Date(), 6).toString();
      //console.log("yy = ", yyyy);
      const url =
        endpoints.getRunningNo + "?SrlType=MaterialReturnIV&Period=" + yyyy;
      getRequest(url, (data) => {
        data.map((obj) => {
          let newNo = parseInt(obj.Running_No) + 1;
          //let no = "23/000" + newNo;
          let series = "";
          //add prefix zeros
          for (
            let i = 0;
            i < parseInt(obj.Length) - newNo.toString().length;
            i++
          ) {
            series = series + "0";
          }
          series = series + "" + newNo;
          //console.log("series = ", series);
          //get last 2 digit of year
          let yy = formatDate(new Date(), 6).toString().substring(2);
          let no = yy + "/" + series;
          console.log("no = ", no);
        });
      });
    }
  };
  return (
    <>
      <CreateDCModal show={show} setShow={setShow} />

      <div>
        <button
          className="button-style"
          style={{ width: "200px" }}
          onClick={createReturnVoucher}
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
          ></BootstrapTable>
        </div>
      </div>
      <div className="mat-reci mt-3">
        <div className="ip-box">
          <div className="row">
            <div className="col-md-6 table-data">
              <div style={{ height: "400px", overflowY: "scroll" }}>
                <BootstrapTable
                  keyField="MtrlStockID"
                  columns={columnsSecond}
                  data={secondTable}
                  striped
                  hover
                  condensed
                  selectRow={selectRowSecond}
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
