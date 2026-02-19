document.getElementById('bonus-btn').addEventListener('click', function () {
    const couponCode = getInputValue('coupon-code');
    const accBalane = getBalace();
    const newAmount = accBalane
    if (couponCode.length == 11 && couponCode.startsWith('py-')) {
        alert('coupon redeem sucessfully');
        setBalance(newAmount+500)

    }
    else{
        alert('coupon code invalid')
        return;
    }
})