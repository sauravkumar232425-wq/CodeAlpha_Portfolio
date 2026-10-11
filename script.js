const menuButton = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

const contactForm = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");


// Mobile menu

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Contact form

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    formMessage.textContent =
        `Thank you ${name}! Your message has been received.`;

    contactForm.reset();

});