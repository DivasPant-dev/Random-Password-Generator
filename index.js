const btn = document.querySelector("button");
const span = document.querySelector(".randomNum");

function generate() {
    const array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const randomArray1 = array[Math.floor(Math.random() * 25)];
    const randomArray2 = array[Math.floor(Math.random() * 25)];
    const randomArray3 = array[Math.floor(Math.random() * 25)];
    const randomArray4 = array[Math.floor(Math.random() * 25)];
    const randomArray5 = array[Math.floor(Math.random() * 25)];
    const randomArray6 = array[Math.floor(Math.random() * 25)];
    const randomArray7 = array[Math.floor(Math.random() * 25)];
    const special = ["@","_","-","<",">","!","#","$","%","^","`","~","|"];
    const randomSpecial = special[Math.floor(Math.random() * 12)];
    const number = ["0","1","2","3","4","5","6","7","8","9"];
    const randomNum1 = number[Math.floor(Math.random() * 9)];
    const randomNum2 = number[Math.floor(Math.random() * 9)];
    const randomNum3 = number[Math.floor(Math.random() * 9)];

    const result = randomArray1 + randomArray2 + randomArray3 + randomArray4 + randomArray5 + randomArray6 + randomArray7 + randomSpecial + randomNum1 + randomNum2 + randomNum3;

    span.innerHTML = result;
}