document.getElementById('login-btn').addEventListener('click', function(){
    const loginNumber = document.getElementById('login-number');
    const newNum = loginNumber.value;
    const loginPin = document.getElementById('login-pin');
    const newPin = loginPin.value;
    if(newNum == '01600690954' && newPin == '5263') {
        alert('login successful');
        window.location.assign('home.html')
    }else{
        alert('login failed')
        return;
    }
})