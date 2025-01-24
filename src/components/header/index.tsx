import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className="bg-dark container mt-3 d-flex justify-content-center align-items-center"
      role="banner"
    >
      <h1 className="text-white text-center">Image Finder App</h1>
    </header>
  );
};

export default Header;
