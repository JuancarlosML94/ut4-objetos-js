// Ejercicio 6: Conversión de objetos a valores primitivos

// 1. Crear objeto cuentaBancaria con propiedad saldo y método toString()
const cuentaBancaria = {
  saldo: 1000,

  // Devuelve una representación legible del saldo al convertir el objeto a string
  toString() {
    return `Saldo: ${this.saldo} EUR`;
  }
};

// 2. Imprimir el objeto forzando su conversión a string
console.log(`${cuentaBancaria}`);
console.log("Estado de la cuenta -> " + cuentaBancaria);
console.log("Llamada explícita a toString():", cuentaBancaria.toString());