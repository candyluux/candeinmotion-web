/* === Esperar a que todo el HTML esté cargado === */
document.addEventListener('DOMContentLoaded', () => {

    /* ======================================= */
    /* === Lógica del Modal (Servicios y Proyectos) === */
    /* ======================================= */

    // 1. Seleccionar todos los elementos que ABREN un modal
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    
    // 2. Seleccionar todos los botones que CIERRAN un modal
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // 3. Seleccionar todos los fondos de los modales
    const modals = document.querySelectorAll('.modal');

    // 4. Añadir un "click listener" a CADA trigger
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal-target');
            const modal = document.querySelector(modalId);
            
            if (modal) {
                modal.style.display = 'flex'; // Usamos Flex para centrar
            }
        });
    });

    // 5. Añadir un "click listener" a CADA botón de cerrar
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // 6. Cerrar el modal si se hace clic FUERA del contenido
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });


    /* ======================================= */
    /* === Lógica del Timeline "Sobre Mí" === */
    /* ======================================= */
    
    const timelineButton = document.getElementById('toggle-timeline-btn');
    const aboutSection = document.getElementById('about');

    if (timelineButton && aboutSection) {
        
        timelineButton.addEventListener('click', () => {
            aboutSection.classList.toggle('timeline-active');
            
            if (aboutSection.classList.contains('timeline-active')) {
                timelineButton.textContent = 'Ver versión resumida';
            } else {
                timelineButton.textContent = 'Ver mi recorrido';
            }
        });
    }


    /* ======================================= */
    /* === Lógica del Acordeón (Servicios) === */
    /* ======================================= */
    
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Opcional: Cerrar otros acordeones
            // Si quieres que solo uno esté abierto a la vez, descomenta este bloque:
            /*
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
            */
            
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        });
    });


}); // <-- FIN DEL DOMContentLoaded