import React from "react";
import Gallery1 from "../fotos/img/gallery.jpg";
import Gallery2 from "../fotos/img/gallery11.jpg";
import Gallery3 from "../fotos/img/gallery4.jpg";
import Gallery4 from "../fotos/img/drinks10.jpg";
import Gallery5 from "../fotos/img/gallery14.jpg";
import Gallery6 from "../fotos/img/gallery13.jpg";

export function ImageGallery() {
    return (
        <div className="container  py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Galeria de fotos</h2>
            <div className="row">  
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery1} className="img-fluid rounded" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery2} className="img-fluid rounded" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery3} className="img-fluid rounded" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery4} className="img-fluid rounded" alt="" />
                    </div>

                </div>

                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery5} className="img-fluid rounded" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery6} className="img-fluid rounded" alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}
