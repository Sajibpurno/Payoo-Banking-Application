// console.log('hi beta ki kbr');
document.getElementById('sendMoney-btn').addEventListener('click',function(){
    
    //get user ac no.
    const userAcNo = getvalueFromInput('sendMoney-number');
    if(userAcNo.length != 11){
        alert('Invalid number');
        return;
    }
    //get amount
    const sendMoneyAmount = getvalueFromInput('sendMoney-amount');

    //get current balance

     const currentBalance = getBalance();

    // //calculate the balance
    const newBalance = currentBalance - Number(sendMoneyAmount);

    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }
    //pin
    const pin = getvalueFromInput('sendMoney-pin');
    if(pin === '1212'){
        alert("Send Money sucessfull");
        console.log('new balance-',newBalance);
        setBalance(newBalance);

        //history-con er dore ano
        const history = document.getElementById('history-con');

        //new div banabo
        const newHistory = document.createElement('div');

        //3.new div innerHTML add korbo
        newHistory.innerHTML =`
        <div class="transaction-card p-5 bg-base-100 rounded-lg "> Send Money ${sendMoneyAmount}Tk successfully To ${userAcNo} at ${new Date()}
        </div>
        `
        //history-con ee new dib append korbo
        history.append(newHistory);
    }
    else{
        alert("Invalid Pin");
        return;
    }
});