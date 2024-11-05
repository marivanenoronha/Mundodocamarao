import React from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";
import { ContactInfo } from "../components/ContactInfo";
import { Reviews } from "../components/Reviews";


function Contact() {

    <Helmet>
    <title>Restaurante frutos do mar Mundo do Camarão</title>
    <meta name="description" content="Entre em contato com o Restaurante de frutos do mar Mundo do Camarão para fazer sua reserva ou tirar dúvidas. Atendimento de qualidade à sua disposição." />
    <meta name="keywords" content="contato, reserva, telefone, e-mail, restaurantes , frutos do mar" />
  </Helmet>

    return (
        <div className="contact-page">
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <h1 className="text-light slide-in-down">Contato</h1>
                </div>
            </header>
            <div className="  container my-5">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase">
                        <a
                            href="https://wa.me/5548991606536"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="btn custom-btn btn-outline-dark btn-lg "
                                style={{ fontSize: '1.8rem', padding: '0.2rem 1.0rem' }}
                            >
                                Faça sua reserva
                                <i className="fab fa-whatsapp text-wuite fa-1x" style={{ padding: "0.5rem" }}></i>
                            </button>
                        </a>
                    </h2>
                <div className="row">
                
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
                </div>
            </div>
            <div className=" text-dark py-5">
                <Reviews />
            </div>
            <div className="whatsapp-container position-fixed d-flex align-items-center">
               
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

export default Contact;