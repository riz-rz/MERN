const menuBar = document.getElementById("menu-bar");
const menuContainer = document.querySelector(".menu-container");
const closeButn = document.querySelector(".close-butn");

menuBar.addEventListener("click",()=>{
    menuContainer.style.transform = "translateY(0)";
})

closeButn.addEventListener("click",()=>{
    menuContainer.style.transform = "translateY(-430px)";

})