import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { styled } from "@mui/system";
import SubformRent from "./SubformRent";
import SubformHRA from "./SubformHRA";
import SubformNPS from "./SubformNPS";
import SubformInsurance from "./SubformInsurance";
function Form2({ handleChangeTwo, inputtwo }) {
 

 
  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid black",
        marginTop: 2,
        borderRadius: "0px",
      }}
    >
      <Box sx={{ color: "black" }}>
        <Grid container sx={{ marginTop: 0 }}>
          <SubformRent handleChangeTwo={handleChangeTwo} inputtwo ={inputtwo}></SubformRent>
          <SubformHRA handleChangeTwo={handleChangeTwo} inputtwo ={inputtwo}></SubformHRA>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: "black" }}>
              Enter the investments you have made in tax savings instrument that
              fall under section 80C of Income tax Act. For example - Public
              Provident Fund (PPF), National savings scheme (NSC) or Equity
              Linked Savings Schemes (ELSS) or Life insuance or or Unit linked
              insurance plans (ULIP)s any other savings schemes that fall under
              tax exempt category mention that amount here
            </Typography>
            <TextField
                type="number"
                onChange={handleChangeTwo}
                name="taxSavingsInvestments"
                value={inputtwo.taxSavingsInvestments.value}
                placeholder="Tax Savings Investments"
                sx={{ marginTop: 1, width: "50%" }}
                error={(inputtwo.taxSavingsInvestments.isRequired && !inputtwo.taxSavingsInvestments.value) || (inputtwo.taxSavingsInvestments.value !== "" && inputtwo.taxSavingsInvestments.value < 0)}
                helperText={
                  (inputtwo.taxSavingsInvestments.isRequired && inputtwo.taxSavingsInvestments.value === "" && "This field is required") || 
                  (inputtwo.taxSavingsInvestments.value !== "" && inputtwo.taxSavingsInvestments.value < 0 && "Value cannot be less than 0")
                }
                inputProps={{ min: 0 }}
              />
          </Grid>
          <SubformNPS handleChangeTwo={handleChangeTwo} inputtwo ={inputtwo}></SubformNPS>
          <SubformInsurance handleChangeTwo={handleChangeTwo} inputtwo ={inputtwo}></SubformInsurance>
        </Grid>
      </Box>
    </Box>
  );
}

export default Form2;
