import React from "react";

const Product = ({ data }) => {
  return (
    <div>
      {data?.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  );
};

export default Product;
