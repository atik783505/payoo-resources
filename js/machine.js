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

    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
    
}