addEventListener('keypress', function(evento) {
    if (evento.keyCode === 32) {
        cod.innerText = (evento.keyCode)
        tec.innerText = 'Space'
    } else {
        cod.innerText = (evento.keyCode)
        tec.innerText = (evento.key)
    }
   
})