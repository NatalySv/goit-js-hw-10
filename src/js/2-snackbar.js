import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../img/icon-error.svg';
import iconOk from '../img/icon-ok.svg';

const form = document.querySelector('.form');

const inputDelay = form.querySelector('input[name="delay"]');
const radioFulfilled = form.querySelector('input[value="fulfilled"]');
const radioRejected = form.querySelector('input[value="rejected"]');

let isSuccess = null;

form.addEventListener('submit', onFormClick);

function onFormClick(event) {
  event.preventDefault();

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
  const delay = inputDelay.value;
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
        ...iziOptionsOk,
        message: `Fulfilled promise in ${value}ms`,
        backgroundColor: 'rgb(89, 161, 13)',
        iconUrl: iconOk,
      });
    })
    .catch(error => {
      iziToast.error({
        ...iziOptions,
        message: `Rejected promise in ${error}ms`,
        backgroundColor: 'rgb(239, 64, 64)',
        iconUrl: iconError,
      });
    });
}

const iziOptionsOk = {
  id: 'myIziToast',
  title: 'Ok',
  titleColor: 'rgb(255, 255, 255)',
  titleSize: '16',
  messageColor: 'rgb(255, 255, 255)',
  messageSize: '16',
  position: 'topRight',
};

const iziOptions = {
  id: 'myIziToast',
  title: 'Error',
  titleColor: 'rgb(255, 255, 255)',
  titleSize: '16',
  messageColor: 'rgb(255, 255, 255)',
  messageSize: '16',
  position: 'topRight',
};
