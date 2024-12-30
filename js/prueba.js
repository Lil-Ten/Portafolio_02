// Configuración del fondo animado con Vanta.js
document.addEventListener("DOMContentLoaded", () => {
    VANTA.RINGS({
        el: "#background3D", // ID del contenedor de fondo
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x000000, // Fondo negro
        color1: 0x00ffcc, // Color primario
        color2: 0xff00ff, // Color secundario
        amplitudeFactor: 1.5,
        size: 1.2
    });
});

// Script para manejar el menú hamburguesa
const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerMenu = document.getElementById("hamburger-menu");

// Cuando se hace clic en el botón hamburguesa, se alterna la visibilidad del menú
hamburgerBtn.addEventListener("click", () => {
  // Alterna el menú hamburguesa entre visible y oculto
  hamburgerMenu.classList.toggle("hidden");
});
