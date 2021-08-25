// function setFormMessage(formElement, type, message) {
//   const messageElement = formElement.querySelector('.form__message');

//   messageElement.textContent = message;
//   messageElement.classList.remove(
//     'form__message--success',
//     'form__message--error',
//   );
//   messageElement.classList.add(`form__message--${type}`);
// }
// //setFormMessage(loginForm, "success", "Login Successful!")

// //function to show or clear error message
// function setInputError(inputElement, message) {
//   inputElement.classList.add('form__input--error');
//   inputElement.parentElement.querySelector(
//     '.form__input-error-message',
//   ).textContent = message;
// }

// function clearInputError(inputElement) {
//   inputElement.classList.remove('form__input--error');
//   inputElement.parentElement.querySelector(
//     '.form__input-error-message',
//   ).textContent = '';
// }

// //for the login and create account link
// // eslint-disable-next-line no-undef
// document.addEventListener('DOMContentLoaded', () => {
//   // eslint-disable-next-line no-undef
//   let loginForm = document.querySelector('#login');
//   // eslint-disable-next-line no-undef
//   let createAccountForm = document.querySelector('#createAccount');

//   // eslint-disable-next-line no-undef
//   document
//     .querySelector('#linkCreateAccount')
//     .addEventListener('click', (e) => {
//       e.preventDefault();
//       loginForm.classList.add('form--hidden');
//       createAccountForm.classList.remove('form--hidden');
//     });

//   // eslint-disable-next-line no-undef
//   document.querySelector('#linkLogin').addEventListener('click', (e) => {
//     e.preventDefault();
//     loginForm.classList.remove('form--hidden');
//     createAccountForm.classList.add('form--hidden');
//   });

//   //login error message
//   loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     //perform your node/fetch login

//     setFormMessage(loginForm, 'error', 'Invalid Username/password combination');
//   });

//   //error message and condition for the create account form
//   // eslint-disable-next-line no-undef
//   document.querySelectorAll('.form__input').forEach((inputElement) => {
//     inputElement.addEventListener('blur', (e) => {
//       if (
//         e.target.id === 'signupUsername' &&
//         e.target.value.length > 0 &&
//         e.target.value.length < 7
//       ) {
//         setInputError(
//           inputElement,
//           'Username must be at least 7 character in length',
//         );
//         // eslint-disable-next-line no-undef
//         document.getElementById('signupSubmit').disabled = true;
//       }

//       if (
//         e.target.id === 'signupEmail' &&
//         e.target.value.length > 0 &&
//         e.target.value.length < 7
//       ) {
//         setInputError(inputElement, 'incorrect email!');
//         // eslint-disable-next-line no-undef
//         document.getElementById('signupSubmit').disabled = true;
//       }

//       if (
//         e.target.id === 'signupPassword' &&
//         e.target.value.length > 0 &&
//         e.target.value.length < 5
//       ) {
//         setInputError(inputElement, 'weak password, try again!');
//         // eslint-disable-next-line no-undef
//         document.getElementById('signupSubmit').disabled = true;
//       }

//       if (
//         e.target.id === 'signupConfirmPassword' &&
//         e.target.value.length > 0 &&
//         // eslint-disable-next-line no-undef
//         e.target.value !== document.getElementById('signupPassword').value
//       ) {
//         setInputError(inputElement, 'password do not match!');
//         // eslint-disable-next-line no-undef
//         document.getElementById('signupSubmit').disabled = true;
//       }
//     });

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     inputElement.addEventListener('input', (e) => {
//       clearInputError(inputElement);
//     });
//   });
// });

// eslint-disable-next-line no-undef
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line no-undef
// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   //get the views
//   const email = form.email.value;
//   const password = form.password.value;

//   console.log(email, password);
// });
