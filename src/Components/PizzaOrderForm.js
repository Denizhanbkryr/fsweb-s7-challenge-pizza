import React from "react";
const PizzaOrderForm = ({
  handleNameChange,
  handleSizeChange,
  handleToppingChange,
  handleSpecialChange,
  handleDoughChange,
  handleSubmit,
  formData,
}) => {
  return (
    <div>
      <h1>Pizza Sipariş Formu</h1>
      <span style={{ color: "red" }}>{formData.nameError}</span>
      <div className="Pizza İsmi">
        <label>Pizza İsmi: {formData.name}</label>
      </div>
      <div id="Pizza Boyutu:">
        <label>
          Küçük
          <input
            type="radio"
            name="size"
            value="small"
            onChange={handleSizeChange}
            checked={formData === "small"}
          />
        </label>
        <label>
          Orta
          <input
            type="radio"
            name="size"
            value="medium"
            onChange={handleSizeChange}
            checked={formData === "medium"}
          />
        </label>
        <label>
          Büyük
          <input
            type="radio"
            name="size"
            value="large"
            onChange={handleSizeChange}
            checked={formData === "large"}
          />
        </label>
      </div>
      <div className="hamur kalınlığı">
        <label htmlFor="dough-dropdown">Hamur Kalınlığı:</label>
        <select
          id="dough-dropdown"
          name="dough"
          value={formData.dough}
          onChange={handleDoughChange}
        >
          <option value="thin">İnce Hamur</option>
          <option value="thick">Kalın Hamur</option>
        </select>
      </div>
      <div className="malzemeler">
        <label>Malzemeler:</label>
        <input
          type="checkbox"
          name="topping"
          value="pepperoni"
          onChange={handleToppingChange}
        />
        Pepperoni
        <input
          type="checkbox"
          name="topping"
          value="mushrooms"
          onChange={handleToppingChange}
        />
        Mantar
        <input
          type="checkbox"
          name="topping"
          value="olives"
          onChange={handleToppingChange}
        />
        Zeytin
        <input
          type="checkbox"
          name="topping"
          value="sausage"
          onChange={handleToppingChange}
        />
        Sucuk
      </div>
      <div className="Sipariş Notu">
        <label htmlFor="special-text">Sipariş Notu</label>
        <input
          type="text"
          id="special-text"
          name="special"
          value={formData.special}
          onChange={handleSpecialChange}
        />
        <button type="button" onClick={handleSubmit}>
          Sipariş Ver
        </button>
      </div>
    </div>
  );
};

export default PizzaOrderForm;
