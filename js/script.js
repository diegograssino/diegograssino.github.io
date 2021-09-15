'use strict';

const btnKnowMore = document.querySelector('.know-more');
const acordion = document.querySelector('.acordeon');
let open = true;

btnKnowMore.addEventListener('click', function () {
  if (open) {
    acordion.classList.remove('hidden');
    open = !open;
  } else {
    acordion.classList.add('hidden');
    open = !open;
  }
});
