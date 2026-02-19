document.getElementById('bonus-btn').addEventListener('click', function () {
    const couponCode = getInputValue('coupon-code');
    const accBalane = getBalace();
    const newAmount = accBalane
    if (couponCode.length == 11 && couponCode.startsWith('py-')) {
        alert('coupon redeem sucessfully');
        setBalance(newAmount + 500);
        const history = document.getElementById('history-container');

        const newDiv = document.createElement('div');

        newDiv.innerHTML = `
           <div class="history-card w-11/12 mx-auto rounded-lg  bg-base-100 py-3 flex justify-between items-center">
                <div class="flex gap-4 items-center">
                    <img src="./assets/opt-1.png"  class="w-6 h-6" alt="">
                    <h3>Add money <br> <span>${new Date().toLocaleString()}</span></h3>
                    
                </div>
                +${couponCode}
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
        history.append(newDiv);

    }
    else {
        alert('coupon code invalid')
        return;
    }
})