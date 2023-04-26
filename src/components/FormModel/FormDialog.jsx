import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/material";
import "./index.css";

export default function FormDialog({ formArray, formName, handlechange}) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <DialogContent>
          <h2 className="form-header">{formName}</h2>
          <div className="form-div">

          {formArray?.map((item, index) => {
            console.log(item.name === "options");
            if (item.type === "text" || item.type === "time" || item.type==="number") {
              return (
                <div key={index}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="flat"
                    label={item.label}
                    name={item.name}
                    type={item.type}
                    onChange={(e) => handlechange(e, index)}
                    fullWidth
                    />
                </div>
              );
            } else if (item.type === "options") {
              if (item.name === "role") {
                return (
                  <div style={{
                    marginTop:'20px'
                  }}>
                    <InputLabel id="demo-simple-select-label">
                      {item.name}
                    </InputLabel>

                    <Select
                      sx={{
                        width: "100% !important",
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={item?.value}
                      name={item?.name}
                      label={item.label}
                      >
                      <Stack>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Stack>
                    </Select>
                  </div>
                );
              } else if (item.name === "callType") {
                return (
                  <>
                    <div style={{
                      marginTop:'20px'
                    }}>
                      <InputLabel id="demo-simple-select-label">
                        CallType
                      </InputLabel>
                      <Select
                        sx={{
                          width: "100% !important",
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={item?.value}
                        name={item?.name}
                        label={item.label}
                        >
                        <Stack>
                          <MenuItem value={10}>Schedule</MenuItem>
                          <MenuItem value={20}>Unschedule</MenuItem>
                        </Stack>
                      </Select>
                    </div>
                  </>
                );

              } else if (item.name === "ProjectType") {
                return (
                  <>
                    <div style={{
                            marginTop:'20px'
                    }}>
                      <InputLabel id="demo-simple-select-label">
                        CallType
                      </InputLabel>
                      <Select
                        sx={{
                          width: "100% !important",
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={item?.value}
                        name={item?.name}
                        label={item.label}
                        >
                        <Stack>
                          <MenuItem value={10}>Schedule-Call</MenuItem>
                          <MenuItem value={20}>Unschedule-Call</MenuItem>
                        </Stack>
                      </Select>
                    </div>
                  </>
                );
              }
              else if (item.name === "RoomType") {
                return (
                  <>
                    <div style={{
                      marginTop:'20px'
                    }}>
                      <InputLabel id="demo-simple-select-label">
                        {item.name}
                      </InputLabel>
                      <Select
                        sx={{
                          width: "100% !important",
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={item?.value}
                        name={item?.name}
                        label={item.label}
                        >
                        <Stack>
                          <MenuItem value={10}>Schedule-Room</MenuItem>
                          <MenuItem value={20}>Unschedule-Room</MenuItem>
                        </Stack>
                      </Select>
                    </div>
                  </>
                );
              }
            } 
          })}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button style={{
            color:'#1a73e8'
          }} onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
