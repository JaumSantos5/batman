import React from "react";
import Header from "../../components/header/header";
import Telefone from "../../assets/telefone.png";
import Loc from "../../assets/localização.png";
import Relogio from "../../assets/relogio.jpg";
import "./contato.css";
import Footer from "../../components/footer.js/footer";

function Contato(){
    return (
    <>    
    <Header />
        <div className="contato">
            <div className="contato2">
                <div className="mensagem">
                <p id="p1">
                    <img id="telefone" src={Telefone}/>
                    LIGUE: 
                </p>
                <p id="p2">
                    (11)951447403
                </p>
                <p id="p1">
                    <img id="loc" src={Loc}/>
                    LOCALIZAÇÃO:
                </p>
                <p id="p2">
                    Rua Joaquim Novaes, 860   
                </p>
                <p id="p1">
                    <img id="relogio" src={Relogio}/>
                    HORARIO DE ATENDIMENTO:
                </p>
                <p id="p2">
                    seg. - sex.       08h00 - 20h00
                </p>
                </div>
                <div className="contato3">
                    <p id="ctt">ENTRE EM CONTATO</p>
                    <form id="form" action="./contato.html">
                        <label for="text">Nome:</label>  
                        <input id="text" type="text" name="text" placeholder="Nome completo"/>
                        <label for="email">Email:</label>
                        <input id="email" type="email" name="email" placeholder="coloque um email válido" />
                        <label for="text">Mensagem:</label>
                        <input id="text" type="text" name="text"/>
                        <button id="botao">Enviar</button>  
                    </form>
                </div>
            </div>
        </div>
    <Footer />
    </>
    )
}

export default Contato  