document.getElementById('withdraw-btn').addEventListener('click', function () {
    const numberEelement = getInputValue('cashout-num');
    if (numberEelement.length != 11) {
        alert('invalid number')
        return;
    }
    const amountInput = document.getElementById('cashout-amount');
    const amountElement = amountInput.value;
    console.log(amountElement)
    const AmountB = getBalace();
    const newAmount = AmountB - Number(amountElement)
    if (newAmount < 0) {
        alert('inceficient balace')
        return;
    }
    const inputPin = document.getElementById('cashout-pin');
    const pin = inputPin.value;
    if (pin == '5263') {
        alert('cashout successful');
        setBalance(newAmount);
        const history = document.getElementById('history-container');

        const newDiv = document.createElement('div');

        newDiv.innerHTML = `
           <div class="history-card w-11/12 mx-auto rounded-lg  bg-base-100 py-3 flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <img src="./assets/opt-2.png"  class="w-6 h-6" alt="">
                    <h3>cashout <br> <span>${new Date().toLocaleString()}</span></h3>
                    
                </div>
                -${amountElement}
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
        history.append(newDiv);

    } else {
        alert('cashout failed');
        return;
    }

})