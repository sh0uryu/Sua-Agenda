function Login() {
    var autenticado = 0;
    var usuario = document.getElementsByName('usuarioInput')[0].value;
    usuario = usuario.toLowerCase();
    usuario = usuario.trim();
    var senha = document.getElementsByName('senhaInput')[0].value;
    senha = senha.toLowerCase();
    senha = senha.trim();
    if (usuario == "admin" && senha == "admin") {
        window.location.href = "/calendar.html";
        autenticado = 1;
    } else if (usuario == "admin" && senha != "admin") {
        document.getElementById('mensagemErro').innerHTML = "Senha inválida.";
    } else {
        document.getElementById('mensagemErro').innerHTML = "Usuário não cadastrado";
    }
}

function Logout() {
    autenticado = 0;
}
