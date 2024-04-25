
import React, { useEffect } from 'react';


const Card = ({ title, content }) => {
    useEffect(() => {
      const cardDescs = document.querySelectorAll('.card-desc');
      const maxHeight = Math.max(
        ...Array.from(cardDescs).map((desc) => desc.clientHeight )
      );
  
      cardDescs.forEach((desc) => (desc.style.height = `${maxHeight}px`));
    });
  
    return (
      <div className="card border p-4 w-1/3">
        <h2>{title}</h2>
        <p className="card-desc">{content}</p>
      </div>
    );
  };

const CardContainer = () => {
  return (
    <div className="card-container flex m-4">
      <Card title="Card 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Card title="Card 2" content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Card title="Card 3" content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </div>
  );
};

export default CardContainer;

