let otpDigits = [1, 2, 3,4,5,6,7,8,9];

let button = document.getElementById("btn");

const otp = document.querySelector(".otp");

button.addEventListener("click", generateOtp)

function generatOtp () {


let newOtp = " ";
    for (let i = 0; i < 6; i++ ) {
        
        newOtp += otpDigits[generateNumber()];

        otp.textContent = newOtp;
    }



}


function generateNumber(){
   return Math.floor(Math.random() * otpDigits.length)
}
