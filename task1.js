// Задание №1
/*Напишите функцию, которая принимает в качестве 
аргумента объект и выводит в консоль все ключи 
и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/

const car = {
    color: 'черный',
    engine: 'ДВС',
    transmission: 'АКП'
};

const bmw = Object.create(car);

bmw.brand = 'BMW';
bmw.model = 'M3';

function getProp (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

getProp(bmw);