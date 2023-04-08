//Convert Age to Days//
///1///
function Days(age){
    return age * 365;
}
let Vilayat1=Days(65);
let Vilayat2=Days(0);
let Vilayat3=Days(20);
//result
console.log(Vilayat1);
console.log(Vilayat2);
console.log(Vilayat3);

///3////
//Sum ofeven numbers (e.g:2,4,6...)in 10.//
let  num;
num=0 ;
for(let i=0; i<10; i++){
    if(i % 2 == 0){
       num += i;
    }
}
console.log(`num:${num}`);

///4///
//Multiply the odd numbers (e.g:1,3,5...) in 17.//
let ply;
ply=1;
for(let i=1; i<17; i++){
    if(i % 2 ==1)
    ply *= i;
}
console.log(`ply:${ply}`);

///4///
//Multiply numbers between 10 and 18.//
let multiply;
multiply=1;
for(let i=10; i<=18; i++){
    if(i)
    multiply *= i;
}
console.log(`multiply:${multiply}`);

///5///
//Sum numbers between 17 and 30. Except 19, 20.//
let sum;
sum=0;
for( let i=17; i <= 30; i++){
    if(i != 19 && i != 20 ){
        sum += i;
    }
}
console.log(`sum:${sum}`);

///6///
//.Sum of even numbers and assign this result a variable.//

///7///
//Find of even numbers(e.g: 2,4,6...) in 16. And every number to the power of 2.//
let pow;
pow=0;
for(let i=0; i<=16; i++){
    if(i % 2 ==0){
        pow=2**i;
    }
}
console.log(`pow: ${pow}`);





