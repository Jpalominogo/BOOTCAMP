/* Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
]
function finderName(array, param) {
    for (let i = 0; i < nameFinder.length; i++) {
        if (nameFinder[i] === param) {
            return { found: true, position: i }
        }
    }
    return { found: false }
}

let param = 'Peter'
let resultado = finderName(nameFinder, param)

if (resultado.found === true) {
    console.log(
        `El nombre: ${param} fue encontrado en la posición ${resultado.position}.`
    )
} else {
    console.log(`El nombre: ${param} no fue encontrado en el array.`)
}
