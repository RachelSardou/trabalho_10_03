const slides = document.getElementById("slides");
const imagens = document.querySelectorAll(".slides img");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function mostrarSlide(){
    slides.style.transform = "translateX(-" + (index * 800) + "px)";
}

next.addEventListener("click", () => {
    index++;

    if(index >= imagens.length){
        index = 0;
    }

    mostrarSlide();
});

prev.addEventListener("click", () => {
    index--;

    if(index < 0){
        index = imagens.length - 1;
    }

    mostrarSlide();
});