document.getElementById('login-btn').addEventListener('click', function(){
    //1.get the mbl num. input
const number1 = document.getElementById('input-num1');
const contactnum = number1.value;
console.log(contactnum);
//console.log('hi');
//2. get the pin input
const pin1 = document.getElementById('input-pin1');
const pincode1 = pin1.value;
console.log(pincode1);

if(contactnum == '01306909153' && pincode1== '1212'){
        3//.match pin and num.
       alert('login success');

       window.location.assign("home.html");
    }
    else{
        alert('login failed');
        //3-1 false:::>> alert > return
    }
})