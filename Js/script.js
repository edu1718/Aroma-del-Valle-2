
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});




// Inicializar Swiper solo en pantallas móviles
if (window.innerWidth <= 768) {
    new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 3000 },
        pagination: { el: ".swiper-pagination", clickable: true },
    });
}
document.getElementById('formPromocion').addEventListener('submit', function (e) {
    e.preventDefault();

    Swal.fire({
        title: '¡Gracias por participar!',
        text: 'Tu cupón del 20% llegará pronto a tu correo. ☕',
        icon: 'success',
        confirmButtonColor: '#4e342e'
    });

    this.reset();
});
