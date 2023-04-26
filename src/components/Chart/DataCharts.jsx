import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FiUsers } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import {RiMenuUnfoldFill} from 'react-icons/ri';
import {MdMeetingRoom} from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';
import {AiOutlineHistory} from 'react-icons/ai';

import {FaThList} from 'react-icons/fa';

import { BsList} from 'react-icons/bs';

function DataCharts(){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));
      const array = [
        {
          data: "Calls",
          update: "Today",
          icon: <IoMdCall size={80} />,
          record:'20'
        },
        {
          data: "Rooms",
          update: "Total Rooms",
          icon: <MdMeetingRoom size={80} />,
          record:'8'
        },
        {
          data: "employees",
          update: "Total Employees",
          icon: <FiUsers size={80} />,
          record:'50'
        },
      ];
    return(
        <>
        
      <Box  sx={{ flexGrow: 1, marginBottom:"6rem", marginTop:"4rem" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {array.map((item, index) => (
            <Grid  item xs={3} sm={4} md={4} key={index}>
              <Item className="item_style" style={{}}>
                {item.data}
                <div className="main_div">
                  <div style={{}} className="icon_div">
                    {item.icon}
                  </div>
                  <div>
                    {item.data}
                    <h1>{item.record}</h1>
                  </div>
                </div>
                <div>{item.update}</div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
        </>
    )
}
export default DataCharts