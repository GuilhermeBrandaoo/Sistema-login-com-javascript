# Sistema de Login com JavaScript — Treino de Lógica de Programação

Projeto simples desenvolvido para **praticar lógica de programação** usando **JavaScript puro**.
A ideia é simular um **sistema de login básico**, aplicando conceitos como variáveis, operadores lógicos, estruturas de repetição e condicionais.

---

## Objetivo do Projeto

Este projeto foi criado com o propósito de **treinar o raciocínio lógico**, não para autenticação real.
O foco está em **entender o fluxo de decisão**, **controle de tentativas** e **validação de dados** via prompts.

---

## Funcionalidades

* Solicita ao usuário um nome e senha via `prompt()`
* Compara os dados digitados com credenciais pré-definidas (`admin` / `1234`)
* Exibe mensagens de sucesso ou erro usando `alert()`
* Bloqueia o acesso após 3 tentativas incorretas
* Demonstra o uso de:

  * Variáveis e operadores de comparação
  * Estrutura de repetição `do...while`
  * Estruturas condicionais `if` e `else`
  * Interação básica com o usuário (prompt e alert)

---

## Tecnologias Utilizadas

* **HTML5** — para estruturar a página
* **JavaScript (puro)** — para a lógica do sistema
* **Navegador Web** — ambiente de execução (sem backend)

---

## Estrutura de Arquivos

```
/
├── index.html     → Página principal
└── login.js       → Código da lógica de autenticação
```

---

## Como o Código Funciona

1. O JavaScript define o usuário e senha corretos:

   ```js
   const usuarioCorreto = "admin";
   const senhaCorreta = "1234";
   ```

2. O usuário tem 3 tentativas para acertar as credenciais:

   ```js
   let tentativasMaximas = 3;
   let tentativasRestantes = 3;
   ```

3. O programa solicita as credenciais com `prompt()` e usa um **loop `do...while`** para repetir enquanto houver tentativas restantes.

4. Se as credenciais estiverem corretas, mostra **"Acesso permitido"** e encerra.

5. Caso contrário, reduz as tentativas e exibe **"Acesso negado"**.

6. Após 3 erros, mostra **"Acesso bloqueado"**.

---

## Lógica Simplificada

```
Repetir até 3 tentativas:
   → Perguntar usuário e senha
   → Se for correto → acesso permitido
   → Se errado → mostrar erro e quantas tentativas restam
Se acabar as tentativas → acesso bloqueado
```

---

## O Que Você Aprende com Este Projeto

* Estruturas condicionais (`if` e `else`)
* Estruturas de repetição (`do...while`)
* Operadores de comparação (`===` e `&&`)
* Manipulação de variáveis e contadores
* Interação com o usuário via `prompt` e `alert`
* Pensamento lógico

---

## Possíveis Melhorias
* Substituir `prompt()` e `alert()` por um formulário HTML e manipulação DOM
* Adicionar CSS para estilizar a página
* Implementar bloqueio temporário após várias tentativas falhas

---

## Autor

** Guilherme Brandão**
[github.com/GuilhermeBrandaoo](https://github.com/GuilhermeBrandaoo)]
