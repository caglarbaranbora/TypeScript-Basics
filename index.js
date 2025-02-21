"use strict";
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    introduce() {
        return `Merhaba, ben ${this.name} ve ${this.age} yaşındayım.`;
    }
}
class Employee extends Person {
    constructor(name, age, email, department, salary) {
        super(name, age, email);
        this.department = department;
        this.salary = salary;
    }
    showSalary() {
        return `${this.name} maaşı: ${this.salary} TL.`;
    }
}
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    discountedPrice(discountRate) {
        return this.price - this.price * discountRate;
    }
}
function findMostExpensiveProduct(products) {
    return products.reduce((prev, current) => prev.price > current.price ? prev : current);
}
function groupEmployeesByDepartment(employees) {
    return employees.reduce((acc, employee) => {
        if (!acc[employee.department]) {
            acc[employee.department] = [];
        }
        acc[employee.department].push(employee);
        return acc;
    }, {});
}
const person1 = new Person("Ahmet", 30, "ahmet@gmail.com");
console.log(person1.introduce());
const employee1 = new Employee("Mehmet", 28, "mehmet@gmail.com", "Yazılım", 10000);
console.log(employee1.showSalary());
const products = [
    new Product(1, "Laptop", 20000, "Elektronik"),
    new Product(2, "Telefon", 15000, "Elektronik"),
    new Product(3, "Kulaklık", 5000, "Aksesuar"),
];
console.log("En pahalı ürün:", findMostExpensiveProduct(products));
const employees = [
    new Employee("Ali", 35, "ali@gmail.com", "Muhasebe", 9000),
    new Employee("Zeynep", 29, "zeynep@gmail.com", "Yazılım", 12000),
    new Employee("Eren", 40, "eren@gmail.com", "Yazılım", 13000),
];
console.log("Çalışanların departmanlara göre gruplandırılması:", groupEmployeesByDepartment(employees));
