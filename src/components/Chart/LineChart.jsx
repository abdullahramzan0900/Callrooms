import React from "react";
import { useRef } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FiUsers } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import PieChart from "../../components/Chart/PieChart";
import {RiMenuUnfoldFill} from 'react-icons/ri';
import {MdMeetingRoom} from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';
import {AiOutlineHistory} from 'react-icons/ai';

import {FaThList} from 'react-icons/fa';
import { BsList} from 'react-icons/bs';
import DataCharts from "../../components/Chart/DataCharts";

function LineChart(){
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const chart = new Chart(canvas, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First dataset",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "white",
              color: "white",
              borderColor: "white",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "white",
              pointBackgroundColor: "white",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
    
              data: [65, 59, 80, 81, 56, 55, 40],
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "white", // Set the font color to white
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                },
              },
            ],
          },
        },
      });
    
      return () => {
        chart.destroy();
      };
    }, []);
    const array=[
      {
        data:'Rooms'
      },
      {
        data:"Projects"
      }
    ]
    
    return(
        <>
        <div className="line-graph">
          <div className="canvas">
            <canvas ref={canvasRef} />
            <div className="canvas-footer">
                <h3>Projects</h3>
                <p>  Performance</p>
            </div>
          </div>
        </div>

        </>
    )
}
export default LineChart;