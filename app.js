const decBtn = document.querySelector(".decrease");
const incBtn = document.querySelector(".increase");
const rstBtn = document.querySelector(".reset");
const value = document.getElementById("value");
let count=0;

decBtn.addEventListener("click",function(e){
count--;
value.innerHTML=count;
if(value.innerHTML<0)
value.style.color="red";

console.log(e.currentTarget.classList);
});

incBtn.addEventListener("click",function(e){
    count++;
    value.innerHTML=count;
    if(value.innerHTML>0)
    value.style.color="blue";

});

rstBtn.addEventListener("click",function(){
    count=0;
    value.innerHTML=count;
    value.style.color="black";
});

