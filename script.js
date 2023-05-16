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

const sectionObservers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            if(entry.target.classList.contains('animation') && (entry.target.classList.contains('left') || entry.target.classList.contains('right'))) {
                entry.target.classList.add("scroll-animation");
            } else if(entry.target.classList.contains('animation') && (entry.target.classList.contains('fade-in') || entry.target.classList.contains('delayed-fade-in'))) {
                entry.target.classList.add("fade-in-animation");
            } else if(entry.target.classList.contains('animation') && entry.target.classList.contains('rotate')) {
                entry.target.classList.add("rotate-animation");
            }
            sectionObservers.unobserve(entry.target); // Stop observing target element
        } else {
            entry.target.classList.remove("fade-in-animation");
            entry.target.classList.remove("scroll-animation");
            entry.target.classList.remove("rotate-animation");
        }
    })
},
{
    threshold: 0.5 /* Percentage of target element that must be visible for animation to run */
});

for(let i = 0; i < animation.length; i++) {
    let elements = animation[i];
    sectionObservers.observe(elements);
}