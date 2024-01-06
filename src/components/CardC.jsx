import imagenes from '../assets/imagenes.jsx';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

// import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CardC() {

    const [cardStates, setCardStates] = useState({
        casa1: true,
        casa2: true,
        casa3: true,
        casa4: true,
        casa5: true,
        casa6: true,
        casa7: true,
        casa8: true,
        casa9: true,
        casa10: true,
        casa11: true,
        casa12: true,
        casa13: true,
        casa14: true,
        casa15: true,
        casa16: true,
        casa17: true,
        casa18: true,
        casa19: true,
        casa20: true,
        casa21: true,
        casa22: true,
        casa23: true,
        casa24: true,
        casa25: true,
        casa26: true,
        casa27: true,
        casa28: true,
    });

    const flipCard = (cardKey) => {
        setCardStates((prevState) => ({
            ...prevState,
            [cardKey]: !prevState[cardKey],
        }));
    };

    const cardsData = {
        casa1: {
            image: imagenes.casa1,
            title: 'Casa en calle Santos Molina n°786',
            location: 'San Miguel del Monte.',
            habitaciones: '2',
            banios: '1',
            ambientes: '7',
            titleback: 'Casa Santos Molina n°786',
            infoback: 'Cuenta con 2 Dormitorios, Un Baño, Cocina, Living-comedor, Galeria con Lavadero y Un Patio chico. Con Todos los Servicios, Papeles al dia y Lista para Escriturar.',
        },
        casa2: {
            image: imagenes.casa2,
            title: 'Casa en Av. San Martin n°361.',
            location: 'San Miguel del Monte.',
            habitaciones: '3',
            banios: '2',
            ambientes: '9',
            titleback: 'Casa en Av. San Martin n°361.',
            infoback: 'Dentro cuenta con Hall de entrada, Living, escritorio, cocina-comedor, dos baños uno de ellos no esta en funcionamiento y tres cuartos. y Fuera cuenta con Lavadero Cubierto, Entrada de auto, garaje cubierto, Amplio parque parquizado y arbolado y con todos los servicios en funcionamiento.',
        },
        casa3: {
            image: imagenes.casa3,
            title: 'Casa en Barrio Montemar.',
            location: 'Abbott.',
            habitaciones: '2',
            banios: '1',
            ambientes: '4',
            titleback: 'Casa sobre Calle Ushuaia.',
            infoback: 'Dentro cuenta con 2 Dormitorios, Baño y Cocina-Comedor. y Fuera cuenta con Galeria, Galpon de Guardado, Parrilla y Pileta.',
        },
        casa4: {
            image: imagenes.casa4,
            title: 'Casa en Av Rivadavia.',
            location: 'San Miguel del Monte.',
            habitaciones: '2',
            banios: '1',
            ambientes: '3',
            titleback: 'Casa Sobre Av Rivadavia.',
            infoback: 'Cuenta con Galeria, Living, Cocina comedor, Baño y 2 Habitaciones; Con 64 mts 2 cubiertos.',
        },
        casa5: {
            image: imagenes.casa5,
            title: 'Casa en Av. San Martín.',
            location: 'San Miguel del Monte.',
            habitaciones: '3',
            banios: '1',
            ambientes: '3',
            titleback: 'Casa Sobre Av San Martin.',
            infoback: 'Dentro cuenta con 3 habitaciones (1 en suite), Baño, Cocina-Comedor, Living y Lavadero, y Fuera cuenta con Pileta, Amplio Patio Parquizado y un Quincho con Lavadero y Amplio Garaje.',
        },
        casa6: {
            image: imagenes.casa6,
            title: 'Casa a Mts de la Laguna.',
            location: 'San Miguel del Monte.',
            habitaciones: '1',
            banios: '1',
            ambientes: '4',
            titleback: 'Barrio Los Olivos San Miguel del Monte, a 50mts de la laguna.',
            infoback: 'La Casa es con concepto abierto, Dentro cuenta con Living, Cocina-Comedor, Dormitorio, Baño y Lavadero, y Fuera cuenta con Patio Parquizado. Papeles al dia listo para escriturar',
        },
        casa7: {
            image: imagenes.casa7,
            title: 'Casa/Quinta en Barrio los Potreritos.',
            location: 'San Miguel del Monte.',
            habitaciones: '1',
            banios: '2',
            ambientes: '3',
            titleback: 'Casa/Quinta Brario los Potreritos.',
            infoback: 'Dentro cuenta con Salon libre 13x7mts, 2 Baños, Habitacion, Cocina 3x7mts con horno industrial, Estufa a leña, Alarma y Directv, Fuera cuenta con Fogon, Pileta 9x4, Plantas Crecidas y Galeria 20x4 con Parrilla grande.',
        },
        casa8: {
            image: imagenes.casa8,
            title: 'Casa Duplex en Calle Rivadavia.',
            location: 'San Miguel del Monte.',
            habitaciones: '3',
            banios: '1',
            ambientes: '7',
            titleback: 'Casa Duplex sobre Rivadavia.',
            infoback: 'La planta Alta cuenta con Dormitorio con Terraza; La Planta Baja cuenta con 2 Dormitorios, 1 Baño, Cocina-Comedor, Living y Garaje con Lavadero; Y Fuera cuenta con Quincho con Baño y Patio. Con todos los Servicios, Sup. Total 242 mts2 y Sup Cubierta 109mts2.',
        },
        casa9: {
            image: imagenes.casa9,
            title: 'Casa en Casco Urbano.',
            location: 'San Miguel del Monte.',
            habitaciones: '2',
            banios: '1',
            ambientes: '3',
            titleback: 'Casa en Calle Rojas.',
            infoback: 'Dentro Cuenta con 2 Habitaciones, Baño y Cocina-Living; Fuera cuenta con un Patio.',
        },
        casa10: {
            image: imagenes.casa10,
            title: 'Casa en Abbott sobre Martin Fierro.',
            location: 'Abbott.',
            ambientes: 'Consultar',
            titleback: 'Propiedad en Abbott.',
            infoback: 'Hermosa Propiedad en Abott sobre Calle Martin Fierro.',
        },
        casa11: {
            image: imagenes.casa11,
            title: 'Casa con Patio en Abbott.',
            location: 'Abbott.',
            ambientes: 'Consultar',
            metros: 'total 331',
            titleback: 'Casa con Patio en Abbott',
            infoback: 'Esta hermosa Propiedad de Abbott cuenta con una superficie cubierta de 111mts2 y con una superficie total de 331mts2.',
        },
    }

    return (
        <>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1240: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1360: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* casa2 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa2')}
                        className={`flip-cardB ${cardStates.casa2 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa2.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa2.title}</h3>
                                        <p>{cardsData.casa2.location}</p>
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{cardsData.casa2.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{cardsData.casa2.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa2.ambientes} Ambientes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa2.titleback}</h2>
                                    <p>{cardsData.casa2.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                    <iframe width="70%" height="125" style={{ marginTop: "10px" }} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=avenida%20san%20martin%20361%20san%20miguel%20del%20monte+(CP%20inmobiliaria)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa3 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa3')}
                        className={`flip-cardB ${cardStates.casa3 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa3.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa3.title}</h3>
                                        <p>{cardsData.casa3.location}</p>
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{cardsData.casa3.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{cardsData.casa3.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa3.ambientes} Ambientes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa3.titleback}</h2>
                                    <p>{cardsData.casa3.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa10 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa10')}
                        className={`flip-cardB ${cardStates.casa10 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa10.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa10.title}</h3>
                                        <p>{cardsData.casa10.location}</p>
                                        <div className="monoambientes_card">
                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa10.ambientes} Ambientes.</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa10.titleback}</h2>
                                    <p>{cardsData.casa10.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa4 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa4')}
                        className={`flip-cardB ${cardStates.casa4 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa4.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa4.title}</h3>
                                        <p>{cardsData.casa4.location}</p>
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{cardsData.casa4.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{cardsData.casa4.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa4.ambientes} Ambientes.</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa4.titleback}</h2>
                                    <p>{cardsData.casa4.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa11 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa11')}
                        className={`flip-cardB ${cardStates.casa11 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa11.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa11.title}</h3>
                                        <p>{cardsData.casa11.location}</p>
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa11.ambientes} Ambientes.</p>
                                            </div>
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{cardsData.casa11.metros} m².</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa11.titleback}</h2>
                                    <p>{cardsData.casa11.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa5 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa5')}
                        className={`flip-cardB ${cardStates.casa5 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa5.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa5.title}</h3>
                                        <p>{cardsData.casa5.location}</p>
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{cardsData.casa5.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{cardsData.casa5.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa5.ambientes} Ambientes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa5.titleback}</h2>
                                    <p>{cardsData.casa5.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa1 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa1')}
                        className={`flip-cardB ${cardStates.casa1 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa1.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa1.title}</h3>
                                        <p>{cardsData.casa1.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{cardsData.casa1.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{cardsData.casa1.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa1.ambientes} Ambientes.</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa1.titleback}</h2>
                                    <p>{cardsData.casa1.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                    <iframe width="70%" height="125" style={{ marginTop: "10px" }} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=santos%20molina%20786%20san%20miguel%20del%20monte+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa6 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa6')}
                        className={`flip-cardB ${cardStates.casa6 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa6.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa6.title}</h3>
                                        <p>{cardsData.casa6.location}</p>
                                        {/* monoscard */}
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{cardsData.casa6.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{cardsData.casa6.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa6.ambientes} Ambientes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa6.titleback}</h2>
                                    <p>{cardsData.casa6.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa7 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa7')}
                        className={`flip-cardB ${cardStates.casa7 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa7.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa7.title}</h3>
                                        <p>{cardsData.casa7.location}</p>
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{cardsData.casa7.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{cardsData.casa7.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa7.ambientes} Ambientes.</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa7.titleback}</h2>
                                    <p>{cardsData.casa7.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa8 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa8')}
                        className={`flip-cardB ${cardStates.casa8 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa8.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa8.title}</h3>
                                        <p>{cardsData.casa8.location}</p>
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{cardsData.casa8.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{cardsData.casa8.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa8.ambientes} Ambientes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa8.titleback}</h2>
                                    <p>{cardsData.casa8.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* casa9 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('casa9')}
                        className={`flip-cardB ${cardStates.casa9 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={cardsData.casa9.image} alt="" />
                                    <div className="info-card">
                                        <h3>{cardsData.casa9.title}</h3>
                                        <p>{cardsData.casa9.location}</p>
                                        <div className="monoambientes_card">
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{cardsData.casa9.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{cardsData.casa9.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{cardsData.casa9.ambientes} Ambientes.</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{cardsData.casa9.titleback}</h2>
                                    <p>{cardsData.casa9.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CardC