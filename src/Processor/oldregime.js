const calculateOutput1 = (basic, hra, totalHouseRentPaid) => {
    const hraExemption = Math.min(hra - (0.1 * basic), 0.5 * basic);
    return Math.min(hraExemption, totalHouseRentPaid);
  }
  
  const calculateOutput2 = (taxSavingsInvestments, homeLoanPrincipal, epfself, isSameCity) => {
    if (isSameCity) {
      return Math.min(taxSavingsInvestments + epfself, 150000);
    } else {
      return Math.min(taxSavingsInvestments + homeLoanPrincipal + epfself, 150000);
    }
  }
  
  const calculateOutput3 = (homeLoanInterest) => {
    return Math.min(homeLoanInterest, 200000);
  }
  
  const calculateOutput4 = (personalNpsContribution) => {
    return Math.min(personalNpsContribution, 50000);
  }
  
  const calculateOutput5 = (basic, employerNpsContribution) => {
    return Math.min(0.1 * basic, 150000, employerNpsContribution);
  }
  
  const calculateOutput6 = (healthInsuranceSelf, medicalTestSelf) => {
    return Math.min(healthInsuranceSelf + medicalTestSelf, 25000);
  }
  
  const calculateOutput7 = (healthInsuranceParents, medicalTestParents, isHealthInsuranceParentsAbove60, healthInsuranceParentsContributionBelow60) => {
    if (isHealthInsuranceParentsAbove60) {
      return Math.min(healthInsuranceParents + medicalTestParents, 50000);
    } else {
      return Math.min(healthInsuranceParentsContributionBelow60 + medicalTestParents, 25000);
    }
  }
  
  const calculateTotalDeductions = (basic, hra, totalHouseRentPaid, taxSavingsInvestments, homeLoanPrincipal, epfself, homeLoanInterest, personalNpsContribution, employerNpsContribution, healthInsuranceSelf, medicalTestSelf, healthInsuranceParents, medicalTestParents, isHealthInsuranceParentsAbove60, healthInsuranceParentsContributionBelow60, isSameCity) => {
    const output1 = calculateOutput1(basic, hra, totalHouseRentPaid);
    const output2 = calculateOutput2(taxSavingsInvestments, homeLoanPrincipal, epfself, isSameCity);
    const output3 = calculateOutput3(homeLoanInterest);
    const output4 = calculateOutput4(personalNpsContribution);
    const output5 = calculateOutput5(basic, employerNpsContribution);
    const output6 = calculateOutput6(healthInsuranceSelf, medicalTestSelf);
    const output7 = calculateOutput7(healthInsuranceParents, medicalTestParents, isHealthInsuranceParentsAbove60, healthInsuranceParentsContributionBelow60);
    return output1 + output2 + output3 + output4 + output5 + output6 + output7 + epfcompany;
  }
  