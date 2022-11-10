// Pegando elementos HTML   
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.lenght == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert("ERRO! Faltam dados!")
        res.innerHTML = 'Impossível contar.'
    }else{
        res.innerHTML = 'Contando <br>'
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pas.value)
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
            for (let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }

        }
        res.innerHTML += `\u{1F3C1}`
    }
}
