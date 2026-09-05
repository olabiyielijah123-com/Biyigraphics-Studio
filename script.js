/* =========================
   CURRENT YEAR
========================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        portfolioItems.forEach(function(item) {

            if (filter === "all") {

                item.classList.remove("hide");

            } else if (item.classList.contains(filter)) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }

        });

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert("Please fill in all the fields.");

            return;
        }

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}


/* =========================
   NAVBAR AUTO CLOSE
========================= */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse = document.getElementById("mainNav");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (
            window.innerWidth < 992 &&
            navbarCollapse.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


/* =========================
   NAVBAR SHADOW
========================= */

window.addEventListener("scroll", function() {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});