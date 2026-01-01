// ========== Модальные окна ==========
const openModalButtons = document.querySelectorAll('[data-modal-action="open-modal"]');
const closeModalButtons = document.querySelectorAll('[data-modal-action="close-modal"]');
const modalWindows = document.querySelectorAll('[data-modal-action="modal"]');

openModalButtons.forEach(btn => btn.addEventListener('click', (e) => {
  const modalId = e.target.getAttribute('data-modal');
  modalWindows.forEach(modal => {
    if(modal.dataset.modal === modalId) modal.classList.add('open');
  });
}));

closeModalButtons.forEach(btn => btn.addEventListener('click', (e) => {
  const modalId = e.target.getAttribute('data-modal');
  modalWindows.forEach(modal => {
    if(modal.dataset.modal === modalId) modal.classList.remove('open');
  });
}));

modalWindows.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.classList.remove('open');
  });
});

// ========== Аккордеоны ==========
const accordions = document.querySelectorAll('.accordion__container');

function toggleAccordion(event) {
  const header = event.target.closest('.accordion__header');
  if (!header) return;

  const block = header.closest('.accordion__block');
  const container = header.closest('.accordion__container');
  const type = container.getAttribute('accordion-type') || 'multi';
  const content = block.querySelector('.accordion__content');
  const state = block.getAttribute('accordion-state');

  if (type === 'single') {
    container.querySelectorAll('.accordion__block').forEach(b => {
      if (b !== block) {
        b.setAttribute('accordion-state', 'closed');
        b.querySelector('.accordion__content').style.maxHeight = null;
      }
    });
  }

  if (state === 'closed') {
    block.setAttribute('accordion-state', 'open');
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    block.setAttribute('accordion-state', 'closed');
    content.style.maxHeight = null;
  }
}

// Инициализация высоты при загрузке
accordions.forEach(container => {
  container.querySelectorAll('.accordion__block').forEach(block => {
    const content = block.querySelector('.accordion__content');
    if(block.getAttribute('accordion-state') === 'open') {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
  container.addEventListener('click', toggleAccordion);
});
