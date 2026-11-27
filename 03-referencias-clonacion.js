// Ejercicio 3: Referencias de objetos y clonación

// 1. Crear objeto usuario1 con nombre, edad y email
const usuario1 = {
  nombre: "Carlos",
  edad: 32,
  email: "carlos@ejemplo.com"
};

// 2. Copia por referencia: usuario2 apunta al mismo objeto en memoria
const usuario2 = usuario1;
usuario2.edad = 35;

console.log("usuario1 tras modificar usuario2.edad:", usuario1);
console.log("usuario2:", usuario2);

// 3. Clonación superficial con Object.assign
const usuarioClonado = Object.assign({}, usuario1);
usuarioClonado.nombre = "Carlos Clonado";

console.log("usuario1 original (no modificado):", usuario1);
console.log("usuarioClonado (modificado):", usuarioClonado);