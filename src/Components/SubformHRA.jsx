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

const SubformHRA = ({ handleChangeTwo, inputtwo,disabled = false }) => {





  return (
    <Box>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Do you have a Home loan ? 
          {inputtwo.isHomeLoan.isRequired}
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            autoWidth
            label=""
            onChange={handleChangeTwo}
            name="isHomeLoan"
            value={inputtwo.isHomeLoan.value}
            required={inputtwo.isHomeLoan.isRequired}
            error={
              inputtwo.isHomeLoan.isRequired && inputtwo.isHomeLoan.value === ""
            }
            helperText={
              inputtwo.isHomeLoan.isRequired && inputtwo.isHomeLoan.value === ""
                ? "This field is required"
                : null
            }
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>

         
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Do you have a home loan and are still staying on rent?

          {inputtwo.isHomeLoanAndRent.isDisabled}
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            autoWidth
            label=""
            onChange={handleChangeTwo}
            name="isHomeLoanAndRent"
            value={ inputtwo.isHomeLoan.value !== "Yes" ? "" : inputtwo.isHomeLoanAndRent.value}
            disabled={inputtwo.isHomeLoan.value !== "Yes"}
             error={
              inputtwo.isHomeLoan.value==="Yes" && inputtwo.isHomeLoanAndRent.value === ""
            }
            helperText={
              inputtwo.isHomeLoan.value==="Yes" && inputtwo.isHomeLoanAndRent.value === ""
                ? "This field is required"
                : null
            }
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
        <Typography>{inputtwo.isHomeLoanAndRent.isDisabled}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Your rented house and house against which loan is taken in the same
          city?
       
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            autoWidth
            label=""
            value={inputtwo.isSameCity.value}
            onChange={handleChangeTwo}
            name="isSameCity"
            disabled={inputtwo.isHomeLoan.value !== "Yes"  || inputtwo.isHomeLoanAndRent.value!=="Yes"}
             error={
              inputtwo.isHomeLoanAndRent.value==="Yes" && inputtwo.isHomeLoanAndRent.value === ""
            }
            helperText={
              inputtwo.isHomeLoanAndRent.value==="Yes" && inputtwo.isHomeLoanAndRent.value === ""
                ? "This field is required"
                : null
            }
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          If you have taken a home loan, enter the amount you are paying
          annually as prinicipal. (Ask your bank for the same)
        </Typography>
        <TextField
          type="number"
          disabled={inputtwo.isHomeLoan.value === "No"}
          sx={{ marginTop: 1, width: "50%" }}
          onChange={handleChangeTwo}
          name="homeLoanPrincipal"
          value={inputtwo.homeLoanPrincipal.value}
          placeholder="Total Principal on Loan Paid"
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
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          If you have taken a home loan, enter the amount you are paying
          annually as Interest (note this is not EMI but the interest component
          of EMI). Ask your bank for the same
        </Typography>
        <TextField
          type="number"
          disabled={inputtwo.isHomeLoan.value === "No"}
          sx={{ marginTop: 1, width: "50%" }}
          onChange={handleChangeTwo}
          name="homeLoanInterest"
          value={inputtwo.homeLoanInterest.value}
          placeholder="Total Interest on Loan Paid"
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

export default SubformHRA;
