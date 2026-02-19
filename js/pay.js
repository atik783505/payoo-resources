document.getElementById('pay-btn').addEventListener('click', function () {
    const payM = getInputValue('pay-method')
    if (payM == 'Select back') {
        alert('please select a payment method');
        return;
    }
    const accNo = getInputValue('biller-num')
    if (accNo.length != 11) {
        alert('invalid biller acc no')
        return;
    }
    const AmountB = getInputValue('pay-amount');
    const accBalane = getBalace();
    const newAmount = accBalane - Number(AmountB)

    if (newAmount < 0) {
        alert('insufficient balance');
        return;
    }

    const accPin = getInputValue('pay-pin');
    if (accPin == '5263') {
        alert('payment successfully');
        setBalance(newAmount);
    } else {
        alert('invalid pin')
        return;
    }
})