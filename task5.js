// Задание 5

//Перепишите консольное приложение из предыдущего юнита на классы.

class ElectricalDevice {
    constructor(kind, power, brand) {
    this.kind = kind;
    this.usePower = power;
    this.brand = brand;
    this.status = 'off';
    }
    turnOn() {
        this.status = 'on';
        console.log(`Прибор ${this.name} с мощностью ${this.usePower} включен`);
    }
    turnOff() {
        this.status = 'off';
        console.log(`Прибор ${this.name} с мощностью ${this.usePower} выключен`);
    }
}   

class HouseholdAppliances extends ElectricalDevice {
    constructor(name, area, functionality, kind, power, brand) {
        super(kind, power, brand);
        this.name = name;
        this.areaOfUse = area;
        this.functionality = functionality;
    }
    getInfo() {
        console.group(`${this.name}`);
        console.log(`Вид электроприбора: ${this.kind}`);
        console.log(`Область применения: ${this.areaOfUse}`);
        console.log(`Выполняемые функции: ${this.functionality}`);
        console.log(`Фирма производитель: ${this.brand}`);
        console.log(`Потребляемая мощность, Вт: ${this.usePower}`);
        console.groupEnd();
    }
}

class Illumination extends ElectricalDevice {
    constructor(name, typeOfLighting, color, kind, power, brand) {
        super(kind, power, brand);
        this.name = name;
        this.typeOfLighting = typeOfLighting;
        this.color = color;
    }
    getInfo() {
        console.group(`${this.name}`);
        console.log(`Вид электроприбора: ${this.kind}`);
        console.log(`Тип освещения: ${this.typeOfLighting}`);
        console.log(`Цветовое оформление: ${this.color}`);
        console.log(`Потребляемая мощность, Вт: ${this.usePower}`);
        console.groupEnd();
    }
}

class OfficeDevices extends ElectricalDevice {
    constructor(name, functionality, price, serviceLife, kind, power, brand) {
        super(kind, power, brand);
        this.name = name;
        this.functionality = functionality;
        this.price = price;
        this.serviceLife = serviceLife;
    }
    getInfo() {
        console.group(`${this.name}`);
        console.log(`Вид электроприбора: ${this.kind}`);
        console.log(`Выполняемые функции: ${this.functionality}`);
        console.log(`Фирма производитель: ${this.brand}`);
        console.log(`Стоимость, руб: ${this.price}`);
        console.log(`Срок службы, лет: ${this.serviceLife}`);
        console.log(`Потребляемая мощность, Вт: ${this.usePower}`);
        console.groupEnd();
    }
}



const microwave = new HouseholdAppliances("Микроволновая печь", "Приготовление пищи", "Подогрев, разморозка, гриль", "Бытовая техника", 400, "Samsung");
const luminaire = new Illumination("Светильник", "Местное освещения", "Желтый", "Осветительные приборы", 45, "Ikea");
const computer = new OfficeDevices ("Компьютер", "Работа с офисными приложениями", 100000, 5, "Офисные приборы", 270, "Acer");

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