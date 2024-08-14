import { Fade, Slide } from 'react-awesome-reveal';
import './titulo.css';

interface TituloProps {
    Texto: string;
}

export default function Titulo({ Texto }: TituloProps) {
    return (
        <div className='Titulo'>

            <Slide triggerOnce>
                <hr />
            </Slide>

            <Fade triggerOnce>
                <center>

                    <h1>{Texto}</h1>
                </center>

            </Fade>
            <Slide triggerOnce direction='right'>
                <hr />

            </Slide>
        </div >
    );
}
