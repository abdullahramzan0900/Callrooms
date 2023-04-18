import * as React from "react";
import { DataGridTable } from "../../components/DataGridTable";
import Layout from "../../components/Layout/Layout";

const columns = [
  { field: "RoomNumber", headerName: "RoomNumber", width: 160 },
  { field: "Time", headerName: "Time", width: 160 },
  { field: "CallType", headerName: "CallType", width: 160 },
  {
    field: "ProjectName",
    headerName: "ProjectName",
    width: 160,
  },
  { field: "TakenBy", headerName: "TakenBy", width: 160 },
  {
    field: "click",
    headerName: "Click",
    type: <button /> /*this field stores the buttons*/,
    width: 90,
  },
];

const rows = [
  {
    id: 1,
    RoomNumber: "Snow",
    Time: "Jon",
    ProjectName: "aaa",
    CallType: "sss",
    TakenBy: "aaa",
    click: "delete",
  },
  {
    id: 2,
    RoomNumber: "Lannister",
    Time: "Cersei",
    ProjectName: "aa",
    CallType: "sss",
    TakenBy: "aaa",
  },
  {
    id: 3,
    RoomNumber: "Lannister",
    Time: "Jaime",
    ProjectName: 45,
    CallType: "sss",
    TakenBy: "aaa",
  },
  {
    id: 4,
    RoomNumber: "Stark",
    Time: "Arya",
    ProjectName: 16,
    CallType: "sss",
    TakenBy: "aaa",
  },
  {
    id: 5,
    RoomNumber: "Targaryen",
    Time: "Daenerys",
    ProjectName: "aa",
    CallType: "sss",
    TakenBy: "aaa",
  },
];
export default function CallHistory() {
  return (
    <Layout>
      <DataGridTable
        rows={rows}
        columns={columns}
        pagination={true}
        checkboxSelection={false}
        pageSize={5}
        pageSizeOptions={[5, 10, 15]}
        className="custom-data-grid"
        tablename="Calls History"
   
      />
    </Layout>
  );
}
