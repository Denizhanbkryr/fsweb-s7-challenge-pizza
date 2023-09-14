import React from "react";
import PizzaOrderForm from "./Components/PizzaOrderForm";
import { useState } from "react";
import { Switch, Route, useHistory, BrowserRouter } from "react-router-dom";
import "./App.css";
import AnaSayfa from "./Components/AnaSayfa";
import SiparisOnayi from "./Components/SiparisOnayi";

function App() {
  const [formData, setFormData] = useState({
    name: "Position Absolute Acı pizza",
    fiyat: "86,5 ₺",
    size: "",
    toppings: [],
    special: "",
    dough: "",
    nameError: "",
  });

  const handleSizeChange = (e) => {
    setFormData({ ...formData, size: e.target.value });
  };

  const handleToppingChange = (e) => {
    const selectedToppings = Array.from(
      e.target.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    setFormData({ ...formData, toppings: selectedToppings });
  };

  const handleSpecialChange = (e) => {
    setFormData({ ...formData, special: e.target.value });
  };

  const handleDoughChange = (e) => {
    setFormData({ ...formData, dough: e.target.value });
  };

  /*
  const handleSubmit = () => {
    if (formData.name.length < 2) {
      setFormData({
        ...formData,
        nameError: "İsim en az 2 karakter olmalıdır.",
      });

      return;
    } else {
      setFormData({ ...formData, nameError: "" });

      history.push("/Onay");
    }

    setFormData({
      name: "",
      size: "",
      toppings: [],
      special: "",
      dough: "",
      nameError: "",
    });
  };
  */
  const history = useHistory();
  const handleSubmit = (event) => {
    console.log("deneme");
    event.preventDefault();
    history.push("/onay");

    console.log(event.target.value);
    console.log(event);
  };

  const handleButtonClickOrderForm = () => {
    history.push("/onay");
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <div className="App">
              <AnaSayfa />
            </div>
          </Route>
          <Route path="/pizza" exact>
            <div className="App-header">Teknolojik Yemekler </div>

            <div className="Form">
              <PizzaOrderForm
                handleButtonClickOrderForm={handleButtonClickOrderForm}
                handleSizeChange={handleSizeChange}
                handleToppingChange={handleToppingChange}
                handleSpecialChange={handleSpecialChange}
                handleDoughChange={handleDoughChange}
                handleSubmit={handleSubmit}
                formData={formData}
              />
            </div>
          </Route>
          <Route path="/onay">
            <SiparisOnayi />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
