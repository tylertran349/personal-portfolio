const animation = document.querySelectorAll(".animation");
const skillIcons = document.querySelectorAll(".bounce");

skillIcons.forEach((icon) => {
    const randomDelay = Math.floor(Math.random() * 3000);
    icon.style.animationDelay = `${randomDelay}ms`;
    icon.addEventListener("mouseover", () => {
        console.log("hovered")
        icon.querySelector("div").style.opacity = "1";
    });
    icon.addEventListener("mouseout", () => {
        console.log("mouse left")
        icon.querySelector("div").style.opacity = "0";
    });
});

const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("scroll-animation");
        } else {
            entry.target.classList.remove("scroll-animation");
        }
    })
},
{
    threshold: 0.5 /* Percentage of target element that must be visible for animation to run */
});

for(let i = 0; i < animation.length; i++) {
    let elements = animation[i];
    observer.observe(elements);
}