import Carousel from 'react-bootstrap/Carousel';
import imagenes from '../assets/imagenes'

function CarouselFadeExample() {
    const MOData = {
        MO1: {
            img1: imagenes.MO1,
            img2: imagenes.MO12,
            img3: imagenes.MO13,
            title: 'Casa en Barrio Don Genaro',
            location: 'San Miguel Del Monte',
        },
        MO2: {
            img1: imagenes.MO2,
            img2: imagenes.MO22,
            img3: imagenes.MO23,
            title: 'Casa a Estrenar en San Pablo.',
            location: 'San Miguel Del Monte',
        },
        MO3: {
            img1: imagenes.MO3,
            img2: imagenes.MO32,
            img3: imagenes.MO33,
            title: 'Casa/Lote 9000mts2',
            location: 'Abbott',
        },
        MO4: {
            img1: imagenes.MO4,
            img2: imagenes.MO42,
            img3: imagenes.MO43,
            title: 'VENTA IMPORTANTE PROPIEDAD “SE ACEPTAN PERMUTAS”',
            location: 'San Miguel Del Monte',
        },
        MO5: {
            img1: imagenes.MO5,
            img2: imagenes.MO52,
            img3: imagenes.MO53,
            title: 'Casa Chacras de Abbott',
            location: 'Abbott',
        },
    }
    return (
        <Carousel className='carousel'>
            <Carousel.Item  interval={4000}>
                <div className='fotos_oferta'>
                    <img className='foto_oferta' src={MOData.MO2.img3} alt="" />
                    <img className='foto_oferta' src={MOData.MO2.img2} alt="" />
                    <img className='foto_oferta' src={MOData.MO2.img1} alt="" />
                </div>
                <Carousel.Caption>
                    <h3 className='texto-carousel'>{MOData.MO2.title}</h3>
                    <p className='lugar-carousel'>San Miguel del Monte</p>
                    <p className='texto-carousel'>
                        - Sobre una hectarea parquizada, almbrada. <br />
                        - la propiedad tiene un cubierto de 160m2. <br />
                        - 1 baño completo. <br />
                        - 1 tualet. <br />
                        - Cocina-Comedor, Living y Lavadero. <br />
                        - Semicubierto de Galeria y Quincho con parrilla.<br />
                        - Pileta.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={4000}>
                <div className='fotos_oferta'>
                    <img className='foto_oferta' src={MOData.MO5.img3} alt="" />
                    <img className='foto_oferta' src={MOData.MO5.img2} alt="" />
                    <img className='foto_oferta' src={MOData.MO5.img1} alt="" />
                </div>
                <Carousel.Caption>
                    <h3 className='texto-carousel'>{MOData.MO5.title}</h3>
                    <p className='lugar-carousel'>San Miguel del Monte</p>
                    <p className='texto-carousel'>
                        - Living-comedor, Toilette , Cocina, Despensa y Lavadero.<br />
                        - Piso losa radiante con caldera computarizada en toda la casa y Pre instalación sistema de alarma.<br />
                        - Superficie Total 1,48has. Metros Cubiertos 193.5mts y Semicubiertos 58mts.<br />
                        - Pergola para 2 autos, Galpón de 3mts x 2,5mts, Canil con 2 cuchas techado y alambrado de 8mtsx4mts.<br />
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={4000}>
                <div className='fotos_oferta'>
                    <img className='foto_oferta' src={MOData.MO3.img3} alt="" />
                    <img className='foto_oferta' src={MOData.MO3.img2} alt="" />
                    <img className='foto_oferta' src={MOData.MO3.img1} alt="" />
                </div>
                <Carousel.Caption>
                    <h3 className='texto-carousel'>{MOData.MO3.title}</h3>
                    <p className='lugar-carousel'>San Miguel del Monte</p>
                    <p className='texto-carousel'>
                        - 9000 m² de terreno.<br />
                        - Entrada con escritorio, Living-comedor con hogar y cocina.<br />
                        - Fuera: Quincho 40m2,Garaje semicubierto y Pileta 7x3m2.<br />
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={4000}>
                <div className='fotos_oferta'>
                    <img className='foto_oferta' src={MOData.MO4.img3} alt="" />
                    <img className='foto_oferta' src={MOData.MO4.img2} alt="" />
                    <img className='foto_oferta' src={MOData.MO4.img1} alt="" />
                </div>
                <Carousel.Caption>
                    <h3 className='texto-carousel'>{MOData.MO4.title}</h3>
                    <p className='lugar-carousel'>San Miguel del Monte</p>
                    <p className='texto-carousel'>
                        - Pileta<br />
                        - Quincho<br />
                        - Living<br />
                        - Lavadero<br />
                        - Recibidor<br />
                        - Oficina<br />
                        - Cocina-Comedor<br />
                        - 2 Baños<br />
                        - 3 habitaciones una con vestidor<br />
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={4000}>
                <div className='fotos_oferta'>
                    <img className='foto_oferta' src={MOData.MO1.img3} alt="" />
                    <img className='foto_oferta' src={MOData.MO1.img2} alt="" />
                    <img className='foto_oferta' src={MOData.MO1.img1} alt="" />
                </div>
                <Carousel.Caption>
                    <h3 className='texto-carousel'>{MOData.MO1.title}</h3>
                    <p className='lugar-carousel'>San Miguel del Monte</p>
                    <p className='texto-carousel'>
                        - Proyectos a Ampliar: instalación cloacas y agua caliente 2da planta. <br />
                        - Instalacion de Gas, eléctrica normalizada 24v, Cañerías de agua y riego artificial fuera. <br />
                        - 45mts2 cubiertos+ 15 mts2 semicubiertos.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;