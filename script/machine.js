//machine id- input value
// function getvalueFromInput(id){
//     const input = document.getElementById(id);
//     const value = input.value;
//     console.log(id, value);
//     return value;
// }
function getvalueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
//machine-> balance
// function getBalance(){
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log("Current balance",Number(balance));
//     return Number(balance);
// }
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log('current balance', Number(balance));
    return Number(balance);
}

// machine value -> set Balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

//machine id > hide all > show id
function showOnly(id){
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const sendmoney = document.getElementById('sendMoney');
    const getBonus = document.getElementById('getBonus');
    const paybill = document.getElementById('payBill');
    const history = document.getElementById('history');
    //console.log(`add Money- ${addmoney}, Cashout- ${cashout}`);
    //hide all-
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    sendMoney.classList.add('hidden');
    history.classList.add('hidden');
    getBonus.classList.add('hidden');
    paybill.classList.add('hidden');
    // id ala element ke show koro just-
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');

}