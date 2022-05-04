var escolhaNatalia = document.getElementById("botaoNatalia")
escolhaNatalia.addEventListener('click', function (nataliaPrimeira) {
    alert("Natalia acordou muito cansada e quando olhou a hora viu que estava muito atrasada para as atividades do dia. Quando foi acordar o filho, ele a avisou que teria uma reunião de pais e mestres na escola. Mas Natalia não se programou e a reunião impacta no seu horário de trabalho já que ela não avisou ao chefe.")
    nataliaPrimeira = prompt("Natalia vai para a reunião? 1-sim 2-não")
    while (nataliaPrimeira != 1 && nataliaPrimeira != 2) {
        nataliaPrimeira = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (nataliaPrimeira == 2) {
        alert("Natalia chega na hora no trabalho e realiza todas as atividades do dia. A reunião que ela perdeu era sobre o desempenho do filho na escola, e como ela não soube disso ele acabou repetindo de ano, e se Laxcou!")
        return location = "./gameover.html"
    } else {
        nataliaDois()
    }
})
function nataliaDois(nataliaSegunda) {
    alert("Natalia decide ir para a reunião da escola e depois chega atrasada no trabalho. Ao chegar no trabalho, ela explica a situação e o chefe diz que não tem problema o atraso, mas ela precisa entregar todas as provas corrigidas até o final do dia.")
    nataliaSegunda = prompt("1- Ela corrige as provas \n2- Ela não corrige as provas")
    while (nataliaSegunda != 1 && nataliaSegunda != 2) {
        nataliaSegunda = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (nataliaSegunda == 2) {
        alert("Natália tenta conversar com o chefe, e diz que isso não é possível, pois ela tem o filho e o curso e muitas responsabilidades. Natalia argumentou bem e conseguiu negociar com o chefe, mas terá que trabalhar neste sábado, que é o aniversário de seu filho, e se Laxcou!")
        return location = "./gameover.html"
    } else {
        nataliaTres()
    }
}
function nataliaTres(nataliaTerceira) {
    alert("Natália passa da hora no trabalho, mas consegue entrega as provas corrigidas. Como Natália perdeu a hora para sair do trabalho ela precisa decidir:")
    nataliaTerceira = prompt("1- buscar o filho na escola\n2- ir para o curso")
    while (nataliaTerceira != 1 && nataliaTerceira != 2) {
        nataliaTerceira = prompt("Resposta inválida, escolha entre 1 ou 2")
    } if (nataliaTerceira == 1) {
        alert("Natalia encontra o filho sozinho e chorando na coordenação e decide passear com ele perdendo a apresentação no curso, e se Laxcou!")
        return location = "./gameover.html"
    } if (nataliaTerceira == 2) {
        alert("Natalia pede para a amiga buscar o filho na escola e corre para o curso. Natalia consegue fazer a apresentação no curso com sucesso e foi convidada para participar de um processo seletivo, chegando em casa pediu uma pizza para comemorar com o filho")
        return location = "./venceu.html"
    }
}