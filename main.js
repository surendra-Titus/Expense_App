const incrementBtn = document.querySelector("#increment");
const inputAmount = document.querySelector("#inputAmount");
const totalExpense = document.querySelector("#output-text");
const inputDesc = document.querySelector("#inputDesc");
const items = document.querySelector("#items");
let expenseAmount = 0;
totalExpense.textContent = expenseAmount;
let expenseArray = [];

function clickHandler() {
  let expense = {};
  const textAmount = inputAmount.value;
  const textDesc = inputDesc.value;
  let intExpenseAmout = parseInt(textAmount, 10);
  if (textAmount === "") {
    totalExpense.textContent = `Total expense is : ${expenseAmount}`;
  } else {
    expenseAmount = expenseAmount + intExpenseAmout;
    totalExpense.textContent = `Total expense is : ${expenseAmount}`;
  }
  expense.Desc = textDesc;
  expense.Amount = textAmount;
  expenseArray.push(expense);
  console.log(expenseArray);
  inputAmount.value = "";
  inputDesc.value = "";
  items.innerHTML = (expenseArray.map(expenseArray => `<span> ${expenseArray.Desc} ${expenseArray.Amount}</span>`)).join("");
}
incrementBtn.addEventListener("click", clickHandler, false);
