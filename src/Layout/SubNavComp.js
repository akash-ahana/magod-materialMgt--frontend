import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 35px;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    background: #707075;
    border-left: 4px solid #707075;
    cursor: pointer;
    color: #ffffff;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 8px;
`;



const DropdownLink = styled.div`
  height: 35px;
  /* padding: 0px 0px 0px 20px; */
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
  &:hover {
    background-color: #707075;
    cursor: pointer;
    color: #ffffff;
  }
`;

const IconNav = styled.div `
padding-left: 5px;
font-size: 1.2rem;

`

const SubMenuComp = ({ item ,sidebar}) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  useEffect(() => {
    if (!sidebar) {
    setSubnav(false)
  }
},[sidebar])

  return (
    <>
      <NavLink    className={({ isActive }) => (isActive && item.path && !subnav ? 'active-link-url' : 'link-default' )} to={item.path}>
        {
          <SidebarLink onClick={item.subNav && showSubnav}>
          <div className="side-nav-main-container" >
            <div className="side-nav-main-icon">{item.icon} </div> 
            <SidebarLabel className="side-nav-main-title">{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
      //       :  <IconNav>
      //  { item.icon}

      //     </IconNav>
            
      }  
          

   
      </NavLink>

      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <NavLink to={item.path} key={index} className={({ isActive }) => (isActive && item.path && subnav ? 'active-link-url  side-nav-sub-menu' : 'link-default side-nav-sub-menu' )} >
              <DropdownLink>
              <div className='sub-menu-icon'>  {item.icon}</div>
                <SidebarLabel className="sub-menu-label">{item.title}</SidebarLabel>
              </DropdownLink>
            </NavLink>
          );
        })}
    </>
  );
};

export default SubMenuComp;
