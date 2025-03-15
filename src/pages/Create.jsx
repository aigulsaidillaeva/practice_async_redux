import React from "react";
import { Wrapper } from "../components/Wrapper";
import { Form } from "../components/UI/Form";
import { useNavigate } from "react-router";

export const Create = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate("/main");
  }

  async function createGun(params) {
    console.log(params);
  }
  return (
    <Wrapper>
      <h1>create</h1>
      <Form buttonText="save" onCencel={goBack} submitForm={createGun} />
    </Wrapper>
  );
};
