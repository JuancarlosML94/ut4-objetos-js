# Práctica UT4 — Objetos en JavaScript

Resolución de los ejercicios **1 al 8** de la unidad sobre objetos, métodos, prototipos, clases y encapsulación en JavaScript (2.º DAW). *(El ejercicio 10 queda pendiente según lo indicado en el enunciado).*

## Estructura de archivos

* `01-creacion-acceso-objetos.js` — Creación de objetos literales, notación de punto y corchetes, añadir y eliminar propiedades.
* `02-bucle-foreach.js` — Comprobación de propiedades y recorrido de claves/valores con `forEach`.
* `03-referencias-clonacion.js` — Copia por referencia frente a clonación superficial con `Object.assign`.
* `04-constructor-car.js` — Función constructora `Car` y uso de `this` con `new`.
* `05-symbol-claves-ocultas.js` — Claves ocultas con `Symbol` y comportamiento frente a `for...in`.
* `06-conversion-primitivos.js` — Personalización de `toString()` en `cuentaBancaria`.
* `07-herencia-clases.js` — Herencia con `Vehicle` y `Car` (`extends`, `super`, sobrescritura de `move()` e `info()`).
* `08-encapsulacion-privadas.js` — Campo privado `#codigo`, `verCodigo()` y validación en `cambiarCodigo()`.
* `index.js` — Ejecución conjunta de los ejercicios para facilitar las pruebas.

## Cómo ejecutar los ejercicios

Asegúrate de tener **Node.js** instalado. Desde la carpeta de la práctica:

```bash
# Ejecutar todos los ejercicios en orden
node index.js

# O ejecutar un ejercicio concreto
node 01-creacion-acceso-objetos.js