import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('./expert.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className="container">
            <h2>This is Experts</h2>
            <div className="row gx-5">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;