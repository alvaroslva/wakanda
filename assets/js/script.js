/* fotinha do elton */
let elton = document.querySelector('#elton')

let fundoEscuro = document.querySelector('.escuro')

let charada = document.querySelector('.charada1')
let titulo = document.querySelector('.ch-tit1')

let charada2 = document.querySelector('.charada2')
let acertou = document.querySelector('.ch-acertou')
let titulo2 = document.querySelector('.ch-tit2')
 
let charada3 = document.querySelector('.charada3')
let acertou2 = document.querySelector('.ch-acertou2')
let titulo3 = document.querySelector('.ch-tit3')
 
let charada4 = document.querySelector('.charada4')
let acertou3 = document.querySelector('.ch-acertou3')
let titulo4 = document.querySelector('.ch-tit4')

let acertou4 = document.querySelector('.ch-acertou4')
let titulo5 = document.querySelector('.ch-tit5')

let paginaEspecial = document.querySelector('.pagina-especial')

let fechar = document.querySelector('.fechar')


function fecharTudo(){
    fundoEscuro.classList.remove('visible')
    charada.classList.remove('visible')
    titulo.classList.remove('visible')
    titulo2.classList.remove('visible')
    titulo3.classList.remove('visible')
    titulo4.classList.remove('visible')
    titulo5.classList.remove('visible')
    charada2.classList.remove('visible')
    charada3.classList.remove('visible')
    charada4.classList.remove('visible')
    paginaEspecial.classList.remove('visible')

    fechar.classList.remove('visible')
    fechar.classList.add('hidden')

    fundoEscuro.classList.add('hidden')
    charada.classList.add('hidden')
    titulo.classList.add('hidden')
    titulo2.classList.add('hidden')
    titulo3.classList.add('hidden')
    titulo4.classList.add('hidden')
    titulo5.classList.add('hidden')
    charada2.classList.add('hidden')
    charada3.classList.add('hidden')
    charada4.classList.add('hidden')
    paginaEspecial.classList.add('hidden')


    x.classList.add('hidden')
}






let bt1 = document.querySelector('#bt1')
let bt2 = document.querySelector('#bt2')
let bt4 = document.querySelector('#bt4')
let bt5 = document.querySelector('#bt5')
let bt7 = document.querySelector('#bt7')
let bt8 = document.querySelector('#bt8')
let bt10 = document.querySelector('#bt10')
let bt11 = document.querySelector('#bt11')

let btCerto = document.querySelector('#bt-certo')
let btCerto2 = document.querySelector('#bt-certo2')
let btCerto3 = document.querySelector('#bt-certo3')
let btCerto4 = document.querySelector('#bt-certo4')

let link = document.querySelector('.link')


// botões errados :/

function botaoErrado1(){
    bt1.classList.add('btRed')
    fundoEscuro.classList.add('fundoRed')
    
    setTimeout(() => {
        fundoEscuro.classList.remove('fundoRed')
        bt1.classList.remove('btRed')
    }, 300);
}

function botaoErrado2(){
    bt2.classList.add('btRed')
    fundoEscuro.classList.add('fundoRed')
    
    setTimeout(() => {
        fundoEscuro.classList.remove('fundoRed')
        bt2.classList.remove('btRed')
    }, 300);
}

function botaoErrado4(){
    bt4.classList.add('btRed')
    fundoEscuro.classList.add('fundoRed')
    
    setTimeout(() => {
        fundoEscuro.classList.remove('fundoRed')
        bt4.classList.remove('btRed')
    }, 300);
}

function botaoErrado5(){
    bt5.classList.add('btRed')
    fundoEscuro.classList.add('fundoRed')
    
    setTimeout(() => {
        fundoEscuro.classList.remove('fundoRed')
        bt5.classList.remove('btRed')
    }, 300);
}
function botaoErrado7(){
    bt7.classList.add('btRed')
    fundoEscuro.classList.add('fundoRed')
    
    setTimeout(() => {
        fundoEscuro.classList.remove('fundoRed')
        bt7.classList.remove('btRed')
    }, 300);
}
function botaoErrado8(){
    bt8.classList.add('btRed')
    fundoEscuro.classList.add('fundoRed')
    
    setTimeout(() => {
        fundoEscuro.classList.remove('fundoRed')
        bt8.classList.remove('btRed')
    }, 300);
}
function botaoErrado10(){
    bt10.classList.add('btRed')
    fundoEscuro.classList.add('fundoRed')
    
    setTimeout(() => {
        fundoEscuro.classList.remove('fundoRed')
        bt10.classList.remove('btRed')
    }, 300);
}
function botaoErrado11(){
    bt11.classList.add('btRed')
    fundoEscuro.classList.add('fundoRed')
    
    setTimeout(() => {
        fundoEscuro.classList.remove('fundoRed')
        bt11.classList.remove('btRed')
    }, 300);
}

// fim botões errados :)



function iniciarCharada(){
    
    fundoEscuro.classList.remove('hidden')
    titulo.classList.remove('hidden')

    fundoEscuro.classList.add('visible')
    titulo.classList.add('visible')
    
    setTimeout(() => {
        titulo.classList.remove('visible')
        titulo.classList.add('hidden')
        
        setTimeout(() => {
            fechar.classList.remove('hidden')
            fechar.classList.add('visible')
            charada.classList.remove('hidden')
            charada.classList.add('visible')
        }, 1000);
    }, 3000);
}

function iniciarSegundaCharada(){
    // acertou = pisca verde
    btCerto.classList.add('btGreen')
    fundoEscuro.classList.add('fundoGreen')
    fechar.classList.remove('visible')
    fechar.classList.add('hidden')
    
    setTimeout(() => {
        // fim pisca verde
        fundoEscuro.classList.remove('fundoGreen')
        
        setTimeout(() => {
            // sai charada 1
            charada.classList.remove('visible')
            charada.classList.add('hidden')
            
            // entra tela: "Acertou!"
            acertou.classList.add('visible')
            acertou.classList.remove('hidden')
            
            setTimeout(() => {
                // sai tela: "Acertou!"
                acertou.classList.remove('visible')
                acertou.classList.add('hidden')
                
                // entra tela: "Segunda Charada"
                titulo2.classList.add('visible')
                titulo2.classList.remove('hidden')

                
                setTimeout(() => {
                    // sai tela: "Segunda Charada"
                    titulo2.classList.remove('visible')
                    titulo2.classList.add('hidden')
                    
                    // entra charada2
                    charada2.classList.add('visible')
                    charada2.classList.remove('hidden')

                    fechar.classList.add('visible')
                    fechar.classList.remove('hidden')
                }, 2000);
            }, 3000);
        }, 500);
    }, 300);
}


function iniciarTerceiraCharada(){
    btCerto2.classList.add('btGreen')
    fundoEscuro.classList.add('fundoGreen')

    fechar.classList.remove('visible')
    fechar.classList.add('hidden')

    setTimeout(() => {
        // fim pisca verde
        fundoEscuro.classList.remove('fundoGreen')
        
        setTimeout(() => {
            // sai charada 2
            charada2.classList.remove('visible')
            charada2.classList.add('hidden')
            
            // entra tela: "Acertou!"
            acertou2.classList.add('visible')
            acertou2.classList.remove('hidden')
            
            setTimeout(() => {
                // sai tela: "Acertou!"
                acertou2.classList.remove('visible')
                acertou2.classList.add('hidden')
                
                // entra tela: "Terceira Charada"
                titulo3.classList.add('visible')
                titulo3.classList.remove('hidden')
                
                setTimeout(() => {
                    // sai tela: "Terceira Charada"
                    titulo3.classList.remove('visible')
                    titulo3.classList.add('hidden')
                    
                    // entra charada3
                    charada3.classList.add('visible')
                    charada3.classList.remove('hidden')

                    fechar.classList.add('visible')
                    fechar.classList.remove('hidden')

                }, 2000);
            }, 3000);
        }, 500);
    }, 300);
}

function iniciarQuartaCharada(){
    btCerto3.classList.add('btGreen')
    fundoEscuro.classList.add('fundoGreen')

    fechar.classList.remove('visible')
    fechar.classList.add('hidden')

    setTimeout(() => {
        // fim pisca verde
        fundoEscuro.classList.remove('fundoGreen')
        
        setTimeout(() => {
            // sai charada 3
            charada3.classList.remove('visible')
            charada3.classList.add('hidden')
            
            // entra tela: "Acertou!"
            acertou3.classList.add('visible')
            acertou3.classList.remove('hidden')
            
            setTimeout(() => {
                // sai tela: "Acertou!"
                acertou3.classList.remove('visible')
                acertou3.classList.add('hidden')
                
                // entra tela: "Quarta Charada"
                titulo4.classList.add('visible')
                titulo4.classList.remove('hidden')
                
                setTimeout(() => {
                    // sai tela: "Quarta Charada"
                    titulo4.classList.remove('visible')
                    titulo4.classList.add('hidden')
                    
                    // entra charada4
                    charada4.classList.add('visible')
                    charada4.classList.remove('hidden')

                    fechar.classList.add('visible')
                    fechar.classList.remove('hidden')
                }, 2000);
            }, 3000);
        }, 2000);
    }, 300);
}


function encerramento(){
    btCerto4.classList.add('btGreen')
    fundoEscuro.classList.add('fundoGreen')

    fechar.classList.remove('visible')
    fechar.classList.add('hidden')

    setTimeout(() => {
        // fim pisca verde
        fundoEscuro.classList.remove('fundoGreen')
        
        setTimeout(() => {
            // sai charada 3
            charada4.classList.remove('visible')
            charada4.classList.add('hidden')
            
            // entra tela: "Acertou!"
            acertou4.classList.add('visible')
            acertou4.classList.remove('hidden')
            
            setTimeout(() => {
                // sai tela: "Acertou!"
                acertou4.classList.remove('visible')
                acertou4.classList.add('hidden')
                
                // entra tela: "Melzinho"
                titulo5.classList.add('visible')
                titulo5.classList.remove('hidden')
                
                setTimeout(() => {
                    // sai tela: "Melzinho"
                    titulo5.classList.remove('visible')
                    titulo5.classList.add('hidden')

                    // entra tela: "Prêmio"
                    paginaEspecial.classList.add('visible')
                    paginaEspecial.classList.remove('hidden')
               
                    fechar.classList.add('visible')
                    fechar.classList.remove('hidden')
                }, 2000);
            }, 3000);
        }, 500);
    }, 300);
}

elton.addEventListener('click', iniciarCharada)
btCerto.addEventListener('click', iniciarSegundaCharada)
btCerto2.addEventListener('click', iniciarTerceiraCharada)
btCerto3.addEventListener('click', iniciarQuartaCharada)
btCerto4.addEventListener('click', encerramento)

bt1.addEventListener('click', botaoErrado1)
bt2.addEventListener('click', botaoErrado2)
bt4.addEventListener('click', botaoErrado4)
bt5.addEventListener('click', botaoErrado5)
bt7.addEventListener('click', botaoErrado7)
bt8.addEventListener('click', botaoErrado8)
bt10.addEventListener('click', botaoErrado10)
bt11.addEventListener('click', botaoErrado11)

fechar.addEventListener('click', fecharTudo)