# Aplicativo Cantinho da Leitura 📚

### 👨‍💻 Desenvolvido por: Isaque Ferreira

# Descrição da Aplicação

Esse projeto, consiste na criação de um aplicativo de gerenciamento da biblioteca da Primeira Igreja Batista em João Goulart (PIBJG). A mesma possui uma biblioteca e precisa de um sistema que auxilie no gerenciamento dos empréstimos dos livros, mostrando os livros disponíveis e emprestados, bem como as pessoas que pegaram emprestados, os livros que estão dentro e fora do prazo do empréstimo, facilitando o controle e possibilitando que todos os irmãos da igreja consigam ter acesso aos livros em bom estado e de forma organizada.

## 1. Funcionalidades do Aplicativo

O aplicativo possui duas visões e tipos de usuário. O **Cliente** (a pessoa que realiza o empréstimo) e o **Gerente** (o responsável pela gerência da biblioteca).

### 1.1 Visão Cliente:

- **Tela de Cadastro Usuário:**
    - E-mail
    - Senha
    
- **Tela Seleção Livro:**
    - Exibe o Arsenal de Livros e a quantidade disponível em estoque.
    - O cliente pode selecionar o livro que deseja pegar emprestado, conforme a disponibilidade.
    - Um pop-up se abre e possibilita que o cliente pegue o livro emprestado, ou entre na fila de espera.
    
- **Tela Pegar Emprestado:**
    - O cliente informa a data de início do empréstimo e a data de fim do empréstimo é registrada automaticamente (30 dias corridos).
    - Após clicar no botão **Concluído** uma mensagem aparece dizendo que o empréstimo ocorreu com sucesso.


### 1.2 Visão Gerente:

- **Tela de Cadastro Usuário:**
    - E-mail
    - Senha

- **Tela Principal:**
- O Gerente consegue ver a quantidade de livros disponíveis no estoque, adicionar novos títulos ou remover algum título. Os títulos adicionados entram no arsenal da biblioteca que pode ser visualizado pelos clientes.
- É possível ver o nome e telefone dos clientes que pegaram um livro emprestado. Bem como os dias que os mesmos estão com o livro e se estes estão dentro do prazo.

### 1.3 Funcionalidades:

1. Envio automático de e-mail para os clientes que estejam com o prazo de devolução do livro, vencendo. Alertando-o sobre a multa em caso de atraso.
2. Caso o livro não seja devolvido dentro do prazo, ou não tenha o prazo de empréstimo renovado, será necessário pagar uma taxa de R$ 0,50 por dia atrasado.

### 1.4 Links:

|Aplicação | Figma | Github|
|---------------|-----------------|-------------------|
[Clique aqui]() | [Clique aqui](https://www.figma.com/design/kySel05W8v1QxX6rSzs4UL/Biblioteca-PIBJG?m=auto&t=T6TFYsdIuDynBhDb-1) | [Clique aqui](https://github.com/Fisaq/app-cantinho-leitura)

### 1.5 Em produção:

https://github.com/user-attachments/assets/032a02d8-7585-4f6d-bba4-bdbbeeeffe5f

Demonstração do app em funcionamento
