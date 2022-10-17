
//1
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    
//2
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){

        }

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)

    });
});

function selecionarAba(aba){
    //3
    const abaSelecionada = document.querySelector(".aba.selecionado");
       
    abaSelecionada.classList.remove("selecionado");
    //4
    aba.classList.add("selecionado");


}

function mostrarInformacoesDaAba(aba){

    //5
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado")
    //6
    const idDoElementoDeInformacoesDaAba =`informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado");

}