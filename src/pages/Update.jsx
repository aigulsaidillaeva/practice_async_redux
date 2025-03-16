import React, { useEffect } from "react";
import { Wrapper } from "../components/Wrapper";
import { Form } from "../components/UI/Form";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getGunByIdThunk } from "../store/gunActions";
export const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { gun } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getGunByIdThunk(id));
  }, [id, dispatch]);

  function goBack() {
    navigate("/main");
  }
  async function updateGun(params) {
    console.log(params);
  }
  return (
    <Wrapper>
      Update
      <Form
        buttonText="update"
        onCencel={goBack}
        submitForm={updateGun}
        initialData={gun}
      />
    </Wrapper>
  );
};
