import React from "react";
import { Helmet } from "react-helmet";
import { Reviews } from "../components/Reviews";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import "./Home.css";
import { MenuBtn } from "../components/menu.Btn";
import AboutImg from "../fotos/img/about-chef2.jpg";
import AboutImg1 from "../fotos/img/gallery5.jpg";
import AboutImg2 from "../fotos/img/gallery14.jpg";
import { ContactInfo } from "../components/ContactInfo";
import { CSSTransition } from "react-transition-group";
import Image1 from "../fotos/img/gallery.jpg";
import Image2 from "../fotos/img/gallery7.jpg";
import Image3 from "../fotos/img/drinks9.jpg";
import Image4 from "../fotos/img/gallery13.jpg";
import Image5 from "../fotos/img/drinks8.jpg";
import Image6 from "../fotos/img/gallery5.jpg";
import Image7 from "../fotos/img/appetizers11.jpg";
import Image8 from "../fotos/img/gallery11.jpg";
import Image9 from "../fotos/img/gallery6.jpg";


function Home() {

    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    <Helmet>
        <title>Restaurante de frutos do mar Mundo do Camarão</title>
        <meta name="description" content="O melhor restaurante de frutos do mar . Pratos frescos, ambiente agradável e uma experiência gastronômica inesquecível." />
        <meta name="keywords" content="restaurante de frutos do mar, camarão, comida fresca, ambiente acolhedor" />
    </Helmet>


    const [activeMessage, setActiveMessage] = useState(1);
    const [isMessageVisible, setIsMessageVisible] = useState(true);

    useEffect(() => {
        const cycleMessages = setInterval(() => {
            setIsMessageVisible(false);

            setTimeout(() => {
                setActiveMessage((prev) => (prev === 3 ? 1 : prev + 1));
                setIsMessageVisible(true);
            }, 1000);
        }, 4000);

        return () => clearInterval(cycleMessages);
    }, []);
    return (

        <div className="home-page">
            <header className="d-flex align-items-center text-light shadow">
                <Container fluid className="p-0">
                    <div className="carousel-caption">
                        <div className="caption-background">
                            <CSSTransition
                                in={isMessageVisible && activeMessage === 1}
                                timeout={500}
                                classNames="slide-fade"
                                unmountOnExit
                            >
                                <div className="initial-message">
                                    <h1 className="display-5 mt-4 ">O melhor em frutos do mar</h1>
                                    <p className="lead mt-2 fw-bold">Restaurante e Petiscaria</p>
                                </div>
                            </CSSTransition>
                            <CSSTransition
                                in={isMessageVisible && activeMessage === 2}
                                timeout={500}
                                classNames="slide-fade"
                                unmountOnExit
                            >
                                <div className="reservation-message">
                                    <p className="lead  ">Garanta o seu lugar e desfrute de uma experiência gastronômica inesquecível.</p>
                                    <h3 className="display-5 mt-4 ">Faça já sua reserva aqui</h3>
                                    <Button href="https://wa.me/5548991606536" variant="light " size="lg" className="fw-bold text-dark px-4 py-2 mt-3 button-close-spacing">
                                        Faça sua reserva
                                    </Button>
                                </div>
                            </CSSTransition>

                            <CSSTransition
                                in={isMessageVisible && activeMessage === 3}
                                timeout={500}
                                classNames="slide-fade"
                                unmountOnExit
                            >
                                <div className="menu-message ">
                                    <p className="lead  "  >Descubra pratos deliciosos e aproveite cada sabor especial que oferecemos.</p>
                                    <h3 className="display-5 mt-4  ">Confira o nosso cardápio exclusivo!</h3>
                                    <Button
                                        href="/menu"
                                        variant="light"
                                        size="lg"
                                        className="fw-bold text-dark px-4 py-2 mt-3 button-close-spacing"
                                    >
                                        Conferir Cardápio
                                    </Button>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                </Container>
            </header>

            <div className="container my-3">
                <div className="row">
                    <div className=" col-h2 col-lg-6 d-none d-md-flex justify-content-center">
                        <div id="aboutCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={AboutImg} className="img-fluid rounded" alt="About img 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={AboutImg1} className="img-fluid rounded" alt="About img 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={AboutImg2} className="img-fluid rounded" alt="About img 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-1 mb-5 fw-bold">Sobre nós</h2>
                        <p className="mb-3 text-justify">
                            Somos um restaurante e petiscaria especializado em frutos do mar, comprometidos em oferecer
                            pratos feitos com ingredientes frescos e cuidadosamente selecionados. Nossa equipe de especialistas
                            garante que cada prato entregue a você seja preparado com o mais alto padrão de qualidade.
                        </p>
                        <div className="d-block d-md-none my-3">
                            <div id="aboutCarouselSmall" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={AboutImg} className="img-fluid rounded" alt="About img 1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={AboutImg1} className="img-fluid rounded" alt="About img 2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={AboutImg2} className="img-fluid rounded" alt="About img 3" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="mb-5 text-justify">
                            No Restaurante e Petiscaria Mundo do Camarão, nosso cardápio variado é elaborado com critério e zelo.
                            Complementamos sua experiência gastronômica com uma seleção de vinhos nacionais e importados, mantidos
                            em adega climatizada. Também oferecemos coquetéis exclusivos e sobremesas irresistíveis, tornando sua
                            visita memorável do começo ao fim.
                        </p>

                        <Link to="/about">
                            <button type="button" className="btn btn-outline-dark btn-lg">Mais sobre nós</button>
                        </Link>
                    </div>
                </div>
                <div className="menu-section py-3 text-light rounded shadow">
                    <div className="container d-flex flex-column align-items-center ">
                        <h2 className="fs-1 mb-5  fw-bold">Nossos favoritos</h2>
                        <div className="row mb-5 w-100  ">
                            <div className="col-lg d-flex flex-column align-items-center mb-5 mb-lg-0  ">
                                <h3 className="fs-2 mb-5">Pratos</h3>
                                <ul className="px-0">
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Rodízio de frutos do mar</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Salmão grelhado</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Belle meuniere</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg d-flex flex-column align-items-center mb-5 mb-lg-0">
                                <h3 className="fs-2 mb-5">Drinks</h3>
                                <ul className="px-0">
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Negroni</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Aperol spritz</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Sensação tropical</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <MenuBtn />
                    </div>
                </div>
            </div>
            <div className="container  py-5">
                <h2 className="text-center fs-1 mb-5  fw-bold">Galeria de fotos</h2>
                <div className="row">
                    <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" data-bs-interval="2000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 8"></button>

                        </div>
                        <div className="carousel-inner " >
                            <div className="carousel-item item active">
                                <img src={Image1} className="d-block w-100 rounded" alt="Slide 1 " style={{ height: '550px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item item">
                                <img src={Image2} className="d-block w-100 rounded" alt="Slide 2" style={{ height: '550px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item item">
                                <img src={Image3} className="d-block w-100 rounded" alt="Slide 3" style={{ height: '550px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item item">
                                <img src={Image4} className="d-block w-100 rounded" alt="Slide 4" style={{ height: '550px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item item">
                                <img src={Image5} className="d-block w-100 rounded" alt="Slide 5" style={{ height: '550px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item item">
                                <img src={Image6} className="d-block w-100 rounded" alt="Slide 6" style={{ height: '550px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item item">
                                <img src={Image7} className="d-block w-100 rounded" alt="Slide 7" style={{ height: '550px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item item">
                                <img src={Image8} className="d-block w-100 rounded" alt="Slide 8" style={{ height: '550px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item item">
                                <img src={Image9} className="d-block w-100 rounded" alt="Slide 9" style={{ height: '550px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <Reviews />
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-12 d-flex align-items-left justify-content-center flex-column">
                        <h2>Localização</h2>
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.136417862331!2d-49.37183408495774!3d-28.924780882351507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952137d5b9e1f0fd%3A0x4f6a5d5f03af0e39!2sR.%20Caxias%2C%2015%20-%20Morro%20dos%20Conventos%2C%20Ararangu%C3%A1%20-%20SC%2C%2088911-320%2C%20Brazil!5e0!3m2!1spt-BR!2sus!4v1691243027432!5m2!1spt-BR!2sus"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whatsapp-container position-fixed d-flex align-items-center">
                {showWelcomeMessage && (
                    <span className="text-light bg-success p-2 rounded">Faça sua reserva</span>
                )}
                <a
                    href="https://wa.me/5548991606536"
                    className="whatsapp-icon ms-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp fa-3x text-success"></i>
                </a>
            </div>
            <ContactInfo />
        </div>
    )
}

export default Home;