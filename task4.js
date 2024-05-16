// Задание 4

/* 
1. Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
2. Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
4. Создайте экземпляры каждого прибора.
5. Выведите в консоль и посмотрите на результаты работы
*/

function ElectricalDevice (kind, power, brand) {
    this.kind = kind,
    this.usePower = power,
    this.brand = brand,
    this.status = 'off'
}   

ElectricalDevice.prototype.turnOn = function () {
    this.status = 'on';
    console.log(`Прибор ${this.name} с мощностью ${this.usePower} включен`);
}

ElectricalDevice.prototype.turnOff = function () {
    this.status = 'off';
    console.log(`Прибор ${this.name} с мощностью ${this.usePower} выключен`);
}

function HouseholdAppliances (name, kind, power, brand, area, functionality) {
    this.name = name,
    this.areaOfUse = area,
    this.functionality = functionality,
    this.kind = kind,
    this.usePower = power,
    this.brand = brand
    
}

HouseholdAppliances.prototype = new ElectricalDevice();

HouseholdAppliances.prototype.getInfo = function() {
    console.group(`${this.name}`);
    console.log(`Вид электроприбора: ${this.kind}`);
    console.log(`Область применения: ${this.areaOfUse}`);
    console.log(`Выполняемые функции: ${this.functionality}`);
    console.log(`Фирма производитель: ${this.brand}`);
    console.log(`Потребляемая мощность, Вт: ${this.usePower}`);
    console.groupEnd();
}

function Illumination (name, kind, power, brand, typeOfLighting, color) {
    this.name = name,
    this.typeOfLighting = typeOfLighting,
    this.color = color,
    this.kind = kind,
    this.usePower = power,
    this.brand = brand  
}

Illumination.prototype = new ElectricalDevice();

Illumination.prototype.getInfo = function() {
    console.group(`${this.name}`);
    console.log(`Вид электроприбора: ${this.kind}`);
    console.log(`Тип освещения: ${this.typeOfLighting}`);
    console.log(`Цветовое оформление: ${this.color}`);
    console.log(`Потребляемая мощность, Вт: ${this.usePower}`);
    console.groupEnd();
}

function OfficeDevices (kind, power, brand, name, functionality, price, serviceLife) {
    this.name = name,
    this.functionality = functionality,
    this.price = price,
    this.serviceLife = serviceLife,
    this.kind = kind,
    this.usePower = power,
    this.brand = brand
}

OfficeDevices.prototype = new ElectricalDevice();

OfficeDevices.prototype.getInfo = function() {
    console.group(`${this.name}`);
    console.log(`Вид электроприбора: ${this.kind}`);
    console.log(`Выполняемые функции: ${this.functionality}`);
    console.log(`Фирма производитель: ${this.brand}`);
    console.log(`Стоимость, руб: ${this.price}`);
    console.log(`Срок службы, лет: ${this.serviceLife}`);
    console.log(`Потребляемая мощность, Вт: ${this.usePower}`);
    console.groupEnd();
}

const microwave = new HouseholdAppliances("Микроволновая печь", "Бытовая техника", 400, "Samsung", "Приготовление пищи", "Подогрев, разморозка, гриль");
const luminaire = new Illumination("Светильник", "Осветительные приборы", 45, "Ikea", "Местное освещения", "Желтый");
const computer = new OfficeDevices ("Офисные приборы", 270, "Acer", "Компьютер", "Работа с офисными приложениями", 100000, 5);

const allElectricalDevice = [microwave, luminaire, computer];

function calcPower(arr) {
    let sumPower = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].status === 'on') {
            sumPower += arr[i].usePower;
        }
    }
    console.log(`Суммарная мощность включенных приборов равна ${sumPower} Вт`);
}