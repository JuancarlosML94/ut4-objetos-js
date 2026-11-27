// Ejercicio 7: Herencia de Clases

// Clase base Vehicle
class Vehicle {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método genérico de movimiento
  move() {
    console.log(`${this.nombre} se está moviendo`);
  }
}

// Clase hija Car que hereda de Vehicle
class Car extends Vehicle {
  constructor(name, model) {
    // Llama al constructor de la clase padre (Vehicle)
    super(name);
    this.model = model;
  }

  // Sobrescribe el método move() de Vehicle
  move() {
    console.log(`${this.nombre} is Rolling out!`);
  }

  // Método adicional propio de Car
  info() {
    console.log(`Nombre: ${this.nombre}, Modelo: ${this.model}`);
  }
}

// Instancia de Car solicitada
const myCar = new Car("Toyota", "BZ4X");

// Llamadas a los métodos move() e info()
myCar.move();
myCar.info();