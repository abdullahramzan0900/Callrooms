import React from 'react'
import Layout from '../../components/Layout/Layout'
import SidebarNav from '../../components/Layout/DashboardContent/SidebarNav'
import ContentWrapper from '../../components/Layout/ContentWrapper'
import { ProSidebarProvider } from 'react-pro-sidebar'
import './style.css'
// import ContentWrapper from '../../components/Layout/ContentWrapper'

const Dashboard = () => {
  return (
    <Layout>
        <div className='dashboard-content'>
          <ProSidebarProvider>
            <SidebarNav />
          </ProSidebarProvider>
          <ContentWrapper/>
        </div>
    </Layout>
  )
}

export default Dashboard