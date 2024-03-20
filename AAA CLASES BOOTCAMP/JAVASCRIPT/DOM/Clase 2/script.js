const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    const p = document.createElement('p')
    p.innerText = 'Has hecho clic'
    document.body.appendChild(p)
})

window.addEventListener('scroll', () => {})
