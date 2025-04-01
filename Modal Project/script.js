'use strict';

const showModalBtnAll = document.querySelectorAll('.show-modal');
const modalView = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlayView = document.querySelector('.overlay');

showModalBtnAll.forEach(elementBtn => {
  elementBtn.addEventListener('click', () => {
    modalView.classList.remove('hidden');
    overlayView.classList.remove('hidden');
  });
});

const addClass = () => {
  modalView.classList.add('hidden');
  overlayView.classList.add('hidden');
};

closeModalBtn.addEventListener("click", ()=>{
    addClass();
})
overlayView.addEventListener("click", ()=>{
    addClass();
})

document.addEventListener('keydown', Event=>{
    if(Event.key === 'Escape'){
        addClass();
    }
})

