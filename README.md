# Codificador de Texto
## Resumo
Este site é uma aplicação que criptografa e descriptografa mensagens de texto. Esse foi um desafio criado pela [Alura](https://www.alura.com.br/) em parceria com a 
[ONE Oracle Next Education](https://www.oracle.com/br/education/oracle-next-education/) em seu curso de formação para desenvolvimento web e empreendedorismo.

## Screenshot
![image](https://user-images.githubusercontent.com/83733139/164562573-47592c03-23ac-47cb-8598-7af15aff8c0a.png)

## Link
Url do site: [Site](https://gbaldez.github.io/text-decoder/) 

## Construído com 
* HTML5
* CSS3
* JavaScript
* Flexbox
* Design Responsivo
* HTML DOM

### Meu trabalho
- Implementei as funções de codificar e decodificar os textos usando aestrutura condicional Switch Statement do JavaScript.
- Utilizei uma expressão regular para validação do texto digitado, verificando se contém letras maiúsculas, acentos ou caracteres especiais.
```js
new RegExp("[A-Z!@#$%^&*()_+-=<>?/.,áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ]");
```
- Crie uma função para copiar a mensagem da tela com apenas um clique.
```js
const copyToClipboard = (text) => navigator.clipboard.writeText(text); 
```
- Usei media queries do CSS para tornar a página responsiva a diferentes tamanhos de tela.
```csss
@media only screen and (max-width: 768px) {
    .wrapper{
        flex-direction: column;
        align-items: center;
    }
    .container2 section{
        width:auto;
    }
    .buttons{
        display: flex;
        justify-content: center;
    }
    .copy {
        align-self: center;
    }
    
}
```
## Fontes úteis
- [HTML/CSS/JavaScript](https://www.w3schools.com/)

## Author
Linkedin - [Gabriel Baldez](https://www.linkedin.com/in/gabriel-baldez/)

## Agradecimentos
* ONE - Oracle Next Education
* Alura
