const animation = document.querySelectorAll(".animation");
const skillIcons = document.querySelectorAll(".bounce");

skillIcons.forEach((icon) => {
    const randomDelay = Math.floor(Math.random() * 5000); // Generate random animation delay between 0-5 seconds
    icon.style.animationDelay = `${randomDelay}ms`;
    icon.addEventListener("mouseover", () => {
        icon.querySelector("div").style.opacity = "1"; // Show popup on hover
    });
    icon.addEventListener("mouseout", () => {
        icon.querySelector("div").style.opacity = "0"; // Hide popup once mouse leaves icon
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