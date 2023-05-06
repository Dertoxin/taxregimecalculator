import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";

function Form1({ handleChangeone, inputone }) {
  /*

  */
  const hasValue = (value) => value !== "";

  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid black",
        marginTop: 8,
        borderRadius: "0px",
      }}
    >
      <form>
        <Box sx={{ color: "black" }}>
          <Grid container sx={{ marginTop: 0 }}>
           
          </Grid>
        </Box>
      </form>
    </Box>
  );
}

export default Form1;
