import React from "react";
import PizzaOrderForm from "./Components/PizzaOrderForm";
import { useState } from "react";
import {
  Switch,
  Route,
  NavLink,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import AnaSayfa from "./Components/AnaSayfa";
import SiparisOnayi from "./Components/SiparisOnayi";

function App() {
  const [formData, setFormData] = useState({
    name: "acılı pizza",
    size: "",
    toppings: [],
    special: "",
    dough: "",
    nameError: "",
  });

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

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

  const [selectedSize, setSelectedSize] = useState("");

  const history = useHistory();
  const handleSubmit = () => {
    if (formData.name.length < 2) {
      setFormData({
        ...formData,
        nameError: "İsim en az 2 karakter olmalıdır.",
      });

      return;
    } else {
      setFormData({ ...formData, nameError: "" });

      history.push("/onay");
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

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <div className="App-header">
            <AnaSayfa />
            <img
              src="C:\Users\deniz\fsweb-s7-challenge-pizza\src\images\mvp-banner.png"
              alt="Resim Açıklaması"
            />
          </div>
        </Route>
        <Route path="/pizza" exact>
          <div className="App">
            <PizzaOrderForm
              handleSizeChange={handleSizeChange}
              handleToppingChange={handleToppingChange}
              handleSpecialChange={handleSpecialChange}
              handleDoughChange={handleDoughChange}
              handleSubmit={handleSubmit}
              formData={formData}
            />
            <Route path="/onay">
              <SiparisOnayi />
            </Route>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
