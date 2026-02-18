document.getElementById('send-btn').addEventListener('click', function(){
    const transferNo = getInputValue('transfer-num')
    if(transferNo.length != 11){
        alert('invalid transfer number')
        return ;
    }
    const AmountB = getInputValue('transfer-amount');
    const accBalane = getBalace();
    const newAmount = accBalane - Number(AmountB)
    console.log(newAmount)
    
    if(newAmount < 0){
        alert('incefficient balane');
        return;
    }

    const accPin = getInputValue('transfer-pin');
    if(accPin == '5263'){
        alert('sendmoney succecfully');
        setBalance(newAmount);
    }else{
        alert('invalid pin')
        return;
    }
})