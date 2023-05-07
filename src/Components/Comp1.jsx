import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Button";
import TextField from "@mui/material/Button";
import Form1 from "./Form1";
export default function Comp1({ handleChangeone, inputone}) {
  return (
    <Card
      sx={{
        maxWidth: 1,
        border: 1,
        color: "black",
        backgroundColor: "lavender",
        margin: 1,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sources of Income
        </Typography>
        <Typography variant="body1" sx={{ color: "black" }}>
          Enter the followings details for the entire year (You may refer to
          your salary slip or offer letter)
        </Typography>

        <Form1 handleChangeone={handleChangeone} inputone ={inputone}></Form1>
      </CardContent>
    </Card>
  );
}
