'use strict';

alert('Hello mother fucker!');

let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    column = document.getElementsByClassName('column');

    
let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);                                             //добавил 5ый пункт


menu.insertBefore(menuItem[2], menuItem[1]);                      // поменял местами 2 и 3 пункты

document.body.style.background = "url('img/apple_true.jpg')";      // замена фона на другое изображение

adv.remove();                                                      // Удаление назойливой рекламы


let qwestion = prompt('Как вы относитесь к технике Apple?', ''),
    promptApple = document.querySelector('#prompt');

promptApple.textContent = qwestion;                                // добавление вопроса об отношении к Эплу