import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('input', throttle(handleFormInput, 500));
formEl.addEventListener('submit', handleFormSubmit);

const FEEDBACK_KEY = 'feedback-form-state';
let formData = {};

function handleFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function handleFormSubmit(event) {
  event.preventDefault();
  const { email, message } = event.target.elements;
  if (email.value === '' || message.value === '') {
    return alert('Заповніть порожні поля!');
  }
  console.log(formData);
  event.target.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}

pageReset();
function pageReset() {
  const feedback = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (feedback === null) {
    return;
  }
  inputEl.value = feedback.email;
  textareaEl.value = feedback.message;
  formData = feedback;
}
