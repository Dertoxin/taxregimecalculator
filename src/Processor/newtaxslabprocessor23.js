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
    incomebeforededuction <= 750000
  ) {
    tax = 12500 + (incomebeforededuction - 500000) * 0.1;
  } else if (
    incomebeforededuction > 750000 &&
    incomebeforededuction <= 1000000
  ) {
    tax = 37500 + (incomebeforededuction - 750000) * 0.15;
  } else if (
    incomebeforededuction > 1000000 &&
    incomebeforededuction <= 1250000
  ) {
    tax = 75000 + (incomebeforededuction - 1000000) * 0.2;
  } else if (
    incomebeforededuction > 1250000 &&
    incomebeforededuction <= 1500000
  ) {
    tax = 125000 + (incomebeforededuction - 1250000) * 0.25;
  } else if (incomebeforededuction > 1500000) {
    tax = 187500 + (incomebeforededuction - 1500000) * 0.3;
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

const educationcess = (tax, longtermcapgaintax) => {
  let totaltaxpluseducationcess = (longtermcapgaintax + tax) * 1.04;

  return totaltaxpluseducationcess;
};

const hni = (surcharge, educationcess) => {
  let finaltotaltax = 0;
  if (surcharge > 5000000 && surcharge < 10000000) {
    finaltotaltax = educationcess * 1.1;
  } else if (surcharge > 10000000 && surcharge < 20000000) {
    finaltotaltax = educationcess * 1.15;
  } else if (surcharge > 20000000 && surcharge < 50000000) {
    finaltotaltax = educationcess * 1.25;
  } else if (surcharge > 50000000) {
    finaltotaltax = educationcess * 1.37;
  }

  return finaltotaltax;
};

const newtaxslabprocessor23 = (
  surcharge,
  incomebeforededuction,
  longTermCapitalGains
) => {
  let totaltax;
  if (surcharge > 5000000) {
    const tax = regulartaxcal(incomebeforededuction);
    const longtermcapgaintax = longtermstocktax(longTermCapitalGains);
    const educationcessval = educationcess(tax, longtermcapgaintax);
    totaltax = hni(educationcessval);
  } else {
    const tax = regulartaxcal(incomebeforededuction);
    const longtermcapgaintax = longtermstocktax(longTermCapitalGains);
    const educationcessval = educationcess(tax, longtermcapgaintax);
    totaltax = educationcessval;
  }

  return totaltax;
};

export default newtaxslabprocessor23;
