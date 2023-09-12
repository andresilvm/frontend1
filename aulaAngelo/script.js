function identificadorCadastro() {
 
    const emailCadastrado = "andreluiz.moreira@hotmail.com";
    const senhaCadastrada = "senha123";
 
    var emailInformado = document.getElementById('email');
    var senhaInformada = document.getElementById('senha');
 
    console.log("test");
 
    var data = {
        email: emailInformado.value,
        senha: senhaInformada.value
    }
 
    if (emailCadastrado == data.email && senhaCadastrada == data.senha) {
        window.open("pagina2.html", "_self");
    } else {
        alert("Login inválido. Tente novamente");
    }
}