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
function Output({ taxregime,taxData }) {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 1,
          height: "auto",
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
          <Paper sx={{ backgroundColor:"MediumSpringGreen", margin:2,padding:2, border: "1px solid black",}}>

          <Typography gutterBottom variant="h5" component="div" sx={{ margin:1,padding:2}}>
              Annual Calculations
            </Typography>


            <Typography>
              Total Annual Tax (under old income regime) : 

            </Typography>

            <Typography
              style={{
                display:
                  taxregime === "FY2023-2024 (01/04/2023 to 31/03/2024)"
                    ? "none"
                    : "block",
              }}
            >
              Total Annual Tax (under new income regime FY-23) : 

              
            </Typography>


            <Typography
              style={{
                display:
                  taxregime === "FY 2022-2023 (01/04/2022 to 31/03/2023)"
                    ? "none"
                    : "block",
              }}
            >
              Total Annual Tax (under new income regime FY-24) : 
            </Typography>
            </Paper >
<Paper sx={{ backgroundColor:"MediumSpringGreen", margin:2,padding:2, border: "1px solid black",}}>
            <Typography gutterBottom variant="h5" component="div" sx={{ margin:1,padding:2}}>
              Total Monthly Income (post tax for each regime)
            </Typography>

            <Typography>
              Total Monthly Income post Tax, post EPF Employer contribution and post NPS employer  (under old income regime) :{" "}
              {taxData}
            </Typography>
            <Typography
              style={{
                display:
                  taxregime === "FY2023-2024 (01/04/2023 to 31/03/2024)"
                    ? "none"
                    : "block",
              }}
            >
              Total Monthly Income post Tax, post EPF Employer contribution and post NPS employer (under new income regime -FY23) :{" "}
              {taxData}
            </Typography>

            <Typography
              style={{
                display:
                  taxregime === "FY 2022-2023 (01/04/2022 to 31/03/2023)"
                    ? "none"
                    : "block",
              }}
            >
              Total Monthly Income post Tax, post EPF Employer contribution and post NPS employer  (under old income regime -FY24) :{" "}
              
            </Typography>
          </Paper>

          <Note></Note>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Output;
