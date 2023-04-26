import React from 'react'
import { useState, useEffect } from 'react'
import SidebarNav from './SidebarNav'
import { ProSidebarProvider } from 'react-pro-sidebar'
import './style.css'

import Header from './Header'
import { Grid } from '@mui/material'


const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
   setCollapsed(!collapsed)
  };

  console.log(collapsed,'aaa')

  return (
    <div className='dashboard-content'>
      <ProSidebarProvider>
        <Grid container spacing={10}>
          <Grid className={`layout_sidenavabar ${collapsed ? 'layout_sidenavabar--collapsed' : ''}`} item xs={2} md={2}>
            <SidebarNav collapsed={collapsed} toggleCollapse={toggleCollapse} />
          </Grid>
          <Grid item xs={10} md={10}>
            <Header collapsed={collapsed} toggleCollapse={toggleCollapse} />
            <main>
              {children}
            </main>
          </Grid>
        </Grid>
      </ProSidebarProvider>
    </div>
  )
}

export default Layout
