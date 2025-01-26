import React from "react";
// types
import { DogImages } from "../../types/index";

const Index: React.FC<DogImages> = ({ images }) => {
  return images.map((image, index) => (
    <img
      style={{ height: "350px", width: "70%" }}
      key={index}
      src={image}
      className="rounded mx-auto d-block m-2"
      alt="..."
    ></img>
  ));
};

export default Index;
