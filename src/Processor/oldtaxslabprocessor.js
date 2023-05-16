const regulartaxcal = (incomebeforededuction) => {
  let tax = 0;

  if (incomebeforededuction <= 250000) {
    tax = 0;
  } else if (
    incomebeforededuction > 250000 &&
    incomebeforededuction <= 500000
  ) {
    tax = (incomebeforededuction - 250000) * 0.05;
  } else if (
    incomebeforededuction > 500000 &&
    incomebeforededuction <= 1000000
  ) {
    tax = 12500 + (incomebeforededuction - 500000) * 0.2;
  } else if (incomebeforededuction > 1000000) {
    tax = 112500 + (incomebeforededuction - 1500000) * 0.3;
  }

  return tax;
};

const longtermstocktax = (longTermCapitalGains) => {
  let longtermcapgaintax = 0;
  if (longTermCapitalGains >= 100000) {
    longtermcapgaintax = (longTermCapitalGains - 100000) * 0.1;
  } else {
    longtermcapgaintax = 0;
  }
  return longtermcapgaintax;
};

const educationcesscal = (tax, longtermcapgaintax) => {
  let totaltaxpluseducationcess = (longtermcapgaintax + tax) * 1.04;
  return totaltaxpluseducationcess;
};

const hni = (surcharge, educationcessval) => {
  let finaltotaltax = 0;
  if (surcharge > 5000000 && surcharge < 10000000) {
    finaltotaltax = educationcessval * 1.1;
  } else if (surcharge > 10000000 && surcharge < 20000000) {
    finaltotaltax = educationcessval * 1.15;
  } else if (surcharge > 20000000 && surcharge < 50000000) {
    finaltotaltax = educationcessval * 1.25;
  } else if (surcharge > 50000000) {
    finaltotaltax = educationcessval * 1.37;
  }

  return finaltotaltax;
};

const oldregimetax = (
  surcharge,
  incomebeforededuction,
  longTermCapitalGains
) => {
  let totaltax;
  if (surcharge > 5000000) {
    const tax = regulartaxcal(incomebeforededuction);
    const longtermcapgaintax = longtermstocktax(longTermCapitalGains);
    const educationcessval = educationcesscal(tax, longtermcapgaintax);
    totaltax = hni(surcharge, educationcessval);
  } else {
    const tax = regulartaxcal(incomebeforededuction);
    const longtermcapgaintax = longtermstocktax(longTermCapitalGains);
    const educationcesval = educationcesscal(tax, longtermcapgaintax);
    totaltax = educationcesval;
  }

  return totaltax;
};

export default oldregimetax;
