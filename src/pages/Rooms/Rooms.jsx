import * as React from "react";
import { DataGridTable } from "../../components/DataGridTable";
import Layout from "../../components/Layout/Layout";

const columns = [
  { field: "RoomNumber", headerName: "RoomNumber", width: 160 },
  { field: "RoomType", headerName: "RoomType", width: 160 },
  { field: "RoomCapacity", headerName: "RoomCapacity", width: 160 },
  {
    field: "status",
    headerName: "status",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    RoomNumber: "4",
    RoomType: "schedule",
    RoomCapacity: "aaa",
    status: "aaaa",
  },
  {
    id: 2,
    RoomNumber: "5",
    RoomType: "schedule",
    RoomCapacity: "aaa",
    status: "booked",
  },
  {
    id: 3,
    RoomNumber: "120",
    RoomType: "schedule",
    RoomCapacity: "aa",
    status: "booked",
  },
  {
    id: 4,
    RoomNumber: "8",
    RoomType: "schedule",
    RoomCapacity: "bbbb",
    status: "active",
  },
];
// const array=[
//   {
//     name:'ProjectName',
//     type:'text'
//   },
//   {
//     name:'ClientName',
//     type:'text'
//   },
//   {
//     name:'ProjectType',
//     type:'text'
//   },
//   {
//     name:'Dailyscrum',
//     type:'text'
//   }
// ]
export default function Rooms() {
  const [allInputData,setAllInputData]=React.useState({
    RoomNumber: "",
    RoomType: "",
    RoomCapacity: "",
   

  });
  const array=[
    {
      name:'RoomNumber',
      label: 'Room Number',
      type:'number',
      value: allInputData?.RoomNumber,
    },
    {
      name:'RoomType',
      label: 'Room Type',
      type:'options',
      value: allInputData?.RoomType,
    },

    {
      name:'RoomCapacity',
      label: 'Room Capacity',
      type:'text',
      value: allInputData?.RoomCapacity,
    }
  ]

  function handleChange(evt) {
    const value = evt.target.value;
    setAllInputData({
      ...allInputData,
      [evt.target.name]: value
    });
  }

  console.log(allInputData,"allInputDataRooms")

  return (
    <Layout>
      <div className="dashboard-wrapper-content">
        <main>
          {/* <DataGridTable/> */}
          <DataGridTable
            rows={rows}
            columns={columns}
            pagination={true}
            checkboxSelection={false}
            pageSize={5}
            pageSizeOptions={[5, 10, 15]}
            className="custom-data-grid"
            tablename="Rooms"
            buttondata="Add Room"
            formArray={array}
            formName="Rooms"
            handlechange={handleChange}
          />
        </main>
      </div>
    </Layout>
  );
}
