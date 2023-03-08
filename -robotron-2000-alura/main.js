const subtrair = document.getElementById('subtrair')


const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('.controle')
    if (operacao === '-'){
        braco.value --
    }else{
        braco.value ++
    }
}
