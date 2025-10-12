# Calculadora em JavaScript

Este projeto apresenta uma calculadora simples escrita em JavaScript que pratica entrada de dados com `prompt()`, operadores aritméticos básicos e operadores de atribuição.

## Funcionalidades

- Solicitação de dois números ao usuário.
- Cálculo de soma, subtração, multiplicação, divisão e resto.
- Uso de operadores de atribuição (`+=`, `-=`, `*=`, `/=`) para atualizar o valor de um acumulador.
- Exibição dos resultados no console via `console.log()`.

## Como executar

### Navegador

1. Crie um arquivo HTML e importe o script:
   ```html
   <!DOCTYPE html>
   <html lang="pt-BR">
   <head>
     <meta charset="UTF-8" />
     <title>Calculadora JavaScript</title>
   </head>
   <body>
     <script src="calculadora.js"></script>
   </body>
   </html>
   ```
2. Abra o HTML no navegador. As janelas `prompt` coletarão os números e os resultados aparecerão no console (`F12` > Console).

### Node.js

1. Instale a dependência `prompt-sync`:
   ```bash
   npm install prompt-sync
   ```
2. No início de `calculadora.js`, adicione:
   ```javascript
   const prompt = require("prompt-sync")();
   ```
3. Execute:
   ```bash
   node calculadora.js
   ```

## Licença

Este projeto está disponível sob a licença MIT. Consulte `LICENSE`, se presente.
