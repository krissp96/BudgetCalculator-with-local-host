// function budget(input) {
//   let income1 = Number(input[0]);
//   let income2 = Number(input[1]);
//   let additionalExpenses = Number(input[2]);
//   let electricity = 1667.92;
//   let heating = 1169.89;
//   let aKasse = 0;
//   let phones = 200;
//   let credits = 2684;
//   let rent = 6000;
//   let deposit = 2000;
//   let insurance = 459;
//   let internet = 360;
//   let adobe = 240;
//   let totalIncome = income1 + income2;
//   let totalExpenses =
//     electricity +
//     heating +
//     aKasse +
//     phones +
//     credits +
//     rent +
//     deposit +
//     insurance +
//     internet +
//     adobe +
//     additionalExpenses;

//   let moneyLeft = totalIncome - totalExpenses;
//   console.log(`We will get ${totalIncome.toFixed(2)} dkk.`);
//   console.log(`We will spend ${totalExpenses.toFixed(2)} dkk.`);
//   if (moneyLeft <= 0) {
//     console.log(
//       `We are fucked and we need ${Math.abs(moneyLeft.toFixed(2))} dkk more.`
//     );
//   } else if (totalIncome > moneyLeft) {
//     console.log(
//       `We are good and we have ${moneyLeft.toFixed(2)} dkk left for the month.`
//     );
//   }
// }
// budget(["20402", "2662.50", "2150"]);

function calculate() {
  const incomeInputOne = document.getElementById("salaryOne").value;
  const incomeInputTwo = document.getElementById("salaryTwo").value;
  const incomeResultOutput = document.getElementById("incomeResultFinal");

  const expenseOne = document.getElementById("expense1").value;
  const expenseTwo = document.getElementById("expense2").value;
  const expenseThree = document.getElementById("expense3").value;
  const expenseFour = document.getElementById("expense4").value;
  const expenseResultOutput = document.getElementById("expensesResultFinal");
  const calculatedResultOutput = document.getElementById(
    "calculatedResultFinal"
  );

  const incomeResultParagraph = document.createElement("p");
  const expenseResultParagraph = document.createElement("p");
  const calculatedResultParagraph = document.createElement("p");

  const incomeResult = incomeComb(incomeInputOne, incomeInputTwo);
  const expenseResult = expenseComb(
    expenseOne,
    expenseTwo,
    expenseThree,
    expenseFour
  );
  console.log({ incomeResult });
  console.log({ expenseResult });
  const calculatedResult = calculatedResultComb(incomeResult, expenseResult);

  incomeResultParagraph.innerText = `Income: ${incomeResult.toFixed(2)}`;
  expenseResultParagraph.innerText = `Expense: ${expenseResult.toFixed(2)}`;
  calculatedResultParagraph.innerText = `Money left: ${calculatedResult.toFixed(
    2
  )}`;
  console.log({ incomeResultOutput });
  while (
    incomeResultOutput.firstChild ||
    expenseResultOutput.firstChild ||
    calculatedResultOutput.firstChild
  ) {
    incomeResultOutput.removeChild(incomeResultOutput.firstChild);
    expenseResultOutput.removeChild(expenseResultOutput.firstChild);
    calculatedResultOutput.removeChild(calculatedResultOutput.firstChild);
  }
  incomeResultOutput.appendChild(incomeResultParagraph);
  expenseResultOutput.appendChild(expenseResultParagraph);
  calculatedResultOutput.appendChild(calculatedResultParagraph);
}
function calculatedResultComb(income, expense) {
  return income - expense;
}
function incomeComb(incomeInputOne, incomeInputTwo) {
  return Number(incomeInputOne) + Number(incomeInputTwo);
}
function expenseComb(expenseOne, expenseTwo, expenseThree, expenseFour) {
  const fixedExpenses = 11093.89;

  return (
    Number(expenseOne) +
    Number(expenseTwo) +
    Number(expenseThree) +
    Number(expenseFour) +
    Number(fixedExpenses)
  );
}
