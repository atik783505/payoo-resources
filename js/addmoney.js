document.getElementById('addmoney-btn').addEventListener('click', function(){
    const bankb = getInputValue('bank');
    if(bankb == 'Select back'){
        alert('please select a bank')
        return;
    }
    const accNo = getInputValue('addmoney-num')
    if(accNo.length != 11){
        alert('invalid acc no')
        return ;
    }
    const AmountB = getInputValue('addmoney-amount');
    const accBalane = getBalace();
    const newAmount = accBalane + Number(AmountB)
    
    if(newAmount < 0){
        alert('insufficient balance');
        return;
    }

    const accPin = getInputValue('addmoney-pin');
    if(accPin == '5263'){
        alert('payment successfully');
        setBalance(newAmount);
    }else{
        alert('invalid pin')
        return;
    }
})