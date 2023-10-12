ScrollReveal().reveal('.comidas', { delay: 250 });
ScrollReveal().reveal('.suplementos', { delay: 1000 });
ScrollReveal().reveal('.planes', { delay: 1900 });
ScrollReveal().reveal('.planess', { delay: 2300 });

ScrollReveal().reveal('.cesar', { delay: 700 });
ScrollReveal().reveal('.papas', { delay: 900 });
ScrollReveal().reveal('.frutas', { delay: 1100 });

ScrollReveal().reveal('.pre', { delay: 1300 });
ScrollReveal().reveal('.prote', { delay: 1500 });
ScrollReveal().reveal('.argi', { delay: 1700 });


ScrollReveal().reveal('.reloj', { delay: 2100 });


// Obtiene la hora actual
var horaActual = new Date().getHours();
var saludo = document.getElementById("saludo");

// Define los saludos según la franja horaria
if (horaActual >= 0 && horaActual < 12) {
    saludo.innerHTML = '<i class="fas fa-sun text-warning"></i> Buenos días';
} else if (horaActual >= 12 && horaActual < 18) {
    saludo.innerHTML = '<i class="fas fa-cloud-sun"></i> Buenas tardes';
} else {
    saludo.innerHTML = '<i class="fas fa-moon"></i> Buenas noches';
}


