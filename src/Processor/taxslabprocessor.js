function taxslabprocessor(income) {
    let tax = 0;
    if (income <= 250000) {
      tax = 0;
    } else if (income > 250000 && income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income > 500000 && income <= 750000) {
      tax = 12500 + (income - 500000) * 0.1;
    } else if (income > 750000 && income <= 1000000) {
      tax = 37500 + (income - 750000) * 0.15;
    } else if (income > 1000000 && income <= 1250000) {
      tax = 75000 + (income - 1000000) * 0.2;
    } else if (income > 1250000 && income <= 1500000) {
      tax = 125000 + (income - 1250000) * 0.25;
    } else if (income > 1500000) {
      tax = 187500 + (income - 1500000) * 0.3;
    }
    return tax;
  }