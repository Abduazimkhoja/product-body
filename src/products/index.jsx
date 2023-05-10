import React from "react";
import { productInfo } from "../server";
import "./products.scss";

export default class Products extends React.Component {
   render() {
      return (
         <div className="product">
            {productInfo.map(({ id, title, cards }) => {
               return (
                  <div key={id} className="product__block">
                     <h3 className="product__title">{title}</h3>
                     <div className="product__cards">
                        {cards.map(({ id: cardId, title: cardTitle, url }) => {
                           return (
                              <div key={cardId} className="product__category">
                                 <img
                                    src={url}
                                    alt={cardTitle}
                                    className="product__image"
                                 />
                                 <h4 className="product__subtitle">
                                    {cardTitle}
                                 </h4>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               );
            })}
         </div>
      );
   }
}
