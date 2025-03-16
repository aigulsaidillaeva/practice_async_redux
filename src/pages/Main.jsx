import React, { useEffect } from "react";
import { Wrapper } from "../components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getGunByIdThunk, getGunsThunk } from "../store/gunActions";
import { SingleGun } from "../components/SingleGun";
import { Button } from "../components/UI/Button";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";

export const Main = () => {
  const { guns } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGunsThunk());
  }, []);

  function onEditGun(id) {
    navigate(`/main/update/${id}`);
  }

  return (
    <Wrapper>
      <StyledHeader>
        <h1>Main</h1>
        <Button variant="danger" onClick={() => navigate("/main/create")}>
          create
        </Button>
      </StyledHeader>

      {guns.map((item) => {
        return <SingleGun key={item.id} {...item} onEdit={onEditGun} />;
      })}
    </Wrapper>
  );
};

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;
