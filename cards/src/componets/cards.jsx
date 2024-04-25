import React, { useEffect, useRef } from "react";

function Cards() {
  const cardDescsRef = useRef([]);

  useEffect(() => {
    const cardDescs = cardDescsRef.current;
    const maxHeight = Math.max(...cardDescs.map((desc) => desc.offsetHeight));
    cardDescs.forEach((desc) => {
      desc.style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <div className="cards flex flex-wrap justify-center">
      <div className="card border w-1/3 p-5" ref={(el) => cardDescsRef.current[0] = el}>
        <h2>Check out these EPIC Destinations!</h2>
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <p className="card-desc-n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          similique corporis veritatis facere distinctio est inventore
          voluptates a, voluptatum enim?
        </p>
      </div>
      <div className="card border w-1/3 p-5" ref={(el) => cardDescsRef.current[1] = el}>
        <h2>Check out these EPIC Destinations!</h2>
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <p className="card-desc-n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          similique corporis veritatis facere distinctio est inventore
          voluptates a, voluptatum enim? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Rerum, ratione!
        </p>
      </div>
      <div className="card border w-1/3 p-5" ref={(el) => cardDescsRef.current[2] = el}>
        <h2>Check out these EPIC Destinations!</h2>
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <p className="card-desc-n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          similique corporis veritatis facere distinctio est inventore
          voluptates a, voluptatum enim? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Odio omnis delectus repellat
          repellendus, amet provident nobis sint repudiandae eveniet ducimus
          quidem facilis optio ratione, quae ad unde eius Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          similique corporis veritatis facere distinctio est inventore
          voluptates a, voluptatum enim? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Odio omnis delectus repellat
          repellendus, amet provident nobis sint repudiandae eveniet ducimus
          quidem facilis optio ratione, quae ad unde eius
          </p>
      </div>
    </div>
  );
}

export default Cards;