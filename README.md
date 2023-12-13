# React Button Component

Este projeto refere-se ao desafio técnico para desenvolver um componente Button UI utilizando React. Este repositório inclui o componente Button, exemplos de uso, estilos e testes automatizados para garantir a funcionalidade e design adequados.

O componente Button suporta diferentes estados e visuais baseados em props como `color`, `icon`, e `loading`. A interatividade também é gerenciada pelas props `disabled` e `onClick`.

## Demonstração

Há também uma versão de demonstração disponível via [Cloudflare Pages](https://react-button.pages.dev/) integrada via deploy continuo.

## Stack

- Node.js (v20+)
- npm (versão correspondente)
- Vite
- Vitest
- React
- PostCSS
  - postcss-import
  - postcss-preset-env (w/ "nesting-rules": false)
  - postcss-nested (SAAS-like nesting)

## Instalação

Clone o repositório para a sua máquina local:

```sh
git clone https://github.com/andrevandal/react-button.git
```

Instale as dependências:

```sh
npm install
```

## Uso

Para iniciar o ambiente de desenvolvimento, execute o seguinte comando:

```sh
npm run dev
```

O projeto estará disponível em `http://localhost:5173/`.

## Testes

Para executar os testes automatizados, utilize o comando:

```sh
npm run test
```

## Como utilizar o componente Button

Para usar o componente `Button` em seu projeto, importe-o e utilize-o como no exemplo abaixo:

```jsx
import Button from './components/Button';

const App = () => {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        Clique-me
      </Button>
      <Button color="secondary" icon="check" loading>
        Carregando...
      </Button>
      <Button color="secondary" disabled>
        Desabilitado...
      </Button>
    </div>
  );
};
```

O componente `Button` aceita as seguintes props:

- `color` *(string?)* - Altera o esquema de cores do botão. Valores possíveis `primary`, `secondary`. **Default: `primary`**.
- `icon` *(string?)* - Recebe o nome do ícone que será exibido no botão. **Não é obrigatória.** Valores possíveis: `arrow-right`, `check`, `refresh`.
- `onClick` *(function?)* - Função a ser executada no evento de click. **Não é obrigatória.**
- `disabled` *(boolean)* - Quando `true`, desabilita o botão. **Default: `false`**.
- `loading` *(boolean)* - Quando `true`, mostra uma animação de carregamento e desabilita o botão. **Default: `false`**.
- `children` *(`React.ReactNode`?)* - Conteúdo do botão. **Não é obrigatória.**

## Contribuições

Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um Fork do repositório.
2. Crie uma branch com um nome descritivo das suas alterações.
3. Faça as modificações.
4. Escreva e execute testes.
5. Faça um commit das mudanças.
6. Envie um Pull Request para este repositório.
