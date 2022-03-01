const slider = () => {
    var slideIndex = 1;
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
showSlides(slideIndex);

next.addEventListener('click', () => {
    showSlides(slideIndex += 1);
})

prev.addEventListener('click', () =>{
    showSlides(slideIndex -= 1); 
})

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

}

export default slider