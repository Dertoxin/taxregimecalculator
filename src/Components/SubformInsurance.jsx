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

const SubformInsurance = ({ handleChangeTwo, inputtwo }) => {


  return (
    <Box>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Enter the amount you have paid as premium for health insurance for
          yourself
        </Typography>
        <TextField type="number" sx={{ marginTop: 1, width: "50%" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Are you paying health insurance premium for your parents?
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            autoWidth
            label=""
            onChange={handleChangeTwo}
            name="isHealthInsuranceParents"
            value={inputtwo.isHealthInsuranceParents.value}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>




        
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Are your parents for whom you are paying health insurance above 60
          years
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            autoWidth
            label=""
            onChange={handleChangeTwo}
            name="isHealthInsuranceParentsAbove60"
            value={inputtwo.isHealthInsuranceParentsAbove60.value}
            disabled={inputtwo.isHealthInsuranceParents.value === "No"}
            error={ inputtwo.isHealthInsuranceParents.value=== "Yes" && !inputtwo.isHealthInsuranceParentsAbove60.value}
          helperText={/*!payinsu && */ "This field is required"}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Contribution to health insurance of parents (if they are below 60
          years)
        </Typography>
        <TextField
          type="number"
          sx={{ marginTop: 1, width: "50%" }}
          value = {inputtwo.healthInsuranceParentsContributionBelow60.value}
          disabled={inputtwo.isHealthInsuranceParentsAbove60.value === "Yes"}
          required
          InputLabelProps={{ shrink: true }}
          error={ inputtwo.isHealthInsuranceParentsAbove60.value=== "No" && !inputtwo.healthInsuranceParentsContributionBelow60.value}
          helperText={/*!payinsu && */ "This field is required"}
        />
      </Grid>{" "}
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Contribution to health insurance of parents (if they are above 60
          years)
        </Typography>
        <TextField
          type="number"
          sx={{ marginTop: 1, width: "50%" }}
          value = {inputtwo.healthInsuranceParentsContributionAbove60.value}
          disabled={inputtwo.isHealthInsuranceParentsAbove60.value === "No"}
          required
          error={ inputtwo.isHealthInsuranceParentsAbove60.value=== "Yes" && !inputtwo.healthInsuranceParentsContributionAbove60.value}
          helperText={/*!payinsu && */ "This field is required"}
        />
      </Grid>{" "}
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Enter the amount you have paid as premium for health insurance for
          yourself
        </Typography>
        <TextField type="number" sx={{ marginTop: 1, width: "50%" }} />
      </Grid>{" "}
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Enter the amount you have paid for any medical/lab/pathology test done
          for you during the year{" "}
        </Typography>
        <TextField type="number" sx={{ marginTop: 1, width: "50%" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "black" }}>
          Enter the amount you have paid for any medical/lab/pathology test done
          for your parents during the year{" "}
        </Typography>
        <TextField type="number" sx={{ marginTop: 1, width: "50%" }} />
      </Grid>
    </Box>
  );
};

export default SubformInsurance;
