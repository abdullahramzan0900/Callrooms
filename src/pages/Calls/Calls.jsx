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

export default function Calls() {
  const [allInputData, setAllInputData] = React.useState({
    RoomNumber: "",
    Time: "",
    Role: "admin",
    callType: "",
    ProjectName: "",
    TakenBy: "",
  });
  const array = [
    {
      name: "RoomNumber",
      label: "Room Number",
      type: "number",
      value: allInputData?.RoomNumber,
    },
    {
      name: "Time",
      label: "Time",
      type: "time",
      value: allInputData?.Time,
    },
    {
      name: "role",
      label: "Role",
      type: "options",
      value: allInputData?.Role,
    },
    {
      name: "callType",
      label: "callType",
      type: "options",
      value: allInputData?.callType,
    },
    {
      name: "ProjectName",
      label: "ProjectName",
      type: "text",
      value: allInputData?.ProjectName,
    },
    {
      name: "TakenBy",
      label: "TakenBy",
      type: "text",
      value: allInputData?.TakenBy,
    },
  ];

  function handleChange(evt,val) {
console.log(evt.target,val,"value111")
    const value = evt.target.value;
    setAllInputData({
      ...allInputData,
      [evt.target.name]: value,
    });
  }
  console.log(allInputData, "allInputDataCalls");
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
        tablename="Calls"
        buttondata="Add Calls"
        formArray={array}
        formName="Calls"
        handlechange={handleChange}
      />
    </Layout>
  );
}
