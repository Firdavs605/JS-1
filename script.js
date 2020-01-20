var num1 = 8;
var num2 = 9;

var num3 = 20;
var num4 = 3;

var num5 = 64;
var num6 = 8;

var num7 = 17;
var num8 = 3;


var trueEx = num1 + num2;
var trueEx2 = num3 * num4;
var trueEx3 = num5 / num6;
var trueEx4 = num5 % num6;

var firstName = prompt('Введите имя');
var myAge = prompt('Введите свой возраст');
var userNum = prompt('Решите пример: 8 + 9');
var userNum2 = prompt('Решите пример: 20 * 3');
var userNum3 = prompt('Решите пример: 64 / 8');
var userNum4 = prompt('Решите пример: 17 % 3');


console.log('Ваше имя: ' + firstName);
console.log('Ваш возраст: ' + myAge);
console.log('8 + 9 = ' + userNum + ' ; ' + 'правильный ответ: ' + trueEx);
console.log('20 * 3 = ' + userNum2 + ' ; ' + 'правильный ответ: ' + trueEx2);
console.log('64 / 8 = ' + userNum3 + ' ; ' + 'правильный ответ: ' + trueEx3);
console.log('17 % 3 = ' + userNum4 + ' ; ' + 'правильный ответ: ' + trueEx4);
alert('Спасибо за ответы, теперь откройте консоль и проверьте ваши ответы');