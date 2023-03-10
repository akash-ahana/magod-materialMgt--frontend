import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaIcon from "react-icons/fa";
import * as GrIcon from "react-icons/gr";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
import * as SiIcon from "react-icons/si";
import * as MdNewLabel from "react-icons/md";

import { VscTypeHierarchySub } from "react-icons/vsc";
import { BiFoodMenu } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";

export const customerSidebar = [
  /* {
    title: "Setup",
    // path: "/customer",
    icon: <BsIcon.BsListTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Server",
        path: "/materialmanagement/server",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      
    ],
  },*/
  {
    title: "Receipt",
    // path: "/customer",
    icon: <MdIcon.MdOutlineSummarize />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Customer Job Work",
        // path: "/materialmanagement/receipt/customerjobwork",
        icon: <AiIcons.AiFillCustomerService />,
        subNav: [
          {
            title: "Parts",
            icon: <AiIcons.AiOutlinePartition />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/customerjobwork/parts/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/customerjobwork/parts/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/customerjobwork/parts/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Units",
            icon: <AiIcons.AiOutlineDeploymentUnit />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/customerjobwork/units/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/customerjobwork/units/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/customerjobwork/units/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/customerjobwork/units/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Sheets and Others",
            icon: <MdIcon.MdOutlineOtherHouses />,

            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
        ],
      },
      {
        title: "Purchase",
        // icon: <AiIcons.AiOutlineInfoCircle />,
        icon: <BiIcons.BiPurchaseTag />,
        subNav: [
          {
            title: "Parts",

            icon: <AiIcons.AiOutlinePartition />,

            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/parts/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/purchase/parts/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/purchase/parts/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/purchase/parts/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Units",
            icon: <AiIcons.AiOutlineDeploymentUnit />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/units/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/purchase/units/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/purchase/units/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/purchase/units/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Others",
            icon: <MdIcon.MdOutlineOtherHouses />,

            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/others/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Draft RV List",
                path: "/materialmanagement/receipt/purchase/others/draftrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Open RV List",
                path: "/materialmanagement/receipt/purchase/others/openrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
              {
                title: "Closed RV List",
                path: "/materialmanagement/receipt/purchase/others/closedrvlist",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
          {
            title: "Gas",
            icon: <BiIcons.BiGasPump />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/gas/new",
                icon: <AiIcons.AiOutlineArrowRight />,
              },
            ],
          },
        ],
      },
      {
        title: "Branch Transfer",
        path: "/materialmanagement/receipt/branchtransfer",
        icon: <AiIcons.AiOutlineBranches />,
      },
    ],
  },
  {
    title: "Return",
    // path: "/customer",
    icon: <SiIcon.SiMaterialdesignicons />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Customer Job Work",
        // path: "/materialmanagement/return/customerjobwork",
        icon: <AiIcons.AiFillCustomerService />,
        subNav: [
          {
            title: "New",
            path: "/materialmanagement/return/customerjobwork/new",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Pending Dispatch List",
            path: "/materialmanagement/return/customerjobwork/pendingdispatchlist",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Customer IV List",
            path: "/materialmanagement/return/customerjobwork/customerivlist",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Sales IV List",
            path: "/materialmanagement/return/customerjobwork/salesivlist",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Cancelled",
            path: "/materialmanagement/return/customerjobwork/cancelled",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
      {
        title: "Purchase  Planned for future",
        path: "/materialmanagement/return/purchaseplannedforfuture",
        icon: <BiIcons.BiPurchaseTag />,
      },
    ],
  },
  {
    title: "Shop Floor Issue",
    // path: "/customer",
    icon: <BsIcon.BsListTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Service",
        // path: "/materialmanagement/shopfloorissue/service",
        icon: <MdIcon.MdMiscellaneousServices />,
        subNav: [
          {
            title: "Parts",
            path: "/materialmanagement/shopfloorissue/service/parts",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Units",
            path: "/materialmanagement/shopfloorissue/service/units",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
      {
        title: "ProfileCutting",
        path: "/materialmanagement/shopfloorissue/profilecutting",
        icon: <BiIcons.BiCut />,
      },
      {
        title: "IV List Service",
        icon: <MdIcon.MdMiscellaneousServices />,
        subNav: [
          {
            title: "Issued",
            path: "/materialmanagement/shopfloorissue/ivlistservice/issued",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Closed",
            path: "/materialmanagement/shopfloorissue/ivlistservice/closed",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
      {
        title: "IV List Profile Cutting",
        icon: <BiIcons.BiCut />,
        subNav: [
          {
            title: "Current",
            path: "/materialmanagement/shopfloorissue/ivlistprofilecutting/current",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
          {
            title: "Closed",
            path: "/materialmanagement/shopfloorissue/ivlistprofilecutting/closed",
            icon: <AiIcons.AiOutlineArrowRight />,
          },
        ],
      },
    ],
  },
  {
    title: "Shop Floor Returns",
    // path: "/customer",
    icon: <BsIcon.BsListTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Pending IV List",
        path: "/materialmanagement/shoopfloorreturns/pendinglist",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
    ],
  },
  {
    title: "Reports",
    // path: "/customer",
    icon: <BsIcon.BsListTask />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Customer",
        path: "/materialmanagement/reports/customer",
        icon: <AiIcons.AiOutlineInfoCircle />,
        subNav: [
          {
            title: "Stock Report",
            // path: "/materialmanagement/receipt/customerjobwork/parts/new",
            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "Parts Reports",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
          },
        ],
      },
      {
        title: "Daily Report",
        path: "/materialmanagement/reports/dailyreports",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      {
        title: " Monthly Report",
        path: "/materialmanagement/reports/monthlyreports",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
    ],
  },
  {
    title: "Store Managemen",
    // path: "/customer",
    icon: <SiIcon.SiMaterialdesignicons />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Resize Sheets        ",
        path: "/materialmanagement/storemanagement/resizesheets",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      {
        title: "Move Store",
        path: "/materialmanagement/storemanagement/movestore",
        icon: <AiIcons.AiOutlineInfoCircle />,
        subNav: [
          {
            title: "Customer",
            // path: "/materialmanagement/receipt/customerjobwork/parts/new",
            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "Change Location",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "All",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
          },
        ],
      },
      {
        title: " Location List",
        path: "/materialmanagement/storemanagement/locationlist",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      {
        title: " Stock",
        // path: "/materialmanagement/storemanagement/stock",
        icon: <AiIcons.AiOutlineInfoCircle />,
        subNav: [
          {
            title: "Stock List",
            // path: "/materialmanagement/receipt/customerjobwork/parts/new",
            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "Stock Arrival",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "Stock Dispatch",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "Stock Ledger",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "Opening Stock",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
          },
        ],
      },
      {
        title: " Location Stock        ",
        path: "/materialmanagement/storemanagement/locationstock",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
    ],
  },
];

export const adminSidebar = [
  {
    title: "Access",
    icon: <MdIcon.MdOutlineSecurity />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Menu Roles",
        path: "/admin/menuRoles",
        icon: <AiIcons.AiOutlineMenuFold />,
      },
    ],
  },
  {
    title: "Users",
    icon: <FaIcon.FaUsers />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Roles",
        path: "/admin/roles",
        icon: <VscTypeHierarchySub />,
      },
      {
        title: "Menus",
        path: "/admin/menus",
        icon: <BiFoodMenu />,
      },
      {
        title: "Users",
        path: "/admin/users",
        icon: <HiUsers />,
      },
    ],
  },
];
