let pageNumber = document.getElementsByClassName("page");
let pageContent1 = document.querySelector(".page-content-1");
let pageContent2 = document.querySelector(".page-content-2");
let pageContent3 = document.querySelector(".page-content-3");

pageContent2.style.display = "none";
pageContent3.style.display = "none";

function activePage(){
    for (p of pageNumber){
        p.classList.remove("active");       
    }
    event.target.classList.add("active");
    currentValue = event.target.value;

    if(currentValue == 1){
        pageContent1.style.display = "block";
        pageContent2.style.display = "none";
        pageContent3.style.display = "none";
    } else if(currentValue == 2){
        pageContent1.style.display = "none";
        pageContent2.style.display = "block";
        pageContent3.style.display = "none";
    } else if(currentValue == 3){
        pageContent1.style.display = "none";
        pageContent2.style.display = "none";
        pageContent3.style.display = "block";
    }
}

setInterval(()=>{
    const clockTime = new Date();
    let hours = document.querySelector(".hrs");
    let minutes = document.querySelector(".min");
    let seconds = document.querySelector(".sec");

    hours.innerHTML = (clockTime.getHours()<10?"0":"") + clockTime.getHours();
    minutes.innerHTML = (clockTime.getMinutes()<10?"0":"") + clockTime.getMinutes();
    seconds.innerHTML = (clockTime.getSeconds()<10?"0":"") + clockTime.getSeconds();
},1000)

