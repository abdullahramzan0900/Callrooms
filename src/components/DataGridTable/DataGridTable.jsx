import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import './index.css'
import { Button } from "@mui/material";
import FormDialog from "../FormModel/FormDialog";
import { useState } from "react";

export const DataGridTable = ({
  rows,
  columns,
  pagination,
  checkboxSelection,
  className,
  pageSizeOptions,
  pageSize,
  tablename,
  buttondata,
  formArray,
  formName,
  handlechange
}) => {
  const [showmodel,Setshowmodel]=useState(false)
  console.log(formArray,"aaaa")
  return (
 
      <div className="datagrid" >
        <div className="table-header">
<div>
<h4 style={{

}}>{tablename}</h4>
</div>
<div>
<Button className="model_button" onClick={(()=>{
 Setshowmodel(!showmodel);
})}>{buttondata}</Button>
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
<div>

  {
      showmodel && <FormDialog formArray={formArray} formName={formName} handlechange={handlechange} />
  }
</div>
  </div>
 
  );
};
