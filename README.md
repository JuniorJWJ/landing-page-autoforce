# Documentação da Aplicação Vue.js - Landing Page AutoForce

## Introdução

Esta é a documentação da aplicação front-end desenvolvida em Vue.js, que serve como uma landing page para a AutoForce Seminovos. A aplicação foi projetada para exibir informações de veículos, incluindo um veículo em promoção, e fornecer meios de contato. Ela se integra com uma API Ruby on Rails para buscar os dados dos veículos.

## Estrutura do Projeto

O projeto segue uma estrutura organizada, utilizando o padrão Atomic Design para a organização dos componentes. Isso promove a reutilização, a manutenibilidade e a escalabilidade do código.

### Atomic Design

Os componentes são categorizados em:

- **`atoms/`**: Elementos básicos da interface, como botões, inputs, ícones, etc.
- **`molecules/`**: Grupos de átomos que funcionam juntos como uma unidade (ex: um campo de formulário com label e input, um botão de WhatsApp).
- **`organisms/`**: Grupos de moléculas e/ou átomos que formam seções distintas da interface (ex: cabeçalho, galeria de veículos, seção de contato).

### Diretórios Principais

- **`src/assets/`**: Contém arquivos estáticos como imagens (`images/`) e estilos globais.
- **`src/components/`**: Onde os componentes Vue são organizados de acordo com o Atomic Design.
- **`src/views/`**: Contém os componentes de página, como o `VehicleLanding.vue`, que orquestram os organismos para formar as telas da aplicação.
- **`src/App.vue`**: O componente raiz da aplicação.
- **`src/main.js`**: O ponto de entrada da aplicação Vue, onde a instância Vue é criada e os plugins são registrados.

## Componentes Principais

O componente `VehicleLanding.vue` é o componente principal da landing page e integra os seguintes organismos e moléculas:

- **`VehicleHeader`**: O cabeçalho da página, exibindo o logo e o nome da loja.
- **`VehicleGallery`**: Uma galeria de imagens de veículos.
- **`VehicleList`**: Uma seção para listar veículos.
- **`VehicleInfo`**: Exibe os detalhes do veículo em promoção.
- **`ContactSection`**: Uma seção dedicada a informações de contato.
- **`MainFooter`**: O rodapé da página.
- **`WhatsAppButton`**: Um botão flutuante para contato via WhatsApp.

## Integração com a API

A aplicação se integra com uma API Ruby on Rails para buscar os dados dos veículos. É importante que a API esteja em execução e acessível no endereço configurado.

## Instalação e Execução

Para configurar e executar a aplicação Vue.js localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- **Node.js**: Versão 16.x ou superior (recomendado).
- **npm** ou **Yarn**: Gerenciadores de pacotes (o projeto utiliza `yarn.lock`, então Yarn é preferível).

### Passos

1.  **Clone o repositório**: Se ainda não o fez, clone o repositório da aplicação:

    ```bash
    git clone https://github.com/JuniorJWJ/landing-page-autoforce.git
    cd landing-page-autoforce
    ```

2.  **Instale as dependências**: Utilize o Yarn para instalar as dependências do projeto:

    ```bash
    yarn install
    ```

3.  **Execute a aplicação**: Inicie o servidor de desenvolvimento:

    ```bash
    yarn serve
    ```

    A aplicação estará disponível em `http://localhost:8080` (ou outra porta, conforme indicado no terminal).

4.  **Certifique-se de que a API esteja em execução**: Para que a aplicação funcione corretamente, a API Ruby on Rails deve estar em execução em `http://localhost:3000`.

## Sistema de Temas de Cores

O projeto incorpora um sistema de temas de cores, embora os detalhes específicos da implementação (arquivos CSS/SCSS, variáveis) não estejam explícitos no código do `VehicleLanding.vue`. Geralmente, isso é feito através de variáveis CSS ou pré-processadores como Sass/Less, permitindo uma fácil personalização da paleta de cores da aplicação.

## Ferramentas e Tecnologias

- **Vue.js**: Framework progressivo para construção de interfaces de usuário.
- **Vue CLI**: Ferramenta padrão para desenvolvimento rápido em Vue.js.
- **Atomic Design**: Metodologia para organização de componentes.
- **Prettier**: Ferramenta para formatação de código.

## Contribuições Finais

Desenvolver esta landing page foi uma experiência bastante desafiadora e enriquecedora, pois me permitiu explorar e aplicar diversos conhecimentos em Vue.js.
A maior dificuldade que enfrentei foi na parte da listagem de veículos no mobile. O principal problema estava no comportamento da navegação lateral, onde, ao deslizar, partes do carro anterior ou do próximo veículo apareciam de forma incorreta.

Durante o desenvolvimento, utilizei IAs para otimizar a estrutura do projeto, desde a escolha das melhores práticas até a nomeação dos arquivos, o que facilitou a compreensão e organização do código. Essa abordagem me ajudou a manter o projeto limpo e de fácil manutenção.

Consegui hospedar o frontend na Vercel, mas a API ainda está hospedada localmente. Isso significa que, para o front-end funcionar corretamente, o backend precisa estar rodando localmente. Estou à disposição para esclarecer qualquer dúvida sobre o processo ou fornecer mais detalhes sobre como configurar e executar o projeto localmente.
