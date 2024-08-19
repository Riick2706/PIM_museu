import { Fade } from "react-awesome-reveal";
import Titulo from "../components/titulo";
import '../styles/santosDumont.css'

export default function SantosDumont() {

    return (
        <>
            <Titulo Texto="Santos Dumont" />

            <Fade triggerOnce>
                <section className="banner-dumont">

                    <img src="/dumont/banner.png" />
                    <div className="info-banner">
                    
                        <h3>
                            Alberto Santos-Dumont, nascido em 20 de julho de 1873, em Palmira, Brasil, é amplamente reconhecido como um dos pioneiros da aviação. Filho de um engenheiro e proprietário de fazendas de café, Dumont desenvolveu desde cedo um fascínio por máquinas e invenções. Após mudar-se para Paris, ele se dedicou ao estudo e desenvolvimento de dirigíveis e, posteriormente, aeronaves mais pesadas que o ar. Em 1906, Santos-Dumont fez história ao realizar o primeiro voo público de um avião, o 14-Bis, no Campo de Bagatelle, em Paris. O 14-Bis foi a pr
                            imeira aeronave a ser impulsionada por seus próprios meios e a realizar um voo oficial, coberto pela imprensa e assistido por uma multidão.
                        </h3>

                        <h3>
                            O 14-Bis, também chamado de "Oiseau de Proie"
                            Pássaro de Rapina), foi uma máquina revolucionária para a época, com uma
                            estrutura semelhante à de uma ave e equipada com um motor a gasolina. Em 23 de outubro
                            de 1906, Santos-Dumont voou 60 metros a uma altura de aproximadamente 2 a 3 metros, sendo
                            reconhecido como o primeiro voo controlado e sustentado de uma máquina mais pesada que o ar na
                            Europa. Este feito notável solidificou seu lugar na história da aviação e lhe rendeu o título de "Pai d
                            a Aviação", um reconhecimento pela sua contribuição fundamental para a aeronáutica. Santos-Dumont continuou a in
                            ovar no campo da aviação, mas o 14-Bis permanece como um dos marcos mais significativos de sua carreira.
                        </h3>
                    </div>


                </section>
            </Fade>
            <section id="wright-dumont">
                <Titulo Texto="Irmãos wright vs Santos Dumont" />
                <Fade cascade triggerOnce>
                    <h3>
                        A rivalidade entre Alberto Santos-Dumont e os irmãos Wright, Orville e Wilbur, é uma das mais marcantes na história da aviação. Os Wright, nascidos nos Estados Unidos, são conhecidos por terem realizado o primeiro voo controlado de uma aeronave mais pesada que o ar em 17 de dezembro de 1903, em Kitty Hawk, Carolina do Norte. Este voo foi realizado com o Flyer, uma aeronave que utilizava um sistema de trilhos para decolagem, impulsionada por um motor próprio e, de acordo com relatos, controlada com sucesso.
                        Contudo, esse voo ocorreu de forma privada e sem a presença de testemunhas independentes, o que gerou controvérsias sobre a validade e o impacto do feito.
                    </h3>

                    <h3>
                        Santos-Dumont, por outro lado, realizou o primeiro voo
                        público de uma aeronave mais pesada que o ar, o 14-Bis, em 23 de
                        outubro de 1906, no Campo de Bagatelle, em Paris. Diferente dos irmãos Wright, Dum
                        ont fez questão de demonstrar sua invenção diante de uma grande audiência, incluindo membros
                        da imprensa, que documentaram o evento amplamente. O 14-Bis decolou, voou 60 metros e pousou sem a ne
                        cessidade de trilhos ou outros dispositivos de auxílio, dependendo apenas de sua própria potência. Esse feito fo
                        i oficialmente reconhecido pela Federação Aeronáutica Internacional (FAI) como o primeiro voo de uma máquina mais pesada que o ar, o que gerou uma disputa acirrada sobre quem realmente deveria ser creditado como o "pai da aviação".


                    </h3>

                    <h3>
                        Os irmãos Wright, ao saberem do sucesso de Santos-Dumont, reivindicaram que haviam realizad
                        o voos antes dele, o que gerou uma polêmica internacional. No entanto, a ausência de testemunhas independentes nos voos dos Wright e a falt
                        a de reconhecimento imediato por instituições oficiais fizeram com que muitos europeus, especialmente franceses, continuassem a considerar Santos-Dum
                        ont como o verdadeiro pioneiro. A rivalidade não era apenas uma questão de datas e eventos, mas também de filosofia: enquanto os Wright mantinham su
                        as inovações em sigilo, buscando patentes e proteção de suas invenções, Santos-Dumont compartilhava abertamente seus projetos, acreditando que o progresso da aviação deveria ser um esforço coletivo e de benefício para toda a humanidade.
                    </h3>

                    <h3>
                        Essa divergência sobre quem realmente
                        realizou o primeiro voo e quem deveria ser reconhecido como o inventor do avião persiste até hoje. Nos Estados Unidos, os Wright s
                        ão frequentemente celebrados como os primeiros a voar, enquanto no Brasil e em outras partes do mundo, Santos-Dumont é visto como o verdadeiro pio
                        neiro, graças à transparência e ao caráter público de suas demonstrações. A rivalidade entre essas figuras históricas reflete não apenas uma competição
                        tecnológica, mas também diferentes abordagens culturais e filosóficas em relação à inovação e ao progresso científico.
                    </h3>
                </Fade>
            </section>

            <section id="cards-dumont">
                <img src="/dumont/waves 1.svg" />
                <div className="box-card">

                    <div>
                        <img width={"640px"} style={{marginTop: "20px"}} height={"720px"}  src="/dumont/card-1.jpg" ></img>

                    </div>
                    <div>
                        <img width={"640px"} height={"720px"} src="/dumont/card-2.webp" />

                    </div>
                    <div>
                        <img width={"640px"} height={"720px"}  src="/dumont/card-3.webp" />

                    </div>
                </div>


            </section>

        </>
    )
}