
import React from 'react';
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
}