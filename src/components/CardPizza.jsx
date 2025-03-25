import React from "react";

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className='card card-width'>
      <img src={img} className='card-img-top' alt='Imagen pizza' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p>Ingredientes:</p>
        <p className='card-text'>
          {ingredients}
        </p>
        <h3>Precio: {price}</h3>
        <a href='#' className='btn btn-outline-dark'>
          Ver Más 👀
        </a>
        <a href='#' className='btn btn-dark'>
          Añadir 🛒
        </a>
      </div>
    </div>
  );
}

export default CardPizza;
