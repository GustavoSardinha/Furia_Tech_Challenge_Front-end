import React, { useState } from "react";
import ChatBotButton from "./ChatButton";
import ChatbotModal from "./ChatModal";

export default function Chatbot(){
  const BASE_ASK =
    'Olá, furioso! Em que posso te ajudar sobre o time da FURIA E-sports? Posso te fornecer informações sobre os jogadores, treinadores ou algo mais específico?';

  const [messages, setMessages] = useState([
    { sender: 'bot', text: BASE_ASK }
  ]);
  function ClearMessages() {
    setMessages([{ sender: 'bot', text: BASE_ASK }]);
  }

    const [open, setOpen] = useState(false);
    return(
        <div>
            {(!open) && (
            <ChatBotButton Click = {setOpen}></ChatBotButton>
            )}
            {(open) && (
                <ChatbotModal 
                Click = {setOpen} 
                messages={messages} 
                setMessages={setMessages}
                ClearMessages = {ClearMessages}
                ></ChatbotModal>
            )}
        </div>
    );
}