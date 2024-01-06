import imagenes from '../assets/imagenes'

function Footer() {

    return (
        <>
            <footer>
                <div className="footer_texto">
                    <div className="info">
                        <div className="logotxt">
                            <a href="#INICIO"><img src={imagenes.logo} alt="" /></a>
                        </div>
                        <div className="num_mail">
                            <div>
                                <img src={imagenes.telefono} alt="" />
                                <p>+54 2271 41-2950</p>
                            </div>
                            <div>
                                <img src={imagenes.mail} alt="" />
                                <p>coppolapavese@gmail.com</p>
                            </div>
                        </div>
                        <div className="redes_footer">
                            <a target='_BLANK' href="https://www.instagram.com/cp.inmobiliaria/"><img className="icons_redes" src={imagenes.instagram} alt="" /></a>
                            <a target='_BLANK' href="https://www.facebook.com/coppolapaveseinmobiliaria/"><img className="icons_redes" src={imagenes.facebook} alt="" /></a>
                            <a target='_BLANK' href="https://api.whatsapp.com/send/?phone=542271412950&text=Hola+quisiera+hablar+con+la+inmobiliaria+sobre+…&type=phone_number&app_absent=0"><img className="icons_redes" src={imagenes.whatsapp} alt="" /></a>
                        </div>
                    </div>

                    <div className="contacto">
                        <p>CONTACTAME</p>
                        <form id='CONTACTO' method="POST" action="https://formsubmit.co/coppolapavese@gmail.com">

                            <input type='email' placeholder='Introduzca su Email' required />
                            <input type='text' placeholder='Descripcion de la Casa' required />
                            <textarea placeholder='Su Consulta...' required ></textarea>
                            <input type="submit" className="btnsubmit" />

                            <input type="hidden" name="_next" value="http://localhost:5173" />
                            <input type="hidden" name="_captcha" value="false" />

                        </form>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <span>© 2023 Inmobiliaria Coppola Pavese</span>
                <span>| Designed by deg</span>
            </div>
        </>
    )
}

export default Footer