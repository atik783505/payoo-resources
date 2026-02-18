document.getElementById('withdraw-btn').addEventListener('click', function () {
    const numberInput = document.getElementById('cashout-num');
    const numberEelement = numberInput.value;
    if(numberEelement.length != 11){
        alert('invalid number')
        return;
    }
    const amountInput = document.getElementById('cashout-amount');
    const amountElement =amountInput.value ;
    console.log(amountElement)
    const Amount = document.getElementById('amount');
    const AmountB = Amount.innerText
    const newAmount = Number(AmountB) - Number(amountElement)
    if(newAmount < 0){
        alert('inceficient balace')
        return;
    }
    const inputPin = document.getElementById('cashout-pin');
    const pin = inputPin.value;
    if(pin == '5263'){
        alert('cashout succesful');
        Amount.innerText = newAmount;

    }else{
        alert('cashout failed');
        return;
    }
    
})