const buttonOne = document.querySelector(".button-one");
const navMenu = document.querySelector(".nav-list");
const navItems = [...navMenu.querySelectorAll("li")];
const body = document.querySelector("body")

buttonOne.addEventListener("click", (e) => {
    const isOpened = buttonOne.getAttribute("aria-expanded");
    if (isOpened === "false") {
        buttonOne.setAttribute('aria-expanded', 'true');
        navMenu.style.right = "0px"
    } else {
        closeMenu(buttonOne)
    }
})

navMenu.addEventListener("click", (e) => {
   const clickedItem = e.target.closest("li");

   if (clickedItem) {
       navItems.forEach(item => item.classList.remove("active"));
       clickedItem.classList.add("active");
       closeMenu(buttonOne)
    }   
})

body.addEventListener('click', (event) => {
    let menuState = buttonOne.getAttribute("aria-expanded")
    if (menuState === "true" && !buttonOne.contains(event.target) && !navMenu.contains(event.target)) {
        closeMenu(buttonOne); 
    }
})

function closeMenu(menu) {
    menu.setAttribute('aria-expanded', 'false');
    navMenu.style.right = "-250px"  
}