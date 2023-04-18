import React from "react";
import Header from "./Header";
import DashboardContent from "../../pages/Dashboard/DashboardContent";

export const ContentWrapper = () => {
  return (
    <div className="dashboard-wrapper-content">
      {/* <Header /> */}
      <DashboardContent/>
    </div>
  );
};

export default ContentWrapper;
