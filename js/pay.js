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
        const history = document.getElementById('history-container');

        const newDiv = document.createElement('div');

        newDiv.innerHTML = `
           <div class="history-card w-11/12 mx-auto rounded-full  bg-base-100 py-3 flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <img src="./assets/opt-5.png"  class="w-6 h-6" alt="">
                    <h3>pay bill <br> <span>${new Date().toLocaleString()}</span></h3>
                    
                </div>
                -${AmountB}
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
        history.append(newDiv);
    } else {
        alert('invalid pin')
        return;
    }
})