function getInputValue(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getBalace(){
    const BalnceInput = document.getElementById('amount');
    const BalnceElement = BalnceInput.innerText;
    return Number(BalnceElement);
}

function setBalance(value){
    const BalnceInput = document.getElementById('amount');
    BalnceInput.innerText = value;
}

function showAll(id){
    const addmoney = document.getElementById('add-money')
    const cashout = document.getElementById('cash-out')
    const sendmoney = document.getElementById('transfer-money')
    const payment = document.getElementById('pay-bill')
    const bonus = document.getElementById('bonus')
    const transection = document.getElementById('history')

    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    sendmoney.classList.add('hidden');
    payment.classList.add('hidden');
    bonus.classList.add('hidden');
    transection.classList.add('hidden')
    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
    
}