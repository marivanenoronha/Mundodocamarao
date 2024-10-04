
import React from 'react';
import { useEffect } from 'react';
import "./Reviews.css";

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
                <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">O que nossos clientes dizem</h2>
                <div className="elfsight-app-903beaa5-d3f8-4374-ab13-38266bd8dba9"></div> 
        </div>
    )
}