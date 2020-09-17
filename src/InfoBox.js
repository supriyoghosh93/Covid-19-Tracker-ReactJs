import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total, isPurple, active, isRed, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${isPurple && "infoBox--purple"} ${
        active && "infoBox--selected"
      } ${isRed && "infoBox--red"}`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2
          className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
            isPurple && "infoBox__cases--purple"
          }`}
        >
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          + {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
