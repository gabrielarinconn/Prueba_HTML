// Seleccionamos los elementos
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Agregamos el evento de clic
hamburger.addEventListener('click', () => {
  // La clase 'active' es la que tiene el 'right: 0' en el CSS
  navMenu.classList.toggle('active');
  
  // Opcional: animación simple al botón
  hamburger.style.opacity = navMenu.classList.contains('active') ? "0.5" : "1";
});

// Cerramos el menú al hacer clic en cualquier enlace
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

