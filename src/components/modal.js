// modal.js
export function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  // Закриття модального вікна при кліку поза ним
  export function closeOnOutsideClick(modalId) {
    window.onclick = (event) => {
      const modal = document.getElementById(modalId);
      if (event.target === modal) {
        closeModal(modalId);
      }
    };
  }
  
  // Закриття модального вікна при натисканні клавіші "Esc"
  export function closeOnEsc(modalId) {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal(modalId);
      }
    });
  }
  