document.getElementById('withdraw-btn').addEventListener('click', function () {
    const numberEelement = getInputValue('cashout-num');
    if(numberEelement.length != 11){
        alert('invalid number')
        return;
    }
    const amountInput = document.getElementById('cashout-amount');
    const amountElement =amountInput.value ;
    console.log(amountElement)
    const AmountB = getBalace();
    const newAmount = AmountB - Number(amountElement)
    if(newAmount < 0){
        alert('inceficient balace')
        return;
    }
    const inputPin = document.getElementById('cashout-pin');
    const pin = inputPin.value;
    if(pin == '5263'){
        alert('cashout successful');
        setBalance(newAmount)

    }else{
        alert('cashout failed');
        return;
    }
    
})