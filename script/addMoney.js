document.getElementById('add-money-btn').addEventListener('click',function(){
    //1.bank ac. get
    const bankAccount = getvalueFromInput('add-money-bank');
    if(bankAccount == 'Select Bank'){
        alert('Plese select the bank');
        return;
    }
    //2.get bank ac. number-
    const acNo = getvalueFromInput('add-money-number');
    if(acNo.length != 11){
        alert('Invalid account number');
        return;
    }
    //3.get amount-
    const amount = getvalueFromInput('add-money-amount');
    const newBalance = getBalance() +  Number(amount);
    //console.log(newBalance);

    //4.pin 
    const pin =getvalueFromInput('add-money-pin');
    if(pin == '1212'){
        alert(`Add Money Successful from-${bankAccount} at ${new Date()}`);//(``) use kore $ mere onek jns kora jay like date show kora type aro onk kichu
        setBalance(newBalance);
        //1.hictory-con ke dore niye ashbo
        const history = document.getElementById('history-con');

        //2.new div create korbo
        const newHistory = document.createElement('div');

        //3.new div innerHTML add korbo
        newHistory.innerHTML =`
        <div class="transaction-card p-6 bg-base-100 rounded-lg mb-5">
        Add Money Successful from-${bankAccount}, acc-no ${acNo} at ${new Date()}
        </div>
        `
        //4.history-con ee new dib append korbo
        history.append(newHistory);

     }
     else{
        alert("Invalid Pin");
        return;
     }
});