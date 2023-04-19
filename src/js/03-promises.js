//* Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).
// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.
refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button[type]'),
  delayInp: document.querySelector('input[name="delay"]'),
  stepInp: document.querySelector('input[name="step"]'),
  amountInp: document.querySelector('input[name="amount"]'),
};

function onSubmitBtn(e) {
  e.preventDefault();
  const delayInpValue = Number(refs.delayInp.value);
  const stepInpValue = Number(refs.stepInp.value);
  const amountInpValue = Number(refs.amountInp.value);
  for (let i = 1; i < amountInpValue; i += 1) {
    createPromise(i, delayInpValue);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(shouldResolve);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        console.log(resolve(`✅ Fulfilled promise ${position} in ${delay}ms`));
        // resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else if (!shouldResolve) {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, 500);
  });
}

refs.form.addEventListener('submit', onSubmitBtn);

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

console.log('message');
console.log('=)');
