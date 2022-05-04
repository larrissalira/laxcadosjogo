var escolhaGeovanni = document.getElementById("botaoGeovanni")
escolhaGeovanni.addEventListener('click', function (primeiraGeovanni) {
    alert("Geovanni estava indo para um date, e estava em dúvida se iria de carro ou de metrô. Como Geovanni deve ir?")
    escolhaGeovanni = prompt("1-carro\n2-metrô")
    while ( escolhaGeovanni!= 1 && escolhaGeovanni != 2) {
        escolhaGeovanni = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (escolhaGeovanni == 2) {
        alert("Geovanni decide ir de metrô pois assim não dependeria do trânsito, reduziria as chances de atraso e poderia economizar uma grana e beber um pouco mais, ele consegue chegar na hora do encontro, e se diverte muito comendo e bebendo bem")
        return location = "./venceu.html"
    } else {
        geovanniDois()
    }
})
function geovanniDois(geovanniSegunda) {
    alert("Geovanni decide ir de carro, pela maior comodidade, e na metade do caminho o carro quebra, ele precisa decidir se chama o reboque ou se continua no caminho pro date")
    geovanniSegunda = prompt("1-reboque\n2-date")
    while (geovanniSegunda != 1 && geovanniSegunda != 2) {
        geovanniSegunda = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (geovanniSegunda == 2) {
        alert("Geovanni deixa o carro numa calçada e vai pro date de ônibus. O Carro é rebocado pela prefeitura e Geovanni precisa pagar uma multa de R$500, mas ele gastou R$200 no date e agora se Laxcou!")
        return location = "./gameover.html"
    } else {
        geovanniTres()
    }
}
function geovanniTres(geovanniSegunda) {
    alert("O reboque custou R$300, Geovanni ainda tem R$200, Geovanni chega em casa frustrado e não sabe o que fazer")
    geovanniSegunda = prompt("1-Tenta o date em casa\n2-Fica sozinho")
    while (geovanniSegunda != 1 && geovanniSegunda != 2) {
        geovanniSegunda = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (geovanniSegunda == 1) {
        alert("Ele liga para a pessoa do date, explica tudo que aconteceu e a convida para assistir uma série em casa. A pessoa aceitou e Geovanni conseguiu o date e ainda economizou uma graninha.")
        return location = "./venceu.html"
    } if (geovanniSegunda == 2) {
        alert("Ele pede cerveja pelo aplicativo e assiste videos de lock picking até dormir. Quando acorda, Geovanni vê que gastou R$200 em cerveja e ficou sem nenhum tostão. Se Laxcou!")
        return location = "./gameover.html"
    }
}