// Crear un arreglo con números aleatorios
const numeros = [];
const cantidadNumeros = 10; // Puedes cambiar este valor para ajustar el tamaño del arreglo

for (let i = 0; i < cantidadNumeros; i++) {
  numeros.push(Math.floor(Math.random() * 100));
}

console.log("Arreglo original:", numeros);

// Calcular la suma de los elementos
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

console.log("La suma de los elementos es:", suma);