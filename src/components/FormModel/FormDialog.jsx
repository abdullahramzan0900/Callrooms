import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Stack } from "@mui/material";
import "./index.css";

const Roles = [
  {
    name: "Voice",
  },
  {
    name: "Admin",
  },
  {
    name: "AR",
  },
  {
    name: "ARM",
  },
  {
    name: "Coordinator",
  },
];

export default function FormDialog({ formArray, formName, handlechange }) {
  const [open, setOpen] = React.useState(true);

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
              if (
                item.type === "text" ||
                item.type === "time" ||
                item.type === "number"
              ) {
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
                    <div
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        {item.name}
                      </InputLabel>

                      <Select
                        sx={{
                          width: "100% !important",
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={item.value}
                        name={item?.name}
                        label={item.label}
                        onChange={(e) => handlechange(e, index)}
                      >
                        <Stack>
                          {Roles &&
                            Roles.length > 0 &&
                            Roles?.map((item, index) => {
                              return (
                                <div key={index}>
                                  <MenuItem value={item.name}>
                                    {item.name}
                                  </MenuItem>
                                </div>
                              );
                            })}
                        </Stack>
                      </Select>
                    </div>
                  );
                } else if (item.name === "callType") {
                  return (
                    <>
                      <div
                        style={{
                          marginTop: "20px",
                        }}
                      >
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
                          onChange={(e) => handlechange(e, index)}
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
                      <div
                        style={{
                          marginTop: "20px",
                        }}
                      >
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
                          onChange={(e) => handlechange(e, index)}
                        >
                          <Stack>
                            <MenuItem value={10}>Schedule-Call</MenuItem>
                            <MenuItem value={20}>Unschedule-Call</MenuItem>
                          </Stack>
                        </Select>
                      </div>
                    </>
                  );
                } else if (item.name === "RoomType") {
                  return (
                    <>
                      <div
                        style={{
                          marginTop: "20px",
                        }}
                      >
                        <InputLabel id="demo-simple-select-label">
                          {item.name}
                        </InputLabel>
                        <Select
                          sx={{
                            width: "100% !important",
                          }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value=""
                          name={item?.name}
                          label={item.label}
                          onChange={(e) => handlechange(e, index)}
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
          <Button
            style={{
              color: "#1a73e8",
            }}
            onClick={handleClose}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
