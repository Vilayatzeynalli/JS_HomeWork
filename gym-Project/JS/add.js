const BASE="http://localhost:8000/users";
const form=document.querySelector("form");
const inputFile=document.querySelector("#inputFile");
const inputTitle=document.querySelector("#inputTitle");
const inputText=document.querySelector("#inputText");
const inputNumber=document.querySelector("#inputNumber");
const addBtn=document.querySelector("#addBtn")

const id=new URLSearchParams(window.location.search).get("id");

if(id){
    addBtn.innerHTML="EDIT";
    axios(`${BASE}/${id}`).then((res)=>{
        inputTitle.value=res.data.title,
        inputText.value=res.data.text,
        inputNumber.value=res.data.number
    })
};

form.addEventListener("submit",function(e){
    e.preventDefault();
    let card={id:Date.now(),
    photo:`../Image/${inputFile.value.split("\\")[2]}`,
    title:inputTitle.value,
    text:inputText.value,
    number:inputNumber.value
   };
if(!id){
   fetch(`http://localhost:8000/users`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(card),
   }).then(()=>{
    window.location.href="./index.html";
   })
}else{
    fetch(`http://localhost:8000/users/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      }, 
      body:JSON.stringify(card),
    }).then(()=>{
        window.location.href="./index.html"
    })
}
});