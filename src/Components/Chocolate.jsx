import React from "react";

const Chocolate = ({ chocolate }) => {
  const { name, country, category, photo } = chocolate;
  return (
    <>
      name:{name}; Country:{country}; Category:{category}; Photo:{photo};
    </>
  );
};

export default Chocolate;
