
let slides = document.querySelectorAll(".hero-slider .slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => slide.style.display = (i===index) ? "block" : "none");
}

showSlide(currentSlide);

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || message === ""){
        alert("Please fill in all fields!");
        return false;
    }

    
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        alert("Please enter a valid email address!");
        return false;
    }

    alert("Thank you! Your message has been sent.");
    this.reset();
});

