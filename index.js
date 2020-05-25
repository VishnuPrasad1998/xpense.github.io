const hea = document.querySelector("#headin");
const inputsub = document.querySelector("#ip2");
const inputele = document.querySelector("#ip");
const expenseTable = document.querySelector("#expenseTable");


let totalExpense = 0;

hea.textContent = `Total: ${totalExpense} `;

const allExpense = [];


function addExpense(){
  const expenseItem = {};
  const tm = inputele.value;
  const td = inputsub.value;

  const exp = parseInt(tm)

  expenseItem.desc = td;
  expenseItem.amount = tm;

  allExpense.push(expenseItem)



  totalExpense+=exp
  hea.textContent = `Total: ${totalExpense} `;

  const allExpensehtml = allExpense.map(expense => {
    return `
    <li class="list-group-item list-group-item-action list-group-item-dark"><b>₹${expense.amount}</b> for <b>${expense.desc}</b></li>`
  });

const joinedall = allExpensehtml.join("");

expenseTable.innerHTML = joinedall;
}

const element = document.querySelector("#btnSelector");

element.addEventListener("click", addExpense, false);
