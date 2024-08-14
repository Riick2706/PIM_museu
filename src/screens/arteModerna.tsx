import { Fade, Slide } from "react-awesome-reveal";
import Titulo from "../components/titulo";
import '../styles/arteModerna.css'

export default function ArteModerna() {

    return (
        <>
            <Titulo Texto={"100 anos da semana da arte moderna"} />

            <div className="div-cards-horizontal">
                <Fade cascade triggerOnce>

                    <img src="card-arte-1.webp" alt="Cartaz exposição semana de arte moderna 1922" />
                    <img src="card-arte-2.webp" alt="Cartaz de divulgação semana da arte moderna 1922" />
                    <img src="card-arte-3.webp" alt="Convite ao Theatro municipal 1922 villa lobos" />
                </Fade>


            </div>

            <Fade triggerOnce>
                <div className="Banner-informativo">

                    <h2>A Semana de Arte Moderna de 1922, realizada no Theatro Municipal de São Paulo, foi um evento marcante na história cultural do Brasil, simbolizando a ruptura com o tradicionalismo e o início do modernismo no país. Ocorrida entre os dias 13 e 17 de fevereiro, a Semana reuniu artistas, escritores e músicos que apresentaram novas formas de expressão artística, desafiando as convenções estabelecidas e promovendo a inovação e a experimentação. Entre os participantes destacados estavam nomes como Mário de Andrade, Oswald de Andrade, Anita Malfatti, Tarsila do Amaral, Menotti Del Picchia e Heitor Villa-Lobos. Suas apresentações e obras trouxeram elementos de vanguarda, inspirados em movimentos europeus como o futurismo, o cubismo e o expressionismo, adaptados à realidade brasileira. A reação do público e da crítica foi mista, com aplausos e vaias, refletindo a controvérsia gerada pelas novas ideias. A Semana de Arte Moderna deixou um legado duradouro, sendo considerada o ponto de partida para o modernismo no Brasil. Ela incentivou uma produção artística mais livre, diversificada e conectada com as questões sociais e culturais do país. As influências desse evento são sentidas até hoje na literatura, nas artes plásticas, na música e na arquitetura brasileiras, marcando um momento decisivo na trajetória da cultura nacional.</h2>

                </div>
            </Fade>
            <div className="div-cards-verticais">

                <Slide triggerOnce duration={1000}>
                    <div id="card-vertical-1" className="Card-vertical">

                        <center>
                            <h3>
                                Importância da arte moderna
                            </h3>
                        </center>

                        <div className="Card-info">

                            <h4> A arte moderna, ao completar um século de existência, revela-se de extrema importância por sua ruptura radical com os padrões artísticos estabelecidos anteriormente. Surgindo no final do século XIX e florescendo ao longo do século XX, a arte moderna rejeitou as convenções acadêmicas e tradicionais que dominavam a arte ocidental há séculos. Em vez de retratar a realidade de maneira idealizada, os artistas modernos buscaram novas formas de expressão que refletissem a crescente complexidade e fragmentação da vida moderna. Movimentos como o cubismo, o expressionismo, o surrealismo e o dadaísmo foram apenas alguns dos muitos movimentos que desafiaram as normas estéticas e conceituais da época.</h4>
                            <img src="arte_moderna_1.webp" alt="" />

                        </div>
                    </div>
                </Slide>

                <Slide triggerOnce direction="right" duration={1000} delay={100}>
                    <div id="card-vertical-2" className="Card-vertical">

                        <center>
                            <h3>
                                Contexto Histórico da Arte Moderna
                            </h3>
                        </center>

                        <div className="Card-info">

                            <img src="arte_moderna_2.webp" alt="" />
                            <h4> O surgimento da arte moderna não pode ser separado dos tumultuosos eventos históricos que marcaram o século XX. A Primeira Guerra Mundial, seguida pela Segunda Guerra Mundial, trouxe consigo devastação, desilusão e uma profunda transformação na visão de mundo. A industrialização, urbanização e os avanços tecnológicos também moldaram a paisagem cultural e social, influenciando diretamente a arte. Movimentos como o futurismo capturaram o espírito da era industrial, enquanto o surrealismo explorou o inconsciente e o absurdo em resposta aos traumas da guerra. A arte moderna tornou-se um reflexo das mudanças rápidas e muitas vezes desconcertantes que caracterizaram o século XX, desafiando as expectativas e convidando o espectador a questionar não apenas a arte, mas também o mundo ao seu redor.</h4>

                        </div>
                    </div>
                </Slide>

                <Slide triggerOnce duration={1000} delay={200}>
                    <div id="card-vertical-3" className="Card-vertical">

                        <center>
                            <h3>
                                Arte Moderna nos Tempos Contemporâneos
                            </h3>
                        </center>

                        <div className="Card-info">

                            <h4>No cenário contemporâneo, a influência da arte moderna continua a ser profundamente sentida. Seus princípios de experimentação, individualismo e crítica social inspiraram inúmeros artistas e movimentos subsequentes. O minimalismo, por exemplo, simplifica a forma e a cor em uma reação direta ao excesso visual da sociedade contemporânea, enquanto o pop art utiliza imagens do cotidiano para questionar as fronteiras entre alta cultura e cultura popular. Além disso, a arte conceitual desafia as próprias definições de arte, colocando ênfase nas ideias por trás da obra em vez de sua forma física. A arte moderna continua a desempenhar um papel crucial no desafio às normas estéticas e sociais, expandindo os limites da criatividade humana e fornecendo um meio para a expressão de novas perspectivas e críticas sobre a sociedade contemporânea.</h4>
                            <img src="arte_moderna_3.webp" alt="" />

                        </div>
                    </div>
                </Slide>
            </div>
        </>
    )
}