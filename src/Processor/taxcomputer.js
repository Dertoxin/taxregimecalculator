import oldregimedeductions from "./oldregime";
import oldregimetax from "./oldtaxslabprocessor";
import newtaxslabprocessor23 from "./newtaxslabprocessor23";
import newtaxslabprocessor24 from "./newtaxslabprocessor24.js";
import newdeduct from "./newregime";

const oldregimeoutput = (incomebeforededuction, inputone, inputtwo) => {
  const deductionoldregime = oldregimedeductions(inputone, inputtwo);
  console.log("totaldeduction old regime : ",deductionoldregime)
  const outputoldtaxregimetaxableincome =
    incomebeforededuction - deductionoldregime;

    console.log("income - deduction old regime  : ",outputoldtaxregimetaxableincome)
  const outputoldtaxregime = oldregimetax(outputoldtaxregimetaxableincome);
  console.log("after tax calculation",outputoldtaxregime)
  return outputoldtaxregime;
};

const taxmain = (taxregime, inputone, inputtwo) => {
  let outputnewtaxregime;
  let deductionnewregime;
  let outputnewtaxregimetaxableincome;

  console.log(taxregime);
  const incomebeforededuction =
    inputone.basic +
    inputone.hra +
    inputone.specialAllowance +
    inputone.otherAllowance +
    inputone.otherComponent +
    inputone.epfself +
    inputone.epfcompany +
    inputone.bonus +
    inputone.shortTermCapitalGains;
console.log("income before deduciton : ",incomebeforededuction)
  const surcharge =
    inputone.basic +
    inputone.hra +
    inputone.specialAllowance +
    inputone.otherAllowance +
    inputone.otherComponent +
    inputone.epfself +
    inputone.epfcompany +
    inputone.bonus +
    inputone.shortTermCapitalGains +
    inputone.longTermCapitalGains;
    console.log("surcharge : ",surcharge)

  const longTermCapitalGains = inputone.longTermCapitalGains;
console.log("longTermCapitalGains : ",longTermCapitalGains)


  const outputoldtaxregime = oldregimeoutput(
    surcharge,
    incomebeforededuction,
    longTermCapitalGains
  );

  //new tax regime

  //newtaxremine 23
  if (taxregime === "FY 2022-2023 (01/04/2022 to 31/03/2023)") {
    outputnewtaxregime = newtaxslabprocessor23(
      surcharge,
      incomebeforededuction,
      longTermCapitalGains

    );

    console.log("newregimeoutputpostdeductionandtaxslab FY23 : ",outputnewtaxregime)
    //newtaxregime24
  } else if (taxregime === "FY2023-2024 (01/04/2023 to 31/03/2024)") {
    deductionnewregime = newdeduct(inputone);
    console.log("newregimededuction FY24 : ",outputnewtaxregime)
    outputnewtaxregimetaxableincome =
      incomebeforededuction - deductionnewregime;

      console.log("incomeafterdeductionnewregime FY24 : ",outputnewtaxregimetaxableincome)
    outputnewtaxregime = newtaxslabprocessor24(
      surcharge,
      outputnewtaxregimetaxableincome,
      longTermCapitalGains
    );

    console.log("taxslabprocessing FY24 : ",outputnewtaxregimetaxableincome)
  }

  const monthlyposttaxold =
    inputone.ctc/ 12 -
    outputoldtaxregime/ 12 -
    inputone.epfcompany / 12 -
    inputtwo.employerNpsContribution / 12;

    console.log("monthlyposttaxold : ",monthlyposttaxold)
  const monthlyposttaxnew =
    inputone.ctc / 12 -
    outputnewtaxregime / 12 -
    inputone.epfcompany / 12 -
    inputtwo.employerNpsContribution / 12;
    console.log("monthlyposttaxnew : ",monthlyposttaxnew)


  const result = {};
  result.outputnewtaxregime = Math.floor(outputnewtaxregime);
  result.outputoldtaxregime = Math.floor(outputoldtaxregime);
  result.monthlyposttaxold = Math.floor(monthlyposttaxold);
  result.monthlyposttaxnew = Math.floor(monthlyposttaxnew);

  return result;
};

export default taxmain;
