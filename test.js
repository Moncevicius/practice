let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let val = document.getElementById("value")
let value = 0;
val.innerHTML = value;

increase.addEventListener("click", function (){
    console.log("increase")
    val.innerHTML = ++value;
})

decrease.addEventListener("click", function (){
    console.log("decrease")
    val.innerHTML = --value;
})