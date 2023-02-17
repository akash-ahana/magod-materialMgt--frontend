import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";


const LastNest = ({lastNest}) => {
  return <>
   <NavLink to={lastNest.path}>
   <li className="submenu_link">
                      <div className="submenu_links">
                        <div className="icon">{lastNest.icon}</div>
                        <div className="link_text">{lastNest.title}</div>
                      </div>
                      
                    </li>
                    </NavLink>
  </>
}

export default LastNest