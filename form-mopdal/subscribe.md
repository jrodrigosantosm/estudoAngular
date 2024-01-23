# Observables no Angular

No contexto do Angular, um "Observable" refere-se a um tipo específico de objeto que é usado para representar uma sequência de eventos assíncronos. Ele faz parte do padrão de programação reativa e é implementado usando a biblioteca RxJS (Reactive Extensions for JavaScript).

## Características Principais

1. **Assíncrono:** Os Observables permitem lidar com operações assíncronas, como requisições HTTP, eventos do usuário, entre outros.

2. **Composição:** Os Observables podem ser encadeados e combinados para formar sequências mais complexas. Isso facilita a composição de lógica assíncrona.

3. **Cancelamento:** Um Observable pode ser cancelado, o que é útil para liberar recursos quando não são mais necessários.

4. **Manipulação de Erros:** Os Observables fornecem mecanismos para lidar com erros que podem ocorrer durante a execução assíncrona.

5. **Hot e Cold Observables:** Os Observables podem ser "quentes" (começam a emitir itens assim que são criados) ou "frios" (começam a emitir itens apenas quando são subscritos).

## Utilização em Angular

Ao utilizar Observables em Angular, você pode empregar técnicas reativas para lidar com eventos assíncronos, como resposta a eventos de usuário, atualizações de dados ou chamadas de API. Esses conceitos são parte integrante da arquitetura de programação reativa, que visa tornar o código mais escalável, modular e fácil de entender.
