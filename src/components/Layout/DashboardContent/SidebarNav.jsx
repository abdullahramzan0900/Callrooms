import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import {RiMenuUnfoldFill} from 'react-icons/ri';
import {MdMeetingRoom} from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';
import {AiOutlineHistory} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {FaThList} from 'react-icons/fa';
import { BsList} from 'react-icons/bs';
import logo from '../../../assets/Images/wcloudtekLogo.svg'
import './style.css'



function SidebarNav() {
  const { collapseSidebar } = useProSidebar();
  const arr=[
    {
      name:'Dashboard',
      Icon:<FaThList/>
      // Icon:MeetingRoomIcon
    },
    {
      name:'Rooms',
      Icon:<MdMeetingRoom/>
      // Icon:MeetingRoomIcon
    },
    {
      name:'Employees',
      Icon:<FiUsers/>
    },
    {
      name:'Calls',
      Icon:<IoMdCall/>

    },
    {
      name:'Call History',
      Icon:<AiOutlineHistory/>
    },
    {
      name:'Project',
      Icon:<BsList/>
    }
  ]

  return (
    <div className='side-bar'>
      <Sidebar>
        <Menu>
          <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <RiMenuUnfoldFill />
          </MenuItem>
        </Menu>
      <div className='coudtek_img' >
          <img src={logo} alt="" />
      </div>
      <hr />
   
        <Menu>
          {
            arr.map((item, index)=>{
              return(
              <MenuItem key={index}>
                {item.Icon}
                <span>{item.name}</span>
              </MenuItem>
              )
            })
          }
          {/* <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem>Home</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Contacts</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Calendar</MenuItem> */}
        </Menu>
      </Sidebar>
      <main>
   
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
        </h1>
      </main>
    </div>
  );
}

export default SidebarNav;