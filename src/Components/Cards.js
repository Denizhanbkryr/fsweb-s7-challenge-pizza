import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const FoodCard = (props) => {
  return (
    <div>
      <div
        className="card1"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Card body inverse color="info">
          <CardTitle>
            Özel
            <br /> Lezzetus
          </CardTitle>
          <CardText>Position:Absolute Acı Burger</CardText>
          <Button color="secondary">SİPARİŞ VER</Button>
        </Card>
      </div>
      <div
        className="card2"
        style={{
          backgroundImage: `url("https://via.placeholder.com/500")`,
        }}
      >
        <Card body inverse color="warning">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button color="secondary">Button</Button>
        </Card>
      </div>
      <div
        className="card3"
        style={{
          backgroundImage: `url("https://via.placeholder.com/500")`,
        }}
      >
        <Card body inverse color="danger">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button color="secondary">Button</Button>
        </Card>
      </div>
    </div>
  );
};

export default FoodCard;
