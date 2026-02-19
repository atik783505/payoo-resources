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
        const history = document.getElementById('history-container');

        const newDiv = document.createElement('div');

        newDiv.innerHTML =`
           <div class="history-card w-11/12 mx-auto rounded-lg  bg-base-100 py-3 flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <img src="./assets/opt-1.png"  class="w-6 h-6" alt="">
                    <h3>Add money <br> <span>${new Date().toLocaleString()}</span></h3>
                    
                </div>
                +${AmountB}
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
        history.append(newDiv);
    }else{
        alert('invalid pin')
        return;
    }
})