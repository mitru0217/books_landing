const refs = {
  openModalBtn: document.querySelector(".open"),
  closeModalBtn: document.querySelector(".close"),
  modal: document.querySelector(".modal"),
};

function openModal() {
  refs.modal.classList.remove("is-hidden");
  refs.openModalBtn.classList.add("is-hidden");
  refs.closeModalBtn.classList.remove("is-hidden");
  document.body.classList.add("modal-open");
}

function closeModal() {
  refs.modal.classList.add("is-hidden");
  refs.openModalBtn.classList.remove("is-hidden");
  refs.closeModalBtn.classList.add("is-hidden");
  document.body.classList.remove("modal-open");
}
