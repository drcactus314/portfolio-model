import Toastify from 'toastify-js';

export const showSectionMessage =()=> Toastify({
    text: "Секції не існує",
    duration: 5000,
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right,rgba(168, 228, 161, 0.84),rgb(39, 224, 224))",
    },
    onClick: function(){}
  }).showToast();