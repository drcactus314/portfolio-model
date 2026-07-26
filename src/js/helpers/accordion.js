import "accordion-js/dist/accordion.min.css";
import Accordion from 'accordion-js';


const accordionArray = document.querySelectorAll('.accordion-container');

const myAccordion = new Accordion(accordionArray[0], {
    openOnInit: [0],
    showMultiple: "true",
});
const mySecondAccordion = new Accordion(accordionArray[1], {
    showMultiple: "true",
});


