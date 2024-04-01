import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../img/icon-error.svg';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
let days = document.querySelector('span[data-days]');
let hours = document.querySelector('span[data-hours]');
let minutes = document.querySelector('span[data-minutes]');
let seconds = document.querySelector('span[data-seconds]');

startBtn.disabled = true;
let userSelectedDate = 0;
let deltaTime = 1;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      startBtn.disabled = true;
      iziToast.error({
        id: 'myIziToast',
        title: 'Error',
        titleColor: 'rgb(255, 255, 255)',
        titleSize: '16',
        message: 'Please choose a date in the future',
        messageColor: 'rgb(255, 255, 255)',
        messageSize: '16',
        backgroundColor: 'rgb(239, 64, 64)',
        position: 'topRight',
        iconUrl: iconError,
      });
    } else {
      userSelectedDate = selectedDates[0].getTime();
      startBtn.disabled = false;
    }
  },
};

flatpickr(inputDate, options);

startBtn.addEventListener('click', onStartTime);
function onStartTime(event) {
  inputDate.disabled = true;
  startBtn.disabled = true;
  intervalId = setInterval(timerCalc, 1000, userSelectedDate);
}

function timerCalc(date) {
  deltaTime = date - Date.now();
  const differenceTime = convertMs(deltaTime);
  days.textContent = addLeadingZero(differenceTime.days);
  hours.textContent = addLeadingZero(differenceTime.hours);
  minutes.textContent = addLeadingZero(differenceTime.minutes);
  seconds.textContent = addLeadingZero(differenceTime.seconds);
  if (deltaTime < 1000) {
    clearInterval(intervalId);
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
