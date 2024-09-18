import React from "react";
import { useState } from "react";
import "./menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import Image1 from "../fotos/img/gallery12.jpg";
import Image2 from "../fotos/img/gallery8.jpg";
import Image3 from "../fotos/img/gallery5.jpg";
import Image4 from "../fotos/img/gallery28.jpg";
import Image5 from "../fotos/img/gallery.jpg";
import Image6 from "../fotos/img/gallery27.jpg";
import Image7 from "../fotos/img/gallery24.jpg";
import Image8 from "../fotos/img/gallery31.png";
import Image9 from "../fotos/img/gallery34.png";
import Image10 from "../fotos/img/gallery38.jpg";
import Image11 from "../fotos/img/gallery39.png";
import Image12 from "../fotos/img/gallery9.jpg";
import Image13 from "../fotos/img/gallery29.jpg";
import Image14 from "../fotos/img/gallery4.jpg";
import Image15 from "../fotos/img/gallery33.jpg";
import Image16 from "../fotos/img/gallery32.jpg";
import Image17 from "../fotos/img/gallery36.png";
import Image18 from "../fotos/img/gallery35.png";
import Image19 from "../fotos/img/gallery45.jpg";
import Image20 from "../fotos/img/gallery46.jpg";
import Image21 from "../fotos/img/gallery16.jpg";
import Image22 from "../fotos/img/gallery17.jpg";
import Image23 from "../fotos/img/gallery18.jpg";
import Image24 from "../fotos/img/gallery19.jpg";
import Image25 from "../fotos/img/gallery20.jpg";
import Image26 from "../fotos/img/gallery21.jpg";
import Image27 from "../fotos/img/gallery47.jpg";
import Image28 from "../fotos/img/gallery48.jpg";
import Image29 from "../fotos/img/gallery39.jpg";
import Image30 from "../fotos/img/gallery40.jpg";
import Image31 from "../fotos/img/gallery41.jpg";
import Image32 from "../fotos/img/gallery49.jpg";
import Image33 from "../fotos/img/gallery38.png";
import Image34 from "../fotos/img/gallery50.jpg";
import gallery1 from '../fotos/img/gallery12.jpg';
import gallery2 from '../fotos/img/gallery9.jpg';
import gallery3 from '../fotos/img/gallery16.jpg';
import gallery4 from '../fotos/img/gallery36.jpg';
import AperitivoImg from "../fotos/img/gallery11.jpg";
import DrinkImg from "../fotos/img/drinks7.jpg";
import DessertImg from "../fotos/img/dessert-img.jpg";



const alacarte = [
    {
        id: 1,
        name: "Rodízio de frutos do mar",
        category: "Frutos do mar",
        description: "Camarão a milanesa, camarão alho e oléo, linguado grelhado, camarão ensopado, camarão ao molho branco, bolinho de peixe e casquinha de siri,",
        price: (
            <ul className="list-unstyled text-center">
                <li>Criança: <strong>R$69,90</strong></li>
                <li>Adulto: <strong>R$139,90</strong></li>
            </ul>
        ),
        image: Image1
    },
    {
        id: 2,
        name: "Camarão a milanesa",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$85,90</strong></li>
                <li>2 pessoas: <strong>R$155,90</strong></li>
                <li>4 pessoas: <strong>R$265.90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image2
    },
    {
        id: 3,
        name: "Strogonoff de camarão",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$279,90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image3
    },
    {
        id: 4,
        category: "Frutos do mar",
        name: "Camarão ao catupiry",
        category: "Frutos do mar",
        description: "camarões suculentos, envovidos no molho de queijo catupiry",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$259,90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image4
    },
    {
        id: 5,
        name: "Camarão alho e oléo",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$75,90</strong></li>
                <li>2 pessoas: <strong>R$145,90</strong></li>
                <li>4 pessoas: <strong>R$259,90</strong></li>
                <li>6 pessoas: <strong>R$315,90</strong></li>
            </ul>
        ),
        image: Image5
    },
    {
        id: 6,
        name: "Camarão ao bafo",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$134,90</strong></li>
                <li>4 pessoas: <strong>R$234,90</strong></li>
                <li>6 pessoas: <strong>R$284,90</strong></li>
            </ul>
        ),
        image: Image6
    },
    {
        id: 7,
        name: "Mista da casa",
        category: "Frutos do mar",
        description: "camarão, bolinho de peixe, isca de tilápia, batata frita",
        price: (
            <ul className="list-unstyled text-center">
                <li>2 pessoas: <strong>R$159,90</strong></li>


            </ul>
        ),
        image: Image7
    },
    {
        id: 8,
        name: "Moda da casa",
        category: "Frutos do mar",
        description: "Camarões servidos sobre arroz cremoso com ervilhas e presunto, envolvidos com molho branco. Finalizando com queijo muçarela e coberto com batata palha",
        price: (
            <ul className="list-unstyled text-center">
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$272,90</strong></li>
            </ul>
        ),
        image: Image8
    },
    {
        id: 9,
        name: "Ensopado de camarão",
        category: "Frutos do mar",
        description: "camarões suculentos, envovidos no molho de queijo catupiry",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$279,90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image9
    },
    {
        id: 10,
        name: "Camarão a parmegiana",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$279,90</strong></li>
                <li>6 pessoas: <strong>R$329,90</strong></li>
            </ul>
        ),
        image: Image10
    },
    {
        id: 11,
        name: "Lasanha de camarão",
        description: "Camadas de massas intercaladas com recheio cremoso de camarões refogados ao  molho especial, finalizado com queijo muçarela gratinado",
        category: "Frutos do mar",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$159,90</strong></li>
                <li>4 pessoas: <strong>R$259,90</strong></li>
                <li>6 pessoas: <strong>R$309,90</strong></li>
            </ul>
        ),
        image: Image11
    },
    {
        id: 12,
        name: "Salmão grelhado",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$50,00</strong></li>
                <li>2 pessoas: <strong>R$95,00</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image12
    },
    {
        id: 13,
        name: "Belle meuniere",
        category: "Peixes",
        description: " Linguado, camarões, molho de alcaparras e champignons. ",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$89,90</strong></li>
                <li>2 pessoas: <strong>R$165,90</strong></li>
                <li>4 pessoas: <strong>R$292,90</strong></li>
                <li>6 pessoas: <strong>R$342,90</strong></li>
            </ul>
        ),
        image: Image13
    },
    {
        id: 14,
        name: "Tainha grelhada",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$59,90</strong></li>
                <li>2 pessoas: <strong>R$98,90</strong></li>
                <li>4 pessoas: <strong>R$172,90</strong></li>
                <li>6 pessoas: <strong>R$225,90</strong></li>
            </ul>
        ),
        image: Image14
    },
    {
        id: 15,
        name: "Tainha ou papa terra frita",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$48,90</strong></li>
                <li>2 pessoas: <strong>R$98,90</strong></li>
                <li>4 pessoas: <strong>R$172,90</strong></li>
                <li>6 pessoas: <strong>R$225,90</strong></li>
            </ul>
        ),
        image: Image15
    },
    {
        id: 16,
        name: "Anchova grelhada",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$52,90</strong></li>
                <li>2 pessoas: <strong>R$98,90</strong></li>
                <li>4 pessoas: <strong>R$172,90</strong></li>
                <li>6 pessoas: <strong>R$225,90</strong></li>
            </ul>
        ),
        image: Image16
    },
    {
        id: 17,
        name: "Linguado grelhado",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$79,90</strong></li>
                <li>2 pessoas: <strong>R$148,90</strong></li>
                <li>4 pessoas: <strong>R$258,90</strong></li>
                <li>6 pessoas: <strong>R$299,90</strong></li>
            </ul>
        ),
        image: Image17
    },
    {
        id: 18,
        name: "Linguado a milanesa",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoas: <strong>R$79,90</strong></li>
                <li>2 pessoas: <strong>R$148,90</strong></li>
            </ul>
        ),
        image: Image18
    },
    {
        id: 19,
        name: "Tilápia grelhada",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image19
    },
    {
        id: 20,
        name: "Adicionais",
        category: "Peixes",
        price: (
            <ul className="list-unstyled text-center">
                <li>molho à belle meuniere: <strong>R$25,00</strong></li>
                <li>Molho de alcaparras: <strong>R$10,00</strong></li>
                <li>molho de camarão: <strong>R$20,00</strong></li>
                <li>Molho de maracjá: <strong>R$15,00</strong></li>
                <li>buffet adulto: <strong>R$20,00</strong></li>
                <li>buffet Criança: <strong>R$10,00</strong></li>
            </ul>
        ),
        image: Image20
    },

    {
        id: 21,
        name: "Picanha grelhada",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image21
    },
    {
        id: 22,
        name: "Picanha a parmegiana",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image22
    },
    {
        id: 23,
        name: "Filé mingon grelhado",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image23
    },
    {
        id: 24,
        name: "Filé mingon a parmegiana",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image24
    },
    {
        id: 25,
        name: "Frando grelhado",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image25
    },
    {
        id: 26,
        name: "Frango a milanesa",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$99,90</strong></li>
                <li>4 pessoas: <strong>R$150,00</strong></li>
                <li>6 pessoas: <strong>R$200,00</strong></li>
            </ul>
        ),
        image: Image26
    },
    {
        id: 27,
        name: "Lasanha de frango",
        description: "Camadas de massas intercaladas com recheio cremoso de frango desfiado, acompanhado de milho, ervilha e um molho especial.",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$84,90</strong></li>
                <li>2 pessoas: <strong>R$154,90</strong></li>
                <li>4 pessoas: <strong>R$254,90</strong></li>
                <li>6 pessoas: <strong>R$304,90</strong></li>
            </ul>
        ),
        image: Image27
    },
    {
        id: 28,
        name: "Misto de picanha e frango ",
        description: "Acompanha batata frita.",
        category: "Carnes",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$69,90</strong></li>
                <li>2 pessoas: <strong>R$139,90</strong></li>
            </ul>
        ),
        image: Image28
    },
    {
        id: 29,
        name: "Abobrinha a milanesa",
        category: "Vegetariano/Vegano",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$22,90</strong></li>
                <li>2 pessoas: <strong>R$45,90</strong></li>
            </ul>
        ),
        image: Image29
    },
    {
        id: 30,
        name: "Abobrinha à parmegiana",
        category: "Vegetariano/Vegano",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$22,90</strong></li>
                <li>2 pessoas: <strong>R$69,90</strong></li>
            </ul>
        ),
        image: Image30
    },
    {
        id: 31,
        name: "Lasanha de proteina de soja",
        category: "Vegetariano/Vegano",
        description: "Opção de escolha entre molhos de tomate caseiro ou molho branco. Contém queijo. ",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$42,90</strong></li>
                <li>2 pessoas: <strong>R$49,90</strong></li>
            </ul>
        ),
        image: Image31
    },
    {
        id: 32,
        name: "Proteina de soja ao molho sugo",
        category: "Vegetariano/Vegano",
        description: "Proteina refogada com pimentão, cebola, tomate, molho sugo e pimenta do reino. ",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$45,90</strong></li>
                <li>2 pessoas: <strong>R$69,90</strong></li>
            </ul>
        ),
        image: Image32
    },
    {
        id: 33,
        name: "Beringela à parmegiana",
        category: "Vegetariano/Vegano",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$22,90</strong></li>
                <li>2 pessoas: <strong>R$45,90</strong></li>
            </ul>
        ),
        image: Image33
    },
    {
        id: 34,
        name: "Beringela à milanesa",
        category: "Vegetariano/Vegano",
        price: (
            <ul className="list-unstyled text-center">
                <li>1 pessoa: <strong>R$22,90</strong></li>
                <li>2 pessoas: <strong>R$45,90</strong></li>
            </ul>
        ),
        image: Image34
    }
]

const aperitivo = [
    {
        id: 1,
        name: "Camarão",
        description: "Aperitivo camarão a milanesa",
        price: "R$69,90"
    },
    {
        id: 2,
        name: "Batata frita",
        description: "aperitivo bata frita",
        price: "R$25,00"
    },
    {
        id: 3,
        name: "Casquinha de siri",
        description: "aperitivo casquinha de siri",
        price: "R$15,00 unid"
    },
]

const dessert = [
    {
        id: 1,
        name: "Petit gateau",
        description: "Petit gateau com chocolate e sorvete sabor baunilha",
        price: "R$20,00"
    },
    {
        id: 2,
        name: "Taça de sorvete",
        description: "Taça de sorvete com duas bolas, sabores de baunilha e chocolate",
        price: "R$16,00"
    },
    {
        id: 3,
        name: "Mousses",
        description: "Mousses de marcujá, Morango, mamão, limão",
        price: "R$15,00"
    },
]

const drink = [
    {
        id: 1,
        name: "Sucos",
        description: "Sucos de morango, laranja, limão, ortelã, kiwi",
        price: "Apartir R$9,90"
    },
    {
        id: 2,
        name: "Cervejas",
        description: "Original, Heinkenn, pilsen",
        price: "Apartir R$18,00"
    },
    {
        id: 3,
        name: "Caipiras",
        description: "Caipiras de smirnof, steinhaeger, bacardi, cachaça",
        price: "Apartir R$16,00"
    },
]


const Menu = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const categoryImages = {
        "Frutos do mar": gallery1,
        "Peixes": gallery2,
        "Carnes": gallery3,
        "Vegetariano/Vegano": gallery4
    };

    console.log("Categoria selecionada:", selectedCategory);

    const categories = ["Frutos do mar", "Peixes", "Carnes", "Vegetariano/Vegano"];

    return (
        <div className="menu-page">
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <h1 className="text-light slide-in-down">Cardápio</h1>
                </div>
            </header>

            <div className="alacarte text-light py-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase">
                        <a
                            href="https://wa.me/5548991606536"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="btn btn-outline-dark btn-lg "
                                style={{ fontSize: '1.8rem', padding: '0.2rem 1.0rem' }}
                            >
                                Faça sua reserva
                                <i className="fab fa-whatsapp text-wuite fa-1x" style={{ padding: "0.5rem" }}></i>
                            </button>
                        </a>
                    </h2>

                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-dark">Á la Carte</h2>
                    <div className="text-center mb-5 d-flex justify-content-center">
                        {categories.map((category, index) => (
                            <div key={index} className="mx-3">
                                <img
                                    src={categoryImages[category]}
                                    alt={category}
                                    className="img-fluid mb-3 rounded "
                                    style={{ width: "320px", height: "150px", objectFit: "cover" }}
                                />

                                <button
                                    className={`category-button btn btn-outline-dark w-100 ${selectedCategory === category ? "active" : ""}`}
                                    onClick={() => setSelectedCategory(category)}
                                    style={{ marginBottom: "20px" }}
                                >
                                    {category} - Clica aqui
                                </button>
                            </div>
                        ))}
                    </div>
                    {selectedCategory && (
                        <div>
                            <h3 className="text-center fs-2 mb-4 text-dark">{selectedCategory}</h3>
                            <div className="row">
                                {alacarte
                                    .filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase())
                                    .map((item) => (
                                        <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                                            <Card className="border-0 h-100">
                                                <div className="d-flex justify-content-center">
                                                    <img
                                                        src={item.image}
                                                        className="img-fluid w-75 mt-3 mb-3 rounded"
                                                        alt={item.name}
                                                    />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title className="text-center fs-4 text-dark">{item.name}</Card.Title>
                                                    <Card.Text className="text-center fs-6 text-dark">{item.description}</Card.Text>
                                                    <Card.Text className="text-center fs-6 text-dark">{item.price}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="aperitivo  bg-dark text-light my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text- " style={{ color: "orange" }}>Aperitivos</h2>
                    <div className="row ">
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {aperitivo.map((item) => (
                                <div key={item.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3" style={{ color: "orange" }}>
                                                {item.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {item.description}
                                            </CardText>
                                            <CardText className="text-center fs-5 fw-bold " style={{ color: "orange" }}>
                                                {item.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={AperitivoImg} className="img-fluid w-85 mt-4 mt-lg-0" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="aperitivo   my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-primary">Sobremesas</h2>
                    <div className="row ">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={DessertImg} className="img-fluid w-80 mt-4 mt-lg-0" alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {dessert.map((item) => (
                                <div key={item.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3 text-primary">
                                                {item.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {item.description}
                                            </CardText>
                                            <CardText className="text-center fs-5 fw-bold text-primary">
                                                {item.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="drink bg-dark  my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold " style={{ color: "orange" }}>Drinks</h2>
                    <div className="row ">
                        <div className="col-lg-6 d-flex flex-column justify-content-around" >
                            {drink.map((item) => (
                                <div key={item.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3" style={{ color: "orange" }}>
                                                {item.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {item.description}
                                            </CardText>
                                            <CardText className="text-center fs-5 fw-bold " style={{ color: "orange" }}>
                                                {item.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={DrinkImg} className="img-fluid w-80 mt-4 mt-lg-0" alt="" />
                        </div>
                    </div>
                </div>
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
        </div>
    )
}

export default Menu;