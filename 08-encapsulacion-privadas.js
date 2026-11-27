// Ejercicio 8: Encapsulación con Propiedades Privadas

class CajaFuerte {
  // Propiedad privada real: solo accesible dentro de la clase
  #codigo;

  constructor(propietario, codigoInicial) {
    // Propiedad pública
    this.propietario = propietario;
    this.#codigo = codigoInicial;
  }

  // Método público para consultar el código secreto
  verCodigo() {
    return this.#codigo;
  }

  // Método público para cambiar el código solo si tiene exactamente 4 dígitos
  cambiarCodigo(nuevoCodigo) {
    // Acepta número o cadena de 4 dígitos (ej. 5678 o "0421" si se pasara como texto,
    // pero evitando decimales o longitudes distintas de 4)
    const textoCodigo = String(nuevoCodigo);
    const esValido = Number.isInteger(nuevoCodigo) && /^\d{4}$/.test(textoCodigo);

    if (esValido) {
      this.#codigo = nuevoCodigo;
      console.log(`Código actualizado correctamente para ${this.propietario}.`);
    } else {
      console.log("Error: el nuevo código debe tener exactamente 4 dígitos.");
    }
  }
}

// 1. Crear objeto miCaja con propietario "Ana" y código inicial 1234
const miCaja = new CajaFuerte("Ana", 1234);

// 2. Llamar a verCodigo()
console.log("Código inicial:", miCaja.verCodigo());

// 3. Cambiar el código a 5678 y comprobar
miCaja.cambiarCodigo(5678);
console.log("Código tras cambiarlo:", miCaja.verCodigo());

// Prueba de validación: código no válido (por ejemplo, de 2 dígitos)
miCaja.cambiarCodigo(12);

// 4. Intento de acceso directo a #codigo desde fuera de la clase:
// Si se descomenta la siguiente línea, JavaScript lanza un SyntaxError porque
// los campos privados (#codigo) están protegidos a nivel de sintaxis de clase.
// console.log(miCaja.#codigo);