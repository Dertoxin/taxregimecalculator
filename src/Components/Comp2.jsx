import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Form2 from "./Form2";
export default function MediaCard({ handleChangeTwo, inputtwo,activeStep,isButtonDisabled  }) {
  return (
    <Card
      sx={{ maxWidth: 1, border: "1px solid black", color: "black",  backgroundColor: "lavender",margin: 1 }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Investments done during the financial year
        </Typography>
        <Typography variant="body2" sx={{ color: "black" }}>
          Enter the followings details for the entire year (You may refer to
          your salary slip or offer letter)
        </Typography>
        <Form2 handleChangeTwo={handleChangeTwo} inputtwo ={inputtwo}></Form2>
      </CardContent>
    </Card>
  );
}
