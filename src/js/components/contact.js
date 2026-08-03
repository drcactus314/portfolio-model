import { allDocument } from "./menu";

const contactForm = document.getElementById('contact-form');
const backdrop = document.querySelector('.backdrop');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    backdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
})


const closeModal = ()=>{
    backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
}

backdrop.addEventListener('click', (e)=>{
    if(e.target.closest('.modal__close-button') || e.target === backdrop){
        closeModal();
    }
})
allDocument.addEventListener('keydown', (e)=>{
 if (e.key === 'Escape'){
    closeModal();
 }
})