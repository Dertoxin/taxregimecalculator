const calculateOutput5 = (basic, employerNpsContribution) => {
    return Math.min(0.1 * basic, 150000, employerNpsContribution);
  }
  