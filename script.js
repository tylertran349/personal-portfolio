const animation = document.querySelectorAll(".animation");

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