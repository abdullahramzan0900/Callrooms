import React, { useRef } from 'react';
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FiUsers } from "react-icons/fi";
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import PieChart from '../../components/Chart/PieChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const array = [
  {
    data: "Booking",
    update: "+55% than lask week",
    icon: <FiUsers size={80} />,
  },
  {
    data: "Rooms",
    update: "+55% than lask week",
    icon: <FiUsers size={80} />,
  },
  {
    data: "employees",
    update: "+55% than lask week",
    icon: <FiUsers size={80} />,
  },
];

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      };





export default function DashboardContent() {
    const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <>

    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        >
        {array.map((item, index) => (
          <Grid item xs={3} sm={4} md={4} key={index}>
            <Item className="item_style" style={{}}>
              {item.data}
              <div className="main_div">
                <div style={{}} className="icon_div">
                  {item.icon}
                </div>
                <div>
                  {item.data}
                  <h1>281</h1>
                </div>
              </div>
              <div>{item.update}</div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
     <div style={{
      width:"100%",
      display:'flex',
      justifyContent:'space-between'
   

     }}>
        <div style={{
            width:'60%'
        }}>
<h1 style={{
textAlign:'center'
}}>Daily Call data</h1>
     <canvas ref={canvasRef} />
        </div>
        <div style={{
            width:'30%'
        }}>

     <PieChart/>
        </div>
   </div>
        </>
  );
}
