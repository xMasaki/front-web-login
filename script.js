const campoLogin = document.querySelector("#login");
const campoSenha = document.querySelector("#senha");
const botaoValidacao = document.querySelector("button");

const mensagem = document.createElement('m')

function clearform() {
    campoLogin.value = '';
    campoSenha.value = '';
}

botaoValidacao.addEventListener("click", function(event) {
    event.preventDefault();
    
    if(campoLogin.value.trim() === '') {
        //alert("Preencha o login");
        mensagem.textContent = "*Preencha o login";
        campoLogin.insertAdjacentElement("afterend", mensagem);
        mensagem.setAttribute("class", "error");
        return;
    }

    if(campoSenha.value.trim() === '') {
        //alert("Preencha a senha");
        mensagem.textContent = "*Preencha a senha";
        campoSenha.insertAdjacentElement("afterend", mensagem);
        mensagem.setAttribute("class", "error");
        return;
    }

    const valorLogin = campoLogin.value;
    const valorSenha = campoSenha.value;

    console.log(valorLogin);
    console.log(valorSenha);

    mensagem.classList.add("d-none");
    clearform();
});
