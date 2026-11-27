// Ejercicio 4: Métodos en objetos y uso de "this"

// Función constructora Car con propiedades name, model y year
function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;

  // Método de instancia que utiliza "this" para mostrar los datos del coche
  this.getDetails = function () {
    return `${this.name} ${this.model} (${this.year})`;
  };
}

// Instanciación de objetos con el operador new
const car1 = new Car("Toyota", "Corolla", 2022);
const car2 = new Car("Honda", "Civic", 2024);

console.log("Coche 1:", car1);
console.log("Detalles coche 1:", car1.getDetails());
console.log("Coche 2:", car2);
console.log("Detalles coche 2:", car2.getDetails());