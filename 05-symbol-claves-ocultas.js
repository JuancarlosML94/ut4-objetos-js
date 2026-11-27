// Ejercicio 5: Symbol y claves ocultas

// 1. Crear un Symbol único para usarlo como identificador oculto
const id = Symbol("id");

// 2. Crear el objeto empleado añadiendo la propiedad con el Symbol como clave
const empleado = {
  nombre: "Lucía",
  puesto: "Desarrolladora Frontend",
  [id]: 1042
};

// 3. Intentar recorrer el objeto con un bucle for...in (la clave Symbol será ignorada)
console.log("--- Propiedades enumerables con for...in ---");
for (const clave in empleado) {
  console.log(`${clave}: ${empleado[clave]}`);
}

// 4. Acceso directo a la propiedad oculta utilizando el Symbol
console.log("Acceso directo mediante Symbol id:", empleado[id]);
