* =========================================
   JERUSPACE PORTFOLIO
   Interactive JavaScript
========================================= */


/* -----------------------------------------
   TYPING EFFECT
----------------------------------------- */

const typingText =
    document.getElementById("typingText");

const phrases = [
    "BCA Data Science Student",
    "Python Learner",
    "Machine Learning Explorer",
    "Creative Problem Solver"
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentPhrase =
        phrases[phraseIndex];


    if (!deleting) {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentPhrase.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            phraseIndex++;

            if (
                phraseIndex >=
                phrases.length
            ) {

                phraseIndex = 0;
            }
        }
    }


    const speed =
        deleting ? 45 : 80;


    setTimeout(
        typeEffect,
        speed
    );
}


typeEffect();


/* -----------------------------------------
   THEME SWITCHER
----------------------------------------- */

const themeButton =
    document.getElementById(
        "themeButton"
    );


const savedTheme =
    localStorage.getItem(
        "jeruspace-theme"
    );


if (
    savedTheme === "light"
) {

    document.body.classList.add(
        "light"
    );

    if (themeButton) {
        themeButton.textContent = "☀";
    }

} else {

    if (themeButton) {
        themeButton.textContent = "◐";
    }
}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light"
            );


            const isLight =
                document.body.classList.contains(
                    "light"
                );


            localStorage.setItem(
                "jeruspace-theme",
                isLight
                    ? "light"
                    : "dark"
            );


            themeButton.textContent =
                isLight
                    ? "☀"
                    : "◐";
        }
    );
}


/* -----------------------------------------
   ACTIVE NAVIGATION
----------------------------------------- */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        "nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );
                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active-nav"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active-nav"
                    );
                }

            }
        );

    }
);


/* -----------------------------------------
   REVEAL ANIMATION
----------------------------------------- */

const revealElements =
    document.querySelectorAll(
        `
        .section-heading,
        .about-text,
        .info-card,
        .skill-card,
        .project-card,
        .contact-box
        `
    );


revealElements.forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";
    }
);


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );
                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);


/* -----------------------------------------
   PROJECT CARD TILT EFFECT
----------------------------------------- */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;


                card.style.transform =
                    `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    `;
            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    `
                    perspective(900px)
                    rotateX(0)
                    rotateY(0)
                    translateY(0)
                    `;
            }
        );

    }
);


/* -----------------------------------------
   SMOOTH SCROLL
----------------------------------------- */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView(
                        {
                            behavior:
                                "smooth"
                        }
                    );

                }
            );

        }
    );


/* -----------------------------------------
   ACTIVE NAV STYLE
----------------------------------------- */

const style =
    document.createElement(
        "style"
    );


style.textContent = `

    .active-nav {
        color: var(--text) !important;
    }

`;


document.head.appendChild(style);