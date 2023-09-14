import React from "react";
import insta1 from "./insta/li-0.png";
import insta2 from "./insta/li-1.png";
import insta3 from "./insta/li-2.png";
import insta4 from "./insta/li-3.png";
import insta5 from "./insta/li-4.png";
import insta6 from "./insta/li-5.png";
import icon1 from "./icons/icon-1.png";
import icon2 from "./icons/icon-2.png";
import icon3 from "./icons/icon-3.png";

const Footer = () => {
  return (
    <div className="mainPart">
      <div className="iletisim">
        <h3>Teknolojik Yemekler</h3>
        <img src={icon1} alt="konum">
          341 Londoneryroad,İstanbul/Turkey
        </img>
        <img src={icon2} alt="mail">
          aciktim@teknolojikyemekler.com
        </img>
        <img src={icon3} alt="phone">
          +90 216 123 45 67
        </img>
      </div>
      */
      <div className="aciklamaMenu">
        Hot Menu
        <label>Terminal Pizza</label>
        <label>5 Kişilik Hackathlon Pizza</label>
        <label>useEffect Tavuklu Pizza</label>
        <label>Beyaz Console Frosty</label>
        <label>Testler Geçti Mutlu Burger</label>
        <label>Position Absolute Acı Burger</label>
      </div>
      <div className="instaFoto">
        Instagram
        <img src={insta1} alt="foto1" />
        <img src={insta2} alt="foto2" />
        <img src={insta3} alt="foto3" />
        <img src={insta4} alt="foto4" />
        <img src={insta5} alt="foto5" />
        <img src={insta6} alt="foto6" />
      </div>
    </div>
  );
};
export default Footer;
