const calculateDeposit = function (sumDeposit, percent, termOfDeposit, isCapitalize) {
    let sumPercent = 0;
        if (isCapitalize) {
          for (var i = 0; i < termOfDeposit; i++) {
            sumPercent = sumDeposit * (percent / 12 * 0.01);
            sumDeposit += sumPercent;
          }
        } else {
        sumPercent += sumDeposit * (percent / 12 * termOfDeposit * 0.01);
        sumDeposit += sumPercent;
        }
    
    const totalDeposit = Math.round(sumDeposit);
    
    return totalDeposit;
  }

 const conditionOne = calculateDeposit(100000, 10, 12, true);

 console.log(conditionOne);
