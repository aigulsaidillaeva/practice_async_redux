import React from "react";
import { Wrapper } from "../components/Wrapper";
import { Form } from "../components/UI/Form";
import { useNavigate } from "react-router";
export const Update = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate("/main");
  }
  async function updateGun(params) {
    console.log(params);
  }
  return (
    <Wrapper>
      Update
      <Form buttonText="update" onCencel={goBack} submitForm={updateGun} />
    </Wrapper>
  );
};
