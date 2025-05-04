import { useState } from 'react';
import api from "../../../Services/API/backend.js"
import "../../../Styles/ChatBot/Input.css"
import sendIcon from "../../../img/sendIcon.png"

export default function ChatBotInput(props) {
  const [input, setInput] = useState('');

  async function sendMessage() {
    if (!input.trim()) return;

    const newUserMsg = { sender: 'user', text: input };
    props.setMessages(prev => [...prev, newUserMsg]);
    setInput('');

    try {
      const res = await api.post('/api/chat', {
        message: input,
      });

      console.log(res.data);
      props.setMessages(prev => [...prev, { sender: 'bot', text: res.data.reply }]);
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
      props.setMessages(prev => [...prev, { sender: 'bot', text: 'Erro ao obter resposta.' }]);
    }
  }

  return (
    <div className="Chat-Container">
      <input
        className='Input'
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        placeholder="Como podemos te ajudar?"
      />
      <button className='Button-Input'>
        <img src={sendIcon}
        onClick={props.sendMessage}
        className='Button-Icon'/>
      </button>
    </div>
  );
}
