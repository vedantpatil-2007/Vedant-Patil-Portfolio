
/* ===========================
   Typing Animation
=========================== */

new Typed("#typing", {

    strings: [

        "Computer Engineering Student",

        "Frontend Developer",

        "AI/ML Learner",

        "Web Developer"

    ],

    typeSpeed:60,

    backSpeed:40,

    backDelay:1500,

    loop:true

});


/* ===========================
   Navbar on Scroll
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    navbar.classList.toggle("scrolled",window.scrollY>50);

});


/* ===========================
   Active Menu
=========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
/* ===========================
   Back To Top Button
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ===========================
   Certificate Popup
=========================== */

const modal = document.getElementById("certificateModal");

const modalImg = document.getElementById("modalImage");

const certificateImages =
document.querySelectorAll(".certificate-img");

certificateImages.forEach(img=>{

    img.addEventListener("click",()=>{

        modal.style.display="flex";

        modalImg.src=img.src;

    });

});

document.querySelector(".close")
.addEventListener("click",()=>{

    modal.style.display="none";

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.style.display="none";

    }

});
/* ===========================
   EmailJS Contact Form
=========================== */

const contactForm = document.getElementById("contact-form");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    emailjs.send("service_52do52s", "template_49zg8b5", {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value

    })

    .then(function () {

        alert("✅ Message sent successfully!");

        contactForm.reset();

        sendBtn.innerHTML = "Send Message";
        sendBtn.disabled = false;

    })

    .catch(function (error) {

        alert("❌ Failed to send message.");

        console.log(error);

        sendBtn.innerHTML = "Send Message";
        sendBtn.disabled = false;

    });

});
/* ===========================
   Scroll Reveal Animation
=========================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* ===========================
   Dark / Light Mode
=========================== */

const themeToggle = document.getElementById("theme-toggle");

const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});
/* ===========================
   Particles Background
=========================== */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: "#38bdf8"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }

    },

    interactivity: {

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        },

        modes: {

            grab: {
                distance: 180,
                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});
/* ===========================
   Loader
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 2000);

});
/* ===========================
   Cursor Glow
=========================== */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});
/* ===========================
   Mobile Navbar Toggle
=========================== */

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

    menuToggle.innerHTML = mobileNav.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
})
