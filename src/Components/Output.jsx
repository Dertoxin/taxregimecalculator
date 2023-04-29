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
  Paper
} from "@mui/material";

import Note from "./Note";
function Output({ taxregime,inputone,inputtwo }) {
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
              Total Tax (under old income regime) {taxregime}
            </Typography>
            <Typography>
              Total Tax (under new income regime -FY23) : {taxregime}
            </Typography>
            <Typography>
              Total Tax (under old income regime -FY24) : {taxregime}
            </Typography>
          </Paper>

          <Note></Note>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Output;
