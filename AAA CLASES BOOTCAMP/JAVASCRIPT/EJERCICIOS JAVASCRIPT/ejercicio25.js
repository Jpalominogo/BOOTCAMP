/*
Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas
 */

const products = [
    { name: 'Funko Dr. Strange', sellCount: 10 },
    { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
    { name: 'Sable laser FX', sellCount: 23 },
    { name: 'Varita de Voldemort', sellCount: 6 }
]

let sumaTotal = 0

for (let i = 0; i < products.length; i++) {
    sumaTotal += products[i].sellCount
}
console.log('La suma total de las ventas es: ', sumaTotal)

function average() {
    let sumaTotal = 0
    for (let i = 0; i < products.length; i++) {
        sumaTotal += products[i].sellCount
    }
    let media = sumaTotal / products.length
    console.log(media)
    return media
}

console.log(`La media del precio de los productos es: ${average(products)}`)
