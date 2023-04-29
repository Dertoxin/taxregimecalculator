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

const SubformHRA = ({ handleChangeTwo, inputtwo }) => {
  const [hasHomeLoan, setHasHomeLoan] = useState(false);

  const handleHomeLoanChange = (event) => {
    setHasHomeLoan(event.target.value);
  };

  return (
    <Box>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Do you have a Home loan ?
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
          Required
            autoWidth
            label="Home Loan"
            name="isHomeLoan"
            onChange={handleChangeTwo}
            value={inputtwo.isHomeLoan.value}
            required={inputtwo.isHomeLoan.isRequired}
            error={inputtwo.isHomeLoan.isRequired && inputtwo.isHomeLoan.value === ""}
            helperText={
              inputtwo.isHomeLoan.isRequired && inputtwo.isHomeLoan.value === ""
                ? "This field is required"
                : null
            }
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Do you have a home loan and are still staying on rent?
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select autoWidth label="" disabled={hasHomeLoan !== "Yes"}>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Your rented house and house against which loan is taken in the same
          city?
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select autoWidth label="" disabled={hasHomeLoan !== "Yes"}>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </Grid>


      <Grid item xs={12}>
        <Typography
          variant="body1"
          sx={{ color: "black" }}
         
        >
          If you have taken a home loan, enter the amount you are paying
          annually as prinicipal. (Ask your bank for the same)
        </Typography>
        <TextField
          type="number"
          disabled={!inputtwo.isHomeLoan.value}
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
        disabled={!inputtwo.isHomeLoan.value}
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
