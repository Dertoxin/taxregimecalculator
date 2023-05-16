const newdeduct = (inputone) => {
    return Math.min(0.1 * inputone.basic, 150000, inputone.employerNpsContribution);
  }
  

  export default newdeduct;