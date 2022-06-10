/* Diposit and Balance */

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // getting deposit input
    const newDepositInput = document.getElementById("deposit-input");
    const newDepositAmount = parseFloat(newDepositInput.value);

    // getting deposit total value
    const dipositTotal = document.getElementById("deposit-total");
    const previousDepositAmountText = dipositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    // updating deposit display value

    const depositDisplay = newDepositAmount + previousDepositAmount;
    dipositTotal.innerText = depositDisplay;

    //  getting Balance input

    const newBalanceInput = document.getElementById("deposit-input");
    const newBalanceAmount = parseFloat(newBalanceInput.value);

    // getting balance total value
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);

    // updating balance display value

    const balanceDisplay = newBalanceAmount + previousBalanceAmount;
    balanceTotal.innerText = balanceDisplay;

    // empty deposit input section

    newDepositInput.value = "";
  });

/* Withdraw and Balance */
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // getting withdraw input
    const newWithdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmount = parseFloat(newWithdrawInput.value);
    console.log(newWithdrawAmount);

    // getting withdraw total value
    const withdrawTotal = document.getElementById("withdraw-total");

    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

    // updating withdraw display value

    const withdrawDisplay = newWithdrawAmount + previousWithdrawAmount;
    withdrawTotal.innerText = withdrawDisplay;

    //  getting Balance input

    const newBalanceInput = document.getElementById("withdraw-input");
    const newBalanceAmount = parseFloat(newBalanceInput.value);

    // getting balance total value
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);
    console.log(previousBalanceAmount);

    // updating balance display value

    const balanceDisplay = previousBalanceAmount - newBalanceAmount;
    balanceTotal.innerText = balanceDisplay;

    // empty withdraw input section

    newWithdrawInput.value = "";
  });
