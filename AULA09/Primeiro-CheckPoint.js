/*
    1 - Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha. A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
	- ACESSO PERMITIDO caso a senha seja válida.
	- ACESSO NEGADO caso a senha seja inválida.

*/

function senha(a) {
    if (a === 1234) {
      return console.log('ACESSO PERMITIDO')
    } else {
        return console.log('ACESSO NEGADO')
    }
    
}

senha(1234)


// 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais.

function inteiros(x,y) {
    if (x > y) {
        return console.log(x, 'é maior que', y);
    } else if (x < y) {
        return console.log(x, 'é menor que', y);
    } else {
        return console.log('Os números são iguais')
    }

}
inteiros (9,7)


// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
// 	- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'

let mes = 'Sete';
switch (mes) {
    case 'Janeiro':
        console.log('Mês 1')
        break;
    case 'Fevereiro':
        console.log('Mês 2')
        break;   
    case 'Março':
        console.log('Mês 3')
        break;             
    case 'Abril':
        console.log('Mês 4')
        break;
    case 'Maio':
        console.log('Mês 5')
        break;
    case 'Junho':
        console.log('Mês 6')
        break;   
    case 'Julho':
        console.log('Mês 7')
        break;             
    case 'Agosto':
        console.log('Mês 8')
        break;
    case 'Setembro':
        console.log('Mês 9')
        break;
    case 'Outubro':
        console.log('Mês 10')
        break;   
    case 'Novembro':
        console.log('Mês 11')
        break;             
    case 'Dezembro':
        console.log('Mês 12')
        break;
    default:
        console.log('Que mês é esse?')

}
// 4 - Reescreva função do exercício 1, utilizando o operador ternário.

function senha(a) {
    a == 1234 ? console.log('ACESSO PERMITIDO') : console.log('ACESSO NEGADO');
}
senha(1234)

/*

Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

*/

const menu = {
    comida: ['pipoca', 'macarrão', 'carne', 'feijão', 'brigadeiro'],
    tempoPadrao: [10, 8,  15, 12, 8],
}

const pedido = (comida, tempo) => {

    let pedidoFeitoComSucesso;
    for (let i = 0; i < menu.comida.length; i++){
        if (comida === menu.comida[i]){
            if (tempo > menu.tempoPadrao[i] *3){
                console.log('KABUUUUMMMM!!!');
            } else if (tempo > menu.tempoPadrao[i]* 2){
                console.log('Queimou');
            } else if (tempo < menu.tempoPadrao[i]) {
                console.log('Tempo insufuciente');
            } else {
                pedidoFeitoComSucesso = true;
                console.log('Feito');
            }
            
        }
    }
    switch(pedidoFeitoComSucesso) {
        case true:
            console.log('Bom apetite');
            break;
        default:
            console.log('Prato inexistente')
    }

}

pedido('macarrão', 28)