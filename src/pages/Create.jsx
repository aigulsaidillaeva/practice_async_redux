import React, { useState } from "react";
import { Wrapper } from "../components/Wrapper";
import { Form } from "../components/UI/Form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createGunThunk } from "../store/gunActions";
import { Spinner } from "../components/UI/Spinner";

export const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state);

  function goBack() {
    navigate("/main");
  }

  async function createGun(params) {
    console.log(params);
    await dispatch(createGunThunk(params));
    goBack();
    if (error) {
      goBack();
    }
  }
  return (
    <Wrapper>
      <h1>create</h1>
      {isLoading && <Spinner />}
      <Form buttonText="save" onCencel={goBack} submitForm={createGun} />
    </Wrapper>
  );
};
