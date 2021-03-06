'use strict';

let startProg = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('dayBudget-value')[0],
    levelValue = document.getElementsByClassName('lavel-value')[0],
    savingsValue = document.getElementsByClassName('savings-value')[0],
    expensesValue = document.getElementsByClassName('chooseExpenses-value')[0],
    optExpensesValue = document.getElementsByClassName('chooseOptExpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


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
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses : function() {
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
    },
    detectDayBudget : function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert('Ежедневный бюджет: ' + appData.moneyPerDay + ' руб.');
    },
    detectLevel : function() {
        if (appData.moneyPerDay < 1000) {
            console.log('Минимальный уровень достатка.');
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка.');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка!');
        } else {
            console.log('Ууупс... Произошла какая-то ошибка!');
        }
    },
    checkSavings : function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма вших накоплений?', ''),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses : function() {
        for(let i = 1; i <= 3; i++) {
            let q1 = prompt('Статья необязательных расходов?');
    
            if ((typeof(q1)) === 'string' && (typeof(q1)) != null && q1 != '' && q1.length < 50) {
                
                console.log('done too');
        
                appData.optionalExpenses[i] = q1;
            } else {
                console.log('Bad result!');
                i--;
            }
        }
    },
    chooseIncome : function () {

            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

            if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?', ''));
                appData.income.sort();
                
                console.log('done');
            } else {
                console.log('Bad result!');
            }
        appData.income.forEach (function(itemmassive, i) {
            alert('Способы доп. заработка: ' + (i+1) + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
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