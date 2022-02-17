import { Link } from "react-router-dom";
import React from "react";
import { CardProductsCategoryStyle } from "../../styles";
import perfume3 from "../card-product-category/images/perfume3.jpg"
const CardProductCategory = ({ title, link, imgSrc }) => {
  console.table(title, link, imgSrc);
  return (
    <CardProductsCategoryStyle>
      <Link to={link}>
        <h5>{title}</h5>
{        <img src={require(imgSrc)} alt={`Card ${title}`}></img>
}      </Link>
    </CardProductsCategoryStyle>
  );
};

export default CardProductCategory;
