let pageNumber = document.getElementsByClassName("page");
let pageContent1 = document.querySelector(".page-content-1");
let pageContent2 = document.querySelector(".page-content-2");

pageContent2.style.display = "none";

function activePage(){
    for (p of pageNumber){
        p.classList.remove("active");       
    }
    event.target.classList.add("active");
    currentValue = event.target.value;

    if(currentValue == 1){
        pageContent1.style.display = "block";
        pageContent2.style.display = "none";
    } else{
        pageContent1.style.display = "none";
        pageContent2.style.display = "block";
    }
}