/*
//declaring variables
let num1;
let num2;
let name;

//assigning values
num1 = 20;
num2 = 30;
name = "Posco";

//performing calculations
let result = num1 + num2;
console.log(result);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//printing message

let message = "Hello " + name + ", the result of num1 + num2 is " + result;
console.log(message);

*/
/*

let income = parseInt(prompt("What is your income?"));
let dailyExpenses = parseInt(prompt("What do you spend daily?"));
let noOfDays = parseInt(prompt("How many days do you oble?"));
let monthlyExpenses = dailyExpenses * noOfDays;
let savings = income * 0.20;
let balance = income - (monthlyExpenses + savings);
let message = `You received ${income}, used ${monthlyExpenses}, saved ${savings} and has ${balance} left. You're a rich kid o`
alert(message); 
*/

/*
let incomeInput = prompt("What is your income?");
console.log("Income input:", incomeInput);
let income = parseInt(incomeInput);

let dailyExpensesInput = prompt("What do you spend daily?");
console.log("Daily expenses input:", dailyExpensesInput);
let dailyExpenses = parseInt(dailyExpensesInput);

let noOfDaysInput = prompt("How many days do you use your salary?");
console.log("Days input:", noOfDaysInput);
let noOfDays = parseInt(noOfDaysInput);

console.log("Parsed values:", { income, dailyExpenses, noOfDays });

let monthlyExpenses = dailyExpenses * noOfDays;
let savings = income * 0.20;
let balance = income - (monthlyExpenses + savings);

let message = `You received ${income}, used ${monthlyExpenses}, saved ${savings}, and have ${balance} left. You're a rich kid o!`;
alert(message);
*/













/*
const account1 = {
    name : "Nyipoji",
    balance : 5000,
    currency : "USD"
};

const account2 ={
    name : "Fatma",
    balance : 10000,
    currency : "USD"
};

const account3 = {
    name : "Wince",
    balance : 15000,
    currency : "USD"
};


const account4 = {
    name : "Stephanie",
    balance : 20000,
    currency : "USD"
};

let depositAmount = 2000;
account1.balance += depositAmount; //account1.balance = account1.balance + depositAmount
console.log(account1.balance);


let withdrawalAmount = 1000;
if(account2.balance < withdrawalAmount){
 console.log("Insufficient funds for withdrawal!!")
}else{
    console.log("Withdrawal Successful!!!")
};

let transferAmount = 5000;
if(account3.balance >= transferAmount){
    account1.balance += transferAmount;
    account3.balance -= transferAmount;
    console.log("Transfer successful!")
    console.log(account1.balance, "account1")
    console.log(account3.balance, "account3")
}else{
    console.log("Transfer failed!")
}

if(account1.balance > 0){
    console.log(" Nyipojis account is active")
}else if(account1.balance == 0){
    console.log("Empty")
}else{
    console.log("Overdrawn")
}


if(account2.balance > 0){
    console.log("Active")
}else if(account2.balance == 0){
    console.log("Empty")
}else{
    console.log("Overdrawn")
}

if(account3.balance > 0){
    console.log("Active")
}else if(account3.balance == 0){
    console.log("Empty")
}else{
    console.log("Overdrawn")
}
*/



//Create 4 accounts as objects
const account1 = {
    name : "Nyipoji",
    balance : 5000,
    currency : "NGN",
    type: "savings"
   
};
 
const account2 ={
    name : "Fatma",
    balance : 10000,
    currency : "USD",
    type:"fixed"
};
 
const account3 = {
    name : "Wince",
    balance : 150000,
    currency : "USD",
    type: "student"
};
 
 
const account4 = {
    name : "Stephanie",
    balance : 20000,
    currency : "USD",
    type: "checking"
};
 
//Simulate deposits
let depositAmount1 = 2000;
let depositAmount2 = 4000;
account1.balance += depositAmount1; //account1.balance = account1.balance + depositAmount
console.log(account1.balance);
 
account2.balance += depositAmount2;
console.log(account2.balance);
 
 
//Simulate withdrawals
let withdrawalAmount = 100000;
if(account4.balance < withdrawalAmount){
 console.log(`Withdrawal denied for ${account4.name}: insufficient funds`)
}else{
    console.log("Withdrawal Successful!!!")
};
 
if(account3.balance < withdrawalAmount){
 console.log(`Withdrawal denied for ${account3.name}: insufficient funds`)
}else{
    console.log("Withdrawal Successful!!!")
};
 
//Transfers
let transferAmount = 5000;
if(account3.balance >= transferAmount){
    if (account3.currency === account1.currency){
    account1.balance += transferAmount;
    account3.balance -= transferAmount;
    console.log("Transfer successful!")
    console.log(account1.balance, "account1")
    console.log(account3.balance, "account3")
}else{
    console.log("Transfer failed: currency mismatch!")
}
}
 
 
//Monthly maintenance
if (account1.type === "savings") {    
  // 2% interest
  let interest = account1.balance * 0.02;
  account1.balance += interest;
  console.log("Interest added:", interest);
  console.log("New balance:", account1.balance);
} if (account4.type === "checking") {
  // Deduct flat fee of 50
  account4.balance -= 50;
  console.log("Maintenance fee deducted: 50");
  console.log("New balance:", account4.balance);
}
 
 
if (account1.balance > account2.balance) {
 if (account1.balance > account3.balance) {
   if (account1.balance > account4.balance) {
     console.log(account1.name + " has the highest balance");
   } else {
     console.log(account4.name + " has the highest balance");
   }  
 } else {
   if (account3.balance > account4.balance) {
     console.log(account3.name + " has the highest balance");
   } else {
     console.log(account4.name + " has the highest balance");
   }
 }
} else {
 if (account2.balance > account3.balance) {
   if (account2.balance > account4.balance) {
     console.log(account2.name + " has the highest balance");
   } else {
     console.log(account4.name + " has the highest balance");
   }
 } else {
   if (account3.balance> account4.balance) {
     console.log(account3.name + " has the highest balance");
   } else {
     console.log(account4.name + " has the highest balance");
   }
 }
}
 
 
if (account1.balance < account2.balance) {
 if (account1.balance < account3.balance) {
   if (account1.balance < account4.balance) {
     console.log(account1.name + " has the lowest balance");
   } else {
     console.log(account4.name + " has the lowest balance");
   }  
 } else {
   if (account3.balance < account4.balance) {
     console.log(account3.name + " has the lowest balance");
   } else {
     console.log(account4.name + " has the lowest balance");
   }
 }
} else {
 if (account2.balance < account3.balance) {
   if (account2.balance < account4.balance) {
     console.log(account2.name + " has the lowest balance");
   } else {
     console.log(account4.name + " has the lowest balance");
   }
 } else {
   if (account3.balance< account4.balance) {
     console.log(account3.name + " has the lowest balance");
   } else {
     console.log(account4.name + " has the lowest balance");
   }
 }
}
 
 
//Account status check
 
if(account1.balance > 0){
   
    console.log(`${account1.name} is active`)
}else if(account1.balance == 0){
    console.log(`${account1.name} is empty`)
}else{
    console.log(`${account1.name} is overdrawn`)
}
 
if(account2.balance > 0){
    console.log(`${account2.name} is active`)
}else if(account2.balance == 0){
    console.log(`${account2.name} is empty`)
}else{
    console.log(`${account2.name} is overdrawn`)
}
 
if(account3.balance > 0){
    console.log(`${account3.name} is active`)
}else if(account3.balance == 0){
    console.log(`${account3.name} is empty`)
}else{
    console.log(`${account3.name} is overdrawn`)
}
 
if(account4.balance > 0){
    console.log(`${account4.name} is active`)
}else if(account4.balance == 0){
    console.log(`${account4.name} is empty`)
}else{
    console.log(`${account4.name} is overdrawn`)
};
 
//Transactional summary
// Account 1
 
let status1;
if (account1.balance > 0) {
 status1 = "Active";
} else {
 if (account1.balance === 0) {
   status1 = "Empty";
 } else {
   status1 = "Overdrawn";
 }
}
 
console.log(account1.name + " | Balance: " + account1.balance + " " + account1.currency + " | Status: " + status1);
 
// Account 2
 
let status2;
if (account2.balance > 0) {
 status2 = "Active";
} else {
 if (account2.balance === 0) {
   status2 = "Empty";
 } else {
   status2 = "Overdrawn";
 }
}
 
console.log(account2.name + " | Balance: " + account2.balance + " " + account2.currency + " | Status: " + status2);
 
// Account 3
 
let status3;
if (account3.balance > 0) {
 status3 = "Active";
} else {
 if (account3.balance === 0) {
   status3 = "Empty";
 } else {
   status3 = "Overdrawn";
 }
}
console.log(account3.name + " | Balance: " + account3.balance + " " + account3.currency + " | Status: " + status3);
 
// Account 4
let status4;
if (account4.balance > 0) {
 status4 = "Active";
} else {
 if (account4.balance === 0) {
   status4 = "Empty";
 } else {
   status4 = "Overdrawn";
 }
}
console.log(account4.name + " | Balance: " + account4.balance + " " + account4.currency + " | Status: " + status4);
 
 
 
 
 
 
 
 
 