document.getElementById('payBill-btn').addEventListener('click',function(){
    //get selsct pay
    const billMethod = getvalueFromInput('payBill-back');
    if(billMethod === 'Select back'){
        alert('Plese select the bill method');
        return;
    }
    //get user ac no.
    const billerAcN0 = getvalueFromInput('payBill-number');
    if(billerAcN0.length != 11){
        alert('Invalid number');
        return;
    }
    //get amount
    const amountToPay = getvalueFromInput('payBill-amount');
    const amount = Number(amountToPay);
    if(amount === 0){
        alert('Invalid Amount');
        return;
    }
    //get crnt balance
    const currentBalance = getBalance();

    //calculate the balance
    const newBalance = currentBalance - Number(amountToPay);
    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }
    //set pin
    const pin = getvalueFromInput('payBill-pin');
    if(pin == '1212'){
        alert(`Pay Bill successful to ${billMethod} at ${new Date()} `);
        console.log('new balance-',newBalance);
        setBalance(newBalance);

        //history set
        const history = document.getElementById('history-con');
        //create div
        const newHistory = document.createElement('div');

        //3.new div innerHTML add korbo
        newHistory.innerHTML =`
        <div class="transaction-card p-5 bg-base-100 rounded-lg ">
        Pay Bill ${amountToPay}Tk Successfully To ${billerAcN0} at ${new Date()}</div>
        `
        //history-con ee new dib append korbo
        history.append(newHistory);
    }
    else{
        alert('Pay Bill Failed(Invalid Pin)');
        return;
    }
})