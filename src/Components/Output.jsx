import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
  Paper,
} from "@mui/material";

import Note from "./Note";
function Output({ taxregime, inputone, inputtwo }) {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 1,
          height: 400,
          color: "black",
          border: 1,
          margin: 1,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Output
          </Typography>
          <Typography>Selected Tax Regime: {taxregime}</Typography>
          <Paper>
            <Typography>
              Total Annual Tax (under old income regime) : {taxregime}
              /* ttotal income  - Output 1-7 + epf employeer */
            </Typography>
            <Typography>
              Total Tax (under new income regime -FY23) : {taxregime}
              / only tax slab/
            </Typography>
            <Typography>
              Total Tax (under old income regime -FY24) : {taxregime}
              output 5
            </Typography>


            <Typography gutterBottom variant="h5" component="div">
             Total Monthly Income (post tax for each regime)
            </Typography>
            <Typography>
              Total Monthly Income post Tax (under old income regime) :{" "}
        /*Total Annual CTC/12  - output of tax processor old regime/12 */
              {taxregime}
            </Typography>
            <Typography>
              Total Monthly Income post Tax (under new income regime -FY23) :{" "}
              {taxregime}
            </Typography>
            <Typography>
              Total Monthly Income post Tax (under old income regime -FY24) :{" "}
              {taxregime}
            </Typography>
          </Paper>

          <Note></Note>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Output;
