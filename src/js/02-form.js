'use strict';
let form = document.querySelector(`.feedback-form`);

let feedback = JSON.parse(localStorage.getItem(`feedback-form-state`)) ?? {
  email: ``,
  message: ``,
};

for (const key in feedback) {
  form.elements[key].value = feedback[key];
}

form.addEventListener(`input`, checkInput);
function checkInput(event) {
  feedback[event.target.name] = event.target.value.trim();
  localStorage.setItem(`feedback-form-state`, JSON.stringify(feedback));
}

form.addEventListener(`submit`, event => {
  event.preventDefault();
  if (feedback.email === `` || feedback.message === ``) {
    alert(`All form fields must be filled in`);
    return;
  }
  console.log(feedback);
  feedback = { email: ``, message: `` };
  localStorage.removeItem(`feedback-form-state`);
  form.reset();
});
