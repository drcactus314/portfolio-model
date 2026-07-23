import "accordion-js/dist/accordion.min.css";
import Accordion from 'accordion-js';


const accordion = document.querySelector('.accordion-container');

const myAccordion = new Accordion(accordion, {
    openOnInit: [0],
});


