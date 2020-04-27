'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    finance : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце: ', ''),
        b = +prompt('Во сколько обойдется? ', '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        
        console.log('done');

        appData.expenses[a] = b;
    } else {
        console.log('Bad result!');
        i--;
    }
}

/* Вариант № 1 - while

let i = 0;

while (i < 2) {
    

    let a = prompt('Введите обязательную статью расходов в этом месяце: ' + ''),
        b = +prompt('Во сколько обойдется? ' + '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

        console.log('done');   

        appData.expenses[a] = b;
    } else {
        console.log('Bad result!');
        i--;
    }

    i++;
}
*/


/* Вариант № 2 - do/while

let i = 0;

do {
    let a = prompt('Введите обязательную статью расходов в этом месяце: ' + ''),
        b = +prompt('Во сколько обойдется? ' + '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {

        console.log('done'); 

        appData.expenses[a] = b;
    } else {
        console.log('Bad result!');
        i--;
    }

    i++;
}
while (i < 2);
*/

appData.moneyPerDay = appData.finance / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay + ' руб.');

if (appData.moneyPerDay < 1000) {
    console.log('Минимальный уровень достатка.');
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка.');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка!');
} else {
    console.log('Ууупс... Произошла какая-то ошибка!');
}