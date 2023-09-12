import React from "react";
import FoodCard from "./Cards";

import { useHistory } from "react-router-dom";

const AnaSayfa = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // "/signup" yoluna yönlendirme yapar
    history.push("/pizza");
  };

  return (
    <div className="Homepage">
      <header>Teknolojik Yemekler</header>
      <div className="body">
        <h2>KOD ACIKTIRIR PIZZA,DOYURUR</h2>
      </div>
      <button onClick={handleButtonClick}>ACIKTIM</button>
      <FoodCard />
    </div>
  );
};

export default AnaSayfa;
