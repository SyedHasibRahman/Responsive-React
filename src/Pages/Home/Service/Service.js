import React from 'react';
import './Service.css'

const Service = (props) => {
    const { id, name, price, description, img } = props.service;
    console.log(img);
    return (
        <div className="service">
            <img className="service-img" src={img} alt="" />
            <h2>{name}</h2>
            <h5>{price}</h5>
            <p className="px-3">{description}</p>
        </div>
    );
};

export default Service;