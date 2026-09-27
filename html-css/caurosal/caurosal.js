const caurousalTrack = document.querySelector(".caurosal-track")
const nextButton = document.querySelector(".nxt-butn")
const prevButton = document.querySelector(".prv-butn")


let currentIndex = 0;

const totalSlides = 4;

nextButton.addEventListener("click",()=>{
    currentIndex = (currentIndex + 1) % totalSlides
    caurousalTrack.style.translate = `-${currentIndex * 100}%`
})


prevButton.addEventListener("click", ()=>{
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    caurousalTrack.style.translate = `-${currentIndex * 100}%`
})