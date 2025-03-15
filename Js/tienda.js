// Funciones para la sección de organizaciones
function toggleMafiaDetails(header) {
    const card = header.closest('.mafia-card');
    card.classList.toggle('active');
}

function toggleFactionDetails(header) {
    const card = header.closest('.faction-card');
    card.classList.toggle('active');
}

// Función para mostrar el modal de información
function showInfo(message) {
    // Crear el modal si no existe
    let modal = document.querySelector('.info-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'info-modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'info-modal-content';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-modal';
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.onclick = () => modal.style.display = 'none';
        
        const text = document.createElement('p');
        
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(text);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Cerrar el modal al hacer clic fuera
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
    
    // Actualizar el mensaje y mostrar el modal
    modal.querySelector('p').textContent = message;
    modal.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de los tabs principales
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Función para cambiar tabs
    function switchTab(tabId) {
        // Ocultar todos los contenidos
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        // Remover active de todos los tabs
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Mostrar el contenido seleccionado
        const selectedContent = document.getElementById(tabId);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }

        // Activar el tab seleccionado
        const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
    }

    // Agregar event listeners a los tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Mostrar el primer tab por defecto
    if (tabs.length > 0) {
        const firstTabId = tabs[0].getAttribute('data-tab');
        switchTab(firstTabId);
    }

    // Funcionalidad para los tabs de organizaciones
    const orgTabs = document.querySelectorAll('.org-tab-btn');
    const orgContents = document.querySelectorAll('.org-tab-content');

    function switchOrgTab(tabId) {
        orgContents.forEach(content => {
            content.style.display = 'none';
        });

        orgTabs.forEach(tab => {
            tab.classList.remove('active');
        });

        const selectedContent = document.getElementById(`${tabId}-content`);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }

        const selectedTab = document.querySelector(`[data-orgtab="${tabId}"]`);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
    }

    orgTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-orgtab');
            switchOrgTab(tabId);
        });
    });

    // Mostrar el primer tab de organizaciones por defecto
    if (orgTabs.length > 0) {
        const firstOrgTabId = orgTabs[0].getAttribute('data-orgtab');
        switchOrgTab(firstOrgTabId);
    }

    // Funcionalidad para los detalles de mafia y facción
    window.toggleMafiaDetails = function(header) {
        const card = header.closest('.mafia-card');
        card.classList.toggle('active');
    }

    window.toggleFactionDetails = function(header) {
        const card = header.closest('.faction-card');
        card.classList.toggle('active');
    }

    // Manejar selección de duración y precios
    const durationSelects = document.querySelectorAll('.duration-select');
    durationSelects.forEach(select => {
        select.addEventListener('change', function() {
            const basePrice = this.getAttribute('data-base-price');
            const buyBtn = this.parentElement.querySelector('.buy-btn');
            
            if (this.value === 'monthly') {
                buyBtn.setAttribute('data-price', basePrice * 2);
            } else {
                buyBtn.setAttribute('data-price', basePrice);
            }
        });
    });

    // Manejar botones de compra
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const select = this.parentElement.querySelector('.duration-select');
            if (select) {
                const duration = select.value;
                const price = this.getAttribute('data-price');
                console.log(`Comprando por ${duration} por ${price}`);
            } else {
                const price = this.previousElementSibling.textContent;
                console.log(`Comprando por ${price}`);
            }
        });
    });
}); 