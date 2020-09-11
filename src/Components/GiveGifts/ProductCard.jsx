import React from "react";
function ProductCard(props) {
  return (
    <React.Fragment key={Math.random() * props.keyIndex}>
      <div
        className="card bg-white text-dark product-card "
        onClick={props.openLink}
      >
        <img
          className="card-img product-image"
          src={props.image}
          alt="product"
        />
        <h5 className="card-title text-overflow">{props.title}</h5>
        <p className="card-text">{props.price}</p>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;

// image={image} title={title} link={link} price={price}
