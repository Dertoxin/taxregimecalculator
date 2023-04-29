import "./App.css";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { Grid } from "@mui/material";
import DisclaimerCard from "./Components/Disclaimer";
import Taxregime from "./Components/Taxregime";

import MainSteeper from "./Components/MainSteeper";
function App() {
  return (
    <div>
      <header>
        <DisclaimerCard></DisclaimerCard>

        <MainSteeper></MainSteeper>

    {/*<Taxregime></Taxregime>
        <Grid container sx={{ marginTop: 0 }}>
          <Grid item xs={6}>
            <Comp1></Comp1>
            <Output></Output>
          </Grid>
          <Grid item xs={6}>
            <Comp2></Comp2>
         
          </Grid>
        </Grid>

  */}
      </header>
    </div>
  );
}

export default App;
