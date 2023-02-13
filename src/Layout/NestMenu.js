import React, { useState } from 'react'
import LastNest from './LastNest'

const NestMenu = ({nestnav}) => {


    const [nest, setNest] = useState(false);
    const showSubnav1 = () => setNest(!nest);
    

  return <>
   <li className="submenu_link"  onClick={()=>{nestnav.subNav && showSubnav1()}}>
                      <div className="submenu_links">
                        <div className="icon">{nestnav.icon}</div>
                        <div className="link_text">{nestnav.title}</div>
                      </div>
                      
                    </li>
                    { nest &&  nestnav.subNav !== undefined &&
                    nestnav?.subNav.length > 0 &&
                    nestnav.subNav.map((lastNest, i) => {
                      return ( <LastNest   key={i} lastNest={lastNest} />)
                       
                        
                    })}
  </>
}

export default NestMenu