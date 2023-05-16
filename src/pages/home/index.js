             //, {lazy, Suspense}
import React from 'react'
import Header from '../../components/header/header';
import './home.css';
import Video from '../../assets/video.mp4';
import Cards from '../../components/cards/cards';
import Footer from '../../components/footer.js/footer';

//lazy é usado para fazer a implantação de componentes extremamente pesados dentro da aplicação
//const Header = lazy (() => import('../../components/header/header')) 


//Suspense é usado quando queremos mostrar algo em tela (jsx) enquanto o componente 'lazy' não é carregado

//<Suspense fallback = {<div>...</div>}
//</Suspense>

//react memo. o memo é utilizado quando não queremos que um componente seja recarregado na aplicação. ele é utilizado na exportação do componente "export default memo(componente)"

//pasta assets é a pasta onde vai ficar as imagens, logos, videos da nossa aplicação
function Home() {
    return (
        <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                        <video controls className='trailer'>
                                <source src={Video}/>
                                Seu navegador não tem suporte para vídeos
                        </video>
                        <div id='sinopse'>
                                <p className='description'>
                                Após dois anos espreitando as ruas como batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gothan City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
                                </p>
                                <button className='button'> Comprar ingresso</button>
                        </div>
                </div>
            </div>
            <Cards />
            <Footer />
        </>
    )
            }
export default Home;