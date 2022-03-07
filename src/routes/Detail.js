import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Detail.css';

function Detail(){
    
    const location = useLocation();
    const navigate = useNavigate();
    const params = location.state;

    useEffect(() => {
        console.log('componentDidMount[Function]');
        if(params == null){
            console.log('>> Parameter is null');
            navigate('/');
        }
    }, []);
    
    return (
        <span className="movie-detail">{params.title ? params.title : ''}</span>
    )
    
}

export default Detail;