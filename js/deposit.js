document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the deposit amount
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //get the deposit current ammount
    //for non input(element other than text, use .innertext)
    //step 7 
    //clear the deposit field
    depositField.value = '';

       if(isNaN(newDepositAmount)){
           alert('Vondami bad diye koto tk dhukabi seta bol !!!');
           return;
        }

    const depositTotalElement = document.getElementById('deposit-total');
    const preDepositTotalString = depositTotalElement.innerText;
    const preDepositTotal = parseFloat(preDepositTotalString);
    //update deposite ammount
    const currentDepositTotal = preDepositTotal + newDepositAmount;
    //get ballamce current total
    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString);

    //step-6: calculate total balance
    const currentBalanceTotal = preBalanceTotal + newDepositAmount;
    //set the balanceTotal 
    balanceTotalElement.innerText = currentBalanceTotal;

    //input feild blank
    depositTotalElement.innerText = currentDepositTotal;

})
