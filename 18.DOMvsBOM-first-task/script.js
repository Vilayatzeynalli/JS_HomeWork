let startBtn=document.querySelector(".but1");
let stopBtn=document.querySelector(".but2");
let numbers=document.querySelector(".number")
let resetBtn=document.querySelector(".but5")
let resultBtn=document.querySelector(".but3")
let result1Btn=document.querySelector(".but4")



let count=0;
let interval;

startBtn.addEventListener("click", function(){
    clearInterval(interval);
    this.setAttribute("disabled", null);
 interval = setInterval(()=>{
    count++;
    numbers.innerText=count;
}, 1000);
// numbers.innerText=count++;
})
stopBtn.addEventListener("click", function(){
 clearInterval(interval);
})

resetBtn.addEventListener("click", function(){
 count=0;
 numbers.innerText=count;
 clearInterval(interval);
})

resultBtn.addEventListener("click", function(){
    numbers.innerText=count++;
})
result1Btn.addEventListener("click", function(){
    numbers.innerText=count--;
})