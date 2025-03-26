import React from 'react';

const TestimonalCard = ({CustomerName,Review}) => {

    return (
        <div>
            <h2><strong>Customer Name :</strong>{CustomerName}</h2>
            <h4><strong>Review :</strong>{Review}</h4>
        </div>
    );
}

export default TestimonalCard;
