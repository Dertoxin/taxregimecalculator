import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

import { Avatar, Box, CardMedia, Button, Typography } from "@mui/material";
export default function DisclaimerCard() {
  const [show, setShow] = useState(true);
  const [dispvar, changeDisp] = useState("X");
  const shownot = () => {
    setShow(!show);
  };
  const changeDispval = () => {
    console.log(show);
    show ? changeDisp("∀") : changeDisp("X");
  };
  const onClickbut = () => {
    shownot();
    changeDispval();
    console.log(dispvar);
  };

  return (
    <Box sx={{ marginBottom: 1 }}>
      <Card sx={{ color: "white", backgroundColor: "Tomato" }}>
        <Stack direction="row">
          <Typography
            variant="h5"
            sx={{
              color: "white",
              align: "center",
              margin: 1,
              marginRight: 0,
            }}
          >
            {}
            Disclaimer
          </Typography>
          <Button
            onClick={() => {
              onClickbut();
            }}
            variant="outlined"
            sx={{
              color: "white",
              align: "center",
              margin: 1,
              border: 1,
              padding: 0,
     
              ":hover": { bgcolor: "pink", color: "black", border: "black" },
            }}
          >
            {" "}
            {dispvar}{" "}
          </Button>
        </Stack>

        {show && (
          <Card
            sx={{
              maxWidth: 1,
              backgroundColor: "Gray",
              color: "white",
              align: "center",
              margin: 1,
            }}
          >
            <CardContent>
              <Typography variant="body2" sx={{ color: "white" }}>
                Computing income tax is a complex computation with never ending
                complexity caused by multiple sections, deductions and
                exemptions defined under the income tax act. To add to your
                misery, Government has introduced a new tax regime. We have
                noticed even CA outsource their tax compution to other CA's
                which shows how complex is this exercise of computation. This
                website provides you a simple one-stop answer to compute your
                income tax payable without having to read and understand the
                various expemtions/sections/deductions defined under the income
                tax act.
              </Typography>
            </CardContent>
          </Card>
        )}
      </Card>
    </Box>
  );
}
