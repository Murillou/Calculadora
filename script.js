let geradorCor = () =>{
    const letras = '0123456789abcdef'

    let arrCor = []
    for(let i = 0; i < 6; i++){
        let indice = Math.floor(Math.random() * 15)
        arrCor.push(letras[indice]) 
    }
    return '#' + arrCor.join('')
}

const title = document.querySelector('p')
title.style.textAlign = 'center'
title.style.fontSize = '27px'
setInterval(() => {
    title.style.color = geradorCor()
}, 1200)


const subTitle = document.querySelector('.text')
subTitle.style.textAlign = 'center'
subTitle.style.fontSize = '27px'
setInterval(() =>{
    subTitle.style.color = geradorCor()
}, 1200)


const teclas = document.querySelectorAll('.teclas') // puxando todas as teclas da calculadora no HTML

const limiteTamanho = 16
let calculo = '' 
let operacao = ''

teclas.forEach(tecla => tecla.addEventListener('click', e =>{ // adicionando a todas as teclas uma função click que executa o código abaixo
    const valorTecla = e.target.value

    if(valorTecla === '='){
        if(operacao === '√'){
            calculo = `Math.sqrt(${calculo})`
        }
        const resultado = eval(calculo)
        document.querySelector('#display').textContent = resultado
    }else if (valorTecla === 'c'){
        document.querySelector('#display').textContent = ''
        calculo = ''
        operacao = ''
    } else if (valorTecla === '√'){
        operacao = '√'
    }
    else{
        if(display.textContent.match(/^-?\d+$/)){ // match é um metódo de string que retorna um array com os resultados da busca pela RegExp
            calculo = display.textContent
        }
        calculo += valorTecla
        
        if(calculo.length > limiteTamanho){
            calculo = calculo.substring(0, limiteTamanho) // se o tamanho de digitos do calculo for maior que o limite, o display vai ser trancado
        }
        display.textContent = calculo
    }

}))

