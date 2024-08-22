import Titulo from "../components/titulo";
import '../styles/skinsVirtuais.css'

export default function SkinsVirtuais() {


    return (
        <>
            <Titulo Texto="Skins virtuais: impacto econômico" />

            <center>
                <h2>Pesquisa revela que até  42% dos brasileiros gamers gastam regularmente
                    com jogos</h2>

                <img height={"680px"} src="/skinsVirtuais/banner.png" />

                <h2>
                    Pesquisa realizada pela Forbes em parceria com a NimoTv,
                    revela que o setor de jogos eletrônicos pode movimentar até 50 bilhões de dólares com skins virtuais.
                </h2>
            </center>


            <section className="banner">
                <img  height={"720px"}src="/skinsVirtuais/awp.png" />
                <h2>
                    Parte dos argumentos utilizados são que as skins além de mudarem
                    o aspecto do jogo, também pode dar uma identidade visual ao jogador exemplo o Gabriel Tolledo conhecido como “Fallen” com sua skin lendária, que já foi oferecido
                    1 milhão de dólares por colecionadores.
                </h2>

            </section>

            <section className="footer">
                <h2>
                    Para alguns, perca de dinheiro, para outros um pedaço de sua história.
                    A única verdade que não pode ser ignorada, é que o mercado eletrônico vem crescendo a cada ano,
                    seja com criptomoedas, nft , realidade virtual ou qualquer outro meio de entretenimento. Ao longo dos anos a têndencia é que a era digital venha a influenciar cada vez mais o mundo.
                </h2>
            </section>
        </>
    )





}