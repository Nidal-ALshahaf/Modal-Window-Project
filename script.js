'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
// Open Modal 
for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', openModal);

// 3 Close Modal

btnCloseModal.addEventListener('click', closeModal);  // 1

overlay.addEventListener('click', closeModal);       // 2

document.addEventListener('keydown', function (e) {  // 3

    if (e.keyCode === 27) {
        closeModal()
    }
})
