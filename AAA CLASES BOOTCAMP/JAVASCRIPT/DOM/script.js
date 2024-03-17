const title = document.createElement('h1')

title.innerText = 'Title'

console.log(title)

document.body.appendChild(title)

const imagen = document.createElement('img')

imagen.src = 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg'
imagen.alt = 'imagen random'

document.body.appendChild(imagen)

const div = document.createElement('div')
const content = 'Este es el contenido'
div.innerHTML = `<p>${content}</p>`

document.body.appendChild(div)
