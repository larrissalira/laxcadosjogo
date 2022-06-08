var escolhaNatalia = document.getElementById("botaoNatalia")
escolhaNatalia.addEventListener('click', function (nataliaPrimeira) {
    alert("Natália acordou muito cansada e quando olhou a hora viu que estava muito atrasada para as atividades do dia. \nQuando foi acordar o filho, ele a avisou que teria uma reunião de pais e mestres na escola. \nMas Natalia não se programou e a reunião impacta no seu horário de trabalho já que ela não avisou ao chefe.")
    nataliaPrimeira = prompt("Natália vai para a reunião? \n1- SIM \n2-NÃO")
    while (nataliaPrimeira != 1 && nataliaPrimeira != 2) {
        nataliaPrimeira = prompt("Essa resposta é inválida, escolha entre os números 1 ou 2")
    } if (nataliaPrimeira == 2) {
        alert("Natália chega na hora no trabalho e realiza todas as atividades do dia. \nA reunião que ela perdeu era sobre o desempenho do filho na escola, \ne como ela não soube disso ele acabou repetindo de ano, e se Laxcou!")
        return location = "../html/perdeu.html"
    } else {
        nataliaDois()
    }
})
function nataliaDois(nataliaSegunda) {
    alert("Natália decide ir para a reunião da escola e depois chega atrasada no trabalho. \nAo chegar no trabalho, ela explica a situação e o chefe diz que não tem problema o atraso, \nmas ela precisa entregar todas as provas corrigidas até o final do dia.")
    nataliaSegunda = prompt("\n1- ELA CORRIGE AS PROVAS \n2- ELA NÃO CORRIGE AS PROVAS")
    while (nataliaSegunda != 1 && nataliaSegunda != 2) {
        nataliaSegunda = prompt("Essa resposta é inválida, escolha entre os números 1 ou 2")
    } if (nataliaSegunda == 2) {
        alert("Natália tenta conversar com o chefe, e diz que isso não é possível, \npois ela tem o filho, o curso e muitas responsabilidades. \nNatalia argumentou bem e conseguiu negociar com o chefe, \nmas terá que trabalhar neste sábado, \nno dia do aniversário de seu filho.. e se Laxcou!")
        return location = "../html/perdeu.html"
    } else {
        nataliaTres()
    }
}
function nataliaTres(nataliaTerceira) {
    alert("Natália passa da hora no trabalho, mas consegue entregar as provas corrigidas. \nComo Natália perdeu a hora para sair do trabalho ela precisa decidir:")
    nataliaTerceira = prompt("\n1- BUSCAR O FILHO NA ESCOLA \n2- IR PARA O CURSO")
    while (nataliaTerceira != 1 && nataliaTerceira != 2) {
        nataliaTerceira = prompt("Essa resposta é inválida, escolha entre os números 1 ou 2")
    } if (nataliaTerceira == 1) {
        alert("Natália encontra o filho sozinho e chorando na coordenação \ne decide passear com ele, perdendo a apresentação no curso, e se Laxcando!")
        return location = "../html/perdeu.html"
    } if (nataliaTerceira == 2) {
        alert("Natália pede para a amiga buscar o filho na escola e corre para o curso. \nNatalia consegue fazer a apresentação no curso com sucesso e foi convidada para participar de um processo seletivo, \nchegando em casa pediu uma pizza para comemorar com o filho")
        return location = "../html.ganhou.html"
    }
}