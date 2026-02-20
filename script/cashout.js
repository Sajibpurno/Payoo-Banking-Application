//machine.js e function use kore  shorcut-
document.getElementById('cashout-btn').addEventListener('click', function(){
    //1- get the agent no. & validate
    const cashoutNumber = getvalueFromInput('cashout-number');
    if(cashoutNumber.length != 11){
        alert("Invalid number")
        return;
    }
    
    //2- get the amount , validate , convert to nu.
    const cashoutAmount = getvalueFromInput('cashout-amount');

    //3- get the current balance, validate , convert to nu.
    const currentBalance = getBalance();

    //4- calculate the balance
    const newBalance = currentBalance - Number(cashoutAmount);
    
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    //5- get the pin and  verify
    const Pin = getvalueFromInput('cashout-pin');
    if(Pin === '1212'){
        //5-1-true: show alert > srt  balance.
        alert("cashout-sucessfull");
        console.log('new balance-',newBalance);//new balannce sob tik takle dekabe sudhu
        //document.getElementById('balance').innerText = newBalance;
        setBalance(newBalance);
        
        //1.hictory-con ke dore niye ashbo
        const history = document.getElementById('history-con');

        //2.new div create korbo
        const newHistory = document.createElement('div');

        //3.new div innerHTML add korbo
        newHistory.innerHTML =`
        <div class="transaction-card p-6 bg-base-100 rounded-lg mb-5">
        Cashout ${cashoutAmount} Tk Successful from-${cashoutNumber}, at ${new Date()}
        </div>
        `
        //4.history-con ee new dib append korbo
        history.append(newHistory);
    }
    else{
        //5-2-true: show anerror alert > return > srt  balance.
        alert("Invalid Pin");
        return;
    }
})

//document.getElementById('cashout-btn').addEventListener('click', function(){    
    //1- get the agent no. & validate
    // const cashoutNumberInput = document.getElementById('cashout-number');
    // const cashoutNumber = cashoutNumberInput.value;
    // console.log(cashoutNumber);

    //2- get the amount , validate , convert to nu.
    // const cashoutAmountInput = document.getElementById('cashout-amount');
    // const cashoutAmount = cashoutAmountInput.value;
    // console.log(cashoutAmount);
    
    // //3- get the current balance, validate , convert to nu.
    // const balanceElement = document.getElementById('balance');
    // const balance = balanceElement.innerText;
    // console.log(balance);

    //4- calculate the balance
    // const newBalance = Number(balance) - Number(cashoutAmount);
    // if(newBalance < 0){
    //     alert("Invalid Amount");
    //     return;
    // }

    //5- get the pin and  verify
    // const cashoutPinInput = document.getElementById('cashout-pin');
    // const Pin = cashoutPinInput.value;
    // const Pin = getvalueFromInput('cashout-pin');
    // if(Pin === '1212'){
    //     //5-1-true: show alert > srt  balance.
    //     alert("cashout-sucessfull");
    //     console.log('new balance-',newBalance);//new balannce sob tik takle dekabe sudhu
    //     balanceElement.innerText = newBalance;
    // }
    // else{
    //     //5-2-true: show anerror alert > return > srt  balance.
    //     alert("Invalid Pin");
    //     return;
    // }
// })