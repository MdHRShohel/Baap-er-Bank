   //step 1
   document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step 2
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    //step 7 
    withdrawField.value = '';

    if(isNaN(newWithdrawAmmount)){
        alert('Koto taka bair korbi seta tor bap likhe dibe??');
        return;
    }
    //step 3
    const withdrawTotalElement = document.getElementById('withdraw-ammount');
    const preWithdrawTotalString = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawTotalString);
 
    //step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotal = parseFloat(balanceTotalElement.innerText);

    if(newWithdrawAmmount > preBalanceTotal){
        alert('Tor baap er bank e ato taka nai!!!');
        return;
    }
        //step 4
        const currentWithdrawTotal = preWithdrawTotal + newWithdrawAmmount;
        withdrawTotalElement.innerText = currentWithdrawTotal;
        
    //step 6
    const newBalanceTotal = preBalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;

})