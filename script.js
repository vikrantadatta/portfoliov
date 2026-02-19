// Typing Animation
const typing = document.querySelector(".typing");
const words = ["Full Stack Developer", "C++ Problem Solver", "Future Tech Leader"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];
    if (!isDeleting) {
        typing.textContent = currentWord.slice(0, ++j);
        if (j === currentWord.length) isDeleting = true;
    } else {
        typing.textContent = currentWord.slice(0, --j);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }
    setTimeout(type, isDeleting ? 60 : 120);
}
type();

// Scroll Reveal + Skill Animation
const reveals = document.querySelectorAll(".reveal");
const bars = document.querySelectorAll(".bar");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });

    bars.forEach(bar => {
        const windowHeight = window.innerHeight;
        const elementTop = bar.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            bar.style.width = bar.classList.contains("html") ? "90%" :
                              bar.classList.contains("js") ? "85%" :
                              bar.classList.contains("cpp") ? "88%" :
                              bar.classList.contains("node") ? "75%" : "70%";
        }
    });
});

// Dark Mode
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formMessage").textContent =
        "Thank you! I will get back to you soon.";
    this.reset();
});