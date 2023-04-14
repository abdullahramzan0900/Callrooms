import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import Users from '../../pages/Users/Users'
import Calls from '../../pages/Calls/Calls'
import { DataGridTable } from '../DataGridTable'
import DashboardContent from '../../pages/Dashboard/DashboardContent'


export const ContentWrapper = ({Component}) => {
  return (
    <div className='dashboard-wrapper-content'>
      <Header />
        <main>
          {/* <DataGridTable/> */}
 <DashboardContent/>
        </main>
    </div>
  )
}

export default ContentWrapper