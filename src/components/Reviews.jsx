
import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from "react-bootstrap";
import "./Reviews.css";
import Person1 from "../fotos//img/person1.png";
import Person2 from "../fotos/img/person2.png";
import Person3 from "../fotos//img/person3.png";
import Person4 from "../fotos/img/person4.png";
import LogoGoogle from "../fotos/img/logo-google.png";

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-dark fs-1">Avaliações</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow ">
                        <CardBody>
                            <div className="p-4 ">
                                <CardText className="p">
                                Um dos melhores lugares para se comer. Ótimo atendimento, comida maravilhosa e boa localização.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                                <div>
                                    <CardTitle className="text-dark mb-0 title">Renata vaz Dornelles</CardTitle>
                                    <small className="text-muted small">03 de Fevereiro, 2025</small>
                                </div>
                            </div>
                            <img
                                    src={LogoGoogle}
                                    alt="Logo Google"
                                    className="mt-1 logo"
                                    style={{ width:'70px'}} 
                                />
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText className="p">
                                Ambiente maravilhoso e a comida melhor ainda, super indico e voltarei sempre que estiver pela cidade.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                                <div>
                                    <CardTitle className="text-dark title">Kauã Pereira</CardTitle>
                                    <small className="text-muted small">23 de Janeiro, 2025</small>
                                </div>
                            </div>
                            <img
                                    src={LogoGoogle}
                                    alt="Logo Google"
                                    className="mt-1 logo"
                                    style={{ width: '70px'}} 
                                />
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText className="p">
                                Atendimento excelente.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                                <div>
                                    <CardTitle className="text-dark title">Josué Colle Serafim</CardTitle>
                                    <small className="text-muted small">15 de Janeiro, 2025</small>
                                </div>
                            </div>
                            <img
                                    src={LogoGoogle}
                                    alt="Logo Google"
                                    className="mt-1 logo"
                                    style={{ width: '70px'}} 
                                />
                        </CardFooter>
                    </Card>
                </div>


                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText className="p">
                                Ambiente confortável, atendimento agradável e comida saborosa que emociona. Adoramos! 😍
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                                <div>
                                    <CardTitle className="text-dark mb-0 title">Rafael Reinaldi</CardTitle>
                                    <small className="text-muted small">10 de Janeiro, 2025</small>
                                </div>
                            </div>
                            <img
                                    src={LogoGoogle}
                                    alt="Logo Google"
                                    className="mt-1 logo"
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