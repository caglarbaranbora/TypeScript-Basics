class Person {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  introduce(): string {
    return `Merhaba, ben ${this.name} ve ${this.age} yaşındayım.`;
  }
}

class Employee extends Person {
  department: string;
  salary: number;

  constructor(
    name: string,
    age: number,
    email: string,
    department: string,
    salary: number
  ) {
    super(name, age, email);
    this.department = department;
    this.salary = salary;
  }
  showSalary(): string {
    return `${this.name} maaşı: ${this.salary} TL.`;
  }
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  discountedPrice(discountRate: number): number;
}

class Product implements IProduct {
  id: number;
  name: string;
  price: number;
  category: string;

  constructor(id: number, name: string, price: number, category: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  discountedPrice(discountRate: number): number {
    return this.price - this.price * discountRate;
  }
}

function findMostExpensiveProduct(products: Product[]): Product {
  return products.reduce((prev, current) =>
    prev.price > current.price ? prev : current
  );
}

function groupEmployeesByDepartment(employees: Employee[]): {
  [key: string]: Employee[];
} {
  return employees.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = [];
    }
    acc[employee.department].push(employee);
    return acc;
  }, {} as Record<string, Employee[]>);
}

const person1 = new Person("Ahmet", 30, "ahmet@gmail.com");
console.log(person1.introduce());

const employee1 = new Employee(
  "Mehmet",
  28,
  "mehmet@gmail.com",
  "Yazılım",
  10000
);
console.log(employee1.showSalary());

const products: Product[] = [
  new Product(1, "Laptop", 20000, "Elektronik"),
  new Product(2, "Telefon", 15000, "Elektronik"),
  new Product(3, "Kulaklık", 5000, "Aksesuar"),
];

console.log("En pahalı ürün:", findMostExpensiveProduct(products));

const employees: Employee[] = [
  new Employee("Ali", 35, "ali@gmail.com", "Muhasebe", 9000),
  new Employee("Zeynep", 29, "zeynep@gmail.com", "Yazılım", 12000),
  new Employee("Eren", 40, "eren@gmail.com", "Yazılım", 13000),
];

console.log(
  "Çalışanların departmanlara göre gruplandırılması:",
  groupEmployeesByDepartment(employees)
);
