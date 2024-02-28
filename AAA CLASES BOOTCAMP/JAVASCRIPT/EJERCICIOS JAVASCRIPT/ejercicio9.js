const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll() {
    let suma = 0
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i]
    }
    return suma
}
sumAll(numbers)
console.log(sumAll(numbers))
