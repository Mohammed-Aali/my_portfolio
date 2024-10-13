const buttonOne = document.querySelector(".button-one");
const navMenu = document.querySelector(".nav-list");
const navItems = [...navMenu.querySelectorAll("li")];
const body = document.querySelector("body")
const form = document.querySelector("#contact_form")
const serviceLinks = document.querySelectorAll(".service-link")
const options = document.querySelector("#service_input")
const emailInput = document.querySelector("#email_input")
const phoneInput = document.querySelector('#telephone_input')
const serviceErrorMsg = document.querySelector(".service-error-msg")
const emailErrorMsg = document.querySelector(".email-error-msg")
const phoneErrorMsg = document.querySelector(".phone-error-msg")

buttonOne.addEventListener("click", (e) => {
    const isOpened = buttonOne.getAttribute("aria-expanded");
    if (isOpened === "false") {
        buttonOne.setAttribute('aria-expanded', 'true');
        navMenu.style.right = "0px"
        document.body.classList.add("menu-open")
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

serviceLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the service from data attribute
        const service = this.getAttribute('data-service');
        
        // Set the service dropdown to the selected service
        const serviceDropdown = document.querySelector('#service_input');
        serviceDropdown.value = service;

        // Scroll to the contact section smoothly
        document.querySelector('#contact-me').scrollIntoView({ behavior: 'smooth' });
    });
})

document.querySelector('.back-to-top').addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


form.addEventListener("submit", (event) => {

    serviceErrorMsg.textContent = ""
    phoneErrorMsg.textContent = ""
    emailErrorMsg.textContent = ""
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (!emailRegex.test(emailInput.value)) {
        emailErrorMsg.textContent = "Please enter a valid email."
        event.preventDefault()
        return;
    }

    if (!phoneRegex.test(phoneInput.value)) {
        phoneErrorMsg.textContent = "Please enter a valid phone number.";
        event.preventDefault()
        return;
    }    

    if (options.value === "") {
        serviceErrorMsg.textContent = "Please select a service before submitting."
        event.preventDefault()
        return;
    }
})



function closeMenu(menu) {
    menu.setAttribute('aria-expanded', 'false');
    navMenu.style.right = "-250px"  
    document.body.classList.remove("menu-open")
}

