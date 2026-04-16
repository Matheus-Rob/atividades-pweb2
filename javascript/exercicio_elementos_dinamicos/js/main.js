import flags from './model/flags.js';

const main = document.querySelector('main');
let body = ""

for (let flag of flags) {
    body +=`
    <div class="flag col-2 my-2 text-center">
        <img src="${flag.image}" alt="${flag.name}">
        <p>${flag.name}</p>
      </div>
    `
}

main.insertAdjacentHTML('beforeend', body);
