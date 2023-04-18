import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import './index.css'
import { Button } from "@mui/material";

export const DataGridTable = ({
  rows,
  columns,
  pagination,
  checkboxSelection,
  className,
  pageSizeOptions,
  pageSize,
  tablename,
  buttondata
}) => {
  return (
 
      <div className="datagrid" >
        <div className="table-header">
<div>
<h4 style={{

}}>{tablename}</h4>
</div>
<div>
<Button>{buttondata}</Button>
</div>
        </div>
        <DataGrid style={{ background: 'white' }}
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
