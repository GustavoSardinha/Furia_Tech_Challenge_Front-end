import React, { useState, useRef, useEffect } from "react";
import "../../../Styles/ChatBot/Modal.css";
import clearIcon from "../../../img/clearIcon.png";
import closeIcon from "../../../img/closeIcon.png";
import ChatBotInput from "../ChatInput";
import ChatBotConfirmModal from "../ConfirmModal";

export default function ChatbotModal({Click, messages, setMessages, ClearMessages}) {
  const [modalClearVisible, setModalClearVisible] = useState(false);
  const endRef = useRef(null);

  function markdownToHtml(str) {
    const escaped = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const bolded = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    const lines = bolded.split(/\r?\n/);
    let html = '';
    let inList = false;
    lines.forEach(line => {
      const listMatch = line.match(/^\s*\*\s+(.*)/);
      if (listMatch) {
        if (!inList) {
          html += '<ul class="Markdown-List">';
          inList = true;
        }
        html += `<li>${listMatch[1]}</li>`;
      } else {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        if (line.trim() !== '') {
          html += `<p>${line.trim()}</p>`;
        }
      }
    });
    if (inList) html += '</ul>';
    return html;
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="Modal-Container">
      <header className="Chat-Header">
        <div className="Chat-Title">
          <div className="Image-bot" />
          <h3>Fur-IA</h3>
        </div>
        <div>
          <img
            src={clearIcon}
            className="Header-Icon"
            onClick={() => setModalClearVisible(true)}
          />
          <img
            src={closeIcon}
            className="Header-Icon"
            onClick={() => Click(false)}
          />
        </div>
      </header>

      <div className="Message-Area">
        {messages.map((m, i) => (
          <div key={i} className={`Message-${m.sender}`}>
            {m.sender === 'user' && <strong>Eu: </strong>}
            <span
              className="Message-HTML"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(m.text) }}
            />
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <ChatBotInput setMessages={setMessages} />
      {modalClearVisible && (
        <ChatBotConfirmModal
          ClearMessages={ClearMessages}
          Close={setModalClearVisible}
        />
      )}
    </div>
  );
}
