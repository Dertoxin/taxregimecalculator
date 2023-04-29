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
import { useState,useEffect  } from "react";
export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(4);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
  const [taxregime, setTaxregime] = React.useState();

  const [inputone, setInputsone] = useState({
    ctc: { value: "", isRequired: true },
    basic: { value: "", isRequired: true },
    hra: { value: "", isRequired: true },
    specialAllowance: { value: "", isRequired: false },
    otherAllowance: { value: "", isRequired: false },
    otherComponent: { value: "", isRequired: false },
    epf: { value: "", isRequired: true },
    bonus: { value: "", isRequired: false },
    shortTermCapitalGains: { value: "", isRequired: false },
    longTermCapitalGains: { value: "", isRequired: false },
  });

  const [inputtwo, setInputsTwo] = useState({
    isRentedAccommodation: { value: false, isRequired: false },
    totalHouseRentPaid: { value: "", isRequired: true },
    isHomeLoan: { value:"" , isRequired: true },
    homeLoanPrincipal: { value: "", isRequired: false },
    homeLoanInterest: { value: "", isRequired: false },
    isHomeLoanAndRent: { value: false, isRequired: false },
    isSameCity: { value: false, isRequired: false },
    taxSavingsInvestments: { value: "", isRequired: false },
    personalNpsContribution: { value: "", isRequired: false },
    isEmployerNpsContribution: { value: false, isRequired: false },
    employerNpsContribution: { value: "", isRequired: false },
    healthInsuranceSelf: { value: "", isRequired: true },
    isHealthInsuranceParents: { value: false, isRequired: false },
    isHealthInsuranceParentsAbove60: { value: false, isRequired: false },
    healthInsuranceParentsContributionBelow60: { value: "", isRequired: false },
    healthInsuranceParentsContributionAbove60: { value: "", isRequired: false },
    medicalTestSelf: { value: "", isRequired: false },
    medicalTestParents: { value: "", isRequired: false },
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


  const areAllRequiredFieldsFilled = (inputObj) => {
    for (const [key, value] of Object.entries(inputObj)) {
      if (value.isRequired && !value.value) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (activeStep === 0) {
      setIsButtonDisabled(taxregime === "");
      return;
    }

    let inputToCheck;
    if (activeStep === 1) {
      inputToCheck = inputone;
    } else if (activeStep === 2) {
      inputToCheck = inputtwo;
    } else {
      setIsButtonDisabled(false);
      return;
    }

    const isFilled = areAllRequiredFieldsFilled(inputToCheck);
    setIsButtonDisabled(!isFilled);
  }, [inputone, inputtwo, activeStep, taxregime]);

 



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
      props: { taxregime, inputone, inputtwo },
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const resetInputs = () => {
    setInputsone({
      ctc: { value: "", isRequired: true },
      basic: { value: "", isRequired: true },
      hra: { value: "", isRequired: true },
      specialAllowance: { value: "", isRequired: false },
      otherAllowance: { value: "", isRequired: false },
      otherComponent: { value: "", isRequired: false },
      epf: { value: "", isRequired: true },
      bonus: { value: "", isRequired: false },
      shortTermCapitalGains: { value: "", isRequired: false },
      longTermCapitalGains: { value: "", isRequired: false },
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    resetInputs();
  };

  const handleCurrent = (val) => {
    setActiveStep(val);
  };

  

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
