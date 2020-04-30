'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(money == isNaN || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();


let appData = {
    finance : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

function chooseExpenses() {
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
}
chooseExpenses();

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

function detectDayBudget() {
    appData.moneyPerDay = (appData.finance / 30).toFixed();

    alert('Ежедневный бюджет: ' + appData.moneyPerDay + ' руб.');
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 1000) {
        console.log('Минимальный уровень достатка.');
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка.');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка!');
    } else {
        console.log('Ууупс... Произошла какая-то ошибка!');
    }
}
detectLevel();

function chooseOptExpenses() {
    for(let i = 0; i < 3; i++) {
        let q1 = prompt('Статья необязательных расходов?');

        if ((typeof(q1)) === 'string' && (typeof(q1)) != null && q1 != '' && q1.length < 50) {
            
            console.log('done too');
    
            appData.optionalExpenses[1] = q1;
        } else {
            console.log('Bad result!');
            i--;
        }
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма вших накоплений?', ''),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();