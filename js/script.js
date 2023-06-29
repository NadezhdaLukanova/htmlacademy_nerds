//modal-contact
const modalContact = document.querySelector('.modal-contact');
const openModalContact = document.querySelector('.button-show');
const closeModalContact  = modalContact.querySelector('.button-hide');
const modalContactForm = modalContact.querySelector('.contact-form');
const modalContactName =  modalContact.querySelector('.contact-form-name');
const modalContactEmail =  modalContact.querySelector('.contact-form-email');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("user-name");
} catch (err) {
  isStorageSupport = false;
};

openModalContact.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContact.classList.add('modal-open');
  if (storage) {
    modalContactName.value = storage;
    modalContactEmail.focus();
  } else {
    modalContactName.focus();
  }
});

closeModalContact.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalContact.classList.remove('modal-open');
});

  
modalContactForm.addEventListener("submit", function (evt) {
  if (!modalContactName.value || !modalContactEmail.value) {
    evt.preventDefault();
    modalContact.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("user-name", modalContactName.value);
    }
  }
});

document.addEventListener('keydown', function(evt){
  if (evt.keyCode === 27){
    modalContact.classList.remove('modal-open');

    }
});