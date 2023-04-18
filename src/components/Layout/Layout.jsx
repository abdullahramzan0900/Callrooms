import React from 'react'
import SidebarNav from './SidebarNav'
import { ProSidebarProvider } from 'react-pro-sidebar'
import './style.css'
import Header from './Header'
import { Grid } from '@mui/material'

const Layout = ({ children }) => {
  return (
    <div className='dashboard-content'>
      <ProSidebarProvider>
        <Grid container spacing={10}>
          <Grid item xs={2} md={2}>
            <SidebarNav />
          </Grid>
          <Grid item xs={10} md={10}>
            <Header />
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