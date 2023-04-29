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

  const [payinsu, setpayinsu] = useState("");
  const [hasabove, sethasabove] = useState("");
  const handleChangeinsu = (event) => {
    setpayinsu(event.target.value);
    console.log(payinsu);
  };
  const handleChangeabove = (event) => {
    sethasabove(event.target.value);
    console.log(hasabove);
  };
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
            value={payinsu}
            onChange={handleChangeinsu}
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
            disabled={payinsu !== "Yes"}
            onChange={handleChangeabove}
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
          disabled={payinsu !== "Yes" || hasabove !== "No"}
          required
          InputLabelProps={{ shrink: true }}
          error={!payinsu}
          helperText={!payinsu && "This field is required"}
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
          disabled={payinsu !== "Yes" || hasabove !== "Yes"}
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
