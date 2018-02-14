var calculateDeposit = function (sumDeposit, percent, termOfDeposit, isCapitalize) {
    var totalDeposit;
    var sumPercent = 0;
        if (isCapitalize) {
          for (var i = 0; i < termOfDeposit; i++) {
            sumPercent = sumDeposit * (percent / 12 * 0.01);
            sumDeposit += sumPercent;
          }
        } else {
        sumPercent += sumDeposit * (percent / 12 * termOfDeposit * 0.01);
        sumDeposit += sumPercent;
        }
    
    totalDeposit = Math.round(sumDeposit);
    
    return totalDeposit;
  }

 var conditionOne = calculateDeposit(100000, 10, 12, true);

  console.log(conditionOne);