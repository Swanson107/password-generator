
console.log("Init")

function passGen() {
    if (numInput.value > 64) {
        numInput.value = 64;
    }
    if (numInput.value < 6) {
        numInput.value = 6;
    }
    console.log("GENNING");
    passField.textContent = "";
    newPass = "";
    const num = numInput.value;
    for (i=0;i<num;i++){
        randomPick = genText.charAt(Math.floor(Math.random() * genText.length));
        newPass = newPass + randomPick;
    }
    console.log(newPass)
    passField.textContent = newPass;
}



const genText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let newPass = "";
let passLength = 0;
const passField = document.getElementById('result')
const submitBtn = document.getElementById('input-button');
const numInput = document.getElementById('input');


submitBtn.addEventListener('click', passGen);

