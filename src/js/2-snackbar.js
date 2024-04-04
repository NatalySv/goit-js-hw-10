import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../img/icon-error.svg';
import iconOk from '../img/icon-ok.svg';

const form = document.querySelector('.form');

const inputDelay = form.querySelector('input[name="delay"]');
const radioFulfilled = form.querySelector('input[value="fulfilled"]');
const radioRejected = form.querySelector('input[value="rejected"]');

let delay = null;
let isSuccess = null;

form.addEventListener('submit', onFormClick);

function onFormClick(event) {
  event.preventDefault();

  delay = inputDelay.value;
  if (!radioFulfilled.checked && !radioRejected.checked) {
    return;
  } else if (radioFulfilled.checked) {
    isSuccess = true;
  } else {
    isSuccess = false;
  }
  promisCreat(isSuccess);

  form.reset();
}

function promisCreat(isSuccess) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(`${delay}`);
      } else {
        reject(`${delay}`);
      }
    }, delay);
  });
  promise
    .then(value => {
      iziToast.error({
        id: 'myIziToast',
        title: 'OK',
        titleColor: 'rgb(255, 255, 255)',
        titleSize: '16',
        message: `Fulfilled promise in ${value}ms`,
        messageColor: 'rgb(255, 255, 255)',
        messageSize: '16',
        backgroundColor: 'rgb(89, 161, 13)',
        position: 'topRight',
        iconUrl: iconOk,
      });
    })
    .catch(error => {
      iziToast.error({
        id: 'myIziToast',
        title: 'Error',
        titleColor: 'rgb(255, 255, 255)',
        titleSize: '16',
        message: `Rejected promise in ${error}ms`,
        messageColor: 'rgb(255, 255, 255)',
        messageSize: '16',
        backgroundColor: 'rgb(239, 64, 64)',
        position: 'topRight',
        iconUrl: iconError,
      });
    });
}
