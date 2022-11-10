// Criando função do botão que irá ser chamada ao clicá-lo
function contar() {
    // Pegando elementos HTML   
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    //verificação se faltam dados nos inputs.
    if (ini.value.lenght == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert("ERRO! Faltam dados!")
        res.innerHTML = 'Impossível contar.'
    }else{
        res.innerHTML = 'Contando <br>'
        //transformando os valores pegos do input para number para poder realizar cálculos
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pas.value)
        // se o valor de p for 0 ou menor, não tem como contar, pois não tem como contar de 0 em 0 passos.
        if (p <= 0){
            window.alert('Não é possível contar apartir de passo menor que 1, considerando Passo 1')
            p = 1
        }

        //Contagem de forma crescente
        if (i < f){
            for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
        }else{
            //contagem de forma decrescente.
            for (let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }

        }
        res.innerHTML += `\u{1F3C1}`
    }
}
