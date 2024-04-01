import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
console.log({ form });
const inputDelay = form.querySelector('input[name="delay"]');
console.log({ inputDelay });

const delay = 0;

const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve(`${delay}`);
//     } else {
//       reject(`${delay}`);
//     }
//   }, delay);
// });

// promise
//   .then(value => {
//     console.log(`Fulfilled promise in ${value}ms`);
//   })
//   .catch(error => {
//     console.log(`Rejected promise in ${error}ms`);
//   });
