var escolhaGeovanni= document.getElementById("botaoGeovanni")
escolhaGeovanni.addEventListener ('click', function (primeiraGeovanni) {
    alert("Geovanni estava indo para um date, e estava em dúvida se \niria de carro ou de metrô. Como Geovanni deve ir?")
    escolhaGeovanni = prompt("1- CARRO \n 2- METRÔ")
    
    while ( escolhaGeovanni!= 1 && escolhaGeovanni != 2) {
        escolhaGeovanni = prompt("Essa resposta é inválida, \nescolha entre os números 1 ou 2.")

    } if (escolhaGeovanni == 2) {
        alert("Geovanni decide ir de metrô pois assim não dependeria do trânsito, \nreduziria as chances de atraso e poderia economizar uma grana para beber um pouco mais. \nEle consegue chegar na hora do encontro, se diverte muito comendo e bebendo.")
        return location = "./venceu.html"
    } else {
        geovanniDois()
    }
})
function geovanniDois(geovanniSegunda) {
    alert("Geovanni decide ir de carro, pela maior comodidade, e na metade do caminho o carro quebra, \nele precisa decidir se chama o reboque ou se continua no caminho pro date")
    geovanniSegunda = prompt("1- REBOQUE \n2- DATE")
    while (geovanniSegunda != 1 && geovanniSegunda != 2) {
        geovanniSegunda = prompt("Essa resposta é inválida, \nescolha entre os números 1 ou 2")
    } if (geovanniSegunda == 2) {
        alert("Geovanni deixa o carro numa calçada e vai pro date de ônibus. \nO Carro é rebocado pela prefeitura e Geovanni precisa pagar uma multa de R$500, \nmas ele gastou R$200 no date e agora se Laxcou!")
        return location = "./gameover.html"
    } else {
        geovanniTres()
    }
}
function geovanniTres(geovanniSegunda) {
    alert("O reboque custou R$300, Geovanni ainda tem R$200. \nGeovanni chega em casa frustrado e não sabe o que fazer")
    geovanniSegunda = prompt("1- TENTA O DATE EM CASA \n2- FICA SOZINHO")
    while (geovanniSegunda != 1 && geovanniSegunda != 2) {
        geovanniSegunda = prompt("Essa resposta é inválida, escolha entre os números 1 ou 2")
    } if (geovanniSegunda == 1) {
        alert("Ele liga para a pessoa do date, explica tudo que aconteceu e a convida para assistir uma série em casa. \nA pessoa aceitou o convite, Geovanni conseguiu o date e ainda economizou uma graninha.")
        return location = "./venceu.html"
    } if (geovanniSegunda == 2) {
        alert("Ele pede cerveja pelo aplicativo e assiste videos de lock picking até dormir. \nQuando acorda, Geovanni vê que gastou R$200 em cerveja e ficou sem nenhum tostão. Se Laxcou!")
        return location = "./gameover.html"
    }
}