// Fecha y hora del evento (14 de junio de 2025 a las 17:30, hora local de España)
const eventDate = new Date("2025-06-14T17:30:00+02:00").getTime();

// Elemento del DOM donde se mostrará el contador
const countdown = document.getElementById("countdown");

// Actualización del contador cada segundo
const interval = setInterval(() => {
  const now = new Date().getTime(); // Hora actual
  const distance = eventDate - now; // Diferencia entre la fecha actual y la fecha del evento

  // Si la fecha ya pasó
  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "¡Ya es el gran día!";
    return;
  }

  // Cálculo de días, horas, minutos y segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el contador en el formato deseado
  countdown.innerHTML = `${days} días, ${hours}h ${minutes}m ${seconds}s`;
}, 1000);


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Agrega la clase para activar la animación
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});