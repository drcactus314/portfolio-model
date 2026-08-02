const contactForm = document.getElementById('contact-form');
const openBackdrop = document.querySelector('.open-backdrop');
const closeBackdrop = document.querySelector('.close-backdrop');
console.log(contactForm);

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('сабміт не спрацював');
    openBackdrop.classList.remove('is-hidden');
})

closeBackdrop.addEventListener('click', (e)=>{
    openBackdrop.classList.add('is-hidden')
})