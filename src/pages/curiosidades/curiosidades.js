import React from "react"
import Footer from "../../components/footer.js/footer";
import Header from "../../components/header/header";
import './curiosidades.css';
import Charada from '../../assets/charada.jpg';
import Quadrinhos from '../../assets/quadrinhos.jpg'
import Dc from '../../assets/dc.jpeg'
import Crepusculo from '../../assets/crepusculo.jpg'
import Gotico from '../../assets/gotico.jpg'
import Kurt from '../../assets/Kurt.jpg'
import Batman2 from '../../assets/batman2.webp'

function Fotos(){
    return (
    <>    
    <Header />
        <div className="c">
            <div className="c1">
                <p>1. Charada foi inspirado no assassino do Zodíaco</p>
                <div className="it">
                <img className="imagem foto=1" src={Charada} />
                <span id="ti">
                    Um dos clássicos vilões dessa história está no novo filme. Um fato curioso é que este Charada, interpretado por Paul Dano, foi inspirado no Assassino do Zodíaco. Ele foi um assassino em série real, que aterrorizou os Estados Unidos na década de 60. O Zodíaco costumava deixar pistas e charadas para os policiais que investigavam os casos. A verdadeira identidade do assassino nunca foi descoberta.
                </span>   
                </div>
            </div>
            <div className="c2">
                <p>2. Um filme inspirado, em parte, nos quadrinhos</p>
                <div className="it">
                <img className="imagem foto-2" src={Quadrinhos} />
                <span id="ti">
                    Outro fato curioso sobre o filme Batman (2022), é que ele é inspirado, em alguns momentos, nos quadrinhos “Batman – Ano Um” de 1987. Nessa história, acompanhamos Bruce Wayne “aprendendo” a se tornar o Batman que conhecemos. 
                </span>
                </div>
            </div>
            <div className="c3">
                <p>3. O filme não “faz parte” do universo da DC Comics</p>
                <div className="it">
                <img className="imagem foto-3" src={Dc} />
                <span id="ti"> 
                    Apesar de vermos personagens da DC, o diretor do filme, Matt Reeves, deu a entender que a produção não faz parte do universo estendido do estúdio. Ou seja, o novo filme é independente e constrói uma história sua, que funciona mais como uma releitura do personagem. Aqui ele é sombrio e introspectivo. 
                </span>
                </div>
            </div>
            <div className="c4">
                <p>4. O ator é o mesmo de Crepúsculo</p>
                <div className="it">
                <img className="imagem foto-4" src={Crepusculo}/>
                <span id="ti">
                    protagonista do filme Batman (2022) é também o personagem Edward, da saga de filmes adolescentes “Crepúsculo”. Quando surgiu a notícia de que o ator Robert Pattinson interpretaria o Bruce Wayne, muitas pessoas lembraram dele por seu papel em Crepúsculo, uma saga que marcou profundamente sua carreira como ator.Nos últimos anos, Pattinson abandonou as produções “teen” e tem focado mais em produções com enredos considerados mais maduros.  
                </span>
                </div>
            </div>
            <div className="c5">
                <p>5. O filme tem uma pegada gótica</p>
                <div className="it">
                <img className="imagem foto-5" src={Gotico}/>
                <span id="ti">
                    Se você já o assistiu ou viu alguma imagem de divulgação do filme, deve ter percebido que se trata de um ambiente bem obscuro. Seja na escolha dos filtros escuros usados na pós-produção, na maquiagem ou no figurino dos personagens, percebemos um tom bem “dark”.Esse era o objetivo do diretor, trazer um Batman menos idealizado e mais verdadeiro, passando por dilemas e questionando as coisas ao seu redor. Vemos isso em alguns momentos do filme, por exemplo, quando Bruce tira sua máscara e está coberto de suor e maquiagem borrada. Em outras produções, ele aparecia em perfeitas condições, mesmo depois de enfrentar uma série de vilões em lutas mortais. 
                </span>
                </div>
            </div>
            <div className="c6">
                <p>6. O super-herói foi inspirado em Kurt Cobain</p>
                <div className="it">
                <img className="imagem foto-6" src={Kurt} />
                <span id="ti">
                    Outro fato curioso, e que explica um pouco da pegada gótica, é que o novo Batman também foi inspirado no cantor Kurt Cobain. O diretor, Matt Reeves, diz ter ouvido muito a banda Nirvana enquanto pensava no filme, e isso influenciou na construção do personagem principal, que é mais solitário e introvertido do que playboy, como era representado em outros filmes. 
                </span>
                </div>
            </div>
            <div className="c7">
                <p>7. Novos filmes estão por vir</p>
                <div className="it">
                <img className="imagem foto-7" src={Batman2} />
                <span id="ti">
                    Achou que ia parar por aí? Não mesmo! O novo filme do Batman promete render continuações. Sem dar spoiler, o final do filme deixa um belo gancho para que a história possa ser continuada. Já foi confirmado também que Robert Pattinson assinou um novo contrato de mais dois filmes com a Warner Bross. Bom, ficamos no aguardo, não é mesmo?
                </span>
                </div>
            </div>
        </div>
    <Footer />
    </>    
    )
}

export default Fotos