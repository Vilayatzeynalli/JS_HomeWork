const BASE="http://localhost:8000/users";
const row=document.querySelector(".all-cards");
const inputSearch=document.querySelector("#inputSearch");
const sortBtn=document.querySelector("#sortBtn");


async function allData(array){
    row.innerHTML="",
    array.forEach(element => {
        row.innerHTML+=`
        <div class="col-12 col-md-6 col-lg-4">
        <div class="cards text-center">
        <img src="${element.photo}" alt=""><br><br>
        <h4>${element.title}</h4>
        <p>${element.text}</p>
        <p>${element.number}</p>
        <button class="delete" onclick=deleteBtn("${element.id}",this)>Delete</button>
        <button class="details" onclick=detailsBtn("${element.id}",this)>Details</button>
        <a href="add.html?id=${element.id}" class="edit">Edit</a>
        <button class="fav" onclick=favBtn("${element.id}",this)>Fav</button>
        </div>
    </div>`
    });
}
axios(BASE).then((res)=>allData(res.data));

//delete
async function deleteBtn(userId){
    axios.delete(`${BASE}/${userId}`)
    allData();
};

//search
inputSearch.addEventListener("input",function(e){
    axios(BASE).then((res)=>{
        let dataFilter=res.data.filter((item)=>item.title.toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase()));
        allData(dataFilter);
    });
});

//sort
sortBtn.addEventListener("click",function(){
    if(sortBtn.innerHTML=="Ascending"){
        axios(BASE).then((res)=>{
        const sortAsc=res.data.sort((a,b)=>a.number-b.number);
        allData(sortAsc);
        });
        sortBtn.innerHTML=`Descending`
    }else if(sortBtn.innerHTML=="Descending"){
        axios(BASE).then((res)=>{
            const sortDes=res.data.sort((a,b)=>b.number-a.number);
            allData(sortDes);
        });
        sortBtn.innerHTML=="Ascending";
    };
});


//fav
// async function favBtn(userId){
// const res=await axios(`${BASE}/${userId}`);
// const object=await res.data;
// // console.log(object);
// await axios.post(`http://localhost:8000/users`,object);
// }