// Ejercicio 1: Creación y acceso a objetos

// 1. Crear el objeto literal persona con las propiedades solicitadas
const persona = {
  nombre: "Ana",
  edad: 28,
  trabajo: "Ingeniera"
};

// 2. Acceder a las propiedades mediante notación de punto e imprimirlas
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);

// 3. Modificar el objeto: añadir 'pais' y eliminar 'trabajo'
persona.pais = "España";
delete persona.trabajo;

// Imprimir el objeto completo actualizado
console.log("Objeto persona actualizado:", persona);

// 4. Acceder a 'edad' utilizando notación de corchetes y mostrarla
console.log("Edad (notación de corchetes):", persona["edad"]);