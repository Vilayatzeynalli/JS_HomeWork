
let resultInput = document.querySelector("#result");
let inputValue1=document.querySelector("#invalue1");
let inputValue2=document.querySelector("#invalue2");
let additionBtn=document.querySelector("#addition-btn");
let substractBtn=document.querySelector("#substract-btn");
let multiplyBtn=document.querySelector("#multiply-btn");
let divisionBtn=document.querySelector("#division-btn");
let resetBtn=document.querySelector("#reset");

let resultvalue=0;
additionBtn.addEventListener("click", ()=>{
    resultvalue=+inputValue1.value+ +inputValue2.value;
    resultInput.innerText=resultvalue;
});
substractBtn.addEventListener("click", function(){
    resultvalue=+inputValue1.value- +inputValue2.value;
    resultInput.innerText=resultvalue;
});
multiplyBtn.addEventListener("click", function(){
    resultvalue=+inputValue1.value*+inputValue2.value;
    resultInput.innerText=resultvalue;
});
divisionBtn.addEventListener("click", function(){
    resultvalue=+inputValue1.value/+inputValue2.value;
    resultInput.innerText=resultvalue;
});
resetBtn.addEventListener("click",function(){
inputValue1.value="";
inputValue2.value="";
resultInput.innerText="0"
});
























