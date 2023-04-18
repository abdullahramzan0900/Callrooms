import React from "react";
import PieChart from "../../components/Chart/PieChart";
import DataCharts from "../../components/Chart/DataCharts";
import LineChart from "../../components/Chart/LineChart";
import './style.css'

export default function DashboardContent() {
  return (
    <>
      <DataCharts/>
      <div className="calls-graph">
          <LineChart/>
        <div className="line-graph">
          <div className="canvas">
            <div className="pi-chart">
                <PieChart/>
            </div>
            <div className="canvas-footer">
                <h3>Website Views</h3>
                <p>Last Campaign Performance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
