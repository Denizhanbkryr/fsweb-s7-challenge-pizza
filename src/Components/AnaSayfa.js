import React from "react";
import { useHistory } from "react-router-dom";

const AnaSayfa = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/pizza");
  };

  return (
    <div className="Homepage">
      <header>Teknolojik Yemekler</header>
      <div className="body">
        <h2>KOD ACIKTIRIR PIZZA,DOYURUR</h2>
      </div>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "#fdc913",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          borderRadius: "50%",
          transition: "background-color 0.3s",
          cursor: "pointer",
        }}
      >
        acıktım
      </button>
    </div>
  );
};

export default AnaSayfa;
