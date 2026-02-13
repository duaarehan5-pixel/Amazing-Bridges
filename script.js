// Image Gaallery Functionality
document.getElementById("toggleTheme").onclick = () => {
    document.body.classList.toggle("light");
};

const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });
cards.forEach(c => observer.observe(c));

const lightbox = document.getElementById("lightbox");
const lbImg = lightbox.querySelector("img");

cards.forEach(card => {
    card.onclick = () => {
        lbImg.src = card.querySelector("img").src;
        lightbox.style.display = "flex";
    }
});
lightbox.onclick = (e) => {
    if (e.target === lightbox || e.target.tagName === "SPAN") {
        lightbox.style.display = "none";
    }
};