import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./Home.css";
import { MenuBtn } from "../components/menu.Btn";
import AboutImg from "../fotos/img/about-chef2.jpg";
import { ImageGallery } from "../components/imageGalery";
import { ContactInfo } from "../components/ContactInfo";
import contactImage from "../fotos/img/gallery5.jpg";


function Home() {

    const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomeMessage(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-page">
            <header className="h-100 min-vh-100 d-flex align-items-center text-light ">
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center text-left ">
                            <h2 className="mb-0 text-light fw-bold slide-in-left" >Restaurante e Petiscaria</h2>
                            <h1 className="mb-5 text-primary fw-bold text-left text-sm-start slide-in-left">Mundo do<br></br><span style={{ color: "darkorange" }}>Camarão</span></h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
                        <img src={AboutImg} className="img-fluid m-5 w-52  rounded" alt="about img" />
                    </div>
                    <div className="col-lg d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-1 mb-5 text-uppercase fw-bold ">Sobre nós</h2>
                        <p>Restaurante especializado em frutos do mar, sempre com produtos e
                            ingredientes fresquinhos, selecionados por quem entende do assunto.</p>
                        <p className="mb-5">O almoço inclui camarão alho e óleo, camarão empanado, casquinha de siri, bolinho de peixe,
                            isca de peixe, lula empanada, risoto de camarão, pirão de peixe,
                            filé de peixe empanado, peixe frito, salada e fritas.
                        </p>
                        <Link to="/about">
                            <button type="button" className="btn btn-outline-dark btn-lg">Mais sobre nós</button>
                        </Link>
                    </div>
                </div>

                <div className="menu-section py-5 text-light shadow">
                    <div className="container d-flex flex-column align-items-center">
                        <h2 className="fs-1 mb-5 text-uppercase fw-bold">Nossos favoritos</h2>
                        <div className="row mb-5 w-100 ">
                            <div className="col-lg d-flex flex-column align-items-center mb-5 mb-lg-0 ">
                                <h3 className="fs-2 mb-5">Pratos</h3>
                                <ul className="px-0">
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Rodízio de frutos do mar</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Camarão a milanesa</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>

                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Moda da casa</p>
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
                                    <li className="d-flex justify-content-between">
                                        <p className="fs-3 mx-2">Pinã colada</p>
                                        <p className="fs-3 mx-2 text-success fw-bold"></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <MenuBtn />
                    </div>
                </div>
            </div>
            <ImageGallery />
            <div className="text-light py-5 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-o">
                            <ContactInfo />
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={contactImage} className="img-fluid m-3 w-75 rounded" alt="" />
                        </div>
                    </div>
                </div>
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

        </div>
    )
}

export default Home;