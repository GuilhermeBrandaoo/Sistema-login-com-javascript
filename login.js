const usuarioCorreto = "admin";
const senhaCorreta = "1234";
let tentativasMaximas = 3;
let tentativasRestantes = 3;
let i = 1;

do {
    let usuario = prompt("Digite seu usuário:")
    let senha = prompt("Digite sua senha")
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Acesso permitido")
        break;
    } else {
        tentativasRestantes = tentativasMaximas - i;
        i++
        alert("Acesso negado. Você só tem " +tentativasRestantes+ " tentativas")
        
        if (i === tentativasMaximas) {
            alert("Acesso bloqueado")
        }
    }
} while (i < tentativasMaximas);