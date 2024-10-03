
import React from 'react';
import { useEffect } from 'react';
import { Card, CardBody, CardText, CardFooter, CardTitle } from "react-bootstrap";
import "./Reviews.css";

export function Reviews() {
    useEffect(() => {
        // Garantir que o script seja carregado corretamente
        const script = document.getElementById('EmbedSocialScript');
        if (!script) {
            const newScript = document.createElement('script');
            newScript.src = 'https://embedsocial.com/api/pro_hashtag/d6b2f10f90e923463380fc7bc3c3ecfc93c91067';
            newScript.async = true;
            newScript.id = 'EmbedSocialScript';
            document.body.appendChild(newScript);
        }
    }, []);

    return (
        <div className="reviews-section container">

            <div className="reviews-section container">
                <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Avaliações</h2>
                <div className="embedsocial-reviews" data-ref="d6b2f10f90e923463380fc7bc3c3ecfc93c91067"></div>
            </div>
            <h2 className="text-center mb-5 text-upercase fw-bold fs-1">Avaliações</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4 ">
                                <CardText>
                                    O melhor restaurante de frutos do mar,
                                    com amplo espaço, a comida maravilosa e o
                                    atendimento diferenciado.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img className="img-fluid rounded-circule mx-3 shadow" alt="" />
                            <CardTitle className="text-dark">Lara  Farias</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    A comida e o atendimento maravilhoso,
                                    com certeza o melhor restaurante de frutos do mar.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img className="img-fluid rounded-circule mx-3 shadow" alt="" />
                            <CardTitle className="text-dark">Junior Lemes</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Amplo espaço com a comida e atendimento maravilhoso, amei!!!
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img className="img-fluid rounded-circule mx-3 shadow" alt="" />
                            <CardTitle className="text-dark">Maria Jordani</CardTitle>
                        </CardFooter>
                    </Card>
                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Muito boa a comida, restaurante  com o melhor atendimento.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img className="img-fluid rounded-circule mx-3 shadow" alt="" />
                            <CardTitle className="text-dark">Lucas Ribeiro</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}