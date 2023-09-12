

function identificadorCadastro(event) {

    var emailCadastrado = "andreluiz.moreira@hotmail.com";
    var senhaCadastrada = "senha123";

    var emailInformado = document.getElementById('email');
    var senhaInformada = document.getElementById('senha');



    var data = {
        email: emailInformado.value,
        senha: senhaInformada.value
    }

    if(emailCadastrado == data.email && senhaCadastrada == data.senha){
        alert("Bem vindo ao Sistema Online" )
        event.preventDefault()
        window.location.href("index2.html")
    } else {
        alert("Login inválido. Tente novamente");
    }
}