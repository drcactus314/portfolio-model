const mobileMenu = document.querySelector('.mobile-menu');
const openMobileMenuBtn = document.querySelector('.open-mobile-menu');
const closeMobileMenuBtn = document.querySelector('.close-mobile-menu');

window.addEventListener('load', () => {
    document.body.classList.remove('no-transition');
});

const toggleMobileMenu = ()=>{
    mobileMenu.classList.toggle('is-open');
    const isOpen = mobileMenu.classList.contains('is-open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

mobileMenu.addEventListener('click', (e)=>{
     if (e.target.closest('a')) {
        toggleMobileMenu();
     }
})

