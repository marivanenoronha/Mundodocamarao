import React from "react";
import { Link } from "react-router-dom";

export function MenuBtn() {
    return (
        <div>
            <Link to="/">
                <button type="button" className="btn  btn-outline-light btn-lg ">Nosso cardápio</button>
            </Link>
        </div>
    )
}