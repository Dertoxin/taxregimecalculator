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
          <Select
            autoWidth
            label=""
            value={inputtwo.isEmployerNpsContribution.value}
            onChange={handleChangeTwo}
            name="isEmployerNpsContribution"
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Enter the contribution you have made to NPS by your employer
        </Typography>
      </Grid>
      <Grid>
        <TextField
          type="number"
          disabled={inputtwo.isEmployerNpsContribution.value !== "Yes"}
          sx={{ marginTop: 1, width: "50%" }}
          onChange={handleChangeTwo}
          name="employerNpsContribution"
          value={inputtwo.employerNpsContribution.value}
          placeholder="Total Exployer NPS contribution"
          error={
            (inputtwo.isEmployerNpsContribution.value === "Yes" &&
              !inputtwo.employerNpsContribution.value) ||
            (inputtwo.isEmployerNpsContribution.value === "Yes" &&
              inputtwo.employerNpsContribution.value < 0)
          }
          helperText={
            (inputtwo.isEmployerNpsContribution.value === "Yes" &&
              inputtwo.employerNpsContribution.value === "" &&
              "This field is required") ||
            (inputtwo.isEmployerNpsContribution.value === "Yes" &&
              inputtwo.employerNpsContribution.value < 0 &&
              "Value cannot be less than 0")
          }
          inputProps={{ min: 0 }}
        />

      </Grid>
    </Box>
  );
};

export default SubformNPS;
