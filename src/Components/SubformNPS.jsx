import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";

const SubformNPS = ({ handleChangeTwo, inputtwo }) => {
 
  const [selectnps, setnps] = useState("");
  const handleChange = (event) => {
    setnps(event.target.value);
  };

  return (
    <Box>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Does your employer contribute to NPS, deduct the same from your salary
          and invest it in your NPS account?
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select autoWidth label="" onChange={handleChange} value={selectnps}>
            <MenuItem value={"Yes"}>Yes</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Enter the contribution you have made to NPS by your employer
        </Typography>
        <TextField
          type="number"
          sx={{ marginTop: 1, width: "50%" }}
          disabled={selectnps !== "Yes"}
        />
      </Grid>
    </Box>
  );
};

export default SubformNPS;
