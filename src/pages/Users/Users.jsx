import * as React from "react";
import "./index.css";
import { DataGridTable } from "../../components/DataGridTable";
import Layout from "../../components/Layout/Layout";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "FullName", headerName: "FullName", width: 130 },
  { field: "Email", headerName: "Email", width: 130 },
  {
    field: "Role",
    headerName: "Role",
    width: 200,
  },
  {
    field: "ProjectName",
    headerName: "ProjectName",
    width: 130,
  },
];

const rows = [
  { id: 1, FullName: "Snow", Email: "Jon", Role: "aaa", ProjectName: "sss" },
  {
    id: 2,
    FullName: "Lannister",
    Email: "Cersei",
    Role: "aa",
    ProjectName: "sss",
  },
  {
    id: 3,
    FullName: "Lannister",
    Email: "Jaime",
    Role: 45,
    ProjectName: "sss",
  },
  { id: 4, FullName: "Stark", Email: "Arya", Role: 16, ProjectName: "sss" },
  {
    id: 5,
    FullName: "Targaryen",
    Email: "Daenerys",
    Role: null,
    ProjectName: "sss",
  },
  { id: 6, FullName: "Melisandre", Email: null, Role: 150, ProjectName: "sss" },
  {
    id: 7,
    FullName: "Clifford",
    Email: "Ferrara",
    Role: 44,
    ProjectName: "sss",
  },
  {
    id: 8,
    FullName: "Frances",
    Email: "Rossini",
    Role: 36,
    ProjectName: "sss",
  },
  { id: 10, FullName: "Roxie", Email: "Harvey", Role: 65, ProjectName: "sss" },
  { id: 11, FullName: "Roxie", Email: "Harvey", Role: 65, ProjectName: "sss" },
  { id: 12, FullName: "Roxie", Email: "Harvey", Role: 65, ProjectName: "sss" },
  { id: 13, FullName: "Roxie", Email: "Harvey", Role: 65, ProjectName: "sss" },
  { id: 14, FullName: "Roxie", Email: "Harvey", Role: 65, ProjectName: "sss" },
  { id: 15, FullName: "Roxie", Email: "Harvey", Role: 65, ProjectName: "sss" },
  { id: 16, FullName: "Roxie", Email: "Harvey", Role: 65, ProjectName: "sss" },
];

const Users = () => {
  return (
    <Layout>
      <DataGridTable
        rows={rows}
        columns={columns}
        pagination={true}
        checkboxSelection={false}
        pageSize={9}
        pageSizeOptions={[9, 15, 20]}
        className="custom-data-grid"
      tablename="Employees Table"
      buttondata="Add Employees"
      />
    </Layout>
  );
};

export default Users
