const avengers = [
    'Hulk',
    'Thor',
    'IronMan',
    'Captain A.',
    'Spiderman',
    'Captain M.',
    'Lidia y sus viajes a Letonia'
]
function findLongestWord() {
    let palabraLongitud = 0
    let palabraMasLarga = ''
    for (let i = 0; i < avengers.length; i++) {
        if (avengers[i].length > palabraLongitud) {
            palabraLongitud = avengers[i].length
            palabraMasLarga = avengers[i]
        }
    }
    return palabraMasLarga
}

console.log(findLongestWord(avengers))
