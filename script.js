let randomNum = Math.random()
let roundedNum = Math.round((randomNum * 700000) + 1)
console.log(roundedNum);

let num=prompt("Guess the number difference 1 to 700000")
if (roundedNum == num) {
    alert("Correct")
}
else if (roundedNum !== num){
    alert("wrong")
}