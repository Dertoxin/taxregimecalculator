const regulartaxcal = (incomebeforededuction) => {
  let tax = 0;

  if (incomebeforededuction <= 300000) {
    tax = 0;
  } else if (
    incomebeforededuction > 300000 &&
    incomebeforededuction <= 600000
  ) {
    tax = (incomebeforededuction - 300000) * 0.05;
  } else if (
    incomebeforededuction > 600000 &&
    incomebeforededuction <= 900000
  ) {
    tax = 15000 + (incomebeforededuction - 600000) * 0.1;
  } else if (
    incomebeforededuction > 900000 &&
    incomebeforededuction <= 1200000
  ) {
    tax = 45000 + (incomebeforededuction - 900000) * 0.15;
  } else if (
    incomebeforededuction > 1200000 &&
    incomebeforededuction <= 1500000
  ) {
    tax = 90000 + (incomebeforededuction - 1200000) * 0.2;
  } else if (incomebeforededuction > 1500000) {
    tax = 150000 + (incomebeforededuction - 1500000) * 0.3;
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
  } else if (surcharge > 20000000) {
    finaltotaltax = educationcess * 1.25;
  }

  return finaltotaltax;
};



const newtaxslabprocessor24 = (

  surcharge,
  incomebeforededuction,
  longTermCapitalGains
) => {

    let totaltax
  if (surcharge > 5000000) {
    const tax = regulartaxcal(incomebeforededuction);
    const longtermcapgaintax = longtermstocktax(longTermCapitalGains);
    const educationcess = educationcess(tax, longtermcapgaintax);
    totaltax = hni(educationcess);
  } else {
    const tax = regulartaxcal(incomebeforededuction);
    const longtermcapgaintax = longtermstocktax(longTermCapitalGains);
    const educationcess = educationcess(tax, longtermcapgaintax);
    totaltax = educationcess;
  }

  return totaltax;
};


export default newtaxslabprocessor24;