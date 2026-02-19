document.getElementById('send-btn').addEventListener('click', function () {
    const transferNo = getInputValue('transfer-num')
    if (transferNo.length != 11) {
        alert('invalid transfer number')
        return;
    }
    const AmountB = getInputValue('transfer-amount');
    const accBalane = getBalace();
    const newAmount = accBalane - Number(AmountB)
    console.log(newAmount)

    if (newAmount < 0) {
        alert('incefficient balane');
        return;
    }

    const accPin = getInputValue('transfer-pin');
    if (accPin == '5263') {
        alert('sendmoney succecfully');
        setBalance(newAmount);
        const history = document.getElementById('history-container');

        const newDiv = document.createElement('div');

        newDiv.innerHTML = `
           <div class="history-card w-11/12 mx-auto rounded-lg  bg-base-100 py-3 flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <img src="./assets/opt-3.png"  class="w-6 h-6" alt="">
                    <h3>Send Money <br> <span>${new Date().toLocaleString()}</span></h3>
                    
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