import './styles.css';
import debounce from 'lodash.debounce';
import API from './js/fetchCountries.js';
import templateCardCountries from './templates/template-card.hbs';
import templateList from './templates/countries.hbs';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
import '../node_modules/@pnotify/core/dist/PNotify.css';



const inputRef = document.querySelector('.input-name');
const cardRef = document.querySelector('.card-container');
const formRef = document.querySelector('.form-card');

inputRef.addEventListener('input', debounce( toFind, 500));
function toFind(event)     
{event.preventDefault();
const form = event.target;
const inputValue = inputRef.value;

API.fetchCountryName(inputValue)
    .then(renderCountryCard)
    .finally(() => form.reset);
}
function renderCountryCard(countries) {
    if (countries.length >= 10) {
      const { alert, notice, info, success, error } = require('@pnotify/core');

// Manually set the type.
const myAlert = alert({
  text: "too many options, please make a more specific request!",
  type: 'info'
});
  
    } else if
          (countries.length < 10 && countries.length > 1) {
              cardRef.innerHTML = templateList(countries);
      } else if
          (countries.length === 1) {
              cardRef.innerHTML = templateCardCountries(countries[0]);
      }   
  }


