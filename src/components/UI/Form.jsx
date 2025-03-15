import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import styled from "styled-components";

export const Form = (props) => {
  const { buttonText, onCencel, submitForm } = props;
  const [data, setData] = useState({
    gun: "",
    color: "",
    aim: "",
    magazine: 0,
  });
  function dataValueHandler(e) {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    submitForm(data);
    setData({
      gun: "",
      color: "",
      aim: "",
      magazine: 0,
    });
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        placeholder="Оружие"
        value={data.gun}
        name="gun"
        onChange={dataValueHandler}
      />
      <Input
        placeholder="Цвет"
        value={data.color}
        name="color"
        onChange={dataValueHandler}
      />
      <Input
        placeholder="Прицел"
        value={data.aim}
        name="aim"
        onChange={dataValueHandler}
      />
      <Input
        placeholder="Магазин"
        value={data.magazine}
        name="magazine"
        onChange={dataValueHandler}
      />
      <Button variant="danger" type="submit">
        {buttonText}
      </Button>
      <Button variant="primary" type="button" onClick={onCencel}>
        Cencel
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
