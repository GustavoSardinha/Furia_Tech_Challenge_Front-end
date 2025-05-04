import React from "react";
import "../../../Styles/ChatBot/ConfirmModal.css"

export default function ChatBotConfirmModal(props){
    return(
        <div className="Modal-overlay">
        <div className="Modal">
          <div className="Title-container">
            <h2>Limpar Chat</h2>
          </div>
          <p className="Main-content">Deseja limpar a conversa?</p>
          <br></br>
            <div className="Buttons-Modal-Container">
                <button className="Confirm-Button"
                onClick={(_) => {props.ClearMessages(); props.Close()}}>
                    Limpar
                </button>
                <button className="Cancel-Button"
                onClick={(_) => {props.Close()}}>
                    Cancelar
                </button>
            </div>
        </div>
      </div>
    )
}