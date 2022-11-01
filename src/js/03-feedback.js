import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const keyLocaleStorage = 'feedback-form-state';

textInAllFormInput();

const formData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormAllInput, 500));

function onFormAllInput(e) {
  formData[e.target.name] = e.target.value;

  const inputStorageArrayJson = JSON.stringify(formData);

  localStorage.setItem(keyLocaleStorage, inputStorageArrayJson);
}

function onFormSubmit(e) {
  e.preventDefault();

  formEl.reset();
  console.log(formData);
  localStorage.removeItem(keyLocaleStorage);
}

function textInAllFormInput() {
  const savedMessage = localStorage.getItem(keyLocaleStorage);

  if (savedMessage) {
    const arrayLocalStorage = JSON.parse(savedMessage);
    formEl.email.value = arrayLocalStorage.email || '';
    formEl.message.value = arrayLocalStorage.message || '';
  }
}
