# Questão 01

* Primeiro, vamos criar um componente que possua duas caixas de texto. No entanto, essas caixas só podem aceitar números, além disso, elas devem ter rótulos (label) com um valor mínimo e um valor máximo. É preciso também sempre checar se o valor mínimo é menor que o valor máximo. O componente que você deverá construir ainda deve possuir um botão que deve contar e imprimir quantos números existem entre valor mínimo e valor máximo que sejam múltiplos de 2 e 3 (simultaneamente). O programa não deverá calcular se algum dos numeros não for inserido.

# Questão 02

* Agora você deverá criar um componente que tenha uma caixa de texto que só aceita números e tenha um rótulo (label). Aqui você usará esse número para calcular o fatorial dele e mostrá-lo na tela. O componente deve ainda possuir um botão “calcular”. Quando acionado ele deve calcular o fatorial do número digitado e imprimir o resultado e o tempo necessário para a execução. 

O resultado deve ser mostrado no formato :

53! = xx (yy milisegundos);

Lembre-se, não vamos trapacear né? O código deve calcular o fatorial e não apenas imprimir uma string com a resposta.

# Questão 03

* Agora você precisará criar um componente que possua um botão “criar relatório”. Quando acionado o seu programa deverá imprimir um relatório de resultados da disciplina javascript para 20 alunos, no formato de tabela. Mas vamos complicar um pouco ne? veja algumas regras adicionais!

As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente; (dica: use a função math.radom(), dá um google!)
Cada aluno deve ser representado por um registro composto por numero e nota
Use uma função construtora chamada Aluno. Se você for bem ousado, implemente usando classes;
Armazene a nota do aluno como uma variável privada do tipo symbol, use getters e setters para recuperar a informação.
Os registros devem ser armazenados em um array;
A impressão do relatório deve ter:
Um título;
Os resultados mostrados linha a linha no formato “Aluno nr xx – Nota yy [(A/RE)PROVADO]”; e
Um rodapé com estatística final no formato “APROVADOS: XX (xx%)  |  REPROVADOS: YY (yy%)”

# Questão 04

* Agora você precisa criar um componente que possui 3 caixas de texto. Eles só aceitam números e possuem rótulos (label): Quantidade de números, valor mínimo e valor máximo. Seu componente deve possuir um botão calcular que quando acionado deve criar um array com quantidade de números aleatórios não repetidos e ordená-los. Os números devem estar entre valor mínimo e valor máximo (inclusives, ou seja incluindo o valor mínimo e valor máximo). Lembre-se que para calcular quantidade de números deve ser menor que a soma de valor mínimo e valor máximo.

# Questão 05

* O próximo componente será um que possui 3 caixas de texto que só aceitam números e tenha os rótulos (label): lado A, lado B e lado C. O componente deve ainda possuir um botão calcular que quando acionado deve dizer se um triângulo formado por esses 3 lados é um triângulo equilátero, isósceles ou escaleno. (esse é bem simples né =D ) 

# Questão 06

* Agora vamos criar um último componente mais avançado. Nesse, você precisa criar campos para usuário e login em aplicação(sign up/ sign in).

No 1º cenário, antes de estar logado, o visitante se depara com o formulário de login ou de criação de usuário. Se for feito o login com sucesso, o componente deve levar ao cenário 2, se falhar ele deve alertar o usuário e voltar ao início do cenário 1. Se o usuário optar por criar um usuário, o componente deve criar o registro de um novo usuário e voltar para início do cenário 1.
No cenário 2, após logado, mostrar apenas um texto de logado no componente e um botão (ou link) para deslogar, retornando ao início do cenário 1.
Deve ser possível criar múltiplos usuários e, se fechada, a página não pode perder os registros de usuários  armazenados.