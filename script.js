'use strict';

let money = +prompt('Ваш бюджет на месяц?' + ''),
    time = prompt('Введите дату в формате YYYY-MM-DD' + '');

let appData = {
    finance : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let q1 = prompt('Введите обязательную статью расходов в этом месяце: ' + ''),
    a1 = +prompt('Во сколько обойдется? ' + ''),
    q2 = prompt('Введите обязательную статью расходов в этом месяце: ' + ''),
    a2 = +prompt('Во сколько обойдется? ' + '');

    appData.expenses[q1] = a1;
    appData.expenses[q2] = a2;

alert((appData.finance)/30);