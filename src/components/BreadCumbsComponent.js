import * as React from "react";

// import Typography from "@mui/material/Typography";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useLocation } from "react-router-dom";
// import { sr } from "date-fns/locale";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { BreadcrumbItem } from "react-bootstrap";
// MemoryRouter,    //assign initilal state
{
  /* <MemoryRouter initialEntries={['/inbox']} initialIndex={0}></MemoryRouter> */
} //this will wrap whole return

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(pathnames);
  const propertyNames = Object.values(pathnames);
  console.log(propertyNames);

  function capitalizeWords(arr) {
    return arr.map((word) => {
      const capitalizedFirst = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return capitalizedFirst + rest;
    });
  }

  console.log(capitalizeWords(propertyNames));
  const finalArr = capitalizeWords(propertyNames);
  console.log(finalArr);

  return (
    <div style={{ marginLeft: "10px" }}>
      {/* <Breadcrumbs aria-label="breadcrumb" separator=">">
        {finalArr.map((value, index) => {
          const last = index === finalArr.length - 1;

          const to = `/${finalArr.slice(0, index + 1).join("/")}`;

          return last ? (
            <Typography key={index}>{value}</Typography>
          ) : (
            <Link to={to} key={index} style={{ textDecoration: "none" }}>
              {" "}
              {value}
            </Link>
          );
        })}
      </Breadcrumbs> */}
      {/* <Breadcrumb>
        {finalArr.map((value, index) => {
          const last = index === finalArr.length - 1;

          const to = `/${finalArr.slice(0, index + 1).join("/")}`;

          return last ? (
            <p key={index}>
              <Breadcrumb.Item>{value}</Breadcrumb.Item>
            </p>
          ) : (
            <Link to={to} key={index} style={{ textDecoration: "none" }}>
              {" "}
              <Breadcrumb.Item>{value}</Breadcrumb.Item>
            </Link>
          );
        })}
      </Breadcrumb> */}
    </div>
  );
};

export default BreadcrumbsComponent;
