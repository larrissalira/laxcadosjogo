var escolhaAdalberto = document.getElementById("botaoAdalberto")
escolhaAdalberto.addEventListener('click', function (primeiroEscolha) {
    alert("Adalberto ganha pouco e tem medo de tentar outro emprego por inseguranças e comodismo. \nAdora a empresa e a sua equipe, sente que possui qualidade de vida, pois mora perto do trabalho. \nMesmo assim, tem muitas contas para pagar, é pai de 4 filhos... \n\Ele está sendo pressionado para realizar cortes na equipe, \nmas está muito preocupado porque ele também precisa de uma promoção, a sua família está aumentando e logo mais vem o quinto filho.")
    primeiraEscolha = prompt("1- Levar a esposa para o hospital. \n2- Chamar ambulância e ir para o trabalho.")
    while (primeiraEscolha != 1 && primeiraEscolha != 2) {
        primeiraEscolha = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (primeiraEscolha == 1) {
        alert("Adalberto levou a mulher para o hospital, passou o dia inteiro lá e perdeu a reunião. No dia seguinte quando Adalberto chegou ao trabalho, chamou o chefe para conversar e soube que não havia mais chances de ser promovido, pois a vaga foi preenchida na reunião de ontem. \nAdalberto se LAXCOU!")
        return location = "../html/gameover.html"
    } else {
        faseDois()
    }
})
function faseDois(adalbertoSegunda) {
    alert("Adalberto chamou a ambulância e se atrasou para o trabalho. \nAo chegar no trabalho ele tem duas opções:")
    adalbertoSegunda = prompt("1- Chamar o chefe e explicar o motivo do atraso. \n2- Entrar na reunião sem explicações sobre o atraso.")
    while (adalbertoSegunda != 1 && adalbertoSegunda != 2) {
        adalbertoSegunda = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (adalbertoSegunda == 1) {
        alert("Adalberto chamou o chefe em um momento em que ele não estava falando na reunião, e explicou o ocorrido, justificando o atraso. \nAo terminar a reunião o chefe o chama no escritório, dando a ele a promoção! \nPois o chefe valoriza o relacionamento dele como os subordinados e valoriza a conduta tomada. \nAdalberto volta ao hospital e conta para a companheira que foi promovido.")
        return location = "../html/venceu.html"
    } else {
        faseTres()
    }
}
function faseTres(adalbertoSegunda) {
    alert("Na reunião ele passa por uma situação terrível, onde o chefe o humilha publicamente")
    adalbertoTerceira = prompt("1- Adalberto recebe a humilhação, não fala nada e se retira da sala de reuniões \n2- Adalberto se desculpa pelo atraso e informa eufórico para todos da sala que sua companheira entrou em trabalho de parto!")
    while (adalbertoTerceira != 1 && adalbertoTerceira != 2) {
        adalbertoTerceira = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (adalbertoTerceira == 1) {
        alert("Após a reunião, ele é chamado na sala do chefe e recebe a notícia de que está sendo demitido. \nAdalberto não se comunicou corretamente com a liderança, e ninguém sabia da sua situação. \nEle foi demitido e se LAXCOU!")
        return location = "../html/gameover.html"
    } if (adalbertoTerceira == 2) {
        alert("Adalberto é chamado na sala do chefe que se sentiu ofendido com a conduta em reunião, \Ne exige que para não o demitir que Adalberto demita 5 funcionários de sua equipe. \NAdalberto demite os 5 funcionários, não consegue a promoção e agora tem que entregar o mesmo resultado com 5 funcionários a menos, \nele e os empregados se LAXCARAM!")
        return location = "../html/gameover.html"
    }
}