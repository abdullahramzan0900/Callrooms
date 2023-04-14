import * as React from 'react';
import { DataGridTable } from "../../components/DataGridTable";
import ContentWrapper from '../../components/Layout/ContentWrapper';
import SidebarNav from '../../components/Layout/DashboardContent/SidebarNav';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Layout from '../../components/Layout/Layout';

const columns = [
  { field: 'ProjectName', headerName: 'ProjectName', width: 160 },
  { field: 'ClientName', headerName: 'ClientName', width: 160 },
  { field: 'ProjectType', headerName: 'ProjectType', width: 160 },
  {
    field: 'ProjectName',
    headerName: 'ProjectName',
    width: 160
  },
  { field: 'dailyScrum', headerName: 'dailyScrum', width: 160 },
];

const rows = [
  { id: 1, ProjectName: 'Snow', ClientName: 'Jon', ProjectType: 'aaa',ProfiletName:'sss',dailyScrum:'aaa' },
  { id: 2, ProjectName: 'Lannister', ClientName: 'Cersei', ProjectType:"aa",ProjectName:'sss',dailyScrum:'aaa' },
  { id: 3, ProjectName: 'Lannister', ClientName: 'Jaime', ProjectType: 45,ProjectName:'sss',dailyScrum:'aaa' },
  { id: 4, ProjectName: 'Stark', ClientName: 'Arya', ProjectType: 16 ,ProjectName:'sss',dailyScrum:'aaa' },
  { id: 5, ProjectName: 'Targaryen', ClientName: 'Daenerys', ProjectType: null,ProjectName:'sss',dailyScrum:'aaa' },
  { id: 6, ProjectName: 'Melisandre', ClientName: null, ProjectType: 150,ProjectName:'sss',dailyScrum:'aaa' },
  { id: 7, ProjectName: 'Clifford', ClientName: 'Ferrara', ProjectType: 44 ,ProjectName:'sss',dailyScrum:'aaa'},
  { id: 8, ProjectName: 'Frances', ClientName: 'Rossini', ProjectType: 36 ,ProjectName:'sss',dailyScrum:'aaa'},
  { id: 9, ProjectName: 'Roxie', ClientName: 'Harvey', ProjectType: 65,ProjectName:'sss',dailyScrum:'aaa' },
];

export default function Project() {
  return (
    <>
    <DataGridTable rows={rows}
    columns={columns}
    pagination={true}
    checkboxSelection={false} 
    pageSize= {5}
    pageSizeOptions={[5,10,15]}
    className="custom-data-grid"/>
   

    </>
  );
}