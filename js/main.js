/* === Lógica del Modal de Servicios === */

// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleccionar todos los elementos que ABREN un modal
    // (Buscamos cualquier cosa con el atributo 'data-modal-target')
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    
    // 2. Seleccionar todos los botones que CIERRAN un modal
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // 3. Seleccionar todos los fondos de los modales
    const modals = document.querySelectorAll('.modal');

    // 4. Añadir un "click listener" a CADA trigger
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            // Obtener el ID del modal al que apunta (ej: "#modal-negocios")
            const modalId = trigger.getAttribute('data-modal-target');
            // Seleccionar ese modal específico
            const modal = document.querySelector(modalId);
            
            // Mostrar el modal
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    // 5. Añadir un "click listener" a CADA botón de cerrar
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Buscar el modal padre más cercano y ocultarlo
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // 6. (Opcional pero recomendado) Cerrar el modal si se hace clic FUERA del contenido
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            // Si el clic fue en el fondo del modal (la parte oscura)
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

});