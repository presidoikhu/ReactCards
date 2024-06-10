import React, { ReactNode } from 'react';

interface Prop {
  name: string;
  tel: string;
  mail: string;
  img: string; // Use string type for image src
}

const Cards: React.FC<Prop> = ({ name, tel, mail, img }) => {
  return (
    <div>
     
      <div className="card">
        <div className="top">
          <h2 className="name">{name}</h2>
          <img src={img} className="circle-img" alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{tel}</p>
          <p>{mail}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
