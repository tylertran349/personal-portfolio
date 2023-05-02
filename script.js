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
    threshold: 0.75
});

for(let i = 0; i < animation.length; i++) {
    let elements = animation[i];
    observer.observe(elements);
}
