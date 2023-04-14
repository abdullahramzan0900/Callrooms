import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import './index.css'

export const DataGridTable = ({
  rows,
  columns,
  pagination,
  checkboxSelection,
  className,
  pageSizeOptions,
  pageSize,
}) => {
  return (
 
      <div style={{ height: 400, width: "50%" }}>
        <DataGrid
          slotProps={{
            columnMenu: {
              style: { background: "blue" },
            },
          }}
          rows={rows}
          columns={columns}
          pagination={pagination}
          checkboxSelection={checkboxSelection}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize,
              },
            },
          }}
          pageSizeOptions={pageSizeOptions}
          className={"custom-data-grid" }
        />
      </div>
 
  );
};
