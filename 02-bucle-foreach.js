// Ejercicio 2: Bucle ForEach sobre propiedades de un objeto

const persona = {
  nombre: "Ana",
  edad: 28,
  pais: "España"
};

// 1. Comprobar si existen las propiedades 'nombre' y 'apellido' usando forEach
let existeNombre = false;
let existeApellido = false;

Object.keys(persona).forEach((clave) => {
  if (clave === "nombre") {
    existeNombre = true;
  }
  if (clave === "apellido") {
    existeApellido = true;
  }
});

console.log("¿Existe la propiedad 'nombre'?:", existeNombre);
console.log("¿Existe la propiedad 'apellido'?:", existeApellido);

// 2. Recorrer todas las propiedades e imprimir clave y valor
console.log("--- Claves y valores de persona ---");
Object.entries(persona).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});