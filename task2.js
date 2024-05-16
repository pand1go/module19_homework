// Задание 2
/*Напишите функцию, которая принимает в качестве аргументов 
строку и объект, а затем проверяет, есть ли у переданного 
объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

const car = {
    color: 'черный',
    engine: 'ДВС',
    transmission: 'АКП'
};

const bmw = Object.create(car);

bmw.brand = 'BMW';
bmw.model = 'M3';

function checkProp (prop, obj) {
    for (let key in obj) {
        if (key === prop) {
            return true;
        }
    }
    return false;
}

checkProp(bmw);