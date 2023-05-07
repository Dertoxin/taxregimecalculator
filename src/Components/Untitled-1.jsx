<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter your Total Cost to Company (CTC) Amount
</Typography>

<TextField
  type="number"
  onChange={handleChangeone}
  name="ctc"
  value={inputone.ctc.value}
  placeholder="CTC"
  sx={{ marginTop: 1, width: "50%" }}
  error={
    (inputone.ctc.isRequired && !inputone.ctc.value) ||
    (inputone.ctc.value !== "" && inputone.ctc.value < 0)
  }
  helperText={
    (inputone.ctc.isRequired &&
      inputone.ctc.value === "" &&
      "This field is required") ||
    (inputone.ctc.value !== "" &&
      inputone.ctc.value < 0 &&
      "Value cannot be less than 0")
  }
  inputProps={{ min: 0 }}
/>
</Grid>

<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter your Basic component of the Amount
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="basic"
  value={inputone.basic.value}
  placeholder="Basic"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.basic.value}
  helperText={
    (inputone.basic.value === "" && "This field is required") ||
    (inputone.basic.value < 0 && "Value cannot be less than 0")
  }
  inputProps={{ min: 0 }}
/>
</Grid>

<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter your Basic component of the Amount
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="basic"
  value={inputone.basic.value}
  placeholder="Basic"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.basic.value}
  helperText={
    (inputone.basic.value === "" && "This field is required") ||
    (inputone.basic.value < 0 && "Value cannot be less than 0")
  }
  inputProps={{ min: 0 }}
/>
</Grid>

<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter the 'HRA' Component of your CTC
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="hra"
  value={inputone.hra.value}
  placeholder="HRA"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.hra.value}
  helperText={
    (inputone.hra.value === "" && "This field is required") ||
    (inputone.hra.value < 0 && "Value cannot be less than 0")
  }
  inputProps={{ min: 0 }}
/>
</Grid>


<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter any other component of your CTC not specified above
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="otherComponent"
  value={inputone.otherComponent.value}
  placeholder="Other Component"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.otherComponent.value}
  helperText={
    (inputone.otherComponent.value === "" &&
      "This field is required") ||
    (inputone.otherComponent.value < 0 &&
      "Value cannot be less than 0")
  }
  inputProps={{ min: 0 }}
/>
</Grid>

<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter the 'Bonus/Variable pay' received during the year{" "}
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="bonus"
  value={inputone.bonus.value}
  placeholder="Bonus"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.bonus.value}
  helperText={
    !hasValue(inputone.bonus.value) && "This field is required"
  }
  inputProps={{ min: 0 }}
/>
</Grid>
<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter the 'EPF' Component of your CTC contributed by yourself
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="epf"
  value={inputone.epf.value}
  placeholder="EPF"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.epf.value}
  helperText={
    (inputone.epf.value === "" && "This field is required") ||
    (inputone.epf.value < 0 && "Value cannot be less than 0")
  }
  inputProps={{ min: 0 }}
/>
</Grid>

<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter the 'Employer Provident Fund (EPF) ' Component of your CTC
  contributed by your company/employer
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="epf"
  value={inputone.epf.value}
  placeholder="EPF"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.epf.value}
  helperText={
    (inputone.epf.value === "" && "This field is required") ||
    (inputone.epf.value < 0 && "Value cannot be less than 0")
  }
  inputProps={{ min: 0 }}
/>
</Grid>
<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter the 'Bonus/Variable pay' received during the year{" "}
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="bonus"
  value={inputone.bonus.value}
  placeholder="Bonus"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.bonus.value}
  helperText={
    !hasValue(inputone.bonus.value) && "This field is required"
  }
  inputProps={{ min: 0 }}
/>
</Grid>

<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter Short-term capital gains on market investments
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="shortTermCapitalGains"
  value={inputone.shortTermCapitalGains.value}
  placeholder="Short Term Capital Gains"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.shortTermCapitalGains.value}
  helperText={
    !hasValue(inputone.shortTermCapitalGains.value) &&
    "This field is required"
  }
  inputProps={{ min: 0 }}
/>
</Grid>
<Grid item xs={12}>
<Typography variant="body1" sx={{ color: "black" }}>
  Enter Long-term capital gains on market investments
</Typography>
<TextField
  type="number"
  onChange={handleChangeone}
  name="longTermCapitalGains"
  value={inputone.longTermCapitalGains.value}
  placeholder="Long Term Capital Gains"
  sx={{ marginTop: 1, width: "50%" }}
  error={!inputone.longTermCapitalGains.value}
  helperText={
    !hasValue(inputone.longTermCapitalGains.value) &&
    "This field is required"
  }
  inputProps={{ min: 0 }}
/>
</Grid>