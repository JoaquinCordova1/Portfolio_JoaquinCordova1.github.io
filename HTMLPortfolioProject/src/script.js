/* =========================================================
   JOAQUIN CORDOVA PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   SIDE NAVIGATION
========================================================= */

function openNav() {

    const sidenav =
        document.getElementById("mySidenav");

    if (sidenav) {
        sidenav.style.width = "250px";
    }
}


function closeNav() {

    const sidenav =
        document.getElementById("mySidenav");

    if (sidenav) {
        sidenav.style.width = "0";
    }
}


/* =========================================================
   INTERACTIVE MOON + CLOUDS
========================================================= */

const moon =
    document.querySelector(".moon");

const clouds =
    document.querySelectorAll(".cloud");


let mouseX = 0;
let mouseY = 0;
let scrollY = 0;


/* Mouse movement */

document.addEventListener(
    "mousemove",
    function (event) {

        mouseX =
            event.clientX /
            window.innerWidth -
            0.5;

        mouseY =
            event.clientY /
            window.innerHeight -
            0.5;

        updateBackground();

    }
);


/* Scrolling */

window.addEventListener(
    "scroll",
    function () {

        scrollY =
            window.scrollY;

        updateBackground();

    }
);


/* Update moon and clouds */

function updateBackground() {

    if (moon) {

        const moonX =
            mouseX * 30;

        const moonY =
            mouseY * 20 +
            scrollY * 0.08;

        moon.style.transform =
            `translate(
                ${moonX}px,
                ${moonY}px
            )`;
    }


    clouds.forEach(
        function (cloud, index) {

            const strength =
                (index + 1) * 8;

            const cloudX =
                mouseX * strength;

            const cloudY =
                mouseY *
                (strength * 0.4);

            cloud.style.marginLeft =
                `${cloudX}px`;

            cloud.style.marginTop =
                `${cloudY}px`;

        }
    );
}


/* =========================================================
   CLOSE NAVIGATION WITH ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeNav();
        }

    }
);
