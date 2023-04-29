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
export default function Note() {
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
      <Card sx={{ color: "black", backgroundColor: "grey" }}>
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
            Note
          </Typography>
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
                Note: The above calculation is for getting a insight of which
                regime to choose and applicable to people under 60 years.
                However, we recommend you consult a CA while filing returns. The
                above calcuation -
                <ul>
                  <li>
                    Does not include Leave Travel Allowance (LTA) computation.
                    If you have submitted proofs for LTA Amount mentioned in
                    your CTC it is tax free to that extent. Add the remaining
                    LTA in the category for other allowance. Kindly note that
                    LTA exemption is available only twice in 4 years.
                  </li>

                  <li> Assumes you stay in a tier 1 metro city</li>

                  <li>
                    {" "}
                    Assumes the loan taken during purchase of house was/is more
                    than Rs. 45 lakhs
                  </li>

                  <li>
                    Assumes that you have requisite proofs for the declarations
                    have submitted the same
                  </li>
                  <li>
                    Assumes no donation under section 80G of income tax act
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        )}
      </Card>
    </Box>
  );
}
