import React from "react";

const PizzaOrderForm = ({
  handleSizeChange,
  handleToppingChange,
  handleSpecialChange,
  handleDoughChange,
  handleSubmit,
  formData,
  handleButtonClickOrderForm,
}) => {
  return (
    <div className="mainOrder">
      <div className="Pizza İsmi">
        <label>
          <h2>{formData.name}</h2>
        </label>
      </div>

      <div className="fiyatBilgisi">
        <h2>{formData.fiyat}</h2>
      </div>
      <p>
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre.Pizza ,domates,peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış,daha sonra geleneksel olarak odu ateşinde bir
        fırında yüksek sıcaklıkta pişirilirlen,genellikle yuvarlak ,
        düzeltilmiş, mayalı buğday bazlı hamurdan oluşan italyan kökenli
        lezzetli bir yemektir.Küçük bir pizzaya bazen pizzetta denir.
      </p>

      <span style={{ color: "red" }}>{formData.nameError}</span>
      <form onSubmit={handleSubmit}>
        <div className="secimYeri">
          <div className="PizzaBoyutu">
            <div id="pizzaBoyutu">Boyut Seç</div>
            <br />
            <label className="container">
              Küçük
              <input
                type="radio"
                name="size"
                value="Küçük"
                onChange={handleSizeChange}
                checked={formData === "Küçük"}
              />
              <span className="checkmark"></span>
            </label>
            <br />
            <label className="container">
              Orta
              <input
                type="radio"
                name="size"
                value="Orta"
                onChange={handleSizeChange}
                checked={formData === "Orta"}
              />
              <span className="checkmark"></span>
            </label>
            <br />
            <label className="container">
              Büyük
              <input
                type="radio"
                name="size"
                value="Büyük"
                onChange={handleSizeChange}
                checked={formData === "Büyük"}
              />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="custom-select">
            <label htmlFor="dough-dropdown" id="dough-dropdown-label">
              Hamur Seç
              <br />
              <select
                id="dough-dropdown"
                name="dough"
                value={formData.dough}
                onChange={handleDoughChange}
              >
                <option value="empty">Hamur Seçiniz</option>
                <option value="thin">İnce Hamur</option>
                <option value="thick">Kalın Hamur</option>
              </select>
            </label>
          </div>
        </div>
        <div className="malzemeBaslık">
          <h3>Ek Malzemeler</h3>
        </div>
        <div className="uyarı">En fazla 10 malzeme seçebilirsiniz 5TL:</div>
        <div className="malzemeler">
          <div className="grup1">
            <div className="pepperoni">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="pepperoni"
                  onChange={handleToppingChange}
                />
                Pepperoni
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="mantar">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="mushrooms"
                  onChange={handleToppingChange}
                />
                Mantar
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="zeytin">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="olives"
                  onChange={handleToppingChange}
                />
                Zeytin
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="sogan">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="onion"
                  onChange={handleToppingChange}
                />{" "}
                Soğan
                <span className="checkmark"></span>
              </label>
            </div>
          </div>

          <div className="grup2">
            <div className="tavuk">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="chicken"
                  onChange={handleToppingChange}
                />
                Tavuk
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="mısır">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="corn"
                  onChange={handleToppingChange}
                />{" "}
                Mısır
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="avokado">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="avocado"
                  onChange={handleToppingChange}
                />
                Avokado
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="Köfte">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="köfte"
                  onChange={handleToppingChange}
                />
                Köfte
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="grup3">
            <div className="salatalık">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="salatalık"
                  onChange={handleToppingChange}
                />
                Salatalık
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="peynir">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="peynir"
                  onChange={handleToppingChange}
                />
                Peynir
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="sucuk">
              <label className="container">
                <input
                  className="secenek"
                  type="checkbox"
                  name="topping"
                  value="sucuk"
                  onChange={handleToppingChange}
                />
                Sucuk
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="siparisNotu">
          <label htmlFor="special-text">Sipariş Notu</label>
          <input
            type="text"
            id="special-text"
            name="special"
            value={formData.special}
            onChange={handleSpecialChange}
          />
          <label htmlFor="special-text"></label>
          <input type="submit" onClick={handleButtonClickOrderForm} />
        </div>
      </form>
    </div>
  );
};

export default PizzaOrderForm;
