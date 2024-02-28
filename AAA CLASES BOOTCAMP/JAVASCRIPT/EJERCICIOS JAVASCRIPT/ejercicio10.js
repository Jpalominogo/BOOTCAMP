const numbers = [12, 21, 38, 5, 45, 37, 6]

function average() {
    let suma = 0
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i]
    }
    let media = suma / numbers.length
    console.log(media)
    return media
}
console.log(average(numbers))
