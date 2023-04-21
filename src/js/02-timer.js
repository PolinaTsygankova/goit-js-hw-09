import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const timerRefs = {
  textDays: document.querySelector('span[data-days]'),
  textHours: document.querySelector('span[data-hours]'),
  textMinutes: document.querySelector('span[data-minutes]'),
  textSeconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const settedDate = selectedDates[0];

    if (settedDate <= Date.now()) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      startBtn.addEventListener('click', onStartBtn);

      function onStartBtn() {
        updateInterface();
        startBtn.setAttribute('disabled', true);
      }
    }
    function updateInterface() {
      const currentDate = Date.now();

      let timerId = setInterval(countTime, 1000);

      function countTime() {
        const timerDate = settedDate - Date.now();

        if (timerDate <= 0) {
          clearInterval(timerId);
          startBtn.removeAttribute('disabled');
        } else {
          const resultTime = convertMs(timerDate);

          timerRefs.textDays.textContent = addLeadingZero(resultTime.days);
          timerRefs.textHours.textContent = addLeadingZero(resultTime.hours);
          timerRefs.textMinutes.textContent = addLeadingZero(
            resultTime.minutes
          );
          timerRefs.textSeconds.textContent = addLeadingZero(
            resultTime.seconds
          );
        }
      }
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr('#datetime-picker', options);
