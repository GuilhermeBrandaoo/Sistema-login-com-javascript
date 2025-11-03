const usuarioCorreto = "admin";
const senhaCorreta = "1234";
let tentativasMaximas = 3;
let tentativasRestantes = 3;
let i = 1;
let usuario = prompt("Digite seu usuário:")
let senha = prompt("Digite sua senha")

do {
    if (usuario === usuarioCorreto || senha === senhaCorreta) {
        alert("Acesso permitido")
    } else {
        tentativasRestantes = tentativasMaximas - i;
        i++
        alert("Acesso negado. Você só tem " +tentativasRestantes+ " tentativas")
        let usuario = prompt("Digite seu usuário:")
        let senha = prompt("Digite sua senha: ")
    }
} while (i < tentativasMaximas);

if (i = tentativasMaximas) {
    alert("Acesso bloqueado")
}