const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.setAttribute('disabled', '');
console.log(startBtn);
console.log('message');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStartBtn() {
  //   if (stopBtn.hasAttribute('disabled')) {
  stopBtn.removeAttribute('disabled');

  console.log('Таймер запущено');
  timerId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}
// }

function onStopBtn() {
  //   if (startBtn.hasAttribute('disabled')) {
  //   }
  clearInterval(timerId);
  console.log('Таймер зупинено');
}

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

// з початку активна тільки старт, стає дізаблед
// перевіряю якщо старт дізаблед - можна натиснути стоп
