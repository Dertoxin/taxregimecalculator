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

const SubformRent = ({ handleChangeTwo, inputtwo }) => {


  return (
    <Box>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Do you stay in rented accomodation
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            autoWidth
            name="isRentedAccommodation"
            onChange={handleChangeTwo}
            value={inputtwo.isRentedAccommodation.value}
          >
            <MenuItem value={"Yes"}>Yes</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Enter the total house rent paid for the year
        </Typography>
        <TextField
          Required
          disabled={inputtwo.isRentedAccommodation.value !== "Yes"}
          type="number"
          onChange={handleChangeTwo}
          name="totalHouseRentPaid"
          value={inputtwo.totalHouseRentPaid.value}
          placeholder="Total Rent Paid"
          sx={{ marginTop: 1, width: "50%" }}
          error={
            (inputtwo.isRentedAccommodation.value &&
              !inputtwo.totalHouseRentPaid.value) ||
            (inputtwo.totalHouseRentPaid.value !== "" &&
              inputtwo.totalHouseRentPaid.value < 0)
          }
          helperText={
            (inputtwo.isRentedAccommodation.value &&
              inputtwo.totalHouseRentPaid.value === "" &&
              "This field is required") ||
            (inputtwo.totalHouseRentPaid.value !== "" &&
              inputtwo.totalHouseRentPaid.value < 0 &&
              "Value cannot be less than 0")
          }
          inputProps={{ min: 0 }}
        />
      </Grid>
    </Box>
  );
};

export default SubformRent;
