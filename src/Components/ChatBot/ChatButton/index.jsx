import React from "react";
import "../../../Styles/ChatBot/Button.css"
import logo1 from "../../../img/FURIA_Esports_logo.png"

export default function ChatBotButton(props){
    return(
        <div>
            <button className="Button"
            onClick={(_) => {props.Click(true)}}>
                <img src={logo1} className="Button-img"/>
                <p className="Button-text"
                >Fale com o FurIA</p>
            </button>
        </div>
    )
}