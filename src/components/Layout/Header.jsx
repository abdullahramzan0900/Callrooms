// import React, { useEffect, useState } from 'react'
// import {AiTwotoneHome} from 'react-icons/ai';
// import { useLocation } from 'react-router-dom';

// const Header = () => {
//   const location=useLocation();
// const [pathname,setpathname]=useState();
  
  
//   useEffect(()=>{   
//    var appId = location.pathname.split('/')[1];
//    console.log(appId)
//    setpathname(appId)
//   })
//   return (
//     <div className='header'>
//       <div className='left-sec'>
//         <span><AiTwotoneHome/> / {pathname}</span>
//         <h3>{pathname }</h3>
//       </div>
//       <div className='right-sec'>
//         <span>A</span>
//       </div>
//     </div>
//   )
import React, { useEffect, useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { RiMenuUnfoldFill } from "react-icons/ri";



const Header = ({ collapsed, toggleCollapse }) => {
  const location = useLocation();
  const [pathname, setPathname] = useState();

  useEffect(() => {
    var appId = location.pathname.split("/")[1];
    console.log(appId);
    setPathname(appId);
  }, [location]);
  console.log(collapsed,"aaa")
  return (
    <div className="header">
      <div className="left-sec">
{/*    
        <span className="toggle-button" onClick={() =>{

          
          toggleCollapse(!collapsed)
     }}
          >
          <RiMenuUnfoldFill />
        </span>  */}
        <span>  
          <AiTwotoneHome /> / {pathname}
        </span>
        <h3>{pathname}</h3>
      </div>
 
      <span className="toggle-button" onClick={() =>{

          
toggleCollapse(!collapsed)
}}
>
<RiMenuUnfoldFill />
</span> 
      <div className="right-sec">
        <span>A</span>
      </div>
    </div>
  );
}

export default Header