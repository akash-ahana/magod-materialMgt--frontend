import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaIcon from "react-icons/fa";
import * as GrIcon from "react-icons/gr";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
import * as SiIcon from "react-icons/si";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { BiFoodMenu } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";

export const customerSidebar = [
  
  {
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
  },
  {
    title: "Receipt",
    // path: "/customer",
    icon: <MdIcon.MdOutlineSummarize />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Customer Job Work",
        path: "/materialmanagement/receipt/customerjobwork",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      {
        title: "Purchase",
        path: "/materialmanagement/receipt/purchase",
        icon: <AiIcons.AiOutlineInfoCircle />,
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
        path: "/materialmanagement/return/customerjobwork",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      {
        title: "Purchase  Planned for future",
        path: "/materialmanagement/return/purchaseplannedforfuture",
        icon: <AiIcons.AiOutlineInfoCircle />,
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
      },
      {
        title: "ProfileCutting",
        path: "/materialmanagement/shopfloorissue/profilecutting",

        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      {
        title: "IV List Service",
        path: "/materialmanagement/shopfloorissue/IVListservice",

        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      {
        title: "IV List Profile Cutting",
        path: "/materialmanagement/shopfloorissue/IVListprofilecutting",

        icon: <AiIcons.AiOutlineInfoCircle />,
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
      },
      {
        title: " Location List",
        path: "/materialmanagement/storemanagement/locationlist",
        icon: <AiIcons.AiOutlineInfoCircle />,
      },
      {
        title: " Stock",
        path: "/materialmanagement/storemanagement/stock",
        icon: <AiIcons.AiOutlineInfoCircle />,
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
