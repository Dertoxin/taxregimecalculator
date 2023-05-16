import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Taxregime from "./Taxregime";
import Output from "./Output";
import { useState, useEffect } from "react";
import taxmain from "../Processor/taxcomputer";
export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [taxregime, setTaxregime] = React.useState();
  const [taxData, setTaxData] = useState(null);
  

  const [inputone, setInputsone] = useState({
    ctc: { value: "", isRequired: false, dataType: "number" } /* */,
    basic: { value: "", isRequired: false, dataType: "number" } /* */,
    hra: { value: "", isRequired: false, dataType: "number" } /* */,
    specialAllowance: { value: "", isRequired: false, dataType: "number" },
    otherAllowance: { value: "", isRequired: false, dataType: "number" },
    otherComponent: { value: "", isRequired: false, dataType: "number" },
    incomeothersource: { value: "", isRequired: false, dataType: "number" },
    epfself: { value: "", isRequired: false, dataType: "number" } /* */,
    epfcompany: { value: "", isRequired: false, dataType: "number" } /**/,
    bonus: { value: "", isRequired: false, dataType: "number" },
    shortTermCapitalGains: { value: "", isRequired: false, dataType: "number" },
    longTermCapitalGains: { value: "", isRequired: false, dataType: "number" },
  });

  const [inputtwo, setInputsTwo] = useState({
    isRentedAccommodation: {
      value: "",
      isRequired: false,
      dataType: "boolean",
    },
    totalHouseRentPaid: { value: "", isRequired: false, dataType: "number" },
    isHomeLoan: { value: "", isRequired: false, dataType: "boolean" },
    homeLoanPrincipal: { value: "", isRequired: false, dataType: "number" },
    homeLoanInterest: { value: "", isRequired: false, dataType: "number" },
    isHomeLoanAndRent: { value: "", isRequired: false, dataType: "boolean" },
    isSameCity: { value: "", isRequired: false, dataType: "boolean" },
    taxSavingsInvestments: { value: "", isRequired: false, dataType: "number" },
    personalNpsContribution: {
      value: "",
      isRequired: false,
      dataType: "number",
    },
    isEmployerNpsContribution: {
      value: "",
      isRequired: false,
      dataType: "boolean",
    },
    employerNpsContribution: {
      value: "",
      isRequired: false,
      dataType: "number",
    },
    healthInsuranceSelf: { value: "", isRequired: false, dataType: "number" },
    isHealthInsuranceParents: {
      value: "",
      isRequired: false,
      dataType: "boolean",
    },
    isHealthInsuranceParentsAbove60: {
      value: "",
      isRequired: false,
      dataType: "boolean",
    },
    healthInsuranceParentsContributionBelow60: {
      value: "",
      isRequired: false,
      dataType: "number",
    },
    healthInsuranceParentsContributionAbove60: {
      value: "",
      isRequired: false,
      dataType: "number",
    },
    medicalTestSelf: { value: "", isRequired: false, dataType: "number" },
    medicalTestParents: { value: "", isRequired: false, dataType: "number" },
  });

  {
  }
  const handleChangeone = (event) => {
    const { name, value } = event.target;
    setInputsone((prevInputs) => ({
      ...prevInputs,
      [name]: { ...prevInputs[name], value: value },
    }));
  };

  const handleChangeTwo = (event) => {
    const { name, value } = event.target;

    setInputsTwo((prevInputs) => ({
      ...prevInputs,
      [name]: { ...prevInputs[name], value: value },
    }));
  };

  const steps = [
    {
      order: 1,
      label: "Select Tax Regime",
      description: `A tax regime refers to a collection of legal frameworks that dictate how taxes are assessed and calculated within a particular jurisdiction.`,
      component: Taxregime,
      props: { taxregime, setTaxregime },
    },
    {
      order: 2,
      label: "Provide Income Details",
      description: `A salaried employee working for a company predominantly receives income from 3 major sources - 
      Salary paid by his employer (company), income from investments and any other income (tutions or any allied activity)
      You would require your company's offer letter or monthly salary slip while filling in the below fields. If you are using your monthly salary slip, kindly multiply all the pre-tax numbers by 12 while filling information in the below fields.
      For computing capital gain/loss from stock market investments or income from other sources, you need to take the statement for the same with your share broker and bank`,
      component: Comp1,
      props: { handleChangeone, inputone },
    },
    {
      order: 3,
      label: "Provide Investment Details",
      description: "",
      component: Comp2,
      props: { handleChangeTwo, inputtwo },
    },
    {
      order: 4,
      label: "Compute Output",
      description: `Our website would provide you your tax liablity under the Old income tax regime and New income tax regime in the output below. You can get an estiamte of the tax payable under each regime and accordingly take a decision of which income tax regime do you need to choose while filing your income tax returns.`,
      component: Box,
      props: { taxregime,taxData},
    },
  ];

  const handleNext = () => {
    if (activeStep === 3) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      const convertedInputone = convertInputs(inputone);
      const convertedInputtwo = convertInputs(inputtwo);
      const output = taxmain (taxregime,convertedInputone,convertedInputtwo)
      setTaxData(output)
      const objectString = JSON.stringify(output);
      alert(objectString);

    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const resetInputs = () => {
    setInputsone({
      ctc: { value: "" },
      basic: { value: "" },
      hra: { value: "" },
      specialAllowance: { value: "" },
      otherAllowance: { value: "" },
      otherComponent: { value: "" },
      epfself: { value: "" },
      epfcompany: { value: "" },
      bonus: { value: "" },
      shortTermCapitalGains: { value: "" },
      longTermCapitalGains: { value: "" },
    });
  };

  const handleReset = () => {
    setActiveStep(2);
    /*resetInputs();*/
  };

  const handleCurrent = (val) => {
    setActiveStep(val);
  };

  const convertInputs = (obj) => {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value.dataType === "number") {
        newObj[key] = value.value === "" ? 0 : Number(value.value);
        console.log(typeof newObj[key]);
      } else if (value.dataType === "boolean") {
        newObj[key] =
          value.value === "" ? false : value.value === "Yes" ? true : false;
      } else {
        newObj[key] = value.value;
      }
    }
    return newObj;
  };

  const handleCalculate = (inputone, inputtwo, taxregime) => {
    alert("calculate");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  useEffect(() => {
    if (activeStep === 0) {
      setIsButtonDisabled(!taxregime);
    } else if (activeStep === 1) {
      const isRequiredFieldsFilled = Object.values(inputone).every(
        (field) => field.isRequired === false || field.value !== ""
      );
      setIsButtonDisabled(!isRequiredFieldsFilled);
    } else if (activeStep === 2) {
      const isRequiredFieldsFilled = Object.values(inputtwo).every(
        (field) => field.isRequired === false || field.value !== ""
      );
      setIsButtonDisabled(!isRequiredFieldsFilled);
    }
  }, [activeStep, inputone, inputtwo, taxregime]);

  useEffect(() => {
    setInputsTwo((prevState) => ({
      ...prevState,

      isHomeLoanAndRent: {
        ...prevState.isHomeLoanAndRent,
        isRequired: inputtwo.isHomeLoan.value === "Yes" ? true : false,
      },
      isSameCity: {
        ...prevState.isSameCity,
        isRequired:
          prevState.isHomeLoanAndRent.isRequired === true &&
          inputtwo.isHomeLoanAndRent.value === "Yes"
            ? true
            : false,
      },
      homeLoanPrincipal: {
        ...prevState.homeLoanPrincipal,
        isRequired: inputtwo.isHomeLoan.value === "Yes" ? true : false,
      },
      homeLoanInterest: {
        ...prevState.homeLoanInterest,
        isRequired: inputtwo.isHomeLoan.value === "Yes" ? true : false,
      },
      totalHouseRentPaid: {
        ...prevState.totalHouseRentPaid,
        isRequired:
          inputtwo.isRentedAccommodation.value === "Yes" ? true : false,
      },

      employerNpsContribution: {
        ...prevState.employerNpsContribution,
        isRequired:
          inputtwo.isEmployerNpsContribution.value === "Yes" ? true : false,
      },
    }));
  }, [
    inputtwo.isHomeLoan.value,
    inputtwo.isHomeLoanAndRent.value,
    inputtwo.isSameCity.value,
    inputtwo.homeLoanPrincipal.value,
    inputtwo.homeLoanInterest.value,
    inputtwo.isRentedAccommodation.value,
    inputtwo.totalHouseRentPaid.value,
    inputtwo.isEmployerNpsContribution.value,
    inputtwo.employerNpsContribution.value,
  ]);

  return (
    <Box sx={{ maxWidth: 1 }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>

            <StepContent>
              <Typography>{step.description}</Typography>

              <Box>
                <step.component {...step.props}></step.component>{" "}
              </Box>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={isButtonDisabled}
                  >
                    {index === steps.length - 1 ? "Calculate" : "Continue"}
                  </Button>

                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleReset}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Reset
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Your Tax calculations</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
          <Output taxregime={taxregime}></Output>
        </Paper>
      )}
    </Box>
  );
}
