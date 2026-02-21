document.getElementById('getBonus-btn').addEventListener('click',function(){
    //coupon tare doro
    const coupon = getvalueFromInput('getBonus-number');
    const coupons = {
        "MOYNA100": 1000,
        "BONUS50": 50,
        "RADHE143": 5000
    };
    //current balance get
    const currentBalance = getBalance();

    //calculate the balance
    if(coupon in coupons){
        const bonusAmount = coupons[coupon];
        const newBalance = currentBalance + bonusAmount;
        console.log("New Balance:", newBalance);
        setBalance(newBalance);
        alert("Congratulation You Get Your Bonus");

        //update history
        const history = document.getElementById('history-con');

        //new div banabo
        const newHistory = document.createElement('div');

        //3.new div innerHTML add korbo
        newHistory.innerHTML =`
        <div class="transaction-card p-5 bg-base-100 rounded-lg "> Get Bonus ${bonusAmount}Tk successfully Using Cupon-${coupon} at ${new Date()}
        </div>
        `
        //history-con ee new dib append korbo
        history.append(newHistory);
    }
else{
    alert("Invalid Coupon ❌");
}
    
})