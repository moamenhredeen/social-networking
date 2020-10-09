// buttons 
const btn_burger = $('#burger');
const btn_closeModal = $('#modal-close-icon');

// components 
const modal = $('#modal');
const backdrop = $('#backdrop');

const openModal = () => {
    modal.css('display', 'block');
    backdrop.css('display', 'block');
}

const closeModal = () => {
    modal.css('display', 'none');
    backdrop.css('display', 'none');
}

// event handling 
btn_burger.click(() => openModal());
btn_closeModal.click(() => closeModal());
backdrop.click(() => closeModal());