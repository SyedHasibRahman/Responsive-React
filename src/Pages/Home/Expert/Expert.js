import React from 'react';
import './Expert.css'

const Expert = (props) => {
    const {  name, expertize, img } = props.expert;
    return (
        <div className="col col-lg-4 col-md-6 col-sm-6 col-12 p-3 ">
            <img className="expert-img" src={img} alt="" />
            <h2>{name}</h2>
            <h5 className="text-info">{expertize}</h5>
        </div>
    );
};

export default Expert;