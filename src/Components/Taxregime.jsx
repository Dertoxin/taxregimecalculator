import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box,InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const Taxregime = ({ taxregime, setTaxregime}) => {

  const handleChange = (event) => {
    setTaxregime(event.target.value);

  };

  return (
    <Card
      sx={{
        maxWidth: 1,
        backgroundColor: "lavender",
        color: "Black",
        border: "1px solid black",
        margin: 1,
      }}
    >
      <CardContent>
        <Typography>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Select your Tax Regime for the year
        </Typography>
        <Typography>
          For the financial year 2022-2023 (i.e. from 1 April 2022 to 31 March
          2023), there are 2 income tax regimes - <br></br>
          <ul>
            <li>
              1. Old regime: which allows you to avail various deductions such
              as principal and interest payment on home loans, investments into
              FDs/PPFs/NSC/ELSS, premiums paid on health and life insurance,
              investments in NPS and much more{" "}
            </li>
            <li>
              2. New income tax regime FY2022-2023, which does not allow any
              deduction except investment by self into NPS
            </li>
          </ul>
          <br></br>
        </Typography>
        <Typography>
          For the financial year 2023-2024 (i.e. from 1 April 2023 to 31 March
          2024), there are 2 income tax regimes -<br></br>
          <ul>
            <li>
              1. Old regime: which allows you to avail various deductions such
              as principal and interest paid on home loans, investments into
              FDs/PPFs/NSC/ELSS, premiums paid on health and life insurance,
              investments in NPS and much more
            </li>
            <li>
              2. New income tax regime FY2022-2023, which does not allow any
              deduction, however, applicable rates of tax for each income range
              is comparatively lower than the old regime
            </li>
          </ul>
        </Typography>

        <FormControl sx={{ m: 1, minWidth: 0.5, color: "Black" }}>
          <InputLabel id="Tax-regime-selecter-label">
            Select tax regime 
          </InputLabel>
          <Select
            labelId="Tax-regime-selecter-label"
            onChange={handleChange}
            value={taxregime}
          >
            <MenuItem value={"FY 2022-2023 (01/04/2022 to 31/03/2023)"}>
              Financial year 2022-2023 (1 April 2022 to 31 March 2023)
            </MenuItem>
            <MenuItem value={"FY2023-2024 (01/04/2023 to 31/03/2024)"}>
              Financial year 2023-2024 (1 April 2023 to 31 March 2024)
            </MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ margin: 1 }}>
          <Typography sx={{ color: "Black", fontSize: 30 }}>
            Selected Tax Regime: {taxregime}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Taxregime;
