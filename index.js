// Punto de entrada para ejecutar todos los ejercicios de la práctica (1 al 8) en orden

const ejercicios = [
  { titulo: "Ejercicio 1: Creación y acceso a objetos", ruta: "./01-creacion-acceso-objetos.js" },
  { titulo: "Ejercicio 2: Bucle ForEach", ruta: "./02-bucle-foreach.js" },
  { titulo: "Ejercicio 3: Referencias de objetos y clonación", ruta: "./03-referencias-clonacion.js" },
  { titulo: "Ejercicio 4: Métodos en objetos y uso de 'this'", ruta: "./04-constructor-car.js" },
  { titulo: "Ejercicio 5: Symbol y claves ocultas", ruta: "./05-symbol-claves-ocultas.js" },
  { titulo: "Ejercicio 6: Conversión de objetos a valores primitivos", ruta: "./06-conversion-primitivos.js" },
  { titulo: "Ejercicio 7: Herencia de Clases", ruta: "./07-herencia-clases.js" },
  { titulo: "Ejercicio 8: Encapsulación con Propiedades Privadas", ruta: "./08-encapsulacion-privadas.js" }
];

for (const ejercicio of ejercicios) {
  console.log("\n==================================================");
  console.log(ejercicio.titulo);
  console.log("==================================================");
  require(ejercicio.ruta);
}