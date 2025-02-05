// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true, // Permite el bucle infinito
    spaceBetween: 5, // Separación de 10px entre diapositivas

    navigation: {
        nextEl: '.swiper-button-next', // Botón de siguiente
        prevEl: '.swiper-button-prev', // Botón de anterior
    },
    autoplay: {
        delay: 3000, // Cambia de diapositiva cada 3 segundos
        disableOnInteraction: false, // No detiene el autoplay al interactuar
    },
    breakpoints: {
        // Configuración responsiva
        640: {
            slidesPerView: 1, // 1 diapositiva en pantallas pequeñas
        },
        768: {
            slidesPerView: 2, // 2 diapositivas en pantallas medianas
        },
        1024: {
            slidesPerView: 3, // 3 diapositivas en pantallas grandes
        },
    },
});



//nav
document.addEventListener('DOMContentLoaded', function () {
    const servicesContainer = document.querySelector('.services');
    const services = Array.from(servicesContainer.children);
    let currentIndex = 0;

    function updateCarousel(direction) {
        services[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + direction + services.length) % services.length;
        services[currentIndex].style.display = 'block';
    }

    services.forEach((service, index) => {
        service.style.display = index === 0 ? 'block' : 'none';
    });

    document.getElementById('prev').addEventListener('click', () => updateCarousel(-1));
    document.getElementById('next').addEventListener('click', () => updateCarousel(1));
    // Navbar scroll behavior

});


//parche nav
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.navbar-collapse');
let isDropdownOpen = false; // Variable para controlar si el menú desplegable está abierto

window.addEventListener('scroll', () => {
    if (isDropdownOpen) return; // Si el menú está abierto, no hacer nada

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const navbarHeight = navbar.offsetHeight;

    if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo - Esconde el navbar
        navbar.style.top = `-${navbarHeight}px`;
    } else {
        // Scroll hacia arriba - Muestra el navbar
        navbar.style.top = '0';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Previene valores negativos
});

// Listeners para detectar si el menú desplegable está abierto o cerrado
navbarCollapse.addEventListener('show.bs.collapse', () => {
    isDropdownOpen = true; // Marca el menú desplegable como abierto
    navbar.style.top = '0'; // Asegura que el navbar sea visible
});

navbarCollapse.addEventListener('hide.bs.collapse', () => {
    isDropdownOpen = false; // Marca el menú desplegable como cerrado
});


  // Funcionalidad del modal
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.getElementById('close-modal');

  // Abrir modal al hacer clic en una imagen
  document.querySelectorAll('.modal-trigger').forEach((image) => {
      image.addEventListener('click', () => {
          modalImage.src = image.src; // Cargar la imagen en el modal
          modal.classList.add('active'); // Mostrar el modal
      });
  });

  // Cerrar modal al hacer clic en el botón de cerrar
  closeModal.addEventListener('click', () => {
      modal.classList.remove('active'); // Ocultar el modal
  });

  // Cerrar modal al hacer clic fuera de la imagen
  modal.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.classList.remove('active'); // Ocultar el modal
      }
  });