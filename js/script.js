// menu toggle
const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// banner right-left animation
document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) / 30;
    const moveY = (clientY - centerY) / 30;

    const leftShape = document.querySelector(".shape-left");
    const rightShape = document.querySelector(".shape-right");

    if (leftShape) {
        leftShape.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX}deg)`;
    }

    if (rightShape) {
        rightShape.style.transform = `translate(${-moveX}px, ${-moveY}px) rotate(${-moveX}deg)`;
    }
});

