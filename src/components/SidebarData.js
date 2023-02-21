import React from "react";
import * as AiIcons from "react-icons/ai";
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
                icon: <AiIcons.AiOutlineForward />,
              },
              {
                title: "Draft RV list",
                path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

                icon: <AiIcons.AiOutlineDribbble />,
              },
              {
                title: "Open RV LIST",
                path: "/materialmanagement/receipt/customerjobwork/parts/openrvlist",
                icon: <AiIcons.AiOutlineOrderedList />,
              },
              {
                title: "Closed RV LIST",
                path: "/materialmanagement/receipt/customerjobwork/parts/closedrvlist",
                icon: <AiIcons.AiOutlineClose />,
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

                icon: <AiIcons.AiOutlineForward />,
              },
              {
                title: "Draft RV list",
                path: "/materialmanagement/receipt/customerjobwork/units/draftrvlist",

                icon: <AiIcons.AiOutlineDribbble />,
              },
              {
                title: "Open RV LIST",
                path: "/materialmanagement/receipt/customerjobwork/units/openrvlist",

                icon: <AiIcons.AiOutlineOrderedList />,
              },
              {
                title: "Closed RV LIST",
                path: "/materialmanagement/receipt/customerjobwork/units/closedrvlist",

                icon: <AiIcons.AiOutlineClose />,
              },
            ],
          },
          {
            title: "Sheets and Others",
            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/new",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Draft RV list",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/draftrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Open RV LIST",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/openrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Closed RV LIST",
                path: "/materialmanagement/receipt/customerjobwork/sheetsandothers/closedrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
            ],
          },
        ],
      },
      {
        title: "Purchase",
        icon: <AiIcons.AiOutlineInfoCircle />,
        subNav: [
          {
            title: "Parts",

            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/parts/new",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Draft RV list",
                path: "/materialmanagement/receipt/purchase/parts/draftrvlist",

                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Open RV LIST",
                path: "/materialmanagement/receipt/purchase/parts/openrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Closed RV LIST",
                path: "/materialmanagement/receipt/purchase/parts/closedrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
            ],
          },
          {
            title: "Units",
            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/units/new",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Draft RV list",
                path: "/materialmanagement/receipt/purchase/units/draftrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Open RV LIST",
                path: "/materialmanagement/receipt/purchase/units/openrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Closed RV LIST",
                path: "/materialmanagement/receipt/purchase/units/closedrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
            ],
          },
          {
            title: "Others",
            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/others/new",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Draft RV list",
                path: "/materialmanagement/receipt/purchase/others/draftrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Open RV LIST",
                path: "/materialmanagement/receipt/purchase/others/openrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "Closed RV LIST",
                path: "/materialmanagement/receipt/purchase/others/closedrvlist",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
            ],
          },
          {
            title: "Gas",
            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/receipt/purchase/gas/new",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
            ],
          },
        ],
      },
      {
        title: "Branch Transfer",
        path: "/materialmanagement/receipt/branchtransfer",
        icon: <AiIcons.AiOutlineInfoCircle />,
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
        icon: <AiIcons.AiOutlineInfoCircle />,
        subNav: [
          {
            title: "New",
            // path: "/materialmanagement/return/returncustjobwork/new",
            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [
              {
                title: "New",
                path: "/materialmanagement/return/returncustjobwork/new",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
              {
                title: "New",
                path: "/materialmanagement/return/returncustjobwork/new",
                icon: <AiIcons.AiOutlineInfoCircle />,
              },
            ],
          },
          {
            title: "Pending Dispatch List",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",
            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [{}],
          },
          {
            title: "Customer IV List",
            // path: "/materialmanagement/receipt/customerjobwork/parts/openrvlist",
            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [{}],
          },
          {
            title: "Sales IV List",
            // path: "/materialmanagement/receipt/customerjobwork/parts/closedrvlist",
            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [{}],
          },
          {
            title: "Cancelled",
            // path: "/materialmanagement/receipt/customerjobwork/parts/closedrvlist",
            icon: <AiIcons.AiOutlineInfoCircle />,
            subNav: [{}],
          },
        ],
      },
      {
        title: "Purchase  Planned for future",
        // path: "/materialmanagement/return/purchaseplannedforfuture",
        icon: <AiIcons.AiOutlineInfoCircle />,
        subNav: [{}],
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
        path: "/materialmanagement/shopfloorissue/service",
        icon: <AiIcons.AiOutlineInfoCircle />,
        subNav: [
          {
            title: "Parts",
            // path: "/materialmanagement/receipt/customerjobwork/parts/new",
            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "Units",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
          },
        ],
      },
      {
        title: "ProfileCutting",
        path: "/materialmanagement/shopfloorissue/profilecutting",

        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      {
        title: "IV List Service",
        // path: "/materialmanagement/shopfloorissue/IVListservice",

        icon: <AiIcons.AiOutlineInfoCircle />,
        subNav: [
          {
            title: "Issued",
            // path: "/materialmanagement/receipt/customerjobwork/parts/new",
            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "Closed",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
          },
        ],
      },
      {
        title: "IV List Profile Cutting",
        path: "/materialmanagement/shopfloorissue/IVListprofilecutting",

        icon: <AiIcons.AiOutlineInfoCircle />,
        subNav: [
          {
            title: "Current",
            // path: "/materialmanagement/receipt/customerjobwork/parts/new",
            icon: <AiIcons.AiOutlineInfoCircle />,
          },
          {
            title: "Closed",
            // path: "/materialmanagement/receipt/customerjobwork/parts/draftrvlist",

            icon: <AiIcons.AiOutlineInfoCircle />,
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
