const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const toTop = document.querySelector(".to-top");
const projects = document.querySelector(".projects");

about.addEventListener("click", () => {
    window.scrollBy(0, 800);
})

portfolio.addEventListener("click", () => {
    window.scrollBy(0, 1580);
})

projects.addEventListener("click", () => {
    window.scrollBy(0, 2500);
})

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})