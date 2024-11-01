
import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from "react-bootstrap";
import "./Reviews.css";
import Person1 from "../fotos//img/person1.png";
import Person2 from "../fotos/img/person2.png";
import Person3 from "../fotos//img/person3.png";
import Person4 from "../fotos/img/person4.png";
import LogoGoogle from "../fotos/img/logo-google.png"
import Carousel from 'react-bootstrap/Carousel';

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-dark fs-1">Avaliações</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4 ">
                                <CardText>
                                    Nunca me arrependo de ir a Mundo do Camarão, frutos do mar fresquinhos, sentar em baixo da sombra na área do deck, tomando uma caipirinha, não tem preço. O atendimento bacana demais, pessoal super atencioso. É sempre uma ótima experiência comer lá!
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                                <div>
                                    <CardTitle className="text-dark mb-0">Quinho Melo</CardTitle>
                                    <small className="text-muted">03 de Outubro, 2024</small>
                                </div>
                            </div>
                            <img
                                    src={LogoGoogle}
                                    alt="Logo Google"
                                    className="mt-1"
                                    style={{ width:'70px'}} 
                                />
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    O restaurante é aconchegante, a proprietária atenciosa e muito gentil para atender. A comida é servida com um delicioso peixe!
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                                <div>
                                    <CardTitle className="text-dark">Rosangela Pereira</CardTitle>
                                    <small className="text-muted">30 de Setembro, 2024</small>
                                </div>
                            </div>
                            <img
                                    src={LogoGoogle}
                                    alt="Logo Google"
                                    className="mt-1"
                                    style={{ width: '70px'}} 
                                />
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Simplesmente perfeito. Restaurante com bastante procura e muito movimento, mas a comida chegou em perfeito estado, muito saborosa e atendimento impecável! Super recomendo, restaurante familiar e muito aconchegante, um dos melhores em Araranguá.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                                <div>
                                    <CardTitle className="text-dark">Leandro tomaz Borges</CardTitle>
                                    <small className="text-muted">29 de Setembro, 2024</small>
                                </div>
                            </div>
                            <img
                                    src={LogoGoogle}
                                    alt="Logo Google"
                                    className="mt-1"
                                    style={{ width: '70px'}} 
                                />
                        </CardFooter>
                    </Card>
                </div>


                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Eu amo o Mundo do Camarão, hoje fui novamente, e, apesar do movimento (um domingo bem ensolarado), a experiência foi excelente! O atendimento foi atencioso e a espera valeu a pena, pois os pratos estavam simplesmente deliciosos. Refeição impecável como sempre! Amoo!!
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                                <div>
                                    <CardTitle className="text-dark mb-0">Cauane Teixeira Presse</CardTitle>
                                    <small className="text-muted">28 de Setembro, 2024</small>
                                </div>
                            </div>
                            <img
                                    src={LogoGoogle}
                                    alt="Logo Google"
                                    className="mt-1"
                                    style={{ width: '70px'}} 
                                />
                        </CardFooter>
                    </Card>
                </div>

            </div>
        </div>
    )
}






















/*import React from 'react';
import { useEffect } from 'react';

export function Reviews() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);  
        };
    }, []);

    return (
        <div className="reviews-section container">
                <div className="elfsight-app-903beaa5-d3f8-4374-ab13-38266bd8dba9"></div> 
        </div>
    )
}*/