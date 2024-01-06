import imagenes from '../assets/imagenes.jsx';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

// import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CardL() {

    const [cardStates, setCardStates] = useState({
        lote1: true,
        lote2: true,
        lote3: true,
        lote4: true,
        lote5: true,
        lote6: true,
        lote7: true,
        lote8: true,
        lote9: true,

        local1: true,
        local2: true,
        local3: true,
        local4: true,
        local5: true,
        local6: true,
    });

    const flipCard = (cardKey) => {
        setCardStates((prevState) => ({
            ...prevState,
            [cardKey]: !prevState[cardKey],
        }));
    };

    const lotesData = {
        lote1: {
            image: imagenes.lote1,
            title: 'Venta de Lotes Barrio Sanchez Espuelas.',
            location: 'San Miguel del Monte',
            metros: 'Consultar',
            titleback: 'Venta de Lotes Barrio Sanchez Espuelas.',
            infoback: '🏡 ¡Oportunidad Única! Lotes en el Barrio Sánchez Espuelas, a solo 110 km de CABA. 🌄 Viví la tranquilidad del campo sin alejarte demasiado de la ciudad. Terrenos amplios y con gran potencial.',
        },
        lote2: {
            image: imagenes.lote2,
            title: 'Venta Lote en La Florentina.',
            location: 'San Miguel del Monte',
            metros: 'Consultar',
            titleback: 'Lote en La Florentina.',
            infoback: 'Hermoso Lote en la Florentina, Consultar mts2.',
        },
        lote3: {
            image: imagenes.lote3,
            title: 'Venta Lote en Barrio las Palmeras.',
            location: 'San Miguel del Monte',
            metros: '12x35',
            titleback: 'Lote en Barrio las Palmeras.',
            infoback: 'Hermoso Lote ubicado en Barrio las Palmeras de 12x35 mts2.',
        },
        lote4: {
            image: imagenes.lote4,
            title: 'Venta Lote Frente a la Laguna.',
            location: 'San Miguel del Monte',
            metros: '34x56',
            titleback: 'Lote Frente a la Laguna',
            infoback: 'Hermoso Lote en Venta de 34x56 mts2⠀situado Detras de la Laguna.',
        },
        lote5: {
            image: imagenes.lote5,
            title: 'Venta Lote con Construccion.',
            location: 'San Miguel del Monte',
            metros: '770',
            titleback: 'Lote con construcción calle Roque Perez entre Navarro y Dolores .',
            infoback: 'Hermoso Lote con construcción en calle Roque Perez entre Navarro y Dolores de 770 mts2.',
        },
        lote6: {
            image: imagenes.lote6,
            title: '3 Lotes en Barrio Don Genaro.',
            location: 'San Miguel del Monte',
            metros: 'Consultar',
            titleback: '3 Lotes en Barrio Don Genaro.',
            infoback: 'Tres Oportunidades en Barrio Don Genaro.',
        },
        lote7: {
            image: imagenes.lote7,
            title: 'Venta Lote en Casco Urbano.',
            location: 'San Miguel del Monte',
            metros: '20x42',
            titleback: 'Lote en en la calle Alberdi 356 entre Alem y Belgrano.',
            infoback: 'Hermoso Lote dentro del Casco Urbano en la calle Alberdi 356 entre Alem y Belgrano, de 60x12 mts2.',
        },
        lote8: {
            image: imagenes.lote8,
            title: 'Venta Lote en Barrio El Fogon.',
            location: 'San Miguel del Monte',
            metros: '1400',
            titleback: 'Lote en Calle Azaleas y Alamos , Barrio El Fogón.',
            infoback: 'Hermoso Lote en Calle Azaleas y Alamos , Barrio El Fogón de 1400 mts2.',
        },
        lote9: {
            image: imagenes.lote9,
            title: 'Lote a metros de Av. Rivadavia',
            location: 'San Miguel del Monte',
            metros: 'Consultar',
            titleback: 'Lote a metros de Av. Rivadavia',
            infoback: 'Ubicación: Calle Súarez esquina Pasaje Aicardi.',
        },

        local1: {
            image: imagenes.local1,
            title: 'Venta Local/Propiedad en Casco Urbano.',
            location: 'San Miguel del Monte',
            habitaciones: '3',
            banios: '2',
            ambientes: '7',
            titleback: 'Local/Propiedad en Casco Urbano, a 2 Cuadras de la Plaza Principal.',
            infoback: 'Excelente inversion Local/Propiedad en Casco Urbano, El Local cuenta con Cocina y Baño, y la Casa cuenta con 3 Dormitorios, Cocina, Living/Comedor, Baño, Patio y Departamento a terminar.',
        },
        local2: {
            image: imagenes.local2,
            title: 'Local sobre Lote en Abbott',
            location: 'Abbott',
            metros: '11x44,50',
            titleback: 'Lote en Abbott.',
            infoback: 'Superficie cubierta 194mts2, en un Lote de 11x44,50 mts2.',
        },
        local3: {
            image: imagenes.local3,
            title: 'Venta Local Casco Urbano.',
            location: 'San Miguel del Monte',
            ambientes: 'Consultar',
            banios: 'Consultar',
            titleback: 'Venta local en calle Belgrano entre Irigoyen y Rojas',
            infoback: 'Excelente inversion de Local ubicado en calle Belgrano entre Irigoyen y Rojas.',
        },
        local4: {
            image: imagenes.local4,
            title: 'Venta Galpon en Casco Urbano.',
            location: 'San Miguel del Monte',
            metros: 'Consultar',
            titleback: 'Venta Galpon en Casco Urbano.',
            infoback: 'Excelente Galpon sobre Casco Urbano.',
        },
        local5: {
            image: imagenes.local5,
            title: 'Venta Local Videla Dorna y Alem.',
            location: 'San Miguel del Monte',
            ambientes: 'Consultar',
            banios: 'Consultar',
            titleback: 'Venta Esquina Videla Dorna y Alem.',
            infoback: 'Excelente inversion de Local Ubicado en Esquina entre Videla Dorna y Alem.',
        },
        local6: {
            image: imagenes.local6,
            title: 'Venta Local Casco Urbano.',
            location: 'San Miguel del Monte',
            metros: 'Consultar',
            titleback: 'Venta Local Calle Belgrano.',
            infoback: 'Este local en pleno casco urbano, ubicado en la calle Belgrano, representa una oportunidad única para tu negocio. Con una ubicación estratégica y gran visibilidad, este local es ideal para una variedad de usos comerciales.',
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
                {/* lote1 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('lote1')}
                        className={`flip-cardB ${cardStates.lote1 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={lotesData.lote1.image} alt="" />
                                    <div className='info-card'>
                                        <h3>{lotesData.lote1.title}</h3>
                                        <p>{lotesData.lote1.location}</p>
                                        <div className="monoambientes_card">
                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.lote1.metros} m².</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.lote1.titleback}</h2>
                                    <p>{lotesData.lote1.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* lote8 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('lote9')}
                        className={`flip-cardB ${cardStates.lote9 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.lote9.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.lote9.title}</h3>
                                        <p>{lotesData.lote9.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">

                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.lote9.metros} m².</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.lote9.titleback}</h2>
                                    <p>{lotesData.lote9.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* lote2 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('lote2')}
                        className={`flip-cardB ${cardStates.lote2 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={lotesData.lote2.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.lote2.title}</h3>
                                        <p>{lotesData.lote2.location}</p>
                                        {/* monoscard */}
                                        <div className="monoambientes_card">
                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.lote2.metros} m².</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.lote2.titleback}</h2>
                                    <p>{lotesData.lote2.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* local 2 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('local2')}
                        className={`flip-cardB ${cardStates.local2 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.local2.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.local2.title}</h3>
                                        <p>{lotesData.local2.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.local2.metros} m².</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.local2.titleback}</h2>
                                    <p>{lotesData.local2.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* lote3 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('lote3')}
                        className={`flip-cardB ${cardStates.lote3 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.lote3.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.lote3.title}</h3>
                                        <p>{lotesData.lote3.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">

                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.lote3.metros} m².</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.lote3.titleback}</h2>
                                    <p>{lotesData.lote3.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* lote4 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('lote4')}
                        className={`flip-cardB ${cardStates.lote4 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.lote4.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.lote4.title}</h3>
                                        <p>{lotesData.lote4.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">

                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.lote4.metros} m².</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.lote4.titleback}</h2>
                                    <p>{lotesData.lote4.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* local3 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('local3')}
                        className={`flip-cardB ${cardStates.local3 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.local3.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.local3.title}</h3>
                                        <p>{lotesData.local3.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">
                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{lotesData.local2.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{lotesData.local2.ambientes} Ambientes.</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.local3.titleback}</h2>
                                    <p>{lotesData.local3.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* lote5 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('lote5')}
                        className={`flip-cardB ${cardStates.lote5 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.lote5.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.lote5.title}</h3>
                                        <p>{lotesData.lote5.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">

                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.lote5.metros} m².</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.lote5.titleback}</h2>
                                    <p>{lotesData.lote5.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* lote6 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('lote6')}
                        className={`flip-cardB ${cardStates.lote6 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.lote6.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.lote6.title}</h3>
                                        <p>{lotesData.lote6.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">

                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.lote6.metros} m².</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.lote6.titleback}</h2>
                                    <p>{lotesData.lote6.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* local1 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('local1')}
                        className={`flip-cardB ${cardStates.local1 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.local1.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.local1.title}</h3>
                                        <p>{lotesData.local1.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">

                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.habitaciones} alt="" />
                                                <p>{lotesData.local1.habitaciones} Habitaciones.</p>
                                            </div>

                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{lotesData.local1.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{lotesData.local1.ambientes} Ambientes.</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.local1.titleback}</h2>
                                    <p>{lotesData.local1.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* lote7 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('lote7')}
                        className={`flip-cardB ${cardStates.lote7 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.lote7.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.lote7.title}</h3>
                                        <p>{lotesData.lote7.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">

                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.lote7.metros} m².</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.lote7.titleback}</h2>
                                    <p>{lotesData.lote7.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* lcoal5 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('local5')}
                        className={`flip-cardB ${cardStates.local5 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">
                                    <img className='imagenCasa' src={lotesData.local5.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.local5.title}</h3>
                                        <p>{lotesData.local5.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">

                                            {/* tipos de ambientes */}
                                            {/* banios */}
                                            <div className="monos_card">
                                                <img src={imagenes.banios} alt="" />
                                                <p>{lotesData.local5.banios} Baños.</p>
                                            </div>

                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{lotesData.local5.ambientes} Ambientes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.local5.titleback}</h2>
                                    <p>{lotesData.local5.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/* lote8 */}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('lote8')}
                        className={`flip-cardB ${cardStates.lote8 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.lote8.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.lote8.title}</h3>
                                        <p>{lotesData.lote8.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">

                                            {/* tipos de ambientes */}
                                            {/* habitaciones */}
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.lote8.metros} m².</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.lote8.titleback}</h2>
                                    <p>{lotesData.lote8.infoback}</p>
                                    <Button variant="outline-light" href='#CONTACTO'>CONTACTAME</Button>
                                </div>
                            </div>
                        </div>
                    </button>
                </SwiperSlide>
                {/*local6*/}
                <SwiperSlide>
                    <button
                        onClick={() => flipCard('local6')}
                        className={`flip-cardB ${cardStates.local6 ? '' : 'flipped'}`}
                    >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front">
                                <div className="card-content-front">

                                    {/* frontcard */}
                                    <img className='imagenCasa' src={lotesData.local6.image} alt="" />
                                    <div className="info-card">
                                        <h3>{lotesData.local6.title}</h3>
                                        <p>{lotesData.local6.location}</p>

                                        {/* monoscard */}
                                        <div className="monoambientes_card">
                                            {/* ambientes */}
                                            <div className="monos_card">
                                                <img src={imagenes.ambientes} alt="" />
                                                <p>{lotesData.local6.ambientes} Ambientes.</p>
                                            </div>
                                            <div className="monos_card">
                                                <img src={imagenes.metros} alt="" />
                                                <p>{lotesData.local6.metros} m².</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flip-card-back">
                                <div className="card-content">
                                    <h2>{lotesData.local6.titleback}</h2>
                                    <p>{lotesData.local6.infoback}</p>
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

export default CardL
