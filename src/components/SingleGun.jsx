import React from "react";
import { Button } from "./UI/Button";

export const SingleGun = ({ id, gun, color, aim, magazine, onEdit }) => {
  return (
    <div>
      <div>
        <p>Gun :{gun}</p>
        <strong>Aim:{aim}</strong>
        <p>{color}</p>
        <p>{magazine}</p>
      </div>
      <div>
        <Button variant="primary">Delete</Button>
        <Button variant="danger" onClick={() => onEdit(id)}>
          edit
        </Button>
      </div>
    </div>
  );
};
