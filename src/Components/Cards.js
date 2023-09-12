import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const FoodCard = (props) => {
  return (
    <div>
      <Card body inverse color="info">
        <CardTitle>
          Özel
          <br /> Lezzetus
        </CardTitle>
        <CardText>Position:Absolute Acı Burger</CardText>
        <Button color="secondary">SİPARİŞ VER</Button>
      </Card>
      <Card body inverse color="warning">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="danger">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </div>
  );
};

export default FoodCard;
