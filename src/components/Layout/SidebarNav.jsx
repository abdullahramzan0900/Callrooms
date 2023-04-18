import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { MdMeetingRoom } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { AiOutlineHistory } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { FaThList } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import logo from "../../assets/Images/wcloudtekLogo.svg";
import "./style.css";
import { NavLink } from "react-router-dom";

function SidebarNav() {
  const { collapseSidebar } = useProSidebar();
  const arr = [
    {
      name: "Dashboard",
      Icon: <FaThList />,
      link: "/dashboard",
    },
    {
      name: "Rooms",
      Icon: <MdMeetingRoom />,
      link: "/rooms",
    },
    {
      name: "Employees",
      Icon: <FiUsers />,
      link: "/users",
    },
    {
      name: "Calls",
      Icon: <IoMdCall />,
      link: "/calls",
    },
    {
      name: "Call History",
      Icon: <AiOutlineHistory />,
      link: "/call-history",
    },
    {
      name: "Project",
      Icon: <BsList />,
      link: "/project",
    },
  ];

  return (
    <div className="side-bar">
      <Sidebar>
        <Menu>
          <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
          >
            {" "}
            <RiMenuUnfoldFill />
          </MenuItem>
        </Menu>
        <div className="coudtek_img">
          <img src={logo} alt="" />
        </div>
        <hr />

        <Menu>
          {arr.map((item, index) => {
            return (
              <NavLink to={item.link} key={index}>
                <MenuItem>
                  {item.Icon}
                  <span>{item.name}</span>
                </MenuItem>
              </NavLink>
            );
          })}
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidebarNav;