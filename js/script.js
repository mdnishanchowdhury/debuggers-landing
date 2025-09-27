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

// Badges
document.querySelectorAll(".badge").forEach(badge => {
    document.addEventListener("mousemove", (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2;
        const y = (e.clientY / innerHeight - 0.5) * 2;
        const rotateX = y * 20; 
        const rotateY = x * 20; 
        badge.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    document.addEventListener("mouseleave", () => {
        badge.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
});
