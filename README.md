# Fur-IA Live Status ⚡🎮🔥

## Descrição 💬🎯🧠

O **Fur-IA Live Status** é um protótipo de um aplicativo web interativo que fornece:

* **Chatbot** conversacional sobre o informações da FURIA E-sports (Fur-IA).
* **Acompanhamento ao vivo** de partidas (simuladas), com placar atualizado, contador de tempo/rodada, eventos em destaque e estatísticas dos jogadores.
* **Resumo e Estatísticas** do FURIA, descrevendo o elenco e mostrando o resultado de partidas oficiais passadas. 

Vídeo demonstrativo: [Link do vídeo](https://drive.google.com/file/d/1rRBFoU-hbqjS0JzbAtSkOasnaVgo6edD/view?usp=sharing)

Este projeto demonstra integração entre **frontend em React** e **backend em Node.js/Express**, utilizando **Fallback de polling** para atualizações em tempo real. 🚀🔌💻

[Veja a documentação e os endpoints da api](https://github.com/GustavoSardinha/Furia_Tech_Challenge_Backend)

---

## Funcionalidades Principais 🧩📊🕹️

1. **Chatbot**: responde a dúvidas sobre jogadores, treinadores e histórico da equipe.
2. **Placar ao vivo**: exibe placar, tempo restante, status da C4 e rodadas.
3. **Eventos e destaques**: últimas eliminações e destaques do round.
4. **Estatísticas dos jogadores**: kills, mortes, assists, K/D e indicador de vida.
5. **Últimas Partidas**: mostra o resultado das últimas 10 partidas do FURIA.

---

## Tech Stack 🛠️📦🧪

* **Frontend**: React.js, Axios, CSS Modules
* **Backend**: Node.js, Express, Gemini AI API
* **Build & Deploy**: Vercel (ou servidor Node + React estático)

---

## Pré-requisitos ⚙️🔧📌

* React.js
* npm ou yarn
* [Back-end da aplicação](https://github.com/GustavoSardinha/Furia_Tech_Challenge_Backend) previamente instalado 
---

## Instalação e Execução Local 💻🧪📂

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPO.git
   cd SEU_REPO
   ```

2. **Instalar dependências**

   ```bash
   npm install axios
   ```
3. **Configurar end-point**

   ```bash
   // Services/API
   // backend.js
   import axios from "axios";
   const api = axios.create({
     baseURL: "https://localhost:3001" //coloque sua porta
   });
   export default api;
   ```
4. **Rodar o backend**

   ```bash
   cd api
   npm start
   ```
5. **Rodar o frontend**

   ```bash
   npm start
   ```
## Agradecimentos 🙏🤝🚀
  Agradeço à equipe de recrutamento da FURIA pela oportunidade de participar deste desafio técnico que proporcionaram um ambiente desafiador e motivador. Estou ansioso para futuras oportunidades e para continuar aprimorando minhas habilidades na área. 
 
