const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".movie");

searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
   })

})

gsap.from('h1', { duration: 1, delay: 0.2, x:'-100vw', ease: 'power1.in', opasity: 0})
gsap.from('#search', { duration: 2, delay: 0.3, y: '100vw', ease: 'power1.in', opasity: 0})