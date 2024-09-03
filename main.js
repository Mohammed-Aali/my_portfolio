const buttonOne = document.querySelector(".button-one");
const navMenu = document.querySelector(".nav-list");
const navItems = [...navMenu.querySelectorAll("li")];
console.log(navItems)

buttonOne.addEventListener("click", (e) => {
    const isOpened = buttonOne.getAttribute("aria-expanded");
    if (isOpened === "false") {
        buttonOne.setAttribute('aria-expanded', 'true');
        navMenu.style.left = "0px"
    } else {
        buttonOne.setAttribute('aria-expanded', 'false');
        navMenu.style.left = "-250px"
    }
})

navMenu.addEventListener("click", (e) => {
   const clickedItem = e.target.closest("li");

   if (clickedItem) {
       navItems.forEach(item => item.classList.remove("active"));

       clickedItem.classList.add("active");
   }
    
})