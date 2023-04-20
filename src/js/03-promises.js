import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button[type]'),
  delayInp: document.querySelector('input[name="delay"]'),
  stepInp: document.querySelector('input[name="step"]'),
  amountInp: document.querySelector('input[name="amount"]'),
};

let finalDelay = 0;

function onSubmitBtn(e) {
  e.preventDefault();
  const delayInpValue = Number(refs.delayInp.value);
  const stepInpValue = Number(refs.stepInp.value);
  const amountInpValue = Number(refs.amountInp.value);
  for (let i = 1; i <= amountInpValue; i += 1) {
    if (i === 1) {
      finalDelay += delayInpValue;
      createPromise(i, finalDelay);
    } else {
      finalDelay += stepInpValue;
      createPromise(i, finalDelay);
    }
  }
  finalDelay = 0;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  // console.log(shouldResolve);

  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      setTimeout(() => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      }, delay);
    } else {
      setTimeout(() => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }, delay);
    }
  });
}

refs.form.addEventListener('submit', onSubmitBtn);
