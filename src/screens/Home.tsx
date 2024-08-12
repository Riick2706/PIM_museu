import "../styles/home.css"
import { Fade, Slide, } from "react-awesome-reveal"
import banner from '../assets/banner.jpg'

import arte_moderna_1 from '../assets/arte_moderna_1.webp'
import arte_moderna_2 from '../assets/arte_moderna_2.webp'
import arte_moderna_3 from '../assets/arte_moderna_3.webp'

import santos_dumont_1 from '../assets/santos_dumont_1.jpg'
import santos_dumont_2 from '../assets/santos_dumont_2.jpg'
import santos_dumont_3 from '../assets/santos_dumont_3.webp'

import olimpiedas_1 from '../assets/olimpiedas_1.webp'
import olimpiedas_2 from '../assets/olimpiedas_2.webp'
import olimpiedas_3 from '../assets/olimpiedas_3.webp'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <>
            {/* COMEÇO PRIMEIRA DIV (BANNER) */}
            <div className="div-100 div-primeira">
                <Fade delay={500} triggerOnce>

                    <div id="div-banner">
                        <Slide delay={5500} triggerOnce>
                            <>
                                <h1>Os jogos eletronicos e seu <br></br> <span>impacto econômico</span></h1>

                            </>
                        </Slide>
                        <img src={banner} id="banner" alt="Banner" />
                        {/* <p>
                        Movimentando cerca de $1,38 bilhão de dólares em 2022, podendo ser a próxima tendência global.
                    </p> */}
                    </div>
                </Fade>
            </div>

            <center>
                <div className="div-titulo jogos-eletronicos">

                    <Slide triggerOnce delay={1000}><><div className="borda"></div></></Slide>
                    <Fade triggerOnce><><h1>Impacto Econômico dos Jogos Eletronicos no ano de 2022</h1></></Fade>
                    <Slide direction="right" triggerOnce delay={1000}><><div className="borda"></div></></Slide>

                </div>
            </center>

            <center>

                <Fade triggerOnce delay={500}>
                    <div className="descricao">

                        <Fade delay={250} triggerOnce> <> <p>Em 2022, a indústria dos jogos eletrônicos continuou a demonstrar um crescimento significativo, consolidando-se como um dos setores mais lucrativos do entretenimento. Com a evolução tecnológica, o aumento do acesso à internet de alta velocidade e a popularização dos dispositivos móveis, os jogos eletrônicos alcançaram uma audiência global diversificada e em constante expansão.</p> </></Fade>
                        <Fade delay={250} triggerOnce> <> <p>O mercado global de jogos eletrônicos foi avaliado em <span>cerca de 200 bilhões de dólares em 2022</span>, um aumento substancial em relação aos anos anteriores. Esse crescimento foi impulsionado por diversos fatores, incluindo o aumento da demanda por jogos durante a pandemia de COVID-19, a popularidade dos jogos free-to-play com microtransações e o sucesso contínuo de consoles de última geração.</p></></Fade>
                        <Fade delay={250} triggerOnce> <> <p>A indústria dos jogos eletrônicos é um importante gerador de empregos, empregando milhões de pessoas ao redor do mundo em diversas funções, como desenvolvimento de software, design gráfico, marketing, eSports, e suporte técnico. Em 2022, a demanda por profissionais qualificados nesse setor aumentou, impulsionada pelo desenvolvimento de novos títulos, atualizações de jogos existentes e a expansão de plataformas de jogos em nuvem.</p></></Fade>
                        <Fade delay={250} triggerOnce> <> <p>Os eSports continuaram a crescer em popularidade e relevância econômica em 2022. Com competições transmitidas globalmente, a audiência de eSports atingiu novos patamares, atraindo patrocinadores e investidores. Grandes torneios ofereceram prêmios milionários, e equipes profissionais de eSports se tornaram marcas reconhecidas mundialmente. Esse segmento do mercado de jogos eletrônicos contribuiu significativamente para a receita global do setor, além de fomentar a profissionalização e a criação de ligas estruturadas.</p></></Fade>
                        <Fade delay={250} triggerOnce> <> <p>A indústria de jogos eletrônicos também impulsiona a economia criativa, promovendo inovação em tecnologias como<span> realidade virtual (VR), realidade aumentada (AR) e inteligência artificial (IA).</span> Startups e grandes empresas investiram pesadamente em pesquisa e desenvolvimento para criar experiências de jogo mais imersivas e interativas, o que gerou novas oportunidades de negócios e atraiu investimentos em tecnologia.</p></></Fade>

                    </div>
                </Fade>
            </center>

            <div className="div-titulo jogos-eletronicos">

                <Slide triggerOnce delay={1000}><><div className="borda"></div></></Slide>
                <Fade triggerOnce><><h1>100 anos da semana da arte moderna</h1></></Fade>
                <Slide direction="right" triggerOnce delay={1000}><><div className="borda"></div></></Slide>

            </div>

            <>
                <Slide direction="left" triggerOnce duration={1200}>

                    <h2 className="titulo-card">Importância da Arte Moderna</h2>


                    <>
                        <div className="card-arte">

                            <img src={arte_moderna_1} id="arte-moderna-img-1" />
                            <Fade delay={7000} duration={3000} triggerOnce><>    <p>A arte moderna, ao completar um século de existência, revela-se de extrema importância por sua ruptura radical com os padrões artísticos estabelecidos anteriormente. Surgindo no final do século XIX e florescendo ao longo do século XX, a arte moderna rejeitou as convenções acadêmicas e tradicionais que dominavam a arte ocidental há séculos. Em vez de retratar a realidade de maneira idealizada, os artistas modernos buscaram novas formas de expressão que refletissem a crescente complexidade e fragmentação da vida moderna. Movimentos como o cubismo, o expressionismo, o surrealismo e o dadaísmo foram apenas alguns dos muitos movimentos que desafiaram as normas estéticas e conceituais da época.</p></></Fade>

                        </div>
                    </>
                </Slide>
            </>
            <>
                <Slide direction="right" triggerOnce duration={1200}>

                    <h2 className="titulo-card-direita">Contexto Histórico da Arte Moderna</h2>



                    <>
                        <div className="card-arte-direita">

                            <Fade delay={7000} duration={3000} triggerOnce><>    <p>O surgimento da arte moderna não pode ser separado dos tumultuosos eventos históricos que marcaram o século XX. A Primeira Guerra Mundial, seguida pela Segunda Guerra Mundial, trouxe consigo devastação, desilusão e uma profunda transformação na visão de mundo. A industrialização, urbanização e os avanços tecnológicos também moldaram a paisagem cultural e social, influenciando diretamente a arte. Movimentos como o futurismo capturaram o espírito da era industrial, enquanto o surrealismo explorou o inconsciente e o absurdo em resposta aos traumas da guerra. A arte moderna tornou-se um reflexo das mudanças rápidas e muitas vezes desconcertantes que caracterizaram o século XX, desafiando as expectativas e convidando o espectador a questionar não apenas a arte, mas também o mundo ao seu redor.</p></></Fade>
                            <img src={arte_moderna_2} id="arte-moderna-img-1" />

                        </div>
                    </>
                </Slide>
            </>
            <>
                <Slide direction="left" triggerOnce duration={1200}>

                    <h2 className="titulo-card">Arte Moderna nos Tempos Contemporâneos</h2>


                    <>
                        <div className="card-arte">

                            <img src={arte_moderna_3} id="arte-moderna-img-1" />
                            <Fade delay={7000} duration={3000} triggerOnce><><p>No cenário contemporâneo, a influência da arte moderna continua a ser profundamente sentida. Seus princípios de experimentação, individualismo e crítica social inspiraram inúmeros artistas e movimentos subsequentes. O minimalismo, por exemplo, simplifica a forma e a cor em uma reação direta ao excesso visual da sociedade contemporânea, enquanto o pop art utiliza imagens do cotidiano para questionar as fronteiras entre alta cultura e cultura popular. Além disso, a arte conceitual desafia as próprias definições de arte, colocando ênfase nas ideias por trás da obra em vez de sua forma física. A arte moderna continua a desempenhar um papel crucial no desafio às normas estéticas e sociais, expandindo os limites da criatividade humana e fornecendo um meio para a expressão de novas perspectivas e críticas sobre a sociedade contemporânea.</p></></Fade>

                        </div>
                    </>
                </Slide>
            </>
            <center>
                <Fade triggerOnce>
                    <>
                        <h1 style={{ color: "white" }} > Semana da arte moderna</h1>

                    </>

                    <div id="fotos-arte-principal" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', 'alignContent': 'space-around', width: '100vw' }}>
                        <img style={{ width: "20vw" }} src="https://cdn.shopify.com/s/files/1/0553/6510/7907/files/catalogo_da_semana_de_1922_-_di_cavalcanti_480x480.jpg?v=1649858930" />
                        <img style={{ width: "20vw" }} src="https://editoradatum.com.br/cdn/shop/articles/semana-de-arte-moderna-de-1922-resumo-caracteristicas-modernismo-e-artistas-747418.jpg?v=1650135787" />
                        <img style={{ width: "20vw" }} src="https://imgs.search.brave.com/veOUlqeO-n7i4PXVkHgeRon_AnW2kUnLnWvyjllC_BM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmFyY2h0cmVuZHMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzEyL3NlbWFu/YS1kZS1hcnRlLW1v/ZGVybmEtZGUtMTky/Mi5qcGc" />

                    </div>


                    <p id="arte-moderna-principal">

                        A Semana de Arte Moderna de 1922, realizada no Theatro Municipal de São Paulo, foi um evento marcante na história cultural do Brasil, simbolizando a ruptura com o tradicionalismo e o início do modernismo no país. Ocorrida entre os dias 13 e 17 de fevereiro, a Semana reuniu artistas, escritores e músicos que apresentaram novas formas de expressão artística, desafiando as convenções estabelecidas e promovendo a inovação e a experimentação.

                        Entre os participantes destacados estavam nomes como Mário de Andrade, Oswald de Andrade, Anita Malfatti, Tarsila do Amaral, Menotti Del Picchia e Heitor Villa-Lobos. Suas apresentações e obras trouxeram elementos de vanguarda, inspirados em movimentos europeus como o futurismo, o cubismo e o expressionismo, adaptados à realidade brasileira. A reação do público e da crítica foi mista, com aplausos e vaias, refletindo a controvérsia gerada pelas novas ideias.

                        A Semana de Arte Moderna deixou um legado duradouro, sendo considerada o ponto de partida para o modernismo no Brasil. Ela incentivou uma produção artística mais livre, diversificada e conectada com as questões sociais e culturais do país. As influências desse evento são sentidas até hoje na literatura, nas artes plásticas, na música e na arquitetura brasileiras, marcando um momento decisivo na trajetória da cultura nacional.
                    </p>
                </Fade>
            </center>
            <a href=""></a>

            {/*DIV SANTOS DRUMONT  */}

            <center>
                <div className="div-titulo santos-drumont">

                    <Slide triggerOnce delay={1000}><><div className="borda"></div></></Slide>
                    <Fade triggerOnce><><h1>Santos Dumont</h1></></Fade>
                    <Slide direction="right" triggerOnce delay={1000}><><div className="borda"></div></></Slide>

                </div>
            </center>
            <div className="card-lateral">

                <p>Alberto Santos Dumont foi um inventor e aviador brasileiro, amplamente reconhecido por suas contribuições pioneiras para a aviação. Nascido em 20 de julho de 1873, em Palmira, hoje Santos Dumont, em Minas Gerais, ele se mudou para a França, onde fez a maior parte de suas invenções. Dumont demonstrou grande habilidade e criatividade, destacando-se em competições de aviação e se tornando o primeiro a realizar um voo público em um avião mais pesado que o ar, o 14-Bis, em 23 de outubro de 1906. Esse feito marcou um ponto crucial na história da aviação.</p>
                <img src={santos_dumont_1}></img>
            </div>

            <div className="card-lateral">

                <p>Santos Dumont também desenvolveu dirigíveis, que foram fundamentais para a evolução das aeronaves. Ele construiu e voou vários modelos de dirigíveis, aprimorando constantemente seus designs. Em 1901, Dumont ganhou o Prêmio Deutsch de la Meurthe ao contornar a Torre Eiffel com o dirigível Nº 6, um marco importante que demonstrou a dirigibilidade das aeronaves mais leves que o ar. Sua paixão pela aviação e suas inovações foram fundamentais para abrir caminho para os futuros desenvolvimentos no campo da aeronáutica.</p>
                <img src={santos_dumont_2}></img>
            </div>

            <div className="card-lateral">

                <p>Além de seus feitos técnicos, Santos Dumont também era conhecido por seu caráter visionário e generoso. Ele acreditava que a aviação poderia unir povos e nações, promovendo a paz e a compreensão global. Dumont nunca patenteou suas invenções, permitindo que outros pudessem aprender e desenvolver a tecnologia aeronauta. Infelizmente, o inventor sofreu de depressão nos últimos anos de sua vida, em parte devido ao uso militar de suas criações, e faleceu em 23 de julho de 1932. Apesar disso, seu legado permanece vivo como um dos maiores pioneiros da aviação mundial.</p>
                <img src={santos_dumont_3}></img>
            </div>

            {/* FIM SANTOS DRUMONT */}
            {/* FAZER DROPDOWN */}




            

            <center>
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    dynamicHeight={false}
                    width={'70%'}
                    showStatus={false}
                >
                    <div>
                        <img src={olimpiedas_1} width={'100%'}  height={'800px'} style={{'objectFit': 'cover' , 'objectPosition' : 'down'}}/>
                        <p className="legend">Rayssa Leal medalha de prata jogos olimpícos 2020</p>
                    </div>
                  
                    <div>
                        <img src={olimpiedas_3} width={'100%'}  height={'800px'}/>
                    </div>
                    <div>
                        <img src={olimpiedas_2} width={'100%'}  height={'800px'}/>
                    </div>
                </Carousel>
            </center>

        </>
    )
}

export default Home
