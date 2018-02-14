/**
 * Позволяет считать сумму денег на вкладах с разными условиями.
 * @author Sergey Kostin
 * 
 * @param {number} sumDeposit - начальная сумма депозита;
 * @param {number} percent - процент годовых (число от 0 до 100);
 * @param {number} termOfDeposit - срок вклада в месяцах;
 * @param {number} isCapitalize - с капитализацией процентов или нет (булево значение).
 * @returns {number}
 */
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

 console.assert(calculateDeposit(100000, 10, 12, true) === 110471);