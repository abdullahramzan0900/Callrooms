import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import './index.css'
import { DataGridTable } from "../../components/DataGridTable";
import ContentWrapper from '../../components/Layout/ContentWrapper';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'FullName', headerName: 'FullName', width: 130 },
    { field: 'Email', headerName: 'Email', width: 130 },
    {
      field: 'Role',
      headerName: 'Role',
      width: 90,
    },
    {
      field: 'ProjectName',
      headerName: 'ProjectName',
      width: 130,
    }
];

const rows = [
    { id: 1,FullName: 'Snow', Email: 'Jon', Role: 'aaa',ProjectName:'sss' },
    { id: 2, FullName: 'Lannister', Email: 'Cersei', Role:"aa",ProjectName:'sss' },
    { id: 3, FullName: 'Lannister', Email: 'Jaime', Role: 45,ProjectName:'sss' },
    { id: 4, FullName: 'Stark', Email: 'Arya', Role: 16 ,ProjectName:'sss' },
    { id: 5, FullName: 'Targaryen', Email: 'Daenerys', Role: null,ProjectName:'sss' },
    { id: 6, FullName: 'Melisandre', Email: null, Role: 150,ProjectName:'sss' },
    { id: 7, FullName: 'Clifford', Email: 'Ferrara', Role: 44 ,ProjectName:'sss'},
    { id: 8, FullName: 'Frances', Email: 'Rossini', Role: 36 ,ProjectName:'sss'},
    { id: 9, FullName: 'Roxie', Email: 'Harvey', Role: 65,ProjectName:'sss' },
];

const Users = () =>{
  return (
    
    <DataGridTable rows={rows}
    columns={columns}
    pagination={true}
    checkboxSelection={false} 
    pageSize= {5}
    pageSizeOptions={[5,10,15]}
    className="custom-data-grid"/>

  );
}

export default function abc() {
  return (
    <div><ContentWrapper Component={Users}/></div>
  )
}